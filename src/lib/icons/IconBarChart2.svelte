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
<line x1="18" y1="20" x2="18" y2="10">
</line>
<line x1="12" y1="20" x2="12" y2="4">
</line>
<line x1="6" y1="20" x2="6" y2="14">
</line>
</svg>
