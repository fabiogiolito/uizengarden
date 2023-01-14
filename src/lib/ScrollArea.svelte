<script>

  // Props

  export let minThumb = 24;

  export let overlap = false;

  // Element classes
  export let classBase = `scrollarea`;
  export let classContent = `${classBase}__content`;
  export let classBar = `${classBase}__bar`;
  export let classThumbContainer = `${classBase}__thumb-container`;
  export let classThumb = `${classBase}__thumb`;
  export let classScrolling = `${classBase}--scrolling`;
  export let classOverlap = `${classBase}--overlap`;

  // Extra classes
  let className = "";
  export { className as class };
  export let style = "";

  let containerRef = undefined;
  let barRef = undefined;

  let thumbHeight = 0;
  let thumbOffset = 0;

  let scrolling = false;
  let scrollingTimer = undefined;

  let dragging = false;

  $: if (containerRef) setupScrollbar();


  // =================================================================
  // How it works

  // .scrollarea scrolls nativelly but has a hidden scrollbar
  // .scrollarea__content is a wrapper for the content
  // .scrollarea__bar is a faked styled scrollbar


  // =================================================================
  // Functions

  function setupScrollbar() {
    if (!containerRef) return;

    // Area doesn't scroll
    if (containerRef.offsetHeight >= containerRef.scrollHeight) return;

    // Calculate thumb height and position
    thumbHeight = Math.max(containerRef.offsetHeight * (2 - containerRef.scrollHeight / containerRef.offsetHeight), minThumb);
    thumbOffset = ((containerRef.offsetHeight - thumbHeight) * containerRef.scrollTop / (containerRef.scrollHeight - containerRef.offsetHeight));
  }

  // Scrolling

  function setScrollingTimer() {
    if (scrollingTimer) clearTimeout(scrollingTimer);
    scrolling = true;
    scrollingTimer = setTimeout(() => {
      scrolling = false;
    }, 200);
  }

  function handleScroll(e) {
    if (!containerRef) return;
    setupScrollbar();
    setScrollingTimer();
  }

  // Interaction with scrollbar

  function handlePointerDown(e) {
    dragging = true;
    scrollWithEvent(e);
  }

  function handlePointerMove(e) {
    if (!dragging) return;
    scrollWithEvent(e);
  }

  function handlePointerUp(e) {
    if (!dragging) return;
    dragging = false;
    draggingStart = undefined;
  }

  function scrollWithEvent(e) {
    containerRef.scroll({ top: (containerRef.scrollHeight - containerRef.offsetHeight) * ((e.clientY - barRef.getBoundingClientRect().top) / containerRef.offsetHeight) });
  }

</script>

<svelte:body on:pointermove={handlePointerMove} on:pointerup={handlePointerUp} />

<div
  class="
    {classBase}
    {scrolling || dragging ? classScrolling : ''}
    {overlap ? classOverlap : ''}
    {className}
  "
  {style}
>
  <div class={classContent} bind:this={containerRef} on:scroll={handleScroll}>
    <slot />
  </div>

  {#if thumbHeight}
    <div class={classBar} bind:this={barRef} on:pointerdown={handlePointerDown}>
      <div
        class={classThumbContainer}
        style="
          --thumbHeight: {thumbHeight}px;
          --thumbOffset: {thumbOffset}px;
        "
      >
        <div class={classThumb} />
      </div>
    </div>
  {/if}

</div>
