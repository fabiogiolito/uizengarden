<script>
  import Highlight from "$lib/Highlight.svelte";

  import Checkbox from "$lib/Checkbox.svelte";

  import IconPenTool from "$lib/icons/IconPenTool.svelte";
  import IconBell from "$lib/icons/IconBell.svelte";
  import IconBellOff from "$lib/icons/IconBellOff.svelte";
</script>


<h2>Checkbox</h2>

<hr />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Checkbox />
    <Checkbox type="radio" />
    <Checkbox type="switch" />
  </div>
</div>
<Highlight code={`
  <Checkbox />
  <Checkbox type="radio" />
  <Checkbox type="switch" />
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Checkbox label="Checkbox label" />
  </div>
</div>
<Highlight code={`
  <Checkbox label="Checkbox label" />
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Checkbox type="switch">
      <p>Custom label</p>
      <small>With slot</small>
    </Checkbox>
  </div>
</div>
<Highlight code={`
    <Checkbox type="switch">
      <p>Custom label</p>
      <small>With slot</small>
    </Checkbox>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <p><Checkbox label="Custom icon" icon={IconPenTool} checked /></p>
    <p><Checkbox label="Custom icon" icon={IconPenTool} checked type="radio" /></p>
  </div>
</div>
<Highlight code={`
  <Checkbox label="Custom icon" icon={IconPenTool} checked />
  <Checkbox label="Custom icon" icon={IconPenTool} checked type="radio" />
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <p>
      <Checkbox label="Custom icon slot" checked>
        <svelte:component let:checked this={checked ? IconBell : IconBellOff} size="xs" slot="icon" />
      </Checkbox>
    </p>
    <p>
      <Checkbox label="Custom icon slot" checked type="radio">
        <svelte:component let:checked this={checked ? IconBell : IconBellOff} size="xs" slot="icon" />
      </Checkbox>
    </p>
    <p>
      <Checkbox label="Custom icon slot" checked type="switch">
        <svelte:component let:checked this={checked ? IconBell : IconBellOff} size="xs" slot="icon" />
      </Checkbox>
    </p>
  </div>
</div>
<Highlight code={`
  <Checkbox label="Custom icon slot" checked>
    <svelte:component let:checked this={checked ? IconBell : IconBellOff} size="xs" slot="icon" />
  </Checkbox>
  <Checkbox label="Custom icon slot" checked type="radio">
    <svelte:component let:checked this={checked ? IconBell : IconBellOff} size="xs" slot="icon" />
  </Checkbox>
  <Checkbox label="Custom icon slot" checked type="switch">
    <svelte:component let:checked this={checked ? IconBell : IconBellOff} size="xs" slot="icon" />
  </Checkbox>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <p>
      <Checkbox label="Custom icon slot" checked>
        <span slot="icon" class="checkbox__icon" let:checked>{ checked ? 'Y' : 'N' }</span>
      </Checkbox>
    </p>
    <p>
      <Checkbox label="Custom icon slot" checked type="radio">
        <span slot="icon" class="radio__icon" let:checked>{ checked ? 'Y' : 'N' }</span>
      </Checkbox>
    </p>
    <p>
      <Checkbox label="Custom icon slot" checked type="switch">
        <span slot="icon" class="switch__icon" let:checked>{ checked ? 'Y' : 'N' }</span>
      </Checkbox>
    </p>
  </div>
</div>
<Highlight code={`
  <Checkbox label="Custom icon slot" checked>
    <span slot="icon" let:checked>{ checked ? 'Y' : 'N' }</span>
  </Checkbox>
  <Checkbox label="Custom icon slot" checked type="radio">
    <span slot="icon" let:checked>{ checked ? 'Y' : 'N' }</span>
  </Checkbox>
  <Checkbox label="Custom icon slot" checked type="switch">
    <span slot="icon" let:checked>{ checked ? 'Y' : 'N' }</span>
  </Checkbox>
`} />
