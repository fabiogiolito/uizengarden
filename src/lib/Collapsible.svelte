<script>
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";
  
  import IconChevronDown from "$lib/icons/IconChevronDown.svelte";
  import IconChevronRight from "$lib/icons/IconChevronRight.svelte";

  const dispatch = createEventDispatcher();

  export let title = "";
  export let collapsed = false;

  export let value = null; // optional value passed on expand

  export let classHeader = "collapsible__header";
  export let classTrigger = "collapsible__trigger";
  export let classTitle = "collapsible__title";
  export let classContent = "collapsible__content";

  function toggleCollapsed() {
    collapsed = !collapsed;

    dispatch('toggle', value);

    if (collapsed) {
      dispatch('collapse', value);
    } else {
      dispatch('expand', value);
    }
  }

</script>


<!-- Header -->
<div class={classHeader}>

  {#if title || $$slots.title || $$slots.trigger}
    <slot name="trigger" {collapsed} {toggleCollapsed}>
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
    </slot>
  {/if}

  <!-- Show action on right side -->
  <slot name="header" {collapsed} />

</div>

<!-- Content -->
{#if !collapsed}
  <div transition:slide class={classContent}>
    <slot />
  </div>
{/if}
