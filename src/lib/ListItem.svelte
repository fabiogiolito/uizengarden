<script>
  import { createEventDispatcher } from "svelte";

  import Dropdown from "$lib/Dropdown.svelte";

  const dispatch = createEventDispatcher();

  export let label = null; // Button label (or use default slot)
  export let value = null; // optional value passed on click event
  export let element = "div";

  export let heading = false;
  export let divider = false;

  // Element classes
  export let classBase               = "list__item";
  export let classHeading            = heading ? `${classBase}--heading` : '';
  export let classDivider            = divider ? `${classBase}--divider` : '';
  export let classLabel              = `${classBase}__label`;
  export let classIconContainer      = `${classBase}__icon-container`;
  export let classIconContainerLeft  = `${classBase}__icon-container--left`;
  export let classIconContainerRight = `${classBase}__icon-container--right`;
  export let classIcon               = `${classBase}__icon`;

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
    dispatch('click', value); // Pass click event to parent with optional value
  }
</script>

{#if $$slots.submenu}
  <Dropdown direction="right" align="top">
    <svelte:self slot="trigger" {value} {icon} {iconRight}>
      <slot>
        {label || ''}
      </slot>
    </svelte:self>
    <div><slot name="submenu" /></div>
  </Dropdown>
{:else}

  <svelte:element this={element} on:click={handleClick}
    class="{classBase} {classDivider} {classHeading} {className}"
    {style}
  >

    <!-- Left side icon -->
    <slot name="icon">
      {#if icon}
        <span class="{classIconContainer} {classIconContainerLeft}">
          <svelte:component this={icon} class={classIcon} />
        </span>
      {/if}
    </slot>

    <span class={classLabel}>
      <slot>
        {label || ''}
      </slot>
    </span>

    <!-- Icon right size -->
    <slot name="iconRight">
      {#if iconRight}
        <span class="{classIconContainer} {classIconContainerRight}">
          <svelte:component this={iconRight} class={classIcon} />
        </span>
      {/if}
    </slot>
    
  </svelte:element>

{/if}
