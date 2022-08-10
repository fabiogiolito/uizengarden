<script>
  import Button from "$lib/Button.svelte";
  import Dropdown from "$lib/Dropdown.svelte";
  import Collapsible from "$lib/Collapsible.svelte";
  import Modal from "$lib/Modal.svelte";
  import Text from "$lib/Text.svelte";
  import LoadingIndicator from "$lib/LoadingIndicator.svelte";

  import IconCamera from "$lib/icons/IconCamera.svelte";
  import IconCopy from "$lib/icons/IconCopy.svelte";
  import IconDownloadCloud from "$lib/icons/IconDownloadCloud.svelte";
  import IconCircle from "$lib/icons/IconCircle.svelte";
  import IconChevronDown from "$lib/icons/IconChevronDown.svelte";
  import IconChevronUp from "$lib/icons/IconChevronUp.svelte";

  let modalOpen = false;
  let modalRef;

  function handleOpenModal() {
    modalOpen = true;
  }
</script>

<style>
  .uizg-layout {
    max-width: 800px;
    margin: 40px auto;
  }
  .uizg-component {
    background: rgb(var(--background));
    padding: 2rem;
    border-radius: 1rem;
  }
  .uizg-component h2 {
    font-weight: 600;
    font-size: 1.5rem;
  }
  .uizg-previewArea {
    margin-top: 16px;
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid rgb(var(--foreground));
  }
  .uizg-previewElement {
    background: rgb(var(--background));
    padding: 2rem;
    text-align: center;
  }
  .uizg-previewCode {
    background: rgb(var(--foreground));
    color: rgb(var(--background));
    font-family: monospace;
    white-space: pre-wrap;
  }

</style>

