<script>
  import { fade } from "svelte/transition";
  import { teleport } from "$lib/helpers/teleport";

  export let text = "";
  export let open = false;

  // Classes
  export let classBase = "tooltip";
  export let classTrigger = `${classBase}__trigger`;
  export let classContent = `${classBase}__content`;

  let className = "";
  export { className as class }; // Extra classes

  // Position
  export let direction = 'up'; // up, down, left, right
  export let align = 'center'; // center, left, right, top, bottom
  export let distance = 4; // in px

  // Delay
  export let delay = 100;
  export let duration = 100;
  let timer;

  let triggerContainer;
  let scrollableParent; // Hide when parent scrolls
  let style = "";


  // ====================================
  // Functions

  function showTooltip() {
    calculatePosition();
    open = true;
    updateScrollableParent(triggerContainer);
  }

  function hideTooltip() {
    if (!open) return
    open = false;
    updateScrollableParent(triggerContainer); // Reset scrollableParent
  }

  function updateScrollableParent(node) {
    if (open) {
      if (!node) return;

      // Node scrolls
      if (node.scrollHeight > node.clientHeight) {
        node.addEventListener('scroll', hideTooltip);
        scrollableParent = node; // Set scrollable parent

      // Try again with node's parent
      } else {
        return updateScrollableParent(node.parentNode);
      }

    } else {
      if (scrollableParent) {
        scrollableParent.removeEventListener('scroll', hideTooltip);
        scrollableParent = null;
      }
    }
  }

  function handleHover(e) {
    if (timer) window.clearTimeout(timer); // Reset timer

    if (e.type == 'mouseenter') {
      timer = window.setTimeout(() => {
        showTooltip();
      }, delay);
    }

    if (e.type == 'mouseleave') {
      timer = window.setTimeout(() => {
        hideTooltip();
      }, delay);
    }
  }

  function calculatePosition() {
    const container = triggerContainer.getBoundingClientRect();
    let position = { top: 0, right: 0, bottom: 0, left: 0 };
    let transform = "";

    if (direction == 'up') {
      position.bottom = window.innerHeight - container.top + distance; // Align above with distance
    }

    if (direction == 'down') {
      position.top = container.bottom + distance; // Align below with distance
    }

    if (direction == 'right') {
      position.left = container.right + distance; // Align right with distance
    }

    if (direction == 'left') {
      position.right = document.body.clientWidth - container.left + distance; // Align right with distance
    }

    // Vertical align
    if (['up', 'down'].includes(direction)) {
      if (align == 'center') {
        position.left = container.left + (container.width / 2);
        transform = "transform: translateX(-50%);";
      }
      if (align == 'left') {
        position.left = container.left;
      }
      if (align == 'right') {
        position.right = document.body.clientWidth - container.right;
      }
    }

    // Horizontal align
    if (['left', 'right'].includes(direction)) {
      if (align == 'center') {
        position.top = container.top + (container.height / 2);
        transform = "transform: translateY(-50%);";
      }
      if (align == 'top') {
        position.top = container.top;
      }
      if (align == 'bottom') {
        position.bottom = window.innerHeight - container.bottom;
      }
    }

    style = ""; // Reset
    style += position.top     ? `top:     ${position.top}px; `    : '';
    style += position.right   ? `right:   ${position.right}px; `  : '';
    style += position.bottom  ? `bottom:  ${position.bottom}px; ` : '';
    style += position.left    ? `left:    ${position.left}px; `   : '';
    style += transform;
  }

</script>

<svelte:window on:scroll={hideTooltip} on:resize={hideTooltip} />

<!-- Trigger -->
<span class={classTrigger} bind:this={triggerContainer} on:mouseenter={handleHover} on:mouseleave={handleHover} on:click={hideTooltip}>
  <slot />
</span>

<!-- Text prop / Content slot -->
{#if open}
  <div class="{classBase} {className}" use:teleport transition:fade={{duration}} {style}>
    <slot name="content">
      <div class={classContent}>
        {text}
      </div>
    </slot>
  </div>
{/if}

<style>
  .tooltip__trigger {
    display: inline-flex;
  }
  .tooltip {
    position: fixed;
    z-index: 50;
  }
</style>
