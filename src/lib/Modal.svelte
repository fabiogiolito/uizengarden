<script>
  import { createEventDispatcher } from "svelte";

  import { fade, fly } from "svelte/transition"
  import { teleport } from "$lib/helpers/teleport";

  import IconX from "$lib/icons/IconX.svelte";

  const dispatch = createEventDispatcher();

  export let open = false;

  export let dialog = false; // Not closable unless you interact
  export let title = ""; // Header with title

  export let classBase = "modal";
  export let classDialog  = `${classBase}--dialog`;
  export let classOverlay = `${classBase}__overlay`;
  export let classWindow  = `${classBase}__window`;
  export let classHeader  = `${classBase}__header`;
  export let classTitle   = `${classBase}__title`;
  export let classClose   = `${classBase}__close`;
  export let classContent = `${classBase}__content`;
  export let classFooter  = `${classBase}__footer`;

  let className = "";
  export { className as class };


  // ===========================================
  // Functions

  export function openModal() {
    open = true;
    dispatch('open');
  }

  export function closeModal() {
    open = false;
    dispatch('close');
  }

  function handleKeydown(e) {
    if (!open) return; // Ignore if not open

    if (e.key === "Escape") {
      if (dialog) return; // Don't close dialog with Escape
      e.stopPropagation();
      closeModal(); // Close on ESC
    }

  }
</script>

<svelte:body on:keydown={handleKeydown} />

<slot name="trigger" {openModal} />

{#if open}

  <!-- Fullscreen container -->
  <div use:teleport class="{classBase} {dialog ? classDialog : ''} {className}">

    <!-- Fullscreen overlay - Close modal -->
    {#if dialog}
      <div transition:fade={{ duration: 200 }} class={classOverlay} />
    {:else}
      <button
        on:click={closeModal}
        transition:fade={{ duration: 200 }}
        class={classOverlay}
      />
    {/if}

    <!-- Modal window -->
    <div
      transition:fly={{ y: 40, duration: 200 }}
      class={classWindow}
    >

      <!-- Header -->
      <slot name="header" {closeModal}>
        {#if title}
          <div class={classHeader}>
            <div class={classTitle}>
              {title}
            </div>
            {#if !dialog}
              <button
                on:click={closeModal}
                transition:fade={{ duration: 200 }}
                class={classClose}
              >
                <IconX />
              </button>
            {/if}
          </div>
        {/if}
      </slot>

      <!-- Content -->
      <div class={classContent}>
        <slot {closeModal} />
      </div>

      <!-- Footer -->
      {#if $$slots.footer}
        <div class={classFooter}>
          <slot name="footer" {closeModal} />
        </div>
      {/if}

    </div>

  </div>

{/if}