<div class="uizg-layout">

  <!-- ============================== -->
  <!-- Buttons -->
  <div class="uizg-component">

    <h2>Buttons</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button>button</Button>
        <Button href="#link">link</Button>
        <Button element="span">span</Button>
      </div>
      <div class="uizg-previewCode">
        {`
          <Button>Button</Button>
          <Button href="#link">Link</Button>
          <Button element="div">Div</Button>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button>Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </div>
      <div class="uizg-previewCode">
        {`
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button>Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button icon={IconCircle} iconRight={IconCircle} size="xs">Extra Small</Button>
        <Button icon={IconCircle} iconRight={IconCircle} size="sm">Small</Button>
        <Button icon={IconCircle} iconRight={IconCircle}>Medium</Button>
        <Button icon={IconCircle} iconRight={IconCircle} size="lg">Large</Button>
        <Button icon={IconCircle} iconRight={IconCircle} size="xl">Extra Large</Button>
      </div>
      <div class="uizg-previewCode">
        {`
          <Button icon={IconCircle} iconRight={IconCircle} size="xs">Extra Small</Button>
          <Button icon={IconCircle} iconRight={IconCircle} size="sm">Small</Button>
          <Button icon={IconCircle} iconRight={IconCircle}>Medium</Button>
          <Button icon={IconCircle} iconRight={IconCircle} size="lg">Large</Button>
          <Button icon={IconCircle} iconRight={IconCircle} size="xl">Extra Large</Button>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button>Regular</Button>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="primary-translucent">Primary translucent</Button>
        <Button type="shadow">Shadow</Button>
      </div>
      <div class="uizg-previewCode">
        {`
          <Button>Regular</Button>
          <Button type="primary">Primary</Button>
          <Button type="secondary">Secondary</Button>
          <Button type="primary-translucent">Primary translucent</Button>
          <Button type="shadow">Shadow</Button>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button async>With loading</Button>
      </div>
      <div class="uizg-previewCode">
        {`
          <Button async>With loading</Button>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button copy="Hello" icon={IconCopy}>Copy Hello</Button>
      </div>
      <div class="uizg-previewCode">
        {`
          <Button copy="Hello" icon={IconCopy}>Copy Hello</Button>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button
          copyFunc={() => 'Hello with Function'}
          copiedLabel="Success!"
          iconRight={IconCopy}
        >
          Copy Hello with Function
        </Button>
      </div>
      <div class="uizg-previewCode">
        {`
          <Button
            copyFunc={() => 'Hello with Function'}
            copiedLabel="Success!"
            iconRight={IconCopy}
          >
            Copy Hello with Function
          </Button>
        `}
      </div>
    </div>
    
  </div>


  <!-- ============================== -->
  <!-- Dropdown -->
  <div class="uizg-component">

    <h2>Dropdown</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Dropdown>
          <Button slot="trigger" iconRight={IconChevronDown}>Dropdown</Button>
          <p>Dropdown content</p>
        </Dropdown>
      </div>
      <div class="uizg-previewCode">
        {`
          <Dropdown>
            <Button slot="trigger">Dropdown</Button>
            <p>Dropdown menu</p>
          </Dropdown>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Dropdown let:open>
          <Button slot="trigger" iconRight={IconChevronDown} type={open ? 'primary' : null}>Dropdown</Button>
          <p>Dropdown content</p>
        </Dropdown>
      </div>
      <div class="uizg-previewCode">
        {`
          <Dropdown let:open>
            <Button slot="trigger" type={open ? 'primary' : null}>Dropdown</Button>
            <p>Dropdown menu</p>
          </Dropdown>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Dropdown down right>
          <Button slot="trigger">Down right</Button>
          <p>Dropdown menu</p>
        </Dropdown>
        <Dropdown down left>
          <Button slot="trigger">Down left</Button>
          <p>Dropdown menu</p>
        </Dropdown>
        <Dropdown up right>
          <Button slot="trigger">Up right</Button>
          <p>Dropdown menu</p>
        </Dropdown>
        <Dropdown up left>
          <Button slot="trigger">Up left</Button>
          <p>Dropdown menu</p>
        </Dropdown>
      </div>
      <div class="uizg-previewCode">
        {`
          <Dropdown down right>
            <Button slot="trigger">Down right</Button>
            <p>Dropdown menu</p>
          </Dropdown>
          <Dropdown down left>
            <Button slot="trigger">Down left</Button>
            <p>Dropdown menu</p>
          </Dropdown>
          <Dropdown up right>
            <Button slot="trigger">Up right</Button>
            <p>Dropdown menu</p>
          </Dropdown>
          <Dropdown up left>
            <Button slot="trigger">Up left</Button>
            <p>Dropdown menu</p>
          </Dropdown>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Dropdown down right over>
          <Button slot="trigger">Down right</Button>
          <p>Dropdown menu</p>
        </Dropdown>
        <Dropdown down left over>
          <Button slot="trigger">Down left</Button>
          <p>Dropdown menu</p>
        </Dropdown>
        <Dropdown up right over>
          <Button slot="trigger">Up right</Button>
          <p>Dropdown menu</p>
        </Dropdown>
        <Dropdown up left over>
          <Button slot="trigger">Up left</Button>
          <p>Dropdown menu</p>
        </Dropdown>
      </div>
      <div class="uizg-previewCode">
        {`
          <Dropdown down right over>
            <Button slot="trigger">Down right</Button>
            <p>Dropdown menu</p>
          </Dropdown>
          <Dropdown down left over>
            <Button slot="trigger">Down left</Button>
            <p>Dropdown menu</p>
          </Dropdown>
          <Dropdown up right over>
            <Button slot="trigger">Up right</Button>
            <p>Dropdown menu</p>
          </Dropdown>
          <Dropdown up left over>
            <Button slot="trigger">Up left</Button>
            <p>Dropdown menu</p>
          </Dropdown>
        `}
      </div>
    </div>

  </div>

  <!-- ============================== -->
  <!-- Collapsible -->
  <div class="uizg-component">

    <h2>Collapsible</h2>

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

  </div>

  <!-- ============================== -->
  <!-- Modal -->
  <div class="uizg-component">

    <h2>Modal</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button on:click={handleOpenModal}>Open modal</Button>
        <Modal bind:open={modalOpen}>Content</Modal>
      </div>
      <div class="uizg-previewCode">
        {`
          <Button on:click={handleOpenModal}>open modal</Button>
          <Modal bind:open={modalOpen}>Content</Modal>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button on:click={modalRef.openModal}>Open modal</Button>
        <Modal bind:this={modalRef}>
          <p>Content</p>
          <Button on:click={modalRef.closeModal}>Close modal</Button>
        </Modal>
      </div>
      <div class="uizg-previewCode">
        {`
          <Button on:click={modalRef.openModal}>Open modal</Button>
          <Modal bind:this={modalRef}>
            <p>Content</p>
            <Button on:click={modalRef.closeModal}>Close modal</Button>
          </Modal>
        `}
      </div>
    </div>

  </div>


  <!-- ============================== -->
  <!-- Text -->
  <div class="uizg-component">

    <h2>Text</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Text value="Hello world" />
      </div>
      <div class="uizg-previewCode">
        {`
          <Text value="Hello world" />
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Text prepend="https://twitter.com/" placeholder="username" />
      </div>
      <div class="uizg-previewCode">
        {`
          <Text prepend="https://twitter.com/" placeholder="username" />
        `}
      </div>
    </div>

  </div>

  <!-- ============================== -->
  <!-- Text -->
  <div class="uizg-component">

    <h2>Feather Icons</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <IconCamera />
        <IconCopy />
        <IconDownloadCloud />
      </div>
      <div class="uizg-previewCode">
        {`
          <IconCamera />
          <IconCopy />
          <IconDownloadCloud />
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <IconCopy size="sm" />
        <IconCopy />
        <IconCopy size="lg" />
      </div>
      <div class="uizg-previewCode">
        {`
          <IconDownloadCloud size="sm" />
          <IconDownloadCloud />
          <IconDownloadCloud size="lg" />
        `}
      </div>
    </div>

  </div>


</div>
