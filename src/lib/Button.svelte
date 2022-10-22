<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  import Label from "$lib/Label.svelte";
  import LoadingIndicator from "$lib/LoadingIndicator.svelte";

  const dispatch = createEventDispatcher();

  // Props
  export let element = null; // Null will use <button />
  export let href = null; // If href is present will use <a />
  export let title = null;
  export let disabled = false;
  
  export let label = null; // Button label (or use default slot)

  export let value = null; // optional value passed on click event

  export let toggle = false; // Enable toggle behavior
  export let toggled = false; // Toggle state

  export let selected = false; // Selected state
  export let focused = false; // Focused state

  // Accessibility
  export let role = null;
  export let ariaLabel = null;

  // Structure variants
  export let type = false; // eg: primary, secondary → .btn--primary, .btn--secondary
  export let size = false; // eg: sm, lg → .btn--sm, .btn--lg

  // Element classes
  export let classBase               = "btn";
  export let classIconBtn            = `${classBase}--icon-btn`;
  export let classToggled            = `${classBase}--toggled`;
  export let classUntoggled          = `${classBase}--untoggled`;
  export let classSelected           = `${classBase}--selected`;
  export let classFocused            = `${classBase}--focused`;
  export let classLoading            = `${classBase}--loading`;
  export let classDisabled           = `${classBase}--disabled`;
  export let classCopyStatus         = `${classBase}__copy-status`;
  export let classLabel              = `${classBase}__label`;
  export let classLoadingIndicator   = `${classBase}__loading`;
  
  // Extra classes
  let className = "";
  export { className as class };
  export let style = "";

  // Icons
  export let icon = null;
  export let iconRight = null;

  // Loading
  export let async = false; // Show spinner on click
  export let loading = false; // Control loading visibility
  export let data = false; // data that changes after loading to stop loading
  $: if (data) loading = false; // reset loading visibility when data changes

  // Copy text
  export let copy = null; // Option 1: Text that will be copied
  export let copyFunc = null; // Option 2: Function to fetch text to be copied
  export let copiedLabel = "Copied!"; // Text to shopw when copied
  let copyStatus = null; // Control copy status
  $: if (copyStatus) {
    setTimeout(() => { copyStatus = "" }, 2000); // Reset copy status after 2 seconds
  }

  // =================================================================
  // Functions

  function handleClick(e) {
    if (toggle) toggleBtn(); // Toggled / Untoggled
    if (copy || copyFunc) handlecopy(); // Copy text
    if (async) loading = true; // Enter loading state
    dispatch('click', value); // Pass click event to parent with optional value
  }

  export function toggleBtn() {
    toggled = !toggled;

    dispatch('toggle', value);

    if (toggled) {
      dispatch('toggleOn', value);
    } else {
      dispatch('toggleOff', value);
    }
  }

  function handlecopy() {
    if (copyFunc) copy = copyFunc(); // Get text from function
    if (navigator?.clipboard) { // Check for support
      navigator.clipboard.writeText(copy) // Copy to clipboard
      .then(() => {
        copyStatus = copiedLabel; // Show copied status
      })
    }
  }

</script>

<svelte:element this={element ? element : href ? "a" : "button"}
  class="
    {classBase}
    {type     ? `${classBase}--${type}` : ''}
    {size     ? `${classBase}--${size}` : ''}
    {loading  ? classLoading  : ''}
    {toggle ? toggled ? classToggled : classUntoggled : ''}
    {disabled || loading ? classDisabled : ''}
    {focused ? classFocused : ''}
    {selected ? classSelected : ''}
    {(icon || iconRight) && !label && !$$slots.default ? classIconBtn : ''}
    {className}
  "
  {style}
  {href}
  {title}
  {role}
  {ariaLabel}
  disabled={disabled || loading}
  on:click={handleClick}
  on:mouseenter
>

  <Label {icon} {iconRight} text={label} class={classLabel}>

    <!-- Left icon -->
    <slot name="icon" slot="icon" />
    
    <!-- Copy status -->
    {#if copyStatus}
      <span in:fade class="{classCopyStatus}">
        {copyStatus}
      </span>

    <!-- Content -->
    {:else if label || $$slots.default}
      <slot {toggled} {toggleBtn}>{label}</slot>
    {/if}

    <!-- Right icon -->
    <slot name="iconRight" slot="iconRight" />
  </Label>

  <!-- Loading spinner -->
  {#if loading}
    <span class={classLoadingIndicator}>
      <LoadingIndicator />
    </span>
  {/if}

</svelte:element>
