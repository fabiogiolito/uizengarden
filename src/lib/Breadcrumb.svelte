<script>
  import { page } from '$app/stores';

  export let links = []; // [{ title: '', href: '' }]
  export let separator = "/";
  export let current = $page.url.pathname;

  export let classBase        = "breadcrumb";
  export let classItem        = `${classBase}__item`;
  export let classItemCurrent = `${classBase}__item--current`;
  export let classLink        = `${classBase}__link`;
  export let classSeparator   = `${classBase}__separator`;

  let className = "";
  export { className as class };

</script>

<ul class="{classBase} {className}">
  {#each links as link, index}
    <li class="{classItem} {link.href == current ? classItemCurrent  : ''}">
      <a href={link.href} class={classLink}>
        {link.title}
      </a>
    </li>
    <slot name="separator" {index}>
      {#if separator && index < links.length - 1}
        <li class={classSeparator}>{separator}</li>
      {/if}
    </slot>
  {/each}
</ul>
