<script>
  import { fly } from "svelte/transition";
  import { teleport } from "$lib/teleport";

  // State
  export let open = false;

  // Classes
  export let classTrigger = "dropdown__trigger";
  export let classMenu = "dropdown__menu";

  // Direction
  export let up = false;
  export let down = !up;
  export let left = false;
  export let right = !left;

  export let over = false; // Display menu over trigger
  export let distance = 4; // Distance from trigger to menu edge in px
  export let duration = 150; // Transition duration in ms

  let style = ""; // Calculated menu style

  let triggerContainer; // Reference for trigger element
  let scrollableParent; // Close when parent scrolls

  let transitionOptions = {}; // Changing transition direction


  // ========================================================
  // Functions

  function toggleDropdown() {
    calculatePosition(); // Set style for dropdown menu
    open = !open; // Toggle visibility
    updateScrollableParent(); // Set scrollableParent
    // Set focus
  }

  function closeDropdown() {
    if (!open) return;
    open = false; // Close menu
    updateScrollableParent(); // Reset scrollableParent
  }

  function handleBodyClick(e) {
    if (!open) return; // Already closed
    if (!triggerContainer.contains(e.srcElement)) {
      closeDropdown();
    }
  }

  function calculatePosition() {
    const container = triggerContainer.getBoundingClientRect();
    style = ""; // Start over
    if (up) style += `bottom: ${window.innerHeight - container.top + (over ? container.height * -1 : distance)}px;`;
    if (down) style += `top: ${container.bottom + (over ? container.height * -1 : distance)}px;`;
    if (right) style += `left: ${container.left}px;`;
    if (left) style += `right: ${document.body.clientWidth - container.right}px;`;

    // Transition options
    if (down) transitionOptions = { duration: duration, y: distance * -1 };
    if (up) transitionOptions = { duration: duration, y: distance };
  }

  function updateScrollableParent(node) {
    if (open) {
      if (!node) return;

      // Node scrolls
      if (node.scrollHeight > node.clientHeight) {
        node.addEventListener('scroll', closeDropdown);
        scrollableParent = node; // Set scrollable parent

      // Try again with node's parent
      } else {
        return updateScrollableParent(node.parentNode);
      }

    } else {
      if (scrollableParent) {
        scrollableParent.removeEventListener('scroll', closeDropdown);
        scrollableParent = null;
      }
    }
  }

  function handleKeyUp(e) {
    if (e.key == 'Escape') closeDropdown();
  }

</script>

<svelte:window on:scroll={closeDropdown} on:resize={closeDropdown} />
<svelte:body on:click={handleBodyClick} on:keyup={handleKeyUp} />


<!-- Trigger -->
<div bind:this={triggerContainer} on:click={toggleDropdown} class={classTrigger}>
  <slot name="trigger" {open} />
</div>

<!-- Menu -->
{#if open}
  <div use:teleport on:click|stopPropagation transition:fly={transitionOptions} class={classMenu} {style}>
    <slot />
  </div>
{/if}

<style>
  .dropdown__trigger {
    display: inline-block;
  }
  .dropdown__menu {
    position: fixed;
    z-index: 50;
  }
</style>
