<script>
  import Button from "$lib/Button.svelte";
  import IconAlignLeft from "$lib/icons/IconAlignLeft.svelte";
  import IconCopy from "$lib/icons/IconCopy.svelte";
  import IconChevronDown from "$lib/icons/IconChevronDown.svelte";
  import IconPlus from "$lib/icons/IconPlus.svelte";
  import IconRotateCw from "$lib/icons/IconRotateCw.svelte";
  import IconLink from "$lib/icons/IconLink.svelte";
</script>


<h2>Button</h2>

<hr />

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Button on:click={() => { alert('clicked')}}>Button</Button>
    <Button href="#link">Link</Button>
    <Button element="span">Span</Button>
  </div>
  <div class="uizg-previewCode">
    {`
  <Button on:click={() => { alert('clicked')}}>Button</Button>
  <Button href="#link">Link</Button>
  <Button element="span">Span</Button>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Button disabled>Button</Button>
    <Button disabled href="#link">Link</Button>
    <Button disabled element="span">Span</Button>
  </div>
  <div class="uizg-previewCode">
    {`
  <Button disabled>Button</Button>
  <Button disabled href="#link">Link</Button>
  <Button disabled element="span">Span</Button>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Button>Regular</Button>
    <Button type="primary">Primary</Button>
    <Button type="primary-translucent">Primary translucent</Button>
    <Button type="secondary">Secondary</Button>
    <Button type="secondary-translucent">Secondary translucent</Button>
  </div>
  <div class="uizg-previewCode">
    {`
  <Button>Regular</Button>
  <Button type="primary">Primary</Button>
  <Button type="primary-translucent">Primary translucent</Button>
  <Button type="secondary">Secondary</Button>
  <Button type="secondary-translucent">Secondary translucent</Button>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Button size="xs">Extra Small</Button>
    <Button size="sm">Small</Button>
    <Button>Medium</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">Extra Large</Button>
  </div>
  <div class="uizg-previewCode">
    {`
  <Button size="xs">Extra Small</Button>
  <Button size="sm">Small</Button>
  <Button>Medium</Button>
  <Button size="lg">Large</Button>
  <Button size="xl">Extra Large</Button>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Button icon={IconPlus}>New post</Button>
    <Button iconRight={IconChevronDown}>Published</Button>
    <Button icon={IconAlignLeft} iconRight={IconChevronDown}>Left</Button>
    <Button icon={IconPlus} />
    <Button iconRight={IconChevronDown} />
    <Button icon={IconPlus} iconRight={IconChevronDown} />
  </div>
  <div class="uizg-previewCode">
    {`
  <Button icon={IconPlus}>New post</Button>
  <Button iconRight={IconChevronDown}>Published</Button>
  <Button icon={IconAlignLeft} iconRight={IconChevronDown}>Left</Button>
  <Button icon={IconPlus} />
  <Button iconRight={IconChevronDown} />
  <Button icon={IconPlus} iconRight={IconChevronDown} />
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Button async>Load more</Button>
    <Button async icon={IconRotateCw}>Reload</Button>
  </div>
  <div class="uizg-previewCode">
    {`
  <Button async>Load more</Button>
  <Button async icon={IconRotateCw}>Reload</Button>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Button icon={IconCopy} copy="ABCD">ABCD</Button>
    <Button icon={IconLink} copyFunc={() => 'WXYZ'} copiedLabel="Link copied">Share</Button>
  </div>
  <div class="uizg-previewCode">
    {`
  <Button icon={IconCopy} copy="ABCD">ABCD</Button>
  <Button icon={IconLink} copyFunc={() => 'WXYZ'} copiedLabel="Link copied">Share</Button>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Button toggle selected on:toggle={() => console.log('toggled')}>Toggle</Button>
    <Button toggle classSelected="" let:selected
      on:select={() => console.log('did select')}
      on:unselect={() => console.log('did unselect')}
    >
      {selected ? 'Following' : 'Follow'}
    </Button>
  </div>
  <div class="uizg-previewCode">
    {`
  <Button toggle selected on:toggle={() => console.log('toggled')}>Toggle</Button>
  <Button toggle classSelected="" let:selected
  on:select={() => console.log('did select')}
  on:unselect={() => console.log('did unselect')}
  >
  {selected ? 'Following' : 'Follow'}
  </Button>
    `}
  </div>
</div>
