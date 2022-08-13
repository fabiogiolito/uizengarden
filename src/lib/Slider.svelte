<script>

  export let min = 0;
  export let max = 100;

  export let range = false; // Range slider has two knobs

  export let step = null; // Fix increments

  export let decimals = 0; // Control slider precision. How many decimal places should values have.
  export let nudge = 10;

  export let valueStart = min; // Value for start knob
  export let valueEnd = max; // Value for end knob

  // Ref
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
    let value = valueFromPercentInRange(percent, min, max);
    value = round(value, decimals, min, max);

    // Update correct value
    if (knobActive == 'start') updateValue('start', value);
    if (knobActive == 'end') updateValue('end', value);
  }

  function updateValue(knob, value) {
    if (knob == 'start') {
      if (value >= min && value <= valueEnd) {
        valueStart = value;
      }
    }
    if (knob == 'end') {
      if (value >= valueStart && value <= max) {
        valueEnd = value;
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

    let currentValue = knobFocused == 'start' ? valueStart : valueEnd;
    let delta = e.shiftKey ? nudge : step || 1;

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

  function percent(value, min = 0, max = 100) {
    return (value - min) * 100 / (max - min) ;
  }

</script>

<svelte:window on:pointerdown={handleBodyClick} on:keydown={handleKeyDown} on:pointerup={handlePointerUp} on:pointermove={handlePointerMove} />

<div class="slider {range ? 'slider--range' : ''}" bind:this={container}>
  <span class="slider__progress" style="left: {percent(valueStart, min, max)}%; right: {100 - percent(valueEnd, min, max)}%" />

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
    />
  {/if}
  
  <!-- End -->
  <button 
    class="
      slider__knob {range ? 'slider__knob--end' : ''}
      {knobActive == 'end' ? 'slider__knob--active' : ''}
      {knobFocused == 'end' ? 'slider__knob--focused' : ''}
    "
    style="left: {percent(valueEnd, min, max)}%;"
    on:pointerdown={() => handlePointerDown('end')}
    on:pointerup={() => handlePointerUp('end')}
    on:focus={() => handleKnobFocus('end')}
    on:blur={() => handleKnobBlur('end')}
  />
</div>

<br />

<p>{min} --- {valueStart} / {valueEnd} --- {max}</p>



<style>
  .slider {
    width: 100%;
    height: 8px;
    position: relative;
    background: #ccc;
    border-radius: 8px;
  }

  .slider__knob {
    width: 24px;
    height: 24px;
    border-radius: 100%;
    background: black;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .slider__knob--active,
  .slider__knob--focused {
    transform: translate(-50%, -50%) scale(1.05);
    background: green;
  }

  .slider__progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 8px;
    background: red;
    border-radius: 8px;
  }
</style>
