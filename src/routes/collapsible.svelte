<script>
  import { slide } from "svelte/transition";

  import Collapsible from "$lib/Collapsible.svelte";
  import Button from "$lib/Button.svelte";
</script>


<h2>Collapsible</h2>

<hr />

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Collapsible title="Hello">
      <p>World</p>
    </Collapsible>
  </div>
  <div class="uizg-previewCode">
    {`
<Collapsible title="Hello">
<p>World</p>
</Collapsible>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Collapsible let:collapsed>
      <span slot="title">Click me to {collapsed ? "open" : "close"}</span>
      <Button size="xs" slot="header">Action</Button>
      <p>Hello</p>
    </Collapsible>
  </div>
  <div class="uizg-previewCode">
    {`
<Collapsible let:collapsed>
<span slot="title">Click me to {collapsed ? "open" : "close"}</span>
<Button size="xs" slot="header">Action</Button>
<p>Hello</p>
</Collapsible>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Collapsible collapsed let:collapsed let:toggleCollapsed>
      <div slot="trigger">
        {#if collapsed}
          <div transition:slide>
            <Button size="xs" on:click={toggleCollapsed}>2 more</Button>
          </div>
        {/if}
      </div>
      <p>Hello one</p>
      <p>Hello two</p>
    </Collapsible>
  </div>
  <div class="uizg-previewCode">
    {`
<Collapsible collapsed let:collapsed let:toggleCollapsed>
<div slot="trigger">
  {#if collapsed}
    <div transition:slide>
      <Button size="xs" on:click={toggleCollapsed}>2 more</Button>
    </div>
  {/if}
</div>
<p>Hello one</p>
<p>Hello two</p>
</Collapsible>
    `}
  </div>
</div>
