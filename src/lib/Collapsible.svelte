<script>
  import { slide } from "svelte/transition";

  import IconChevronDown from "$lib/icons/IconChevronDown.svelte";
  import IconChevronRight from "$lib/icons/IconChevronRight.svelte";

  export let title = "Title";
  export let collapsed = false;

  export let classHeader = "collapsible__header";
  export let classTrigger = "collapsible__trigger";
  export let classTitle = "collapsible__title";
  export let classContent = "collapsible__content";

  function toggleCollapsed() {
    collapsed = !collapsed;
  }

</script>


<!-- Header -->
<div class={classHeader}>

  <button
    on:click={toggleCollapsed}
    class={classTrigger}
  >
    <slot name="title" {collapsed}>
      <span class={classTitle}>
        {title}
        <svelte:component this={collapsed ?  IconChevronRight : IconChevronDown} class="icon icon--sm" />
      </span>
    </slot>
  </button>

  <!-- Show action on right side -->
  <slot name="header" {collapsed} />

</div>

<!-- Content -->
{#if !collapsed}
  <div transition:slide class={classContent}>
    <slot />
  </div>
{/if}
