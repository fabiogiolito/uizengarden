<script>
  import { onMount, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let value = "";
  export let name = "";
  export let type = "text";
  export let placeholder = "";
  export let disabled = false;
  export let autofocus = false;
  export let maxlength = false;
  export let multiline = false;

  export let icon = false;
  export let iconRight = false;

  export let prepend = false;
  export let append = false;

  export let field; // Element reference

  export let classBase          = "input";
  export let classSegment       = `${classBase}__segment`;
  export let classContent       = `${classBase}__content`;
  export let classIconContainer = `${classBase}__icon-container`;
  export let classIcon          = `${classBase}__icon`;
  export let classAccessory     = `${classBase}__accessory`;
  export let classField         = `${classBase}__field`;
  export let classTextarea      = `${classBase}__textarea`;
  export let classInput         = `${classBase}__input`;
  export let classValue         = `${classBase}__value`;

  let className = "";
  export { className as class }; // Pass extra classes
  export let style = "";


  // ========================================

  // Handle some specific key combos
  function handleKeyDown(e) {
    // Pressed Return (without shift) on non-multiline text
    if (!multiline && e.key == "Enter" && !e.shiftKey) {
      e.preventDefault();
      dispatch('return', e);
      return;
    }
  
    if (e.key == "Escape") {
      e.preventDefault();
      dispatch('escape', e);
      return;
    }

    // CMD + Up = Edit last message
    if (e.key == "ArrowUp" && e.metaKey) {
      dispatch('editLast');
      return;
    }

    dispatch('keydown', e);
  }

  // Handle typing on input
  // Workaround for bind:value for input with dynamic type
  function handleInput(e) {
    value = e.target.value;
    dispatch('input', e);
  }

  onMount(() => {
    if ( autofocus && field ) {
      field?.focus();
    }
  });
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="{classBase} {className}" {style}>

  {#if prepend || $$slots.prepend}
    <slot name="prepend">
      <span class="{classSegment} {classAccessory}">
        {prepend}
      </span>
    </slot>
  {/if}

  {#if icon}
    <span class="{classSegment} {classIconContainer}">
      <svelte:component this={icon} class={classIcon} />
    </span>
  {/if}

  <span class="{classSegment} {classContent}">
    {#if multiline}
      <textarea
        class="{classField} {classTextarea}"
        bind:this={field}
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
    {:else}
      <input
        class="{classField} {classInput}"
        bind:this={field}
        {type}
        {value}
        {placeholder}
        {disabled}
        {maxlength}
        {name}
        on:input={handleInput}
        on:keydown={handleKeyDown}
        on:focus
        on:blur
      />
    {/if}
  </span>

  {#if iconRight}
    <span class="{classSegment} {classIconContainer}">
      <svelte:component this={iconRight} class={classIcon} />
    </span>
  {/if}

  {#if append || $$slots.append}
    <slot name="append">
      <span class="{classSegment} {classAccessory}">
        {append}
      </span>
    </slot>
  {/if}

</label>
