<script>

  export let type = null;

  export let dividers = false;

  export let classBase = "list";
  export let classInset = type == 'inset' ? `${classBase}--inset` : '';
  export let classRow = type == 'row' ? `${classBase}--row` : '';

  export let classDividers = dividers ? `${classBase}--dividers` : '';

  let className = "";
  export { className as class };

  export let style = "";


</script>

<div class="{classBase} {classInset} {classRow} {classDividers} {className}" {style}>
  <slot />
</div>
