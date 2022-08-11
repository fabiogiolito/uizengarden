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
<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8">
</path>
<polyline points="16 6 12 2 8 6">
</polyline>
<line x1="12" y1="2" x2="12" y2="15">
</line>
</svg>
