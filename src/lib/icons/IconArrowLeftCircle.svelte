<script>
  import Icon from "$lib/icons/_IconWrapper.svelte";
</script>

<Icon {...$$props}>
  <circle cx="12" cy="12" r="10" />
  <polyline points="12 8 8 12 12 16" />
  <line x1="16" y1="12" x2="8" y2="12" />
</Icon>
