<script>
  import { page } from '$app/stores';

  export let href = "#";
  export let current = href == $page.url.pathname;

  export let classCurrent = "current";

  let className = "";
  export { className as class };

</script>

<a {href} class="{current ? classCurrent : ''} {className}">
  
  <slot />

  {#if current}
    <slot name="current" />
  {/if}
</a>
