<script>
  import Highlight from "$lib/Highlight.svelte";

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

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Button on:click={() => { alert('clicked')}}>Button</Button>
    <Button href="#link">Link</Button>
    <Button element="span">Span</Button>
  </div>
</div>
<Highlight code={`
  <Button on:click={() => { alert('clicked')}}>Button</Button>
  <Button href="#link">Link</Button>
  <Button element="span">Span</Button>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Button disabled>Button</Button>
    <Button disabled href="#link">Link</Button>
    <Button disabled element="span">Span</Button>
  </div>
</div>
<Highlight code={`
  <Button disabled>Button</Button>
  <Button disabled href="#link">Link</Button>
  <Button disabled element="span">Span</Button>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Button>Regular</Button>
    <Button type="primary">Primary</Button>
    <Button type="primary-translucent">Primary translucent</Button>
    <Button type="secondary">Secondary</Button>
    <Button type="secondary-translucent">Secondary translucent</Button>
  </div>
</div>
<Highlight code={`
  <Button>Regular</Button>
  <Button type="primary">Primary</Button>
  <Button type="primary-translucent">Primary translucent</Button>
  <Button type="secondary">Secondary</Button>
  <Button type="secondary-translucent">Secondary translucent</Button>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Button size="xs">Extra Small</Button>
    <Button size="sm">Small</Button>
    <Button>Medium</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">Extra Large</Button>
  </div>
</div>
<Highlight code={`
  <Button size="xs">Extra Small</Button>
  <Button size="sm">Small</Button>
  <Button>Medium</Button>
  <Button size="lg">Large</Button>
  <Button size="xl">Extra Large</Button>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Button icon={IconPlus}>New post</Button>
    <Button iconRight={IconChevronDown}>Published</Button>
    <Button icon={IconAlignLeft} iconRight={IconChevronDown}>Left</Button>
    <Button icon={IconPlus} />
    <Button iconRight={IconChevronDown} />
    <Button icon={IconPlus} iconRight={IconChevronDown} />
  </div>
</div>
<Highlight code={`
  <Button icon={IconPlus}>New post</Button>
  <Button iconRight={IconChevronDown}>Published</Button>
  <Button icon={IconAlignLeft} iconRight={IconChevronDown}>Left</Button>
  <Button icon={IconPlus} />
  <Button iconRight={IconChevronDown} />
  <Button icon={IconPlus} iconRight={IconChevronDown} />
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Button async>Load more</Button>
    <Button async icon={IconRotateCw}>Reload</Button>
  </div>
</div>
<Highlight code={`
  <Button async>Load more</Button>
  <Button async icon={IconRotateCw}>Reload</Button>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Button icon={IconCopy} copy="ABCD">ABCD</Button>
    <Button icon={IconLink} copyFunc={() => 'WXYZ'} copiedLabel="Link copied">Share</Button>
  </div>
</div>
<Highlight code={`
  <Button icon={IconCopy} copy="ABCD">ABCD</Button>
  <Button icon={IconLink} copyFunc={() => 'WXYZ'} copiedLabel="Link copied">Share</Button>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Button toggle selected on:toggle={() => console.log('toggled')}>Toggle</Button>
    <Button toggle
      classSelected="btn--primary"
      classUnselected="btn--secondary-translucent"
      label="Toggle"
    />
    <Button toggle
      on:select={() => console.log('did select')}
      on:unselect={() => console.log('did unselect')}
      classSelected=""
      let:selected
    >
      {#if selected}
        <em>Following</em>
      {:else}
        <strong>Follow</strong>
      {/if}
    </Button>
  </div>
</div>
<Highlight code={`
  <Button toggle selected on:toggle={handleToggle}>Toggle</Button>
  <Button toggle
    classSelected="btn--primary"
    classUnselected="btn--secondary-translucent"
    label="Toggle"
  />
  <Button toggle
    on:select={handleSelect}
    on:unselect={handleUnselect}
    classSelected=""
    let:selected
  >
    {#if selected}
      <em>Following</em>
    {:else}
      <strong>Follow</strong>
    {/if}
  </Button>
`} />
