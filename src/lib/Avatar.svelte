<script>

  export let image = "";
  export let placeholder = "";
  export let initials = "";

  export let size = "";

  export let icon = null;
  export let iconBadge = null;

  export let classBase = "avatar";
  export let classSize = size ? `${classBase}--${size}` : '';
  export let classInitials = `${classBase}__initials`;
  export let classIcon = `${classBase}__icon`;
  export let classBadgeContainer = `${classBase}__badge-container`;
  export let classBadge = `${classBase}__badge`;
  
  let className = "";
  export { className as class };
  
  export let style = "";

</script>


<span
  class="{classBase} {classSize} {className}"
  style="
    {image || placeholder ? `background-image: url('${image || placeholder}');` : ''}
    {style}
  "
>

  <!-- Center icon -->
  {#if icon}
    <svelte:component this={icon} class={classIcon} />
  {/if}
  
  <!-- Initials -->
  {#if initials}
    <span class={classInitials}>
      {initials.toUpperCase().trim()}
    </span>
  {/if}

  <!-- Badge -->
  {#if iconBadge || $$slots.badge}
    <span class={classBadgeContainer}>
      <slot name="badge">
        <svelte:component this={iconBadge} class={classBadge} />
      </slot>
    </span>
  {/if}

  <slot />
</span>
