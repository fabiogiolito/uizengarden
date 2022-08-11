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
<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3">
</path>
<line x1="4" y1="21" x2="20" y2="21">
</line>
</svg>
