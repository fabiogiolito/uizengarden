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
<line x1="19" y1="5" x2="5" y2="19">
</line>
<circle cx="6.5" cy="6.5" r="2.5">
</circle>
<circle cx="17.5" cy="17.5" r="2.5">
</circle>
</svg>
