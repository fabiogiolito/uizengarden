<script>
  import Highlight from "$lib/Highlight.svelte";

  import List from "$lib/List.svelte";
  import ListItem from "$lib/ListItem.svelte";

  import Button from "$lib/Button.svelte";
  import Dropdown from "$lib/Dropdown.svelte";
  import ToggleGroup from "$lib/ToggleGroup.svelte"

  import IconChevronRight from "$lib/icons/IconChevronRight.svelte";
  import IconBold from "$lib/icons/IconBold.svelte";
  import IconItalic from "$lib/icons/IconItalic.svelte";
  import IconCheck from "$lib/icons/IconCheck.svelte";
  import IconEmpty from "$lib/icons/IconEmpty.svelte";

</script>

<h2>List</h2>

<hr />

<!-- ------------------------------ -->
<!-- LIST -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <List>
      <Button>List item 1</Button>
      <Button label="List item 2" />
      <Button>List item 3</Button>
    </List>
  </div>
</div>
<Highlight code={`
  <List>
    <Button>List item 1</Button>
    <Button label="List item 2" />
    <Button>List item 3</Button>
  </List>
`} />

<!-- ------------------------------ -->
<!-- LIST DIVIDERS -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <List dividers>
      <Button>List item 1</Button>
      <Button label="List item 2" />
      <Button>List item 3</Button>
    </List>
  </div>
</div>
<Highlight code={`
  <List>
    <Button>List item 1</Button>
    <Button label="List item 2" />
    <Button>List item 3</Button>
  </List>
`} />

<!-- ------------------------------ -->
<!-- LIST INSET -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <List type="inset">
      <Button>List item 1</Button>
      <Button label="List item 2" />
      <Button>List item 3</Button>
    </List>
  </div>
</div>
<Highlight code={`
  <List type="inset">
    <Button>List item 1</Button>
    <Button label="List item 2" />
    <Button>List item 3</Button>
  </List>
`} />

<!-- ------------------------------ -->
<!-- LIST FOCUSED ITEM -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <List>
      <Button>List item 1</Button>
      <Button iconRight={IconCheck} focused>List item 2</Button>
      <Button>List item 3</Button>
    </List>
  </div>
</div>
<Highlight code={`
  <List>
    <Button>List item 1</Button>
    <Button iconRight={IconCheck} focused>List item 2</Button>
    <Button>List item 3</Button>
  </List>
`} />

<!-- ------------------------------ -->
<!-- LIST SELECTED ITEM -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <List>
      <Button icon={IconEmpty}>List item 1</Button>
      <Button icon={IconCheck} selected>List item 2</Button>
      <Button icon={IconEmpty}>List item 3</Button>
    </List>
  </div>
</div>
<Highlight code={`
  <List>
    <Button icon={IconEmpty}>List item 1</Button>
    <Button icon={IconCheck} selected>List item 2</Button>
    <Button icon={IconEmpty}>List item 3</Button>
  </List>
`} />

<!-- ------------------------------ -->
<!-- LIST ITEM DIVIDER AND HEADING -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <List>
      <Button>List item 1</Button>
      <Button>List item 2</Button>
      <ListItem divider />
      <ListItem heading label="format" />
      <Button icon={IconBold}>List item 3</Button>
      <Button icon={IconItalic}>List item 4</Button>
    </List>
  </div>
</div>
<Highlight code={`
  <List>
    <Button>List item 1</Button>
    <Button>List item 2</Button>
    <ListItem divider />
    <ListItem heading label="Format" />
    <Button icon={IconBold}>List item 3</Button>
    <Button icon={IconItalic}>List item 4</Button>
  </List>
`} />

<!-- ------------------------------ -->
<!-- LIST SUBMENU -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <List>
      <Button>List item 1</Button>
      <Button>List item 2</Button>
      <Dropdown direction="right">
        <Button slot="trigger" iconRight={IconChevronRight}>More</Button>
        <List>
          <Button>List item A</Button>
          <Button>List item B</Button>
        </List>
      </Dropdown>
    </List>
  </div>
</div>
<Highlight code={`
  <List>
    <Button>List item 1</Button>
    <Button>List item 2</Button>
    <Dropdown direction="right">
      <Button slot="trigger" iconRight={IconChevronRight}>More</Button>
      <List>
        <Button>List item A</Button>
        <Button>List item B</Button>
      </List>
    </Dropdown>
  </List>
`} />

<!-- ------------------------------ -->
<!-- LIST ITEM TEXT -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <List>
      <ListItem>
        <p><strong>Title</strong></p>
        <p>Paragraph</p>
      </ListItem>
      <ListItem>
        <p><strong>Title</strong></p>
        <p>Paragraph</p>
      </ListItem>
      <ListItem>
        <p><strong>Title</strong></p>
        <p>Paragraph</p>
      </ListItem>
    </List>
  </div>
</div>
<Highlight code={`  
`} />

<!-- ------------------------------ -->
<!-- LIST ITEM DIVIDERS -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <List dividers>
      <ListItem>
        <p><strong>Title</strong></p>
        <p>Paragraph</p>
      </ListItem>
      <ListItem>
        <p><strong>Title</strong></p>
        <p>Paragraph</p>
      </ListItem>
      <ListItem>
        <p><strong>Title</strong></p>
        <p>Paragraph</p>
      </ListItem>
    </List>
  </div>
</div>
<Highlight code={`
`} />

<!-- ------------------------------ -->
<!-- LIST TOGGLE GROUP -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <ToggleGroup let:current let:setCurrent current="team">
      <List dividers>
        <ListItem element="button" value="solo" on:click={setCurrent} icon={current == 'solo' ? IconCheck : IconEmpty}>
          <p><strong>Solo</strong></p>
          <small>Our individual plan</small>
        </ListItem>
        <ListItem element="button" value="team" on:click={setCurrent} icon={current == 'team' ? IconCheck : IconEmpty}>
          <p><strong>Team</strong></p>
          <small>For small teams up to 100 people</small>
        </ListItem>
        <ListItem element="button" value="enterprise" on:click={setCurrent} icon={current == 'enterprise' ? IconCheck : IconEmpty}>
          <p><strong>Enterprise</strong></p>
          <small>For large teams with specific needs</small>
        </ListItem>
      </List>
    </ToggleGroup>
  </div>
</div>
<Highlight code={`
`} />
