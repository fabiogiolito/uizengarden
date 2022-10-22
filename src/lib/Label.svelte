<script>
  
  // Props
  export let element = "span";
  export let title = null;
  
  export let text = null; // content

  // Accessibility
  export let role = null;
  export let ariaLabel = null;

  // Element classes
  export let classBase               = "label";
  export let classIconLabel          = `${classBase}--icon-label`; // No text, just icon
  export let classIconContainer      = `${classBase}__icon-container`;
  export let classIconContainerLeft  = `${classBase}__icon-container--left`;
  export let classIconContainerRight = `${classBase}__icon-container--right`;
  export let classIcon               = `${classBase}__icon`;
  export let classText               = `${classBase}__text`;

  // Extra classes
  let className = "";
  export { className as class };
  export let style = "";

  // Icons
  export let icon = null;
  export let iconRight = null;

</script>

<svelte:element this={element}
  class="
    {classBase}
    {(icon || iconRight) && !text && !$$slots.default ? classIconLabel : ''}
    {className}
  "
  {style}
  {title}
  {role}
  {ariaLabel}
  on:mouseenter
>

  <!-- Icon left side -->
  {#if icon}
    <span class="{classIconContainer} {classIconContainerLeft}">
      <svelte:component this={icon} class={classIcon} />
    </span>
  {:else}
    <slot name="icon" />
  {/if}

  <!-- Content -->
  {#if text || $$slots.default}
    <span class={classText}>
      <slot>{text}</slot>
    </span>
  {/if}
  
  <!-- Icon right size -->
  {#if iconRight}
    <span class="{classIconContainer} {classIconContainerRight}">
      <svelte:component this={iconRight} class={classIcon} />
    </span>
  {:else}
    <slot name="iconRight" />
  {/if}

</svelte:element>
