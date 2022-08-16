<script>
  import { tick } from "svelte";

  import Button from "$lib/Button.svelte";
  import Dropdown from "$lib/Dropdown.svelte";
  import IconChevronDown from "$lib/icons/IconChevronDown.svelte";

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


  // ====================================
  // Select settings

  // Data
  export let options = [];
  export let labelKey = null; // If options are objects, which object key should be used

  export let fetchOptions = null; // Function to fetch remote options

  export let title = null; // Fixed title on trigger
  export let placeholder = null; // If has a placeholder it also means it can be null

  export let multiselect = false; // Select multiple items (false = single select)

  // Options state
  export let selected = (title || placeholder) ? [] : [options[0]]; // Selected options (value)
  export let focused = selected[0]; // Which option is focused or hovered

  export let classBase = "select";
  export let classList = `${classBase}__list`;
  export let classOptionContainer = `${classBase}__option-container`;
  export let classOption = `${classBase}__option`;
  export let classOptionSelected = `${classBase}__option--selected`;
  export let classOptionFocused = `${classBase}__option--focused`;

  // export let input = false; // Trigger is input field

  // Show filter input
  export let filter = false; // Show filter input on list
  export let filterPlaceholder = filter && filter !== true ? filter : "Filter"; // Placeholder text for filter input
  export let filterInput = false; // Ref to autofocus input

  let filterTimer = null;
  let filterString = "";

  $: label = getLabel(selected);
  $: focused = selected.slice(-1)[0]; // Focus on last selected

  let filteredOptions = [];
  $: if (options) filteredOptions = filter ? getFilteredOptions(options, filterString) : options; // Filter options based on filterString
  
  $: if (!open) filterString = ""; // Clear filter when closed
  $: if (filterInput) filterInput.focus(); // Focus on filter input

  $: if (filter && fetchOptions) debounce(() => { getRemoteOptions(filterString) }); // get remote options

  // ====================================
  // Functions

  async function getRemoteOptions() {
    if (!fetchOptions) return;
    options = await fetchOptions(filterString);
  }

  function getFilteredOptions(opt, string) {
    if (!string) return opt;
    const filtered = opt.filter(o => {
      const keyString = labelKey ? o[labelKey].toLowerCase() : o.toLowerCase();
      return keyString.match(string.toLowerCase());
    });
    focused = filtered[0];
    return filtered;
  }

  function getLabel(selected) {
    if (selected.length > 1) {
      return `${selected.length} selected`;
    } else if (selected.length == 1) {
      return labelKey ? selected[0][labelKey] : selected[0];
    } else {
      return placeholder;
    }
  }

  function selectOption(option) {
    if (!option) return;
    if (selected.includes(option)) {
      if (selected.length == 1 && !placeholder) {
        // Can't unselect because it's the only one selected and can't be null
      } else {
        // Unselect option
        selected = selected.filter(s => s !== option);
      }
    } else if (multiselect) {
      // Can multiselect, so add to selection
      selected = [...selected, option];
    } else {
      // Cannot multiselect, so replace selection
      selected = [option];
    }

    if (!multiselect) open = false; // Auto close if can't multiselect
  }

  function clearSelection() {
    selected = [];
  }

  function handleBodyKeyup(e) {
    if (!open) return;
    if (e.key == "ArrowDown" || e.key == "ArrowUp") {
      e.preventDefault();
      changeFocus(e.key);
    }
    if (e.key == "Enter" || e.key == " ") {
      e.preventDefault();
      selectOption(focused);
    }
    if (e.key == "Backspace" && multiselect && placeholder && !filter) {
      clearSelection();
    }
    if (isLetter(e.key) || isNumber(e.key)) {
      updateFilterString(e.key.toLowerCase());
      focusFirstMatch(filterString);
    }
  }

  function updateFilterString(key) {
    if (filter) return; // Filter input present, so no need to manually manage this

    // Append filter string
    filterString = `${filterString}${key}`;

    // Clear timer
    if (filterTimer) window.clearTimeout(filterTimer);

    // Set timer again: reset filter string after 1s
    filterTimer = window.setTimeout(() => {
      filterString = "";
    }, 500);
  }

  function focusFirstMatch(string) {
    if (!filterString) focused = filteredOptions[0]; // No filterString, focus on first item
    let match;
    if (labelKey) {
      match = filteredOptions.find(option => `${option[labelKey]}`.toLowerCase().startsWith(filterString));
    } else {
      match = filteredOptions.find(option => `${option}`.toLowerCase().startsWith(filterString));
    }
    if (match) focused = match; // Found match, set focused
  }

  function changeFocus(key) {
    let currentIndex = filteredOptions.indexOf(focused); // Index or -1
    let nextIndex = (key == "ArrowDown") ? currentIndex + 1 : currentIndex - 1;

    if (currentIndex == -1) {
      nextIndex = 0; // Select first
    } else if (nextIndex < 0) {
      nextIndex = filteredOptions.length - 1; // Wrap back to end
    } else if (nextIndex > filteredOptions.length - 1) {
      nextIndex = 0; // Wrap back to beginning
    }

    focused = filteredOptions[nextIndex];
    scrollToFocusedElement();
  }

  async function scrollToFocusedElement() {
    if (!menu) return;
    await tick();
    const focusedEl = menu.querySelector(`.${classOptionFocused}`);
    if (focusedEl) focusedEl.scrollIntoView({ block: "center" });
  }

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

<svelte:body on:keydown={handleBodyKeyup} />

<Dropdown bind:open bind:menu
  {hover}
  {hoverDelay}
  {classTrigger}
  {classMenu}
  {direction}
  {align}
  {over}
  {distance}
  {duration}
>

  <!-- Trigger -->
  <slot name="trigger" slot="trigger" {selected} {label} {focused} {open} {placeholder}>
    <Button iconRight={IconChevronDown}>
      <slot name="label" {selected} {label} {focused} {open} {placeholder}>
        {title || label}
      </slot>
    </Button>
  </slot>

  <!-- Filter input -->
  {#if filter}
    <input bind:this={filterInput} type="text" placeholder={filterPlaceholder} bind:value={filterString} />
  {/if}

  <slot name="prependMenu" />

  <div class={classList}>
    {#each filteredOptions as option}
      <div class={classOptionContainer}>
        <button
          on:click={() => selectOption(option)}
          on:mouseenter={() => focused = option}
          class="
            {classOption}
            {selected.includes(option) ? classOptionSelected : ''}
            {focused == option ? classOptionFocused : ''}
          "
        >
          <!-- Override option code with slot -->
          <slot name="option" {option} isSelected={selected.includes(option)} isFocused={focused == option}>
            {labelKey ? option[labelKey] : option}
          </slot>
        </button>
      </div>
    {/each}
  </div>

  <slot name="appendMenu" />

  <!-- Clear selection -->
  {#if multiselect && placeholder && selected.length}
    <button on:click={clearSelection}>clear</button>
  {/if}


</Dropdown>


<style>
  .select__option {

  }
  .select__option--selected {
    background: limegreen;
  }
  .select__option--focused {
    background: green;
  }
</style>
