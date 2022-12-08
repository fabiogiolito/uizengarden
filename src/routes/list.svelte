<script>
  import Highlight from "$lib/Highlight.svelte";

  import List from "$lib/List.svelte";
  import ListItem from "$lib/ListItem.svelte";

  import Avatar from "$lib/Avatar.svelte";
  import Button from "$lib/Button.svelte";
  import Dropdown from "$lib/Dropdown.svelte";
  import ToggleGroup from "$lib/ToggleGroup.svelte"

  import IconChevronRight from "$lib/icons/IconChevronRight.svelte";
  import IconBold from "$lib/icons/IconBold.svelte";
  import IconItalic from "$lib/icons/IconItalic.svelte";
  import IconAlignLeft from "$lib/icons/IconAlignLeft.svelte";
  import IconAlignCenter from "$lib/icons/IconAlignCenter.svelte";
  import IconAlignRight from "$lib/icons/IconAlignRight.svelte";
  import IconCheck from "$lib/icons/IconCheck.svelte";
  import IconEmpty from "$lib/icons/IconEmpty.svelte";
  import IconSettings from "$lib/icons/IconSettings.svelte";
  import IconLogOut from "$lib/icons/IconLogOut.svelte";
  import IconExternalLink from "$lib/icons/IconExternalLink.svelte";

</script>

<h2>List</h2>

<hr />

<!-- ------------------------------ -->
<!-- LIST -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <List>
      <Button>List item 1</Button>
      <Button>List item 2</Button>
      <Button>List item 3</Button>
    </List>
  </div>
</div>
<Highlight code={`
  <List>
    <Button>List item 1</Button>
    <Button>List item 2</Button>
    <Button>List item 3</Button>
  </List>
`} />

<!-- ------------------------------ -->
<!-- LIST INSET -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <List inset>
      <Button>List item 1</Button>
      <Button>List item 2</Button>
      <Button>List item 3</Button>
    </List>
  </div>
</div>
<Highlight code={`
  <List inset>
    <Button>List item 1</Button>
    <Button>List item 2</Button>
    <Button>List item 3</Button>
  </List>
`} />

<!-- ------------------------------ -->
<!-- LIST DIVIDERS -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <List dividers>
      <Button>List item 1</Button>
      <Button>List item 2</Button>
      <Button>List item 3</Button>
    </List>
  </div>
</div>
<Highlight code={`
  <List dividers>
    <Button>List item 1</Button>
    <Button>List item 2</Button>
    <Button>List item 3</Button>
  </List>
`} />

<!-- ------------------------------ -->
<!-- PROGRAMATIC  -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <List options={[
      { heading: "Links" },
      { text: "Link 1", href: "#1", iconRight: IconExternalLink },
      { text: "Link 2", href: "#2", iconRight: IconExternalLink },
      { divider: true },
      { text: "Button", action: () => alert('clicked button'), class: "btn btn--primary-translucent" },
    ]} />
  </div>
</div>
<Highlight code={`
  <List options={[
    { heading: "Links" },
    { text: "Link 1", href: "#1", iconRight: IconChevronRight },
    { text: "Link 2", href: "#2", iconRight: IconChevronRight },
    { divider: true },
    { text: "Button", action: handleClick, class: "btn btn--primary-translucent" },
  ]} />
`} />

<!-- ------------------------------ -->
<!-- LIST ITEMS -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <List style="width: 320px;">
      <ListItem href="#profile">
        <Avatar slot="icon" initials="UN" />
        <p>User name</p>
        <p><small>@username</small></p>
        <IconChevronRight slot="iconRight" />
      </ListItem>
      <ListItem divider />
      <List>
        <ListItem icon={IconSettings} href="#settings">Settings</ListItem>
        <ListItem icon={IconLogOut} action={() => alert('log out')}>Log out</ListItem>
      </List>
    </List>
  </div>
</div>
<Highlight code={`
  <List>
    <ListItem href="#profile">
      <Avatar slot="icon" initials="UN" />
      <p>User name</p>
      <p><small>@username</small></p>
      <IconChevronRight slot="iconRight" />
    </ListItem>
    <ListItem divider />
    <List>
      <ListItem icon={IconSettings} href="#settings">Settings</ListItem>
      <ListItem icon={IconLogOut} action={handleLogOut}>Log out</ListItem>
    </List>
  </List>
`} />


<!-- ------------------------------ -->
<!-- LIST ROW -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <List row>
      <Button>List item 1</Button>
      <Button>List item 2</Button>
      <Button>List item 3</Button>
    </List>
  </div>
</div>
<Highlight code={`
  <List row>
    <Button>List item 1</Button>
    <Button>List item 2</Button>
    <Button>List item 3</Button>
  </List>
`} />

<!-- ------------------------------ -->
<!-- LIST ROW DIVIDER -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <List row dividers>
      <Button>List item 1</Button>
      <Button>List item 2</Button>
      <Button>List item 3</Button>
    </List>
  </div>
</div>
<Highlight code={`
  <List row dividers>
    <Button>List item 1</Button>
    <Button>List item 2</Button>
    <Button>List item 3</Button>
  </List>
`} />


<!-- ------------------------------ -->
<!-- LIST ROW ADVANCED -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <List row inset>
      <Button toggle icon={IconBold} />
      <Button toggle icon={IconItalic} />
      <ListItem divider />
      <ListItem heading="Align" />
      <ToggleGroup current="Left" let:current let:setCurrent>
        <List row type="secondary">
          <Button value="Left" selected={current == "Left"} on:click={setCurrent} icon={IconAlignLeft} />
          <Button value="Center" selected={current == "Center"} on:click={setCurrent} icon={IconAlignCenter} />
          <Button value="Right" selected={current == "Right"} on:click={setCurrent} icon={IconAlignRight} />
        </List>
      </ToggleGroup>
    </List>
  </div>
</div>
<Highlight code={`
  <List row inset>
    <Button toggle icon={IconBold} />
    <Button toggle icon={IconItalic} />
    <ListItem divider />
    <ListItem heading="Align" />
    <ToggleGroup current="Left" let:current let:setCurrent>
      <List row type="secondary">
        <Button value="Left" selected={current == "Left"} on:click={setCurrent} icon={IconAlignLeft} />
        <Button value="Center" selected={current == "Center"} on:click={setCurrent} icon={IconAlignCenter} />
        <Button value="Right" selected={current == "Right"} on:click={setCurrent} icon={IconAlignRight} />
      </List>
    </ToggleGroup>
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
      <ListItem heading="format" />
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
    <ListItem heading="format" />
    <Button icon={IconBold}>List item 3</Button>
    <Button icon={IconItalic}>List item 4</Button>
  </List>
`} />

<!-- ------------------------------ -->
<!-- LIST SUBMENU -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <List heading="with dropdown">
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
`} />

<!-- ------------------------------ -->
<!-- LIST ITEM DIVIDERS -->
<div class="uizg-preview">
  <div class="uizg-preview__element">
    <List dividers>
      <ListItem>
        <Avatar slot="icon" />
        <p><strong>Title</strong></p>
        <p>Paragraph</p>
      </ListItem>
      <ListItem text="Name" subtext="@username">
        <Avatar slot="icon" />
      </ListItem>
    </List>
  </div>
</div>
<Highlight code={`
  <List dividers>
    <ListItem>
      <Avatar slot="icon" />
      <p><strong>Title</strong></p>
      <p>Paragraph</p>
    </ListItem>
    <ListItem text="Name" subtext="@username">
      <Avatar slot="icon" />
    </ListItem>
  </List>
`} />
