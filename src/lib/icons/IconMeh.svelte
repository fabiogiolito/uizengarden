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
<circle cx="12" cy="12" r="10">
</circle>
<line x1="8" y1="15" x2="16" y2="15">
</line>
<line x1="9" y1="9" x2="9.01" y2="9">
</line>
<line x1="15" y1="9" x2="15.01" y2="9">
</line>
</svg>
