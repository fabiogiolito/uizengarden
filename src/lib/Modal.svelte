<script>
  import { fade, fly } from "svelte/transition"
  import { teleport } from "$lib/teleport";

  export let open = false;

  let className = "modal";
  export { className as class };

  export let classOverlay = "modal__overlay";
  export let classWindow = "modal__window";

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

{#if open}

  <div use:teleport class={className}>

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
      <slot />
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
