<script>
  import { onMount, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let value = "";
  export let name = "";
  export let placeholder = "";
  export let disabled = false;
  export let autofocus = false;
  export let maxlength = false;
  export let multiline = false;
  export let icon = false;

  export let prepend = false;
  export let append = false;

  export let classBase      = "input";
  export let classIcon      = `${classBase}__icon`;
  export let classPrepend   = `${classBase}__prepend`;
  export let classAppend    = `${classBase}__append`;
  export let classContent   = `${classBase}__content`;
  export let classTextarea  = `${classBase}__textarea`;
  export let classValue     = `${classBase}__value`;

  let className = "";
  export { className as class }; // Pass extra classes

  let textarea; // Reference

  // Handle some specific key combos
  function handleKeyDown(e) {

    // Pressed Return (without shift) on non-multiline text
    if (!multiline && e.key == "Enter" && !e.shiftKey) {
      e.preventDefault();
      dispatch('return', e);
    }
  
    if (e.key == "Escape") {
      e.preventDefault();
      dispatch('escape', e);
    }

    // CMD + Up = Edit last message
    if (e.key == "ArrowUp" && e.metaKey) {
      dispatch('editLast');
    }
  }

  onMount(() => {
    if ( autofocus && textarea ) {
      textarea?.focus();
    }
  });
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="{classBase} {className}">

  {#if icon}
    <svelte:component this={icon} class={classIcon} />
  {/if}

  <slot name="prepend">
    {#if prepend}
      <span class={classPrepend}>{prepend}</span>
    {/if}
  </slot>

  <span class={classContent}>
    <textarea
      class={classTextarea}
      bind:this={textarea}
      bind:value
      {placeholder}
      {disabled}
      {maxlength}
      {name}
      on:keydown={handleKeyDown}
      on:focus
      on:input
      on:blur
    />
    <span aria-hidden class={classValue}>{value}_</span>
  </span>

  <slot name="append">
    {#if append}
      <span class={classAppend}>{append}</span>
    {/if}
  </slot>

</label>
