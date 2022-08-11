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
<circle cx="18" cy="18" r="3">
</circle>
<circle cx="6" cy="6" r="3">
</circle>
<path d="M6 21V9a9 9 0 0 0 9 9">
</path>
</svg>
