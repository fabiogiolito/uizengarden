<script>
  import { fly } from "svelte/transition";
  import { teleport } from "$lib/helpers/teleport";

  // State
  export let open = false;

  // Open on hover
  export let hover = false;
  export let hoverDelay = 1000;
  let hoverTimer;

  // Classes
  export let classTrigger = "dropdown__trigger";
  export let classMenu = "dropdown__menu";

  // Direction
  export let up = false;
  export let down = !up;
  export let left = false;
  export let right = !left;

  // Position Modifiers
  export let side = false; // Display menu beside trigger
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
    open ? closeDropdown() : openDropdown()
  }

  function openDropdown() {
    calculatePosition();
    open = true;
    updateScrollableParent();
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
    let position = { top: 0, right: 0, bottom: 0, left: 0 };

    if (up && (side || over)) {
      position.bottom += window.innerHeight - container.bottom; // Align bottom
    } else if (up) {
      position.bottom += window.innerHeight - container.top + distance; // Align above with distance
    }

    if (right && side) {
      position.left += container.right + distance; // Align to the right with distance
    } else if (right) {
      position.left += container.left; // Align left
    }

    if (down && (side || over)) {
      position.top += container.top; // Align top
    } else if (down) {
      position.top += container.bottom + distance; // Align below with distance
    }

    if (left && side) {
      position.right += document.body.clientWidth - container.left + distance; // Align to the left with distance
    } else if (left) {
      position.right += document.body.clientWidth - container.right; // Align right
    }

    style = ""; // Reset
    style += position.top     ? `top:     ${position.top}px; `    : '';
    style += position.right   ? `right:   ${position.right}px; `  : '';
    style += position.bottom  ? `bottom:  ${position.bottom}px; ` : '';
    style += position.left    ? `left:    ${position.left}px; `   : '';
    
    console.log(container, position);
    
    // style = ""; // Start over
    // if (up) style += `bottom: ${window.innerHeight - container.top + (over ? container.height * -1 : distance)}px;`;
    // if (down) style += `top: ${container.bottom + (over ? container.height * -1 : distance)}px;`;
    // if (right) style += `left: ${container.left}px;`;
    // if (left) style += `right: ${document.body.clientWidth - container.right}px;`;

    // Transition options
    if (down) transitionOptions = { duration: duration, y: distance * -1 };
    if (up) transitionOptions = { duration: duration, y: distance };

    console.log(style);
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

  function handleHover(e) {
    if (!hover) return;
    if (hoverTimer) window.clearTimeout(hoverTimer); // Reset timer
    if (e.type == 'mouseenter') {
      hoverTimer = window.setTimeout(() => {
        openDropdown();
      }, hoverDelay);
    }
    if (e.type == 'mouseleave') {
      hoverTimer = window.setTimeout(() => {
        closeDropdown();
      }, hoverDelay);
    }
  }

</script>

<svelte:window on:scroll={closeDropdown} on:resize={closeDropdown} />
<svelte:body on:click={handleBodyClick} on:keyup={handleKeyUp} />


<!-- Trigger -->
<div bind:this={triggerContainer} on:click={toggleDropdown} class={classTrigger} on:mouseenter={handleHover} on:mouseleave={handleHover}>
  <slot name="trigger" {open} />
</div>

<!-- Menu -->
{#if open}
  <div use:teleport on:click|stopPropagation transition:fly={transitionOptions} class={classMenu} {style} on:mouseenter={handleHover} on:mouseleave={handleHover}>
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
