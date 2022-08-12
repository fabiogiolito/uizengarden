<script>
  import { fade, fly } from "svelte/transition"
  import { teleport } from "$lib/helpers/teleport";

  export let open = false;

  export let classBase = "modal";
  export let classOverlay = `${classBase}__overlay`;
  export let classWindow  = `${classBase}__window`;

  let className = "";
  export { className as class };


  // ===========================================
  // Functions

  export function openModal() {
    open = true;
  }

  export function closeModal() {
    open = false;
  }

  function handleKeydown(e) {
    if (!open) return; // Ignore if not open
    if (e.key === "Escape") {
      e.stopPropagation();
      closeModal(); // Close on ESC
    }
  }
</script>

<svelte:body on:keydown={handleKeydown} />

<slot name="trigger" {openModal} />

{#if open}

  <div use:teleport class="{classBase} {className}">

    <!-- Close modal overlay -->
    <button
      on:click={closeModal}
      transition:fade={{ duration: 200 }}
      class={classOverlay}
    />

    <!-- Modal window -->
    <div
      transition:fly={{ y: 40, duration: 200 }}
      class={classWindow}
    >
      <slot {closeModal} />
    </div>

  </div>

{/if}

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }
  .modal__overlay {
    background: rgb(var(--foreground) / 0.5);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  .modal__window {
    position: absolute;
    background: rgb(var(--background));
    width: 50vw;
    max-height: 80vh;
  }
</style>
