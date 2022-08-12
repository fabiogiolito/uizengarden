<script>
  import { createEventDispatcher } from "svelte";

  import IconCheck from "$lib/icons/IconCheck.svelte";

  const dispatch = createEventDispatcher();

  export let checked = false;
  export let label = ""; // Label text
  export let icon = IconCheck; // Checked icon
  export let value = "";

  let className = "checkbox";
  export { className as class };

  export let classChecked = "checkbox--checked";

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

<div class="checkbox-label" on:click={toggleChecked}>

  <!-- Checkbox -->
  <button class="{className} {checked ? classChecked : ''}">
    <slot name="checkbox" {checked}>
      {#if checked}
        <svelte:component this={icon} size="sm" class="icon checkbox__icon" />
      {/if}
    </slot>
  </button>

  <!-- Label -->
  <div>
    <slot {checked}>
      {label}
    </slot>
  </div>

</div>
