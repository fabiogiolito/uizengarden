<script>

  export let size = null;

  export let classBase = "icon";
  export let classSize = size ? `${classBase}--${size}` : '';

  let className = "";
  export { className as class }; // Pass extra classes

</script>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
  fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round"
  stroke-linejoin="round"
  class="{classBase} {classSize} {className}"
>
<polyline points="15 3 21 3 21 9">
</polyline>
<polyline points="9 21 3 21 3 15">
</polyline>
<line x1="21" y1="3" x2="14" y2="10">
</line>
<line x1="3" y1="21" x2="10" y2="14">
</line>
</svg>
