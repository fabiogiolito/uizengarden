<script>
  import IconCheck from "$lib/icons/IconCheck.svelte";

  export let checked = false;
  export let label = ""; // Label text
  export let icon = IconCheck; // Checked icon

  let className = "checkbox";
  export { className as class };

  export let classChecked = "checkbox--checked";

  function toggleChecked() {
    checked = !checked;
    console.log('--did toggle', checked)
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
