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
<line x1="8" y1="6" x2="21" y2="6">
</line>
<line x1="8" y1="12" x2="21" y2="12">
</line>
<line x1="8" y1="18" x2="21" y2="18">
</line>
<line x1="3" y1="6" x2="3.01" y2="6">
</line>
<line x1="3" y1="12" x2="3.01" y2="12">
</line>
<line x1="3" y1="18" x2="3.01" y2="18">
</line>
</svg>
