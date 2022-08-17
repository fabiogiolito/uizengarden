<script>
  import Checkbox from "$lib/Checkbox.svelte";

  import IconPenTool from "$lib/icons/IconPenTool.svelte";
  import IconBell from "$lib/icons/IconBell.svelte";
  import IconBellOff from "$lib/icons/IconBellOff.svelte";
</script>


<h2>Checkbox</h2>

<hr />

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Checkbox />
    <Checkbox type="radio" />
    <Checkbox type="switch" />
  </div>
  <div class="uizg-previewCode">
    {`
<Checkbox />
<Checkbox type="radio" />
<Checkbox type="switch" />
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Checkbox label="Checkbox label" />
  </div>
  <div class="uizg-previewCode">
    {`
<Checkbox label="Checkbox label" />
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Checkbox type="switch">
      <p>Custom label</p>
      <small>With slot</small>
    </Checkbox>
  </div>
  <div class="uizg-previewCode">
    {`
<Checkbox type="switch">
<p>Custom label</p>
<small>With slot</small>
</Checkbox>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Checkbox label="Custom icon" icon={IconPenTool} checked />
    <Checkbox label="Custom icon" icon={IconPenTool} checked type="radio" />
  </div>
  <div class="uizg-previewCode">
    {`
<Checkbox label="Custom icon" icon={IconPenTool} checked />
<Checkbox label="Custom icon" icon={IconPenTool} checked type="radio" />
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Checkbox label="Custom icon slot" checked>
      <svelte:component this={checked ? IconBell : IconBellOff} size="xs" slot="icon" let:checked />
    </Checkbox>
    <Checkbox label="Custom icon slot" checked type="radio">
      <svelte:component this={checked ? IconBell : IconBellOff} size="xs" slot="icon" let:checked />
    </Checkbox>
    <Checkbox label="Custom icon slot" checked type="switch">
      <svelte:component this={checked ? IconBell : IconBellOff} size="xs" slot="icon" let:checked />
    </Checkbox>
  </div>
  <div class="uizg-previewCode">
    {`
<Checkbox label="Custom icon slot" checked>
<svelte:component this={checked ? IconBell : IconBellOff} size="xs" slot="icon" let:checked />
</Checkbox>
<Checkbox label="Custom icon slot" checked type="radio">
<svelte:component this={checked ? IconBell : IconBellOff} size="xs" slot="icon" let:checked />
</Checkbox>
<Checkbox label="Custom icon slot" checked type="switch">
<svelte:component this={checked ? IconBell : IconBellOff} size="xs" slot="icon" let:checked />
</Checkbox>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Checkbox label="Custom icon slot" checked>
      <span slot="icon" let:checked style="font-size: 0.6em; font-weight: bold;">{ checked ? 'Y' : 'N' }</span>
    </Checkbox>
    <Checkbox label="Custom icon slot" checked type="radio">
      <span slot="icon" let:checked style="font-size: 0.6em; font-weight: bold;">{ checked ? 'Y' : 'N' }</span>
    </Checkbox>
    <Checkbox label="Custom icon slot" checked type="switch">
      <span slot="icon" let:checked style="font-size: 0.6em; font-weight: bold;">{ checked ? 'Y' : 'N' }</span>
    </Checkbox>
  </div>
  <div class="uizg-previewCode">
    {`
<Checkbox label="Custom icon slot" checked>
<span slot="icon" let:checked style="font-size: 0.6em; font-weight: bold;">{ checked ? 'Y' : 'N' }</span>
</Checkbox>
<Checkbox label="Custom icon slot" checked type="radio">
<span slot="icon" let:checked style="font-size: 0.6em; font-weight: bold;">{ checked ? 'Y' : 'N' }</span>
</Checkbox>
<Checkbox label="Custom icon slot" checked type="switch">
<span slot="icon" let:checked style="font-size: 0.6em; font-weight: bold;">{ checked ? 'Y' : 'N' }</span>
</Checkbox>
    `}
  </div>
</div>
