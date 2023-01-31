<script>
  import Highlight from "$lib/Highlight.svelte";

  import Button from "$lib/Button.svelte";

  import Checkbox from "$lib/Checkbox.svelte";
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
    <Button style="width: 200px;">
      Button labels truncate by default
    </Button>
    <Button wrap style="width: 200px;">
      This button label wraps to a new line
    </Button>
  </div>
</div>
<Highlight code={`
  <Button style="width: 200px;">Button labels truncate by default</Button>
  <Button wrap style="width: 200px;">This button label wraps to a new line</Button>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Button>New post</Button>
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
    <Button async icon={IconRotateCw} />
    <Button type="primary" async>Load more</Button>
    <Button type="primary" async icon={IconRotateCw}>Reload</Button>
    <Button type="primary" async icon={IconRotateCw} />
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
    <Button toggle on:toggle={() => console.log('toggled')}>Toggle</Button>
    <Button toggle
      classToggled="btn--primary"
      classUntoggled="btn--primary-translucent"
      label="Toggle"
    />
    <Button toggle toggled
      on:select={() => console.log('handleFollow')}
      on:unselect={() => console.log('handleUnfollow')}
      classUntoggled="btn--primary"
      classToggled=""
      let:toggled
    >
      {#if toggled}
        <em>Following</em>
      {:else}
        <strong>Follow</strong>
      {/if}
    </Button>
  </div>
  <div class="uizg-preview__element">
    <Button element="div" toggle let:toggled classToggled="">
      <div slot="icon" class="btn__icon-container">
        <Checkbox checked={toggled} />
      </div>
      I've read the terms of service
    </Button>
  </div>
</div>
<Highlight code={`
  <Button toggle on:toggle={() => console.log('toggled')}>Toggle</Button>
  <Button toggle
    classToggled="btn--primary"
    classUntoggled="btn--primary-translucent"
    label="Toggle"
  />
  <Button toggle toggled
    on:select={handleFollow}
    on:unselect={handleUnfollow}
    classUntoggled="btn--primary"
    classToggled=""
    let:toggled
  >
    {#if toggled}
      <em>Following</em>
    {:else}
      <strong>Follow</strong>
    {/if}
  </Button>
  <Button element="div" toggle let:toggled classToggled="">
    <div slot="icon" class="btn__icon-container">
      <Checkbox checked={toggled} />
    </div>
    I've read the terms of service
  </Button>
`} />
