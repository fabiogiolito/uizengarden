<script>
  import Button from "$lib/Button.svelte";
  import Select from "$lib/Select.svelte";

  import IconMinus from "$lib/icons/IconMinus.svelte";
  import IconPlus from "$lib/icons/IconPlus.svelte";

  import IconChevronLeft from "$lib/icons/IconChevronLeft.svelte";
  import IconChevronRight from "$lib/icons/IconChevronRight.svelte";

  export let options = [];

  export let dropdown = false; // Dropdown select

  export let number = false; // Number range
  export let min = 1;
  export let max = 100;
  
  export let value = options[0] || `${min}`;
  export let labelKey = null;

  export let classBase  = "stepper";
  export let classPrev  = "stepper__btn stepper__btn--prev";
  export let classNext  = "stepper__btn stepper__btn--next";
  export let classValue = `${dropdown ? 'stepper__btn stepper__btn--value' : 'stepper__value'}`;

  let className = "";
  export { className as class };

  export let styleValue = "";

  export let iconPrev = number ? IconMinus : IconChevronLeft;
  export let iconNext = number ? IconPlus : IconChevronRight;

  let currentIndex = undefined;

  $: if (number) generateNumberOptions(min, max); // Setup number range

  $: valueLabel = labelKey ? value[labelKey] : value;
  $: if (options && value) currentIndex = options.indexOf(value);
  $: isFirst = currentIndex == 0;
  $: isLast = currentIndex == options.length - 1;

  let selected = [value]; // Selected is an array

  $: value = selected[0]; // Keep value updated when selected changes


  // =========================================================
  // Functions

  export function next(e) {
    if (isLast) return;
    selected = [options[currentIndex + 1]];
  }

  export function prev(e) {
    if (isFirst) return;
    selected = [options[currentIndex - 1]];
  }

  function generateNumberOptions(min, max) {
    const count = max - min;
    options = [...Array(count + 1).keys()].map( i => `${i + min}` );
  }

</script>


<Select {options} bind:selected>

  <div slot="trigger" class="{classBase} {className}">

    <!-- Button Prev  -->
    <div on:click|stopPropagation>
      <slot name="prev" {isFirst} {isLast} {currentIndex} {value}>
        <Button icon={iconPrev} class="{classPrev}" on:click={prev} disabled={isFirst} />
      </slot>
    </div>

    <!-- Value dropdown -->
    {#if dropdown}
      <Button class={classValue} label={valueLabel} style={styleValue} />

    <!-- Value static -->
    {:else}
      <div class={classValue} on:click|stopPropagation style={styleValue}>
        {valueLabel}
      </div>
    {/if}

    <!-- Button Next -->
    <div on:click|stopPropagation>
      <slot name="next" {isFirst} {isLast} {currentIndex} {value}>
        <Button icon={iconNext} class="{classNext}" on:click={next} disabled={isLast} />
      </slot>
    </div>

  </div>
</Select>

<slot {isFirst} {isLast} {currentIndex} {value} {valueLabel} />
