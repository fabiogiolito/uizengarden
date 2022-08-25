<script>
  import { tick } from "svelte";

  import Button from "$lib/Button.svelte";
  import Dropdown from "$lib/Dropdown.svelte";
  import Input from "$lib/Input.svelte";
  import List from "$lib/List.svelte";
  import ListItem from "$lib/ListItem.svelte";
  
  import IconChevronDown from "$lib/icons/IconChevronDown.svelte";
  import IconSearch from "$lib/icons/IconSearch.svelte";
  import LoadingIndicator from "$lib/LoadingIndicator.svelte";


  // ====================================
  // Button (trigger) settings

  export let [ 
    type, size
  ] = Array();


  // ====================================
  // Dropdown settings

  export let [ 
    open,                     // Open State
    menu,                     // Reference
    classTrigger, classMenu,  // Classes
    direction, align,         // Position
    over, distance, duration, // Modifiers
    hover, hoverDelay,        // Open on hover
  ] = Array();

  let dropdownRef;

  // ====================================
  // Select settings

  // Data
  export let options = []; // Array of strings or objects
  export let labelKey = null; // If options are objects, which object key should be used as option label

  export let fetchOptions = null; // Function to fetch remote options
  export let loading = false; // Is fetching state

  export let title = null; // Fixed title on trigger (overrides placeholder and label)
  export let placeholder = null; // If has a placeholder it also means it can be null
  export let label = null; // Label based on selected items
  export let iconRight = IconChevronDown;
  export let labelEmpty = "No results";

  export let multiselect = false; // Select multiple items (false = single select)

  // Show filter field on dropdown
  export let filter = false; // Show filter input on list
  export let filterPlaceholder = filter && filter !== true ? filter : "Filter"; // Placeholder text for filter input
  export let filterInput = false; // Ref to autofocus input
  export let filterValue = "";

  // Options state
  export let selected = (title || placeholder) ? [] : [options[0]]; // Selected options (value)
  export let focused = selected[0]; // Which option is focused or hovered

  // Trigger is input field
  export let input = false;
  export let inputValue = selected[0];

  // Classes
  export let classBase = "select";
  export let classList = `${classBase}__list`;
  export let classEmpty = `${classBase}__list--empty`;
  export let classEmptyLabel = `${classBase}__empty-label`;
  export let classOptionContainer = `${classBase}__option-container`;
  export let classOption = `${classBase}__option`;
  export let classOptionSelected = `${classBase}__option--selected`;
  export let classOptionFocused = `${classBase}__option--focused`;

  export let style = "";

  // Focus match - type something jump focus to matching option
  let focusMatchString = "";
  let focusMatchTimer = null;

  // Filter options based on filterValue
  let filteredOptions = options;

  $: filteredOptions = updateFilteredOptions(options, filterValue); // Filter options when filter value changes  
  $: if (filter && !open) filterValue = ""; // Clear filter input when closed
  $: if (filterInput) filterInput.focus(); // Autofocus on filter input
  $: if (fetchOptions) debounce(() => { getRemoteOptions(filterValue) }); // Get remote options for filterValue
  $: focusMatchOption(focusMatchString); // Look for matching option to focus
  $: label = setLabelForSelection(selected); // Write label based on current selection


  // ====================================
  // Functions

  
  // Get remote options for filterValue
  async function getRemoteOptions(filterValue) {
    if (!fetchOptions) return;
    loading = true;
    options = await fetchOptions(filterValue);
    loading = false;
  }


  // Return filtered options based on string
  function updateFilteredOptions(opt, string) {
    if (!string) return opt;
    const filtered = opt.filter(o => {
      const keyString = labelKey ? o[labelKey].toLowerCase() : o.toLowerCase();
      return keyString.match(string.toLowerCase());
    });
    focused = filtered[0]; // autofocus on first item
    return filtered;
  }


  // Write label based on current selection
  function setLabelForSelection(selected) {
    if (selected.length > 1) { // Multiple selected
      return `${selected.length} selected`;
    } else if (selected.length == 1) { // One selected
      return labelKey ? selected[0][labelKey] : selected[0];
    } else { // Nothing selected
      return "";
    }
  }


  // Handle click on option (add or remove to selected)
  function selectOption(option) {
    if (!option) return;
    if (selected.includes(option)) { // Already selected, will try unselecting
      if (selected.length == 1 && !placeholder) {
        // Can't unselect because it's the only one selected and can't be null
      } else { 
        // Unselect option
        selected = selected.filter(s => s !== option);
      }
    } else if (multiselect) { // Multiselect, so add to selection
      selected = [...selected, option];
    } else { // Single select so replace selection
      selected = [option];
    }

    if (!multiselect) open = false; // Auto close if single select
    if (input) inputValue = selected[0];
  }

  function clearSelection() {
    selected = [];
  }


  // Handle keypresses when dropdown is open
  function handleBodyKeydown(e) {
    if (!open) return;

    // Change focused option to next/prev
    if (e.key == "ArrowDown" || e.key == "ArrowUp") {
      e.preventDefault();
      changeFocusedOption(e.key == "ArrowDown" ? 1 : -1);
    }

    // Select focused option with return
    if (e.key == "Enter") {
      e.preventDefault();
      selectOption(focused);
    }

    // Select focused option with spacebar
    if (e.key == " " && !filter && !input) {
      e.preventDefault();
      selectOption(focused);
    }

    // Clear all selected options if multiselect and has placeholder
    if (e.key == "Backspace" && multiselect && placeholder) {
      console.log(e.shiftKey, e.metaKey);
      // Ignore if filter or input, unless shift or cmd also pressed
      if ((filter || input) && !e.shiftKey && !e.metaKey) return;
      clearSelection();
    }

    // Jump focus to option that match key
    if (isLetter(e.key) || isNumber(e.key)) {
      setFocusMatchTimer(e.key);
    }
  }


  // Add string to focusMatchString temporarily (auto resets with timer)
  function setFocusMatchTimer(key) {
    focusMatchString += `${key.toLowerCase()}`; // Append key to filter string
    clearTimeout(focusMatchTimer); // Clear reset timer if any
    focusMatchTimer = window.setTimeout(() => focusMatchString = "", 500); // set new timer
  }


  // Select next or previous option
  function changeFocusedOption(amount) { // amount is 1 or -1
    let currentIndex = filteredOptions.indexOf(focused); // Index or -1
    let nextIndex = currentIndex + amount;

    // Wrap if index out of bounds
    if (nextIndex < 0) {
      nextIndex = filteredOptions.length - 1; // Wrap back to end
    } else if (nextIndex > filteredOptions.length - 1) {
      nextIndex = 0; // Wrap back to beginning
    }

    focused = filteredOptions[nextIndex];
    scrollToFocusedOption();
  }


  // Find option that match, and focus
  function focusMatchOption(string) {
    if (!string) return;
    focused = options.find(o => `${labelKey ? o[labelKey] : o}`.toLowerCase().startsWith(string));
    // Can't find, try again with last character
    if (!focused && string.length > 1) focusMatchOption(string.slice(-1));
  }

  // Keep option in view as you navigate up/down when list scrolls
  async function scrollToFocusedOption() {
    if (!menu) return;
    await tick();
    const focusedEl = menu.querySelector(`.${classOptionFocused}`);
    if (focusedEl) focusedEl.scrollIntoView({ block: "center" });
  }

  // Handle input trigger change
  function handleInputValueChange(e) {
    if (!open) dropdownRef.openDropdown();
    if (!inputValue) dropdownRef.closeDropdown();
    filterValue = inputValue; // Filter list with value
  }

  // Open options on arrow down when closed
  function handleInputKeyDown(e) {
    if (open) return;
    if (e.detail.key == "ArrowDown") {
      open = true;
      filterValue = "";
      e.detail.stopPropagation();
    }
  }

  // ----------------------------------------
  // Helpers

  function isLetter(key) {
    key = key.toLowerCase();
    if (key.length !== 1) {
      return false;
    }
    return (key >= 'a' && key <= 'z');
  }

  function isNumber(key) {
    key = key.toLowerCase();
    if (key.length !== 1) {
      return false;
    }
    return (key >= '0' && key <= '9');
  }

  let debounceTimer = null;

  function debounce(callback) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      callback();
    }, 500);
  }

