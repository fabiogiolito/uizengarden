<script>
  import { page } from '$app/stores';

  export let href = "#";
  export let classCurrent = "";

  let className = "";
  export { className as class };

</script>

<a {href} class="{href == $page.url.pathname ? classCurrent : ''} {className}">
  <slot></slot>
</a>
