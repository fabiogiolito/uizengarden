<script>
  import { createEventDispatcher } from "svelte";

  import IconCheck from "$lib/icons/IconCheck.svelte";
  import IconDot from "$lib/icons/IconDot.svelte";

  const dispatch = createEventDispatcher();

  export let type = "checkbox"; // checkbox, radio, switch

  export let checked = false;
  export let label = ""; // Label text
  export let icon = type == 'radio' ? IconDot : IconCheck; // Checked icon
  export let value = "";

  export let classBase = type;
  export let classChecked = `${classBase}--checked`;
  export let classContainer = `${classBase}-container`;
  export let classIconContainer = `${classBase}__icon-container`;
  export let classIcon = `${classBase}__icon`;
  export let classLabel = `${classBase}__label`;

  let className = "";
  export { className as class };


  // ======================================
  // Functions

  function toggleChecked() {
    checked = !checked;

    dispatch('toggle', value);

    if (checked) {
      dispatch('check', value);

    } else {
      dispatch('uncheck', value);
    }
  }

</script>

<div class={classContainer} on:click={toggleChecked}>

  <!-- Checkbox -->
  <button class="{classBase} {className} {checked ? classChecked : ''}">
    <span class={classIconContainer}>
      <slot name="icon" {checked}>
        {#if checked && type !== 'switch'}
          <svelte:component this={icon} size="sm" class="icon {classIcon}" />
        {/if}
      </slot>
    </span>
  </button>

  <!-- Label -->
  {#if label || $$slots.default}
    <div class={classLabel}>
      <slot {checked}>{label}</slot>
    </div>
  {/if}

</div>
