<script>
  import { createEventDispatcher } from "svelte";

  import Dropdown from "$lib/Dropdown.svelte";
  import Label from "$lib/Label.svelte";

  const dispatch = createEventDispatcher();

  export let text = null; // label (or use default slot)
  export let subtext = null; // label (or use default slot)
  export let value = null; // optional value passed on click event

  export let divider = null;
  export let heading = null;
  export let flex = null;

  export let href = null; // Make it a link
  export let action = null; // Make it a button

  export let element = href ? "a" : action ? "button" : "div"; // Link, Button or Div (or set manually)

  // Element classes
  export let classBase = "list__item";
  export let classFlex = "list__item--flex";
  export let classDivider = "list__divider";
  export let classHeading = "list__heading";

  // Extra classes
  let className = "";
  export { className as class };
  export let style = "";

  // Icons
  export let icon = null;
  export let iconRight = null;


  // =================================================================
  // Functions

  function handleClick(e) {
    if (action) action(); // Call action if available
    dispatch('click', value); // Pass click event to parent with optional value
  }
</script>

{#if divider}
  <!-- Attn: Whitespace needed inside div so element is not removed -->
  <!-- TODO: figure out why element doesn't show if empty when there's no css rule for it -->
  <div class={classDivider}> </div>
{/if}

{#if heading}
  <Label class={classHeading} {icon} {iconRight}>
    {heading}
  </Label>
{/if}

{#if $$slots.default || text || flex}

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <svelte:element
    this={element}
    {href}
    on:click={handleClick}
    class="
      {classBase}
      {flex ? classFlex : ''}
      {className}
    "
    {style}
  >

    {#if $$slots.default || text}
      <Label {icon} {iconRight} {text} {subtext}>
        <slot name="icon" slot="icon" />
        <slot>{text}</slot>
        <slot name="iconRight" slot="iconRight" />
      </Label>
    {/if}

  </svelte:element>

{/if}
