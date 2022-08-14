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
  export let value = round((maxValue / 2) + (minValue / 2), decimals, min, max); // Value for end knob (default half)
  export let valueStart = min; // Value for start knob (if range)

  // Show labels
  export let labels = false; // All labels
  export let trackLabels = labels; // min, minValue, maxValue, max
  export let knobLabels = labels; // when knob is active
  export let stepLabels = labels; // where steps are
  
  // Read only, no knobs or interactivity
  export let readonly = false;

  // Classes
  export let classBase = "slider";
  export let classRange             = `${classBase}--range`;
  export let classTrack             = `${classBase}__track`;
  export let classSegment           = `${classBase}__segment`;
  export let classSegmentDisabled   = `${classBase}__segment--disabled`;
  export let classSegmentUnselected = `${classBase}__segment--unselected`;
  export let classSegmentSelected   = `${classBase}__segment--selected`;
  export let classLabel             = `${classBase}__label`;
  export let classLabelMin          = `${classBase}__label--min`;
  export let classLabelMax          = `${classBase}__label--max`;
  export let classLabelMinValue     = `${classBase}__label--minValue`;
  export let classLabelMaxValue     = `${classBase}__label--maxValue`;
  export let classStep              = `${classBase}__step`;
  export let classStepDisabled      = `${classBase}__step--disabled`;
  export let classStepSelected      = `${classBase}__step--selected`;
  export let classStepUnselected    = `${classBase}__step--unselected`;
  export let classStepValue         = `${classBase}__step__value`;
  export let classStepValueMain         = `${classBase}__step__value--main`;
  export let classKnob              = `${classBase}__knob`;
  export let classKnobStart         = `${classBase}__knob--start`;
  export let classKnobEnd           = `${classBase}__knob--end`;
  export let classKnobActive        = `${classBase}__knob--active`;
  export let classKnobFocused       = `${classBase}__knob--focused`;
  export let classKnobValue         = `${classBase}__knob__value`;

  let className = "";
  export { className as class }; // Extra classes

  // Container ref
  let container;

  // Calculate how many steps
  let stepCount = step ? Math.round(((max - min) / step) + 1) : 0;

  // State
  let knobActive = null;
  let knobFocused = null;


  // ========================================
  // Functions

  function handlePointerDown(knob) {
    if (readonly) return;
    knobActive = knob;
    knobFocused = knob;
  }

  function handlePointerUp() {
    knobActive = null;
  }

  function handlePointerMove(e) {
    if (readonly) return;
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
    if (readonly) return;
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
    if (readonly) return;
    knobFocused = knob;
  }

  function handleKnobBlur() {
    knobFocused = null;
  }

  function handleKeyDown(e) {
    if (readonly) return;
    if (!knobFocused) return;

    let currentValue = knobFocused == 'start' ? valueStart : value;
    let delta = step || (e.shiftKey ? bigNudge : nudge); // Step disables nudge/bigNudge values

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

  function handleClick(e) {

    // Clicked on track
    if (container.contains(e.srcElement)) {

      knobActive = knobActive || 'end'; // activate end knob if nothing active
      handlePointerMove(e); // move knob

    // Clicked outside track
    } else {
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
    if (step) number = Math.round(number / step ) * step;
    return +(Math.round(number + "e+" + decimals)  + "e-" + decimals);
  }

  function valueFromPercentInRange(percent, min = 0, max = 100) {
    return ((max - min) * percent) + min
  }

  function percent(val, min = 0, max = 100) {
    return (val - min) * 100 / (max - min) ;
  }

</script>

<svelte:window on:pointerdown={handleClick} on:keydown={handleKeyDown} on:pointerup={handlePointerUp} on:pointermove={handlePointerMove} />

<div class="{classBase} {range ? classRange : ''} {className}" bind:this={container}>

  <!-- Full track area -->
  <div class={classTrack}>

    <!-- ===== Track segments ========================= -->

    <!-- From min to minValue -->
    {#if minValue > min}
      <div
        class="{classSegment} {classSegmentDisabled}"
        style="left: 0%; right: {100 - percent(minValue, min, max)}%" 
      />
    {/if}

    <!-- From minValue to valueStart -->
    <div
      class="{classSegment} {classSegmentUnselected}"
      style="left: {percent(minValue, min, max)}%; right: {100 - percent(valueStart, min, max)}%" 
    />

    <!-- From valueStart to value -->
    <div
      class="{classSegment} {classSegmentSelected}"
      style="left: {percent(valueStart, min, max)}%; right: {100 - percent(value, min, max)}%" 
    />

    <!-- From value to maxValue -->
    <div
      class="{classSegment} {classSegmentUnselected}"
      style="left: {percent(value, min, max)}%; right: {100 - percent(maxValue, min, max)}%" 
    />

    <!-- From maxValue to max -->
    {#if maxValue < max}
      <div
        class="{classSegment} {classSegmentDisabled}"
        style="left: {percent(maxValue, min, max)}%; right: 0%;"
      />
    {/if}


    <!-- ===== Labels ========================= -->

    <!-- Display min / max values -->
    {#if trackLabels}

      <div class="{classLabel} {classLabelMin}" style="left: 0%;">{min}</div>
      <div class="{classLabel} {classLabelMax}" style="right: 0%;">{max}</div>

      {#if minValue > min}
        <div
          class="{classLabel} {classLabelMinValue}"
          style="left: {percent(minValue, min, max)}%;" 
        >
          {minValue}
        </div>
      {/if}
      
      {#if maxValue < max}
        <div
          class="{classLabel} {classLabelMaxValue}"
          style="left: {percent(maxValue, min, max)}%;" 
        >
          {maxValue}
        </div>
      {/if}
      
    {/if}

    {#if step && stepLabels}
      {#each Array(stepCount) as _, index}
        {@const stepVal = (step * index) + min}
        <div
          class="{classStep}
            {stepVal < minValue ? classStepDisabled : ''}
            {minValue < valueStart && stepVal >= minValue && stepVal <= valueStart ? classStepUnselected : ''}
            {stepVal >= valueStart && stepVal <= value ? classStepSelected : ''}
            {stepVal > value && stepVal <= maxValue ? classStepUnselected : ''}
            {stepVal > maxValue ? classStepDisabled : ''}
          "
          style="left: {percent(stepVal, min, max)}%;"
        >
          <span class="
            {classStepValue}
            {trackLabels && [ min, minValue, maxValue, max ].includes(stepVal) ? classStepValueMain : ''}
          ">
            {stepVal}
          </span>
        </div>
      {/each}
    {/if}
    

    <!-- ===== Knobs ========================= -->

    {#if !readonly}

      <!-- Knob start -->
      {#if range}
        <button 
          class="
            {classKnob} {classKnobStart}
            {knobActive == 'start' ? classKnobActive : ''}
            {knobFocused == 'start' ? classKnobFocused : ''}
          "
          style="left: {percent(valueStart, min, max)}%;"
          on:pointerdown={() => handlePointerDown('start')}
          on:pointerup={() => handlePointerUp('start')}
          on:focus={() => handleKnobFocus('start')}
          on:blur={() => handleKnobBlur('start')}
        >
          {#if knobLabels && (knobActive == 'start' || knobFocused == 'start')}
            <span class={classKnobValue}>{valueStart}</span>
          {/if}
        </button>
      {/if}
      
      <!-- Knob end -->
      <button 
        class="
          {classKnob} {range ? classKnobEnd : ''}
          {knobActive == 'end' ? classKnobActive : ''}
          {knobFocused == 'end' ? classKnobFocused : ''}
        "
        style="left: {percent(value, min, max)}%;"
        on:pointerdown={() => handlePointerDown('end')}
        on:pointerup={() => handlePointerUp('end')}
        on:focus={() => handleKnobFocus('end')}
        on:blur={() => handleKnobBlur('end')}
      >
        {#if knobLabels && (knobActive == 'end' || knobFocused == 'end')}
          <span class={classKnobValue}>{value}</span>
        {/if}
      </button>

    {/if}

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
