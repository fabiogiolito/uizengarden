<script>
  import Highlight from "$lib/Highlight.svelte";
  
  import Dropdown from "$lib/Dropdown.svelte";
  import Button from "$lib/Button.svelte";
  import List from "$lib/List.svelte";

  import IconChevronDown from "$lib/icons/IconChevronDown.svelte";
  import IconChevronRight from "$lib/icons/IconChevronRight.svelte";
  import IconX from "$lib/icons/IconX.svelte";

</script>


<h2>Dropdown</h2>

<hr />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Dropdown>
      <Button slot="trigger" iconRight={IconChevronDown}>Dropdown</Button>
      <List>
        <Button label="Option 1" />
        <Button label="Option 2" />
        <Dropdown direction="right">
          <Button slot="trigger" iconRight={IconChevronRight}>More</Button>
          <List>
            <Button label="Option 3" />
            <Button label="Option 4" />
          </List>
        </Dropdown>
      </List>
    </Dropdown>
  </div>
</div>
<Highlight code={`
  <Dropdown>
    <Button slot="trigger" iconRight={IconChevronDown}>Dropdown</Button>
    <List>
      <Button label="Option 1" />
      <Button label="Option 2" />
      <Dropdown direction="right">
        <Button slot="trigger" iconRight={IconChevronRight}>More</Button>
        <List>
          <Button label="Option 3" />
          <Button label="Option 4" />
        </List>
      </Dropdown>
    </List>
  </Dropdown>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Dropdown let:open>
      <Button slot="trigger" type={open ? 'primary' : 'secondary'}>Dropdown</Button>
      <div style="padding: 1em;">Dropdowns can have any content</div>
    </Dropdown>
  </div>
</div>
<Highlight code={`
  <Dropdown let:open>
    <Button slot="trigger" type={open ? 'primary' : 'secondary'}>Dropdown</Button>
    <div style="padding: 1em;">Dropdowns can have any content</div>
  </Dropdown>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Dropdown direction="down" align="left">
      <Button slot="trigger">Down, Align left</Button>
      <List>
        <List>
          <Button label="Option 1" />
          <Button label="Option 2" />
        </List>
      </List>
    </Dropdown>
    <Dropdown direction="down" align="right">
      <Button slot="trigger">Down, Align right</Button>
      <List>
        <List>
          <Button label="Option 1" />
          <Button label="Option 2" />
        </List>
      </List>
    </Dropdown>
    <Dropdown direction="up" align="left">
      <Button slot="trigger">Up, align left</Button>
      <List>
        <Button label="Option 1" />
        <Button label="Option 2" />
      </List>
    </Dropdown>
    <Dropdown direction="up" align="right">
      <Button slot="trigger">Up, align right</Button>
      <List>
        <Button label="Option 1" />
        <Button label="Option 2" />
      </List>
    </Dropdown>
  </div>
</div>
<Highlight code={`
  <Dropdown direction="down" align="left">
      <Button slot="trigger">Down, Align left</Button>
      <List>...</List>
    </Dropdown>
    <Dropdown direction="down" align="right">
      <Button slot="trigger">Down, Align right</Button>
      <List>...</List>
    </Dropdown>
    <Dropdown direction="up" align="left">
      <Button slot="trigger">Up, align left</Button>
      <List>...</List>
    </Dropdown>
    <Dropdown direction="up" align="right">
      <Button slot="trigger">Up, align right</Button>
      <List>...</List>
    </Dropdown>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Dropdown direction="right" align="top">
      <Button slot="trigger">Right, Align top</Button>
      <List>
        <Button label="Option 1" />
        <Button label="Option 2" />
      </List>
    </Dropdown>
    <Dropdown direction="right" align="center">
      <Button slot="trigger">Right, Align center</Button>
      <List>
        <Button label="Option 1" />
        <Button label="Option 2" />
      </List>
    </Dropdown>
    <Dropdown direction="right" align="bottom">
      <Button slot="trigger">Right, align bottom</Button>
      <List>
        <Button label="Option 1" />
        <Button label="Option 2" />
      </List>
    </Dropdown>
  </div>
</div>
<Highlight code={`
  <Dropdown direction="right" align="top">
    <Button slot="trigger">Right, Align top</Button>
    <List>...</List>
  </Dropdown>
  <Dropdown direction="right" align="center">
    <Button slot="trigger">Right, Align center</Button>
    <List>...</List>
  </Dropdown>
  <Dropdown direction="right" align="bottom">
    <Button slot="trigger">Right, align bottom</Button>
    <List>...</List>
  </Dropdown>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Dropdown direction="left" align="top">
      <Button slot="trigger">Left, Align top</Button>
      <List>
        <Button label="Option 1" />
        <Button label="Option 2" />
      </List>
    </Dropdown>
    <Dropdown direction="left" align="center">
      <Button slot="trigger">Left, Align center</Button>
      <List>
        <Button label="Option 1" />
        <Button label="Option 2" />
      </List>
    </Dropdown>
    <Dropdown direction="left" align="bottom">
      <Button slot="trigger">Left, align bottom</Button>
      <List>
        <Button label="Option 1" />
        <Button label="Option 2" />
      </List>
    </Dropdown>
  </div>
</div>
<Highlight code={`
  <Dropdown direction="left" align="top">
    <Button slot="trigger">Left, Align top</Button>
    <List>...</List>
  </Dropdown>
  <Dropdown direction="left" align="center">
    <Button slot="trigger">Left, Align center</Button>
    <List>...</List>
  </Dropdown>
  <Dropdown direction="left" align="bottom">
    <Button slot="trigger">Left, align bottom</Button>
    <List>...</List>
  </Dropdown>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Dropdown over direction="down" align="left">
      <Button slot="trigger">Over down</Button>
      <List>
        <Button label="Option 1" />
        <Button label="Option 2" />
      </List>
    </Dropdown>
    <Dropdown over direction="up" align="left">
      <Button slot="trigger">Over up</Button>
      <List>
        <Button label="Option 1" />
        <Button label="Option 2" />
      </List>
    </Dropdown>
    <Dropdown over direction="right" align="top">
      <Button slot="trigger">Over right</Button>
      <List>
        <Button label="Option 1" />
        <Button label="Option 2" />
      </List>
    </Dropdown>
    <Dropdown over direction="left" align="top">
      <Button slot="trigger">Over left</Button>
      <List>
        <Button label="Option 1" />
        <Button label="Option 2" />
      </List>
    </Dropdown>
  </div>
</div>
<Highlight code={`
  <Dropdown over direction="down" align="left">
    <Button slot="trigger">Over down</Button>
    <List>...</List>
  </Dropdown>
  <Dropdown over direction="up" align="left">
    <Button slot="trigger">Over up</Button>
    <List>...</List>
  </Dropdown>
  <Dropdown over direction="right" align="top">
    <Button slot="trigger">Over right</Button>
    <List>...</List>
  </Dropdown>
  <Dropdown over direction="left" align="top">
    <Button slot="trigger">Over left</Button>
    <List>...</List>
  </Dropdown>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Dropdown hover>
      <Button slot="trigger">Hover me</Button>
      <div style="padding: 1em;">
        <p>User name</p>
        <p><small>@username</small></p>
      </div>
    </Dropdown>
    <Dropdown hover hoverDelay={1000}>
      <Button slot="trigger">Hover me for 1s</Button>
      <div style="padding: 1em;">
        <p>User name</p>
        <p><small>@username</small></p>
      </div>
    </Dropdown>
  </div>
</div>
<Highlight code={`
  <Dropdown hover>
    <Button slot="trigger">Hover me</Button>
    <div style="padding: 1em;">
      <p>User name</p>
      <p><small>@username</small></p>
    </div>
  </Dropdown>
  <Dropdown hover hoverDelay={1000}>
    <Button slot="trigger">Hover me for 1s</Button>
    <div style="padding: 1em;">
      <p>User name</p>
      <p><small>@username</small></p>
    </div>
  </Dropdown>
`} />
