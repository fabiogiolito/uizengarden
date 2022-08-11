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
<line x1="19" y1="4" x2="10" y2="4">
</line>
<line x1="14" y1="20" x2="5" y2="20">
</line>
<line x1="15" y1="4" x2="9" y2="20">
</line>
</svg>
