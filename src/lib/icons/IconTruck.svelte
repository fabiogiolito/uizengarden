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
<rect x="1" y="3" width="15" height="13">
</rect>
<polygon points="16 8 20 8 23 11 23 16 16 16 16 8">
</polygon>
<circle cx="5.5" cy="18.5" r="2.5">
</circle>
<circle cx="18.5" cy="18.5" r="2.5">
</circle>
</svg>
