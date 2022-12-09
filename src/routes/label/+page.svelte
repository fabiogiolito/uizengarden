<script>
  import Highlight from "$lib/Highlight.svelte";

  import Label from "$lib/Label.svelte";

  import Checkbox from "$lib/Checkbox.svelte";
  import IconCoffee from "$lib/icons/IconCoffee.svelte";
  import IconHash from "$lib/icons/IconHash.svelte";
  import IconMenu from "$lib/icons/IconMenu.svelte";

</script>

<h2>Label</h2>

<hr />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <p><Label>This is some text</Label></p>
    <p><Label text="This is using a text prop" /></p>
    <p><Label text="This is using a text prop" subtext="and subtext" /></p>
  </div>
</div>
<Highlight code={`
  <p><Label>This is some text</Label></p>
  <p><Label text="This is using a text prop" /></p>
  <p><Label text="This is using a text prop" subtext="and subtext" /></p>
`} />


<div class="uizg-preview">
  <div class="uizg-preview__element">
    <p><Label icon={IconMenu}>Icon to the left</Label></p>
    <p><Label iconRight={IconMenu}>Icon to the right</Label></p>
  </div>
</div>
<Highlight code={`
  <p><Label icon={IconMenu}>Icon to the left</Label></p>
  <p><Label iconRight={IconMenu}>Icon to the right</Label></p>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <h1><Label icon={IconHash}>This label is in a header</Label></h1>
  </div>
</div>
<Highlight code={`
  <h1><Label icon={IconHash}>This label is in a header</Label></h1>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <p>
      <Label element="label" text="Using icon slots">
        <Checkbox slot="iconLeft" />
        <IconCoffee slot="iconRight" />
      </Label>
    </p>
  </div>
</div>
<Highlight code={`
  <Label element="label" text="Using icon slots">
    <Checkbox slot="iconLeft" />
    <IconCoffee slot="iconRight" />
  </Label>
`} />
