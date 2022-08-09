<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  // import IconLoading from "Icons/IconLoading.svelte";

  const dispatch = createEventDispatcher();

  // Props
  export let element = null; // Null will use <button />
  export let href = null; // If href is present will use <a />
  export let title = null;
  export let disabled = false;

  // Accessibility
  export let role = null;
  export let ariaLabel = null;

  // Structure variants
  export let type = false; // eg: primary, secondary → .btn--primary, .btn--secondary
  export let size = false; // eg: sm, lg → .btn--sm, .btn--lg

  // Class prop
  let className = "btn";
  export { className as class };

  // Element classes
  export let classCopyStatus = "btn__copyStatus";
  export let classContent = "btn__content";
  export let classLoading = "btn__loading";
  export let classIcon = `icon ${size ? `icon--${size}` : ''} btn__icon`;

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
    if (copy || copyFunc) handlecopy(); // Copy text
    if (async) loading = true; // Enter loading state
    dispatch('click', e); // Pass click event to parent
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

<style>
  /* Mandatory styles for functionality */

  .btn {
    position: relative;
    display: inline-block;
  }

  .btn__loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }

  .btn--loading .btn__content {
    opacity: 0;
  }
</style>

<svelte:element this={element ? element : href ? "a" : "button"}
  class="
    {className}
    {type ? `btn--${type}` : ''}
    {size ? `btn--${size}` : ''}
    {loading ? 'btn--loading' : ''}
  "
  {href}
  {title}
  {role}
  {ariaLabel}
  disabled={disabled || loading}
  on:click={handleClick}
>

  <!-- Left side icon -->
  <svelte:component this={icon} class={classIcon} />

  <!-- Copy status -->
  {#if copyStatus}
    <span in:fade class={classCopyStatus}>
      {copyStatus}
    </span>

  <!-- Content -->
  {:else if $$slots.default}
    <span in:fade class={classContent}>
      <slot />
    </span>
  {/if}

  <!-- Loading spinner -->
  {#if loading}
    <span class={classLoading}>
      …
    </span>
  {/if}

  <!-- Icon right size -->
  <svelte:component this={iconRight} class={classIcon} />

</svelte:element>
