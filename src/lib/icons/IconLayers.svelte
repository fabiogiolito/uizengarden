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
<polygon points="12 2 2 7 12 12 22 7 12 2">
</polygon>
<polyline points="2 17 12 22 22 17">
</polyline>
<polyline points="2 12 12 17 22 12">
</polyline>
</svg>
