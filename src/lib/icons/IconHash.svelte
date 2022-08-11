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
<line x1="4" y1="9" x2="20" y2="9">
</line>
<line x1="4" y1="15" x2="20" y2="15">
</line>
<line x1="10" y1="3" x2="8" y2="21">
</line>
<line x1="16" y1="3" x2="14" y2="21">
</line>
</svg>
