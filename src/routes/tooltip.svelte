<script>
  import Tooltip from "$lib/Tooltip.svelte";
  import Button from "$lib/Button.svelte";

  import IconHeart from "$lib/icons/IconHeart.svelte";
</script>


<h2>Component</h2>

<hr />

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Tooltip text="Hello!">
      Hover me
    </Tooltip>
  </div>
  <div class="uizg-previewCode">
    {`
<Tooltip text="Hello!">
Hover me
</Tooltip>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Tooltip>
      <IconHeart slot="content" />
      Hover me
    </Tooltip>
  </div>
  <div class="uizg-previewCode">
    {`
<Tooltip>
<IconHeart slot="content" />
Hover me
</Tooltip>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Tooltip direction="up">
      <Button>Tooltip up</Button>
      <div slot="content">
        <p>some tooltip content</p>
        <p>some tooltip content</p>
        <p>some tooltip content</p>
      </div>
    </Tooltip>
    <Tooltip direction="right">
      <Button>Tooltip right</Button>
      <div slot="content">
        <p>some tooltip content</p>
        <p>some tooltip content</p>
        <p>some tooltip content</p>
      </div>
    </Tooltip>
    <Tooltip direction="down">
      <Button>Tooltip down</Button>
      <div slot="content">
        <p>some tooltip content</p>
        <p>some tooltip content</p>
        <p>some tooltip content</p>
      </div>
    </Tooltip>
    <Tooltip direction="left">
      <Button>Tooltip left</Button>
      <div slot="content">
        <p>some tooltip content</p>
        <p>some tooltip content</p>
        <p>some tooltip content</p>
      </div>
    </Tooltip>
  </div>
  <div class="uizg-previewCode">
    {`
<Tooltip direction="up">
<Button>Tooltip up</Button>
<div slot="content">...</div>
</Tooltip>
<Tooltip direction="right">
<Button>Tooltip right</Button>
<div slot="content">...</div>
</Tooltip>
<Tooltip direction="down">
<Button>Tooltip down</Button>
<div slot="content">...</div>
</Tooltip>
<Tooltip direction="left">
<Button>Tooltip left</Button>
<div slot="content">...</div>
</Tooltip>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Tooltip direction="right" align="center">
      <Button>Vertical Align center</Button>
      <div slot="content">
        <p>some tooltip content</p>
        <p>some tooltip content</p>
        <p>some tooltip content</p>
      </div>
    </Tooltip>
    <Tooltip direction="right" align="top">
      <Button>Vertical Align top</Button>
      <div slot="content">
        <p>some tooltip content</p>
        <p>some tooltip content</p>
        <p>some tooltip content</p>
      </div>
    </Tooltip>
    <Tooltip direction="right" align="bottom">
      <Button>Vertical Align bottom</Button>
      <div slot="content">
        <p>some tooltip content</p>
        <p>some tooltip content</p>
        <p>some tooltip content</p>
      </div>
    </Tooltip>
  </div>
  <div class="uizg-previewCode">
    {`
<Tooltip direction="right" align="center">
<Button>Vertical Align center</Button>
<div slot="content">...</div>
</Tooltip>
<Tooltip direction="right" align="top">
<Button>Vertical Align top</Button>
<div slot="content">...</div>
</Tooltip>
<Tooltip direction="right" align="bottom">
<Button>Vertical Align bottom</Button>
<div slot="content">...</div>
</Tooltip>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Tooltip align="left">
      <Button>Horizontal align left</Button>
      <div slot="content">
        <p>some tooltip content</p>
        <p>some tooltip content</p>
        <p>some tooltip content</p>
      </div>
    </Tooltip>
    <Tooltip align="center">
      <Button>Horizontal align center</Button>
      <div slot="content">
        <p>some tooltip content</p>
        <p>some tooltip content</p>
        <p>some tooltip content</p>
      </div>
    </Tooltip>
    <Tooltip align="right">
      <Button>Horizontal align right</Button>
      <div slot="content">
        <p>some tooltip content</p>
        <p>some tooltip content</p>
        <p>some tooltip content</p>
      </div>
    </Tooltip>
  </div>
  <div class="uizg-previewCode">
    {`
<Tooltip align="left">
<Button>Horizontal align left</Button>
<div slot="content">...</div>
</Tooltip>
<Tooltip align="center">
<Button>Horizontal align center</Button>
<div slot="content">...</div>
</Tooltip>
<Tooltip align="right">
<Button>Horizontal align right</Button>
<div slot="content">...</div>
</Tooltip>
    `}
  </div>
</div>
