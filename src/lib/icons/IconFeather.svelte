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
<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z">
</path>
<line x1="16" y1="8" x2="2" y2="22">
</line>
<line x1="17.5" y1="15" x2="9" y2="15">
</line>
</svg>
