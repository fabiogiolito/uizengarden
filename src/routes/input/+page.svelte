<script>
  import Highlight from "$lib/Highlight.svelte";

  import Input from "$lib/Input.svelte";
  import Button from "$lib/Button.svelte";

  import IconAtSign from "$lib/icons/IconAtSign.svelte";
  import IconCheck from "$lib/icons/IconCheck.svelte";

</script>


<h2>Input</h2>

<hr />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Input value="Hello world" />
  </div>
</div>
<Highlight code={`
  <Input value="Hello world" />
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Input placeholder="username" value="JackSparrow" icon={IconAtSign} iconRight={IconCheck} />
  </div>
</div>
<Highlight code={`
  <Input placeholder="username" value="JackSparrow" icon={IconAtSign} iconRight={IconCheck} />
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Input prepend="$" append=".00" placeholder="value" />
  </div>
</div>
<Highlight code={`
  <Input prepend="$" append=".00" placeholder="value" />
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Input placeholder="username">
      <IconAtSign slot="prepend" class="input__segment" />
      <Button slot="append" size="sm" type="secondary">Join</Button>
    </Input> 
  </div>
</div>
<Highlight code={`
  <Input placeholder="username">
    <IconAtSign slot="prepend" class="input__segment" />
    <Button slot="append" size="sm" type="secondary">Join</Button>
  </Input> 
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Input multiline value="Curabitur suscipit lectus lorem, convallis convallis est blandit quis. Nunc sagittis at leo eu faucibus. Maecenas rutrum lorem eros, ut sollicitudin urna blandit vel." style="max-width: 200px;" />
  </div>
</div>
<Highlight code={`
  <Input multiline value="..." style="max-width: 200px;" />
`} />
