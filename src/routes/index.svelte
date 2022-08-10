<script>
  import Button from "$lib/Button.svelte";
  import Dropdown from "$lib/Dropdown.svelte";
  import Collapsible from "$lib/Collapsible.svelte";
  import Modal from "$lib/Modal.svelte";
  import Input from "$lib/Input.svelte";
  import LoadingIndicator from "$lib/LoadingIndicator.svelte";
  import Select from "$lib/Select.svelte";
  import Checkbox from "$lib/Checkbox.svelte";

  import IconCamera from "$lib/icons/IconCamera.svelte";
  import IconCopy from "$lib/icons/IconCopy.svelte";
  import IconDownloadCloud from "$lib/icons/IconDownloadCloud.svelte";
  import IconCircle from "$lib/icons/IconCircle.svelte";
  import IconChevronDown from "$lib/icons/IconChevronDown.svelte";
  import IconAtSign from "$lib/icons/IconAtSign.svelte";
  import IconUser from "$lib/icons/IconUser.svelte";
  import IconPenTool from "$lib/icons/IconPenTool.svelte";

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

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button toggle>Toggle</Button>
        <Button toggle let:selected>
          {selected ? 'Following' : 'Follow'}
        </Button>
      </div>
      <div class="uizg-previewCode">
        {`
          <Button toggle>Toggle</Button>
          <Button toggle let:selected>
            {selected ? 'Following' : 'Follow'}
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
          <Button slot="trigger" iconRight={IconChevronDown} type={open ? 'primary' : 'secondary'}>Dropdown</Button>
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
  <!-- Input -->
  <div class="uizg-component">

    <h2>Input</h2>

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

  </div>

  <!-- ============================== -->
  <!-- Icons -->
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

  <!-- ============================== -->
  <!-- Loading Indicator -->
  <div class="uizg-component">

    <h2>Loading Indicator</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <LoadingIndicator />
      </div>
      <div class="uizg-previewCode">
        {`
          <LoadingIndicator />
        `}
      </div>
    </div>

  </div>

  <!-- ============================== -->
  <!-- Select -->
  <div class="uizg-component">

    <h2>Select</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Select options={['one', 'two', 'three']} placeholder="Select one" />
        <Select options={['one', 'two', 'three']} placeholder="Select multiple" multiselect />
        <Select options={['one', 'two', 'three']} />
      </div>
      <div class="uizg-previewCode">
        {`
          <Select options={['one', 'two', 'three']} placeholder="Select one" />
          <Select options={['one', 'two', 'three']} placeholder="Select multiple" multiselect />
          <Select options={['one', 'two', 'three']} />
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <!-- Custom option object -->
        <Select
          options={[{name: 'Fabio', emoji: '🦊'},{name: 'James', emoji: '🦁'},{name: 'Jessica', emoji: '🐯'}]}
          labelKey="name"
        />
        <!-- Custom options -->
        <Select
          options={[{name: 'Fabio', emoji: '🦊'},{name: 'James', emoji: '🦁'},{name: 'Jessica', emoji: '🐯'}]}
          labelKey="name"
        >
          <p slot="option" let:option let:isSelected let:isFocused>
            {isFocused ? '› ' : ''}
            {option.emoji} {option.name}
            {isSelected ? '✓ ' : ''}
          </p>
        </Select>
        <!-- Custom dropdown label -->
        <Select
          options={[{name: 'Fabio', emoji: '🦊'},{name: 'James', emoji: '🦁'},{name: 'Jessica', emoji: '🐯'}]}
          labelKey="name"
        >
          <span slot="label" let:selected>{selected[0].emoji} {selected[0].name}</span>
        </Select>
        <!-- Custom dropdown trigger -->
        <Select options={['one', 'two', 'three']}>
          <Button slot="trigger" type="primary" icon={IconUser} let:selected>{selected[0]}</Button>
        </Select>
      </div>
      <div class="uizg-previewCode">
        {`
          <!-- Custom option object -->
          <Select
            options={[{name: 'Fabio', emoji: '🦊'},{name: 'James', emoji: '🦁'},{name: 'Jessica', emoji: '🐯'}]}
            labelKey="name"
          />

          <!-- Custom options -->
          <Select
            options={[{name: 'Fabio', emoji: '🦊'},{name: 'James', emoji: '🦁'},{name: 'Jessica', emoji: '🐯'}]}
            labelKey="name"
          >
            <p slot="option" let:option let:isSelected let:isFocused>
              {isFocused ? '› ' : ''}
              {option.emoji} {option.name}
              {isSelected ? '✓ ' : ''}
            </p>
          </Select>

          <!-- Custom dropdown label -->
          <Select
            options={[{name: 'Fabio', emoji: '🦊'},{name: 'James', emoji: '🦁'},{name: 'Jessica', emoji: '🐯'}]}
            labelKey="name"
          >
            <span slot="label" let:selected>{selected[0].emoji} {selected[0].name}</span>
          </Select>

          <!-- Custom dropdown trigger -->
          <Select options={['one', 'two', 'three']}>
            <Button slot="trigger" type="primary" icon={IconUser} let:selected>{selected[0]}</Button>
          </Select>
        `}
      </div>
    </div>

  </div>


  <!-- ============================== -->
  <!-- Checkbox -->
  <div class="uizg-component">

    <h2>Checkbox</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Checkbox />
      </div>
      <div class="uizg-previewCode">
        {`
          <Checkbox />
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Checkbox label="Checkbox label" />
      </div>
      <div class="uizg-previewCode">
        {`
          <Checkbox label="Checkbox label" />
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Checkbox>
          <p>Custom label</p>
          <small>With slot</small>
        </Checkbox>
      </div>
      <div class="uizg-previewCode">
        {`
          <Checkbox>
            <p>Custom label</p>
            <small>With slot</small>
          </Checkbox>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Checkbox label="Custom checkbox icon" icon={IconPenTool} />
      </div>
      <div class="uizg-previewCode">
        {`
          <Checkbox label="Custom checkbox icon" let:checked>
            <svelte:component slot="checkbox"
              class="icon checkbox__icon"
              this={checked ? IconPenTool : null}
            />
          </Checkbox>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Checkbox label="Custom checkbox icon slot" let:checked>
          <svelte:component slot="checkbox" class="icon checkbox__icon" size="sm" this={checked ? IconPenTool : null} />
        </Checkbox>
      </div>
      <div class="uizg-previewCode">
        {`
          <Checkbox label="Custom checkbox icon" let:checked>
            <svelte:component slot="checkbox"
              class="icon checkbox__icon"
              this={checked ? IconPenTool : null}
            />
          </Checkbox>
        `}
      </div>
    </div>

  </div>


</div>


<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
