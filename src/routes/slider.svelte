<script>
  import Highlight from "$lib/Highlight.svelte";
  
  import Slider from "$lib/Slider.svelte";

  import IconChevronLeft from "$lib/icons/IconChevronLeft.svelte";
  import IconChevronRight from "$lib/icons/IconChevronRight.svelte";
  import IconDot from "$lib/icons/IconDot.svelte";
</script>


<h2>Slider</h2>

<hr />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Slider />
    <Slider value={20} decimals={2} knobLabels />
    <Slider step={20} min={40} max={200} stepLabels />
    <Slider range valueStart={20} value={70} labels />
    <Slider min={0} max={200} minValue={40} maxValue={160} valueStart={40} step={20} labels />
  </div>
</div>
<Highlight code={`
  <Slider />
  <Slider value={20} decimals={2} knobLabels />
  <Slider step={20} min={40} max={200} stepLabels />
  <Slider range valueStart={20} value={70} labels />
  <Slider min={0} max={200} minValue={40} maxValue={160} valueStart={40} step={20} labels />
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Slider range icon={IconChevronLeft} iconStart={IconChevronRight} iconFocused={IconDot} iconStartFocused={IconDot} />
    <Slider step="12.5" decimals="1" labelMin="☹️" labelMax="😁" let:value>
      <span slot="icon" style="font-size: 2em;">
        {["☹️", "🙁", "😔", "😒", "😌", "🙂", "😀", "😄", "😁"][value * 8 / 100]}
      </span>
    </Slider>
    <Slider let:min let:max let:value>
      <span slot="labelMin">🐶 {value == min ? 'woof' : ''}</span>
      <span slot="labelMax">{value == max ? 'meow' : ''} 🐱</span>
    </Slider>
  </div>
</div>
<Highlight code={`
  <Slider range icon={IconChevronLeft} iconStart={IconChevronRight} iconFocused={IconDot} iconStartFocused={IconDot} />
  <Slider step="12.5" decimals="1" labelMin="☹️" labelMax="😁" let:value>
    <span slot="icon" style="font-size: 2em;">
      {["☹️", "🙁", "😔", "😒", "😌", "🙂", "😀", "😄", "😁"][value * 8 / 100]}
    </span>
  </Slider>
  <Slider let:min let:max let:value>
    <span slot="labelMin">🐶 {value == min ? 'woof' : ''}</span>
    <span slot="labelMax">{value == max ? 'meow' : ''} 🐱</span>
  </Slider>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Slider range
      on:changeStart={(e) => console.log('Changed Start Value', e.detail)}
      on:changeEnd={(e) => console.log('Changed End Value', e.detail)}
    />
  </div>
</div>
<Highlight code={`
  <Slider range
    on:changeStart={(e) => console.log('Changed Start Value', e.detail)}
    on:changeEnd={(e) => console.log('Changed End Value', e.detail)}
  />
`} />
