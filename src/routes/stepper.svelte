<script>
  import Highlight from "$lib/Highlight.svelte";

  import Stepper from "$lib/Stepper.svelte";

</script>


<h2>Stepper</h2>

<hr />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Stepper options={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]} value="Jun" />
    <Stepper dropdown options={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]} value="Jun" />
  </div>
</div>
<Highlight code={`
  <Stepper options={["Jan", "Feb", ..., "Nov", "Dec"]} value="Jun" />
  <Stepper dropdown options={["Jan", "Feb", ..., "Nov", "Dec"]} value="Jun" />
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Stepper number min={1} max={10} value="5" let:valueLabel>
      <br /><br />
      <p>Quantity: {valueLabel}</p>
      <p>Unit price: $25</p>
      <p>Total: ${valueLabel * 25}</p>
    </Stepper>
  </div>
</div>
<Highlight code={`
  <Stepper number min={1} max={10} value="5" />
`} />