</script>

<svelte:body on:keydown={handleBodyKeydown} />

<Dropdown bind:open bind:menu bind:this={dropdownRef}
  {hover}
  {hoverDelay}
  {classTrigger}
  {classMenu}
  {direction}
  {align}
  {over}
  {distance}
  {duration}
  let:openDropdown
  let:closeDropdown
>

  <!-- Trigger -->
  <slot name="trigger" slot="trigger" {selected} {label} {focused} {open} {placeholder}>
    {#if input}
      <span on:click|stopPropagation>
        <Input
          bind:value={inputValue}
          on:focus={openDropdown}
          on:blur={closeDropdown}
          on:input={handleInputValueChange}
          on:keydown={handleInputKeyDown}
          {placeholder} 
        />
      </span>
    {:else}
      <Button class={classTrigger} iconRight={iconRight} {type} {size} {style}>
        <slot name="label" {selected} {label} {focused} {open} {placeholder}>
          {title || label || placeholder}
        </slot>
      </Button>
    {/if}
  </slot>

  <!-- List -->
  <List>

    <!-- Filter input on dropdown -->
    {#if filter}
      <Input bind:textarea={filterInput}
        icon={IconSearch}
        placeholder={filterPlaceholder}
        bind:value={filterValue}
        on:change={() => open = true }
      />
      <ListItem divider />
    {/if}

    <slot name="prependMenu" {inputValue} />

    {#if loading}
      <slot name="loading">
        <ListItem icon={LoadingIndicator}>Loading…</ListItem>
      </slot>
    {/if}
    

    <!-- Loop options -->
    <div class="{classList} {!filteredOptions.length ? classEmpty : ''}">
      {#each filteredOptions as option}
        <div class="
          {classOptionContainer}
          {focused == option ? classOptionFocused : ''}
          {selected.includes(option) ? classOptionSelected : ''}
        ">
          <Button
            on:click={() => selectOption(option)}
            on:mouseenter={() => focused = option}
            selected={selected.includes(option)}
            focused={focused == option}
            class={classOption}
          >
            <slot name="option" {option} isSelected={selected.includes(option)} isFocused={focused == option}>
              {labelKey ? option[labelKey] : option}
            </slot>
          </Button>
        </div>
      {:else}
        <slot name="empty" {inputValue}>
          {#if labelEmpty}
            <ListItem class={classEmptyLabel}>
              <em>{labelEmpty}</em>
            </ListItem>
          {/if}
        </slot>
      {/each}
    </div>

    <slot name="appendMenu" {inputValue} />

    <!-- Clear selection -->
    {#if multiselect && placeholder && selected.length}
      <ListItem divider />
      <Button on:click={clearSelection}>clear</Button>
    {/if}

  </List>

</Dropdown>
