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

  let className = "input";
  export { className as class };

  export let classIcon = "icon input__icon";
  export let classPrepend = "input__prepend";
  export let classAppend = "input__append";
  export let classContent = "input__content";
  export let classTextarea = "input__textarea";
  export let classValue = "input__value";


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
<label class={className}>

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

<style>
  .input {
    display: flex;
    align-items: center;
    white-space: pre-line;
  }
  
  .input__content {
    flex: 1;
    position: relative;
  }
  
  .input__textarea {
    padding: inherit;
    outline: inherit;
    line-height: inherit;
    font-family: inherit;
    font-size: inherit;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    resize: none;
    background: transparent;
  }
  
  .input__value {
    pointer-events: none;
    opacity: 0;
  }
</style>
