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
<polyline points="4 7 4 4 20 4 20 7">
</polyline>
<line x1="9" y1="20" x2="15" y2="20">
</line>
<line x1="12" y1="4" x2="12" y2="20">
</line>
</svg>
