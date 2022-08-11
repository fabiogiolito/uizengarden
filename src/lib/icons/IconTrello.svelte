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
<rect x="3" y="3" width="18" height="18" rx="2" ry="2">
</rect>
<rect x="7" y="7" width="3" height="9">
</rect>
<rect x="14" y="7" width="3" height="5">
</rect>
</svg>
