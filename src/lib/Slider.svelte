<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  // Track value goes from 0 to 100
  export let min = 0; // Track min value
  export let max = 100; // Track max value

  // Knobs can go from minValue to maxValue
  export let minValue = min; // Knob min value
  export let maxValue = max; // Knob max value

  // Enables start knob to select range
  export let range = false;

  export let step = null; // Values change in steps
  export let decimals = 0; // How many decimal places should values have (slider precision)
  export let nudge = 1; // Arrow increment amount
  export let bigNudge = 10; // Shift + arrow increment amount

  // Knob values
  export let value = max; // Value for end knob
  export let valueStart = min; // Value for start knob (if range)

  // Show labels
  export let trackLabels = false;
  export let knobLabels = false;
  
  // Container ref
  let container;

  // State
  let knobActive = null;
  let knobFocused = null;


  // ========================================
  // Functions

  function handlePointerDown(knob) {
    knobActive = knob;
    knobFocused = knob;
  }

  function handlePointerUp() {
    knobActive = null;
  }

  function handlePointerMove(e) {
    if (!knobActive) return;

    const containerBox = container.getBoundingClientRect();
    const percent = (e.clientX - containerBox.left) / containerBox.width;
    let val = valueFromPercentInRange(percent, min, max);
    val = round(val, decimals, min, max);

    // Update correct value
    if (knobActive == 'start') updateValue('start', val);
    if (knobActive == 'end') updateValue('end', val);
  }

  function updateValue(knob, val) {
    if (knob == 'start') {
      if (val <= value && val >= minValue && val <= maxValue) {
        valueStart = val;
        dispatch('change', valueStart);
        dispatch('changeStart', valueStart);
      }
    }
    if (knob == 'end') {
      if (val >= valueStart && val <= maxValue && val >= minValue) {
        value = val;
        dispatch('change', value);
        dispatch('changeEnd', value);
      }
    }
  }

  function handleKnobFocus(knob) {
    knobFocused = knob;
  }

  function handleKnobBlur() {
    knobFocused = null;
  }

  function handleKeyDown(e) {
    if (!knobFocused) return;

    let currentValue = knobFocused == 'start' ? valueStart : value;
    let delta = e.shiftKey ? bigNudge : step || nudge;

    // Increase
    if (e.key == "ArrowRight" || e.key == "ArrowUp") {
      e.preventDefault();
      const newValue = round(currentValue + delta, decimals, min, max);
      updateValue(knobFocused, newValue);
    }

    // Decrease
    if (e.key == "ArrowLeft" || e.key == "ArrowDown") {
      e.preventDefault();
      const newValue = round(currentValue - delta, decimals, min, max);
      updateValue(knobFocused, newValue);
    }

    // Cancel
    if (e.key == "Escape") {
      handlePointerUp();
      handleKnobBlur();
    }
  }

  function handleBodyClick(e) {
    console.log("handle body click");
    if (!knobFocused || knobActive) return; // Already unfocused
    if (!container.contains(e.srcElement)) {
      handleKnobBlur();
      handlePointerUp();
    }
  }

  // ------------------
  // Helpers

  function round(number, decimals, min = 0, max = 100) {
    // Round when close to 0 and 100
    if (percent(number, min, max) < 1) number = min;
    if (percent(number, min, max) > 99) number = max;
    if (step) number = Math.ceil(number / step ) * step;
    return +(Math.round(number + "e+" + decimals)  + "e-" + decimals);
  }

  function valueFromPercentInRange(percent, min = 0, max = 100) {
    return ((max - min) * percent) + min
  }

  function percent(val, min = 0, max = 100) {
    return (val - min) * 100 / (max - min) ;
  }

</script>

<svelte:window on:pointerdown={handleBodyClick} on:keydown={handleKeyDown} on:pointerup={handlePointerUp} on:pointermove={handlePointerMove} />

<div class="slider {range ? 'slider--range' : ''}" bind:this={container}>

  <div class="slider__track">
    {#if trackLabels}
      <div class="slider__track__value slider__track__value--min">{min}</div>
      <div class="slider__track__value slider__track__value--max">{max}</div>
    {/if}
    <div class="slider__progress" style="left: {percent(valueStart, min, max)}%; right: {100 - percent(value, min, max)}%" />

    <!-- Start -->
    {#if range}
      <button 
        class="
          slider__knob slider__knob--start
          {knobActive == 'start' ? 'slider__knob--active' : ''}
          {knobFocused == 'start' ? 'slider__knob--focused' : ''}
        "
        style="left: {percent(valueStart, min, max)}%;"
        on:pointerdown={() => handlePointerDown('start')}
        on:pointerup={() => handlePointerUp('start')}
        on:focus={() => handleKnobFocus('start')}
        on:blur={() => handleKnobBlur('start')}
      >
        {#if knobLabels && (knobActive == 'start' || knobFocused == 'start')}
          <span class="slider__knob__value">{valueStart}</span>
        {/if}
      </button>
    {/if}
    
    <!-- End -->
    <button 
      class="
        slider__knob {range ? 'slider__knob--end' : ''}
        {knobActive == 'end' ? 'slider__knob--active' : ''}
        {knobFocused == 'end' ? 'slider__knob--focused' : ''}
      "
      style="left: {percent(value, min, max)}%;"
      on:pointerdown={() => handlePointerDown('end')}
      on:pointerup={() => handlePointerUp('end')}
      on:focus={() => handleKnobFocus('end')}
      on:blur={() => handleKnobBlur('end')}
    >
      {#if knobLabels && (knobActive == 'end' || knobFocused == 'end')}
        <span class="slider__knob__value">{value}</span>
      {/if}
    </button>

  </div>

  <slot 
    {min}
    {max}
    {minValue}
    {maxValue}
    {value}
    {valueStart}
  />

</div>
