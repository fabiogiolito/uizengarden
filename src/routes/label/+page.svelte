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
    <p><Label style="border: 1px solid;">Curabitur suscipit lectus lorem, convallis convallis est blandit quis.</Label></p>
    <br />
    <p><Label style="border: 1px solid; width: 240px;">Curabitur suscipit lectus lorem, convallis convallis est blandit quis.</Label></p>
    <br />
    <p><Label truncate style="border: 1px solid; width: 240px;">Curabitur suscipit lectus lorem, convallis convallis est blandit quis.</Label></p>
  </div>
</div>
<Highlight code={`
  <Label style="border: 1px solid;">...</Label>
  <Label style="border: 1px solid; width: 240px;">...</Label>
  <Label truncate style="border: 1px solid; width: 240px;">...</Label>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Label>Curabitur suscipit lectus lorem, convallis convallis est blandit quis. Nunc sagittis at leo eu faucibus. Maecenas rutrum lorem eros, ut sollicitudin urna blandit vel. Suspendisse accumsan sagittis leo. Quisque sed fermentum sapien, ac euismod ante. Quisque mattis purus a ligula vestibulum, at faucibus felis aliquam. Maecenas vel rhoncus augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc at faucibus magna. Curabitur quis leo ac nisl pretium vehicula et in mi. Nullam feugiat lacus ut ipsum pharetra, quis mollis neque interdum. Mauris maximus malesuada ipsum, vitae congue nibh porta non. Sed porta turpis eget odio porttitor, lobortis fermentum ante consectetur. In hac habitasse platea dictumst. Morbi quis fringilla nibh. Curabitur interdum ac leo sed tristique.</Label>
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
