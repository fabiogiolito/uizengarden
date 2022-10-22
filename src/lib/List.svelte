<script>

  export let type = null;

  export let row = false;
  export let inset = false;
  export let dividers = false;

  export let classBase = "list";
  export let classInset = inset ? `${classBase}--inset` : '';
  export let classRow = row ? `${classBase}--row` : '';
  export let classSecondary = type == 'secondary' ? `${classBase}--secondary` : '';

  export let classDividers = dividers ? `${classBase}--dividers` : '';

  let className = "";
  export { className as class };

  export let style = "";


</script>

<div class="{classBase} {classDividers} {classRow} {classInset} {classSecondary} {className}" {style}>
  <slot />
</div>
