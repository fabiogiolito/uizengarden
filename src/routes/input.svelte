<script>
  import Input from "$lib/Input.svelte";
  import Button from "$lib/Button.svelte";

  import IconAtSign from "$lib/icons/IconAtSign.svelte";

</script>


<h2>Input</h2>

<hr />

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Input value="Hello world" />
  </div>
  <div class="uizg-previewCode">
    {`
<Input value="Hello world" />
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Input prepend="$" append=".00" placeholder="value" />
  </div>
  <div class="uizg-previewCode">
    {`
<Input prepend="$" append=".00" placeholder="value" />
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Input placeholder="username">
      <IconAtSign slot="prepend" />
      <Button slot="append">Create account</Button>
    </Input>
  </div>
  <div class="uizg-previewCode">
    {`
<Input placeholder="username">
<IconAtSign slot="prepend" />
<Button slot="append">Create account</Button>
</Input>
    `}
  </div>
</div>
