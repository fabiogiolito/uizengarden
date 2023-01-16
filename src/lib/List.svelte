<script>
  import ListItem from "$lib/ListItem.svelte";

  export let type = null;

  export let options = null;

  export let row = false;
  export let inset = false;
  export let dividers = false;

  export let heading = null;

  export let classBase = "list";
  export let classInset = inset ? `${classBase}--inset` : '';
  export let classRow = row ? `${classBase}--row` : '';
  export let classType = type ? `${classBase}--${type}` : '';
  export let classDividers = dividers ? `${classBase}--dividers` : '';

  export let classTitle = `${classBase}__heading`;

  let className = "";
  export { className as class };

  export let style = "";

</script>

<div class="{classBase} {classDividers} {classRow} {classInset} {classType} {className}" {style}>

  <slot name="heading">
    {#if heading}
      <div class={classTitle}>{heading}</div>
    {/if}
  </slot>

  <!-- Programmatic list -->
  {#if options && options.length}
    {#each options as option}
      <ListItem {...option} />
    {/each}
  {/if}

  <slot />
</div>
