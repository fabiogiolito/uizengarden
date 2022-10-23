<script>
  import { slide } from "svelte/transition";
  
  import Highlight from "$lib/Highlight.svelte";

  import Collapsible from "$lib/Collapsible.svelte";

  import Button from "$lib/Button.svelte";
  import List from "$lib/List.svelte";
  import ListItem from "$lib/ListItem.svelte";
  import Avatar from "$lib/Avatar.svelte";
  import IconChevronDown from "$lib/icons/IconChevronDown.svelte";
  import IconChevronRight from "$lib/icons/IconChevronRight.svelte";
  import IconHash from "$lib/icons/IconHash.svelte";
</script>


<h2>Collapsible</h2>

<hr />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <List style="width: 320px;">
      <Collapsible let:collapsed>
        <ListItem slot="title" heading="Channels" iconRight={collapsed ? IconChevronRight : IconChevronDown} />
        <Button label="General" icon={IconHash} />
        <Button label="Random" icon={IconHash} />
      </Collapsible>
      <ListItem divider />
      <Collapsible let:collapsed>
        <ListItem slot="title" heading="People" iconRight={collapsed ? IconChevronRight : IconChevronDown} />
        <Button label="John">
          <Avatar slot="icon" size="xs" initials="jd" />
        </Button>
        <Button label="Jane">
          <Avatar slot="icon" size="xs" initials="jd" />
        </Button>
      </Collapsible>
    </List>
  </div>
</div>
<Highlight code={`
  <List>
    <Collapsible let:collapsed>
      <ListItem slot="title" heading="Channels" iconRight={collapsed ? IconChevronRight : IconChevronDown} />
      <Button label="General" icon={IconHash} />
      <Button label="Random" icon={IconHash} />
    </Collapsible>
    <ListItem divider />
    <Collapsible let:collapsed>
      <ListItem slot="title" heading="People" iconRight={collapsed ? IconChevronRight : IconChevronDown} />
      <Button label="John">
        <Avatar slot="icon" size="xs" initials="jd" />
      </Button>
      <Button label="Jane">
        <Avatar slot="icon" size="xs" initials="jd" />
      </Button>
    </Collapsible>
  </List>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Collapsible title="Hello">
      <p>World</p>
    </Collapsible>
  </div>
</div>
<Highlight code={`
  <Collapsible title="Hello">
    <p>World</p>
  </Collapsible>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Collapsible let:collapsed>
      <span slot="title">Click me to {collapsed ? "open" : "close"}</span>
      <Button size="xs" slot="header">Action</Button>
      <p>Hello</p>
    </Collapsible>
  </div>
</div>
<Highlight code={`
  <Collapsible let:collapsed>
    <span slot="title">Click me to {collapsed ? "open" : "close"}</span>
    <Button size="xs" slot="header">Action</Button>
    <p>Hello</p>
  </Collapsible>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Collapsible collapsed let:collapsed let:toggleCollapsed>
      <div slot="trigger">
        {#if collapsed}
          <Button size="xs" on:click={toggleCollapsed}>2 more</Button>
        {/if}
      </div>
      <p>Hello one</p>
      <p>Hello two</p>
    </Collapsible>
  </div>
</div>
<Highlight code={`
  <Collapsible collapsed let:collapsed let:toggleCollapsed>
    <div slot="trigger">
      {#if collapsed}
        <Button size="xs" on:click={toggleCollapsed}>2 more</Button>
      {/if}
    </div>
    <p>Hello one</p>
    <p>Hello two</p>
  </Collapsible>
`} />
