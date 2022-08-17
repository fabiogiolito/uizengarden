<script>
  import Dropdown from "$lib/Dropdown.svelte";
  import Button from "$lib/Button.svelte";

  import IconChevronDown from "$lib/icons/IconChevronDown.svelte";
</script>


<h2>Dropdown</h2>

<hr />

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Dropdown>
      <Button slot="trigger" iconRight={IconChevronDown}>Dropdown</Button>
      <p>Dropdown menu content</p>
    </Dropdown>
  </div>
  <div class="uizg-previewCode">
    {`
<Dropdown>
<Button slot="trigger" iconRight={IconChevronDown}>Dropdown</Button>
<p>Dropdown menu content</p>
</Dropdown>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Dropdown let:open>
      <Button slot="trigger" type={open ? 'primary' : 'secondary'}>Dropdown</Button>
      <p>Dropdown menu content</p>
    </Dropdown>
  </div>
  <div class="uizg-previewCode">
    {`
<Dropdown let:open>
<Button slot="trigger" type={open ? 'primary' : 'secondary'}>Dropdown</Button>
<p>Dropdown menu content</p>
</Dropdown>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Dropdown direction="down" align="left">
      <Button slot="trigger">Down, Align left</Button>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
    </Dropdown>
    <Dropdown direction="down" align="right">
      <Button slot="trigger">Down, Align right</Button>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
    </Dropdown>
    <Dropdown direction="up" align="left">
      <Button slot="trigger">Up, align left</Button>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
    </Dropdown>
    <Dropdown direction="up" align="right">
      <Button slot="trigger">Up, align right</Button>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
    </Dropdown>
  </div>
  <div class="uizg-previewCode">
    {`
<Dropdown direction="down" align="left">
<Button slot="trigger">Down, Align left</Button>
<p>Dropdown menu content</p>
</Dropdown>
<Dropdown direction="down" align="right">
<Button slot="trigger">Down, Align right</Button>
<p>Dropdown menu content</p>
</Dropdown>
<Dropdown direction="up" align="left">
<Button slot="trigger">Up, align left</Button>
<p>Dropdown menu content</p>
</Dropdown>
<Dropdown direction="up" align="right">
<Button slot="trigger">Up, align right</Button>
<p>Dropdown menu content</p>
</Dropdown>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Dropdown direction="right" align="top">
      <Button slot="trigger">Right, Align top</Button>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
    </Dropdown>
    <Dropdown direction="right" align="center">
      <Button slot="trigger">Right, Align center</Button>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
    </Dropdown>
    <Dropdown direction="right" align="bottom">
      <Button slot="trigger">Right, align bottom</Button>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
    </Dropdown>
  </div>
  <div class="uizg-previewCode">
    {`
<Dropdown direction="right" align="top">
<Button slot="trigger">Right, Align top</Button>
<p>Dropdown menu content</p>
</Dropdown>
<Dropdown direction="right" align="center">
<Button slot="trigger">Right, Align center</Button>
<p>Dropdown menu content</p>
</Dropdown>
<Dropdown direction="right" align="bottom">
<Button slot="trigger">Right, align bottom</Button>
<p>Dropdown menu content</p>
</Dropdown>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Dropdown direction="left" align="top">
      <Button slot="trigger">Left, Align top</Button>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
    </Dropdown>
    <Dropdown direction="left" align="center">
      <Button slot="trigger">Left, Align center</Button>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
    </Dropdown>
    <Dropdown direction="left" align="bottom">
      <Button slot="trigger">Left, align bottom</Button>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
    </Dropdown>
  </div>
  <div class="uizg-previewCode">
    {`
<Dropdown direction="left" align="top">
<Button slot="trigger">Left, Align top</Button>
<p>Dropdown menu content</p>
</Dropdown>
<Dropdown direction="left" align="center">
<Button slot="trigger">Left, Align center</Button>
<p>Dropdown menu content</p>
</Dropdown>
<Dropdown direction="left" align="bottom">
<Button slot="trigger">Left, align bottom</Button>
<p>Dropdown menu content</p>
</Dropdown>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Dropdown over direction="down" align="left">
      <Button slot="trigger">Over down</Button>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
    </Dropdown>
    <Dropdown over direction="up" align="left">
      <Button slot="trigger">Over up</Button>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
    </Dropdown>
    <Dropdown over direction="right" align="top">
      <Button slot="trigger">Over right</Button>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
    </Dropdown>
    <Dropdown over direction="left" align="top">
      <Button slot="trigger">Over left</Button>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
      <p>Dropdown menu content</p>
    </Dropdown>
  </div>
  <div class="uizg-previewCode">
    {`
<Dropdown over direction="down" align="left">
<Button slot="trigger">Over down</Button>
<p>Dropdown menu content</p>
</Dropdown>
<Dropdown over direction="up" align="left">
<Button slot="trigger">Over up</Button>
<p>Dropdown menu content</p>
</Dropdown>
<Dropdown over direction="right" align="top">
<Button slot="trigger">Over right</Button>
<p>Dropdown menu content</p>
</Dropdown>
<Dropdown over direction="left" align="top">
<Button slot="trigger">Over left</Button>
<p>Dropdown menu content</p>
</Dropdown>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Dropdown hover>
      <Button slot="trigger">Hover me</Button>
      <p>Hover card</p>
    </Dropdown>
    <Dropdown hover hoverDelay={1000}>
      <Button slot="trigger">Hover me for 1s</Button>
      <p>Hover card</p>
    </Dropdown>
  </div>
  <div class="uizg-previewCode">
    {`
<Dropdown hover>
<Button slot="trigger">Hover me</Button>
<p>Hover card</p>
</Dropdown>
<Dropdown hover hoverDelay={1000}>
<Button slot="trigger">Hover me for 1s</Button>
<p>Hover card</p>
</Dropdown>
    `}
  </div>
</div>
