<script>
  import Highlight from "$lib/Highlight.svelte";
  
  import Tooltip from "$lib/Tooltip.svelte";
  import Button from "$lib/Button.svelte";

  import IconHeart from "$lib/icons/IconHeart.svelte";
  import IconAtSign from "$lib/icons/IconAtSign.svelte";

</script>


<h2>Tooltip</h2>

<hr />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Tooltip text="Hello!">
      Hover me
    </Tooltip>
  </div>
</div>
<Highlight code={`
  <Tooltip text="Hello!">
    Hover me
  </Tooltip>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Tooltip>
      <IconHeart slot="content" />
      Hover me
    </Tooltip>
  </div>
</div>
<Highlight code={`
  <Tooltip>
    <IconHeart slot="content" />
    Hover me
  </Tooltip>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
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
</div>
<Highlight code={`
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
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
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
</div>
<Highlight code={`
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
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
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
</div>
<Highlight code={`
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
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Tooltip text="click to copy icon name" copy="IconHeart">
      <Button><IconHeart /></Button>
    </Tooltip>
    <Tooltip copy="Hello World">
      <Button>Copy text</Button>
    </Tooltip>
  </div>
</div>
<Highlight code={`
  <Tooltip text="click to copy icon name" copy="IconHeart">
    <Button><IconHeart /></Button>
  </Tooltip>
  <Tooltip copy="Hello World">
    <Button>Copy text</Button>
  </Tooltip>
`} />
