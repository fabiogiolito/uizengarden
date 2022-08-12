<script>
  import { slide } from "svelte/transition";

  import Button from "$lib/Button.svelte";
  import Dropdown from "$lib/Dropdown.svelte";
  import Collapsible from "$lib/Collapsible.svelte";
  import Modal from "$lib/Modal.svelte";
  import Input from "$lib/Input.svelte";
  import LoadingIndicator from "$lib/LoadingIndicator.svelte";
  import Select from "$lib/Select.svelte";
  import Checkbox from "$lib/Checkbox.svelte";
  import Tooltip from "$lib/Tooltip.svelte";
  import ToggleGroup from "$lib/ToggleGroup.svelte";

  import IconCamera from "$lib/icons/IconCamera.svelte";
  import IconCopy from "$lib/icons/IconCopy.svelte";
  import IconDownloadCloud from "$lib/icons/IconDownloadCloud.svelte";
  import IconCircle from "$lib/icons/IconCircle.svelte";
  import IconChevronDown from "$lib/icons/IconChevronDown.svelte";
  import IconAtSign from "$lib/icons/IconAtSign.svelte";
  import IconUser from "$lib/icons/IconUser.svelte";
  import IconPenTool from "$lib/icons/IconPenTool.svelte";
  import IconHeart from "$lib/icons/IconHeart.svelte";

  let modalOpen = false;
  let modalRef;

  let currentTab = 1;

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
    font-size: 0.75em;
  }

  .uizg-scrollArea {
    border: 1px solid rgb(var(--foreground));
    height: 100px;
    padding: 50px 0;
    overflow: auto;
  }

</style>

<div class="uizg-layout">

  <!-- ============================== -->
  <!-- Buttons -->
  <div class="uizg-component">

    <h2>Buttons</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button on:click={() => { alert('clicked')}}>button</Button>
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
        <Button toggle let:selected
          on:select={() => console.log('did select')}
          on:unselect={() => console.log('did unselect')}
        >
          {selected ? 'Following' : 'Follow'}
        </Button>
      </div>
      <div class="uizg-previewCode">
        {`
          <Button toggle>Toggle</Button>
          <Button toggle let:selected
            on:select={() => console.log('did select')}
            on:unselect={() => console.log('did unselect')}
          >
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
            <Button slot="trigger" iconRight={IconChevronDown}>Dropdown</Button>
            <p>Dropdown menu</p>
          </Dropdown>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Dropdown let:open>
          <Button slot="trigger" type={open ? 'primary' : 'secondary'}>Dropdown</Button>
          <p>Dropdown content</p>
        </Dropdown>
      </div>
      <div class="uizg-previewCode">
        {`
          <Dropdown let:open>
            <Button slot="trigger" type={open ? 'primary' : 'secondary'}>Dropdown</Button>
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
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
        </Dropdown>
        <Dropdown down left>
          <Button slot="trigger">Down left</Button>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
        </Dropdown>
        <Dropdown up right>
          <Button slot="trigger">Up right</Button>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
        </Dropdown>
        <Dropdown up left>
          <Button slot="trigger">Up left</Button>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
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
          <Button slot="trigger">Down right over</Button>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
        </Dropdown>
        <Dropdown down left over>
          <Button slot="trigger">Down left over</Button>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
        </Dropdown>
        <Dropdown up right over>
          <Button slot="trigger">Up right over</Button>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
        </Dropdown>
        <Dropdown up left over>
          <Button slot="trigger">Up left over</Button>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
        </Dropdown>
      </div>
      <div class="uizg-previewCode">
        {`
          <Dropdown down right over>
            <Button slot="trigger">Down right over</Button>
            <p>Dropdown menu</p>
          </Dropdown>
          <Dropdown down left over>
            <Button slot="trigger">Down left over</Button>
            <p>Dropdown menu</p>
          </Dropdown>
          <Dropdown up right over>
            <Button slot="trigger">Up right over</Button>
            <p>Dropdown menu</p>
          </Dropdown>
          <Dropdown up left over>
            <Button slot="trigger">Up left over</Button>
            <p>Dropdown menu</p>
          </Dropdown>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Dropdown down right side>
          <Button slot="trigger">Down right side</Button>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
        </Dropdown>
        <Dropdown down left side>
          <Button slot="trigger">Down left side</Button>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
        </Dropdown>
        <Dropdown up right side>
          <Button slot="trigger">Up right side</Button>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
        </Dropdown>
        <Dropdown up left side>
          <Button slot="trigger">Up left side</Button>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
          <p>Dropdown menu</p>
        </Dropdown>
      </div>
      <div class="uizg-previewCode">
        {`
          <Dropdown down right side>
            <Button slot="trigger">Down right side</Button>
            <p>Dropdown menu</p>
          </Dropdown>
          <Dropdown down left side>
            <Button slot="trigger">Down left side</Button>
            <p>Dropdown menu</p>
          </Dropdown>
          <Dropdown up right side>
            <Button slot="trigger">Up right side</Button>
            <p>Dropdown menu</p>
          </Dropdown>
          <Dropdown up left side>
            <Button slot="trigger">Up left side</Button>
            <p>Dropdown menu</p>
          </Dropdown>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Dropdown hover>
          <a href="#user-profile" slot="trigger">Hover me</a>
          <p>Hover card</p>
        </Dropdown>
      </div>
      <div class="uizg-previewCode">
        {`
          <Dropdown hover>
            <a href="#user-profile" slot="trigger">Hover me</a>
            <p>Hover card</p>
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

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Collapsible collapsed let:collapsed let:toggleCollapsed>
          <div slot="trigger">
            {#if collapsed}
              <div transition:slide>
                <Button size="xs" on:click={toggleCollapsed}>2 more</Button>
              </div>
            {/if}
          </div>
          <p>Hello one</p>
          <p>Hello two</p>
        </Collapsible>
      </div>
      <div class="uizg-previewCode">
        {`
          <Collapsible collapsed let:collapsed let:toggleCollapsed>
            <div slot="trigger">
              {#if collapsed}
                <div transition:slide>
                  <Button size="xs" on:click={toggleCollapsed}>2 more</Button>
                </div>
              {/if}
            </div>
            <p>Hello one</p>
            <p>Hello two</p>
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
        <Modal let:openModal let:closeModal>
          <Button slot="trigger" on:click={openModal}>
            Open modal with trigger slot
          </Button>
          <p>Content</p>
          <Button on:click={closeModal}>Close modal</Button>
        </Modal>
      </div>
      <div class="uizg-previewCode">
        {`
          <Modal let:openModal let:closeModal>
            <Button slot="trigger" on:click={openModal}>
              Open modal with trigger slot
            </Button>
            <p>Content</p>
            <Button on:click={closeModal}>Close modal</Button>
          </Modal>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button on:click={handleOpenModal}>Open modal with external state</Button>
        <Modal bind:open={modalOpen} let:closeModal>
          <p>Content</p>
          <Button on:click={closeModal}>Close modal</Button>
        </Modal>
      </div>
      <div class="uizg-previewCode">
        {`
          <script>
            let modalOpen = false;
            function handleOpenModal() { modalOpen = true; }
          </script>
          <Button on:click={handleOpenModal}>Open modal with external state</Button>
          <Modal bind:open={modalOpen} let:closeModal>
            <p>Content</p>
            <Button on:click={closeModal}>Close modal</Button>
          </Modal>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Button on:click={modalRef.openModal}>Open modal with ref</Button>
        <Modal bind:this={modalRef}>
          <p>Content</p>
          <Button on:click={modalRef.closeModal}>Close modal</Button>
        </Modal>
      </div>
      <div class="uizg-previewCode">
        {`
          <script>
            let modalRef;
          </script>
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
        <Select options={['one', 'two', 'three']} placeholder="Pick one" />
        <Select options={['one', 'two', 'three']} placeholder="Pick multiple" multiselect />
        <Select options={['one', 'two', 'three']} />
      </div>
      <div class="uizg-previewCode">
        {`
          <Select options={['one', 'two', 'three']} placeholder="Pick one" />
          <Select options={['one', 'two', 'three']} placeholder="Pick multiple" multiselect />
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


  <!-- ============================== -->
  <!-- Tooltip -->
  <div class="uizg-component">

    <h2>Tooltip</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Tooltip text="Hello!">
          Hover me
        </Tooltip>
      </div>
      <div class="uizg-previewCode">
        {`
          <Tooltip text="Hello!">
            Hover me
          </Tooltip>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Tooltip>
          <IconHeart slot="content" />
          Hover me
        </Tooltip>
      </div>
      <div class="uizg-previewCode">
        {`
          <Tooltip>
            <IconHeart slot="content" />
            Hover me
          </Tooltip>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Tooltip direction="up">
          <Button>Tooltip up</Button>
          <div slot="content">
            <p>some tooltip content</p>
            <p>some tooltip content</p>
            <p>some tooltip content</p>
          </div>
        </Tooltip>
        <Tooltip direction="right">
          <Button>Tooltip right</Button>
          <div slot="content">
            <p>some tooltip content</p>
            <p>some tooltip content</p>
            <p>some tooltip content</p>
          </div>
        </Tooltip>
        <Tooltip direction="down">
          <Button>Tooltip down</Button>
          <div slot="content">
            <p>some tooltip content</p>
            <p>some tooltip content</p>
            <p>some tooltip content</p>
          </div>
        </Tooltip>
        <Tooltip direction="left">
          <Button>Tooltip left</Button>
          <div slot="content">
            <p>some tooltip content</p>
            <p>some tooltip content</p>
            <p>some tooltip content</p>
          </div>
        </Tooltip>
      </div>
      <div class="uizg-previewCode">
        {`
          <Tooltip direction="up">
            <Button>Tooltip up</Button>
            <div slot="content">...</div>
          </Tooltip>
          <Tooltip direction="right">
            <Button>Tooltip right</Button>
            <div slot="content">...</div>
          </Tooltip>
          <Tooltip direction="down">
            <Button>Tooltip down</Button>
            <div slot="content">...</div>
          </Tooltip>
          <Tooltip direction="left">
            <Button>Tooltip left</Button>
            <div slot="content">...</div>
          </Tooltip>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Tooltip direction="right" align="center">
          <Button>Vertical Align center</Button>
          <div slot="content">
            <p>some tooltip content</p>
            <p>some tooltip content</p>
            <p>some tooltip content</p>
          </div>
        </Tooltip>
        <Tooltip direction="right" align="top">
          <Button>Vertical Align top</Button>
          <div slot="content">
            <p>some tooltip content</p>
            <p>some tooltip content</p>
            <p>some tooltip content</p>
          </div>
        </Tooltip>
        <Tooltip direction="right" align="bottom">
          <Button>Vertical Align bottom</Button>
          <div slot="content">
            <p>some tooltip content</p>
            <p>some tooltip content</p>
            <p>some tooltip content</p>
          </div>
        </Tooltip>
      </div>
      <div class="uizg-previewCode">
        {`
          <Tooltip direction="right" align="center">
            <Button>Vertical Align center</Button>
            <div slot="content">...</div>
          </Tooltip>
          <Tooltip direction="right" align="top">
            <Button>Vertical Align top</Button>
            <div slot="content">...</div>
          </Tooltip>
          <Tooltip direction="right" align="bottom">
            <Button>Vertical Align bottom</Button>
            <div slot="content">...</div>
          </Tooltip>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <Tooltip align="left">
          <Button>Horizontal align left</Button>
          <div slot="content">
            <p>some tooltip content</p>
            <p>some tooltip content</p>
            <p>some tooltip content</p>
          </div>
        </Tooltip>
        <Tooltip align="center">
          <Button>Horizontal align center</Button>
          <div slot="content">
            <p>some tooltip content</p>
            <p>some tooltip content</p>
            <p>some tooltip content</p>
          </div>
        </Tooltip>
        <Tooltip align="right">
          <Button>Horizontal align right</Button>
          <div slot="content">
            <p>some tooltip content</p>
            <p>some tooltip content</p>
            <p>some tooltip content</p>
          </div>
        </Tooltip>
      </div>
      <div class="uizg-previewCode">
        {`
          <Tooltip align="left">
            <Button>Horizontal align left</Button>
            <div slot="content">...</div>
          </Tooltip>
          <Tooltip align="center">
            <Button>Horizontal align center</Button>
            <div slot="content">...</div>
          </Tooltip>
          <Tooltip align="right">
            <Button>Horizontal align right</Button>
            <div slot="content">...</div>
          </Tooltip>
        `}
      </div>
    </div>

  </div>

  <!-- ============================== -->
  <!-- ToggleGroup -->
  <div class="uizg-component">

    <h2>ToggleGroup</h2>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <ToggleGroup let:current let:setCurrent>
          <p on:click={() => setCurrent(1)}>Item 1 {current == 1 ? '(selected)' : ''}</p>
          <p on:click={() => setCurrent(2)}>Item 2 {current == 2 ? '(selected)' : ''}</p>
          <p on:click={() => setCurrent(3)}>Item 3 {current == 3 ? '(selected)' : ''}</p>
        </ToggleGroup>
      </div>
      <div class="uizg-previewCode">
        {`
          <ToggleGroup let:current let:setCurrent>
            <p on:click={() => setCurrent(1)}>Item 1 {current == 1 ? '(selected)' : ''}</p>
            <p on:click={() => setCurrent(2)}>Item 2 {current == 2 ? '(selected)' : ''}</p>
            <p on:click={() => setCurrent(3)}>Item 3 {current == 3 ? '(selected)' : ''}</p>
          </ToggleGroup>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <ToggleGroup current={2} let:current let:setCurrent>
          <Button value={1} selected={current == 1} on:click={setCurrent}>Tab 1</Button>
          <Button value={2} selected={current == 2} on:click={setCurrent}>Tab 2</Button>
          <Button value={3} selected={current == 3} on:click={setCurrent}>Tab 3</Button>

          <!-- Content logic here -->
          <p>Current Tab is {current}</p>
        </ToggleGroup>
      </div>
      <div class="uizg-previewCode">
        {`
          <ToggleGroup current={2} let:current let:setCurrent>
            <Button value={1} selected={current == 1} on:click={setCurrent}>Tab 1</Button>
            <Button value={2} selected={current == 2} on:click={setCurrent}>Tab 2</Button>
            <Button value={3} selected={current == 3} on:click={setCurrent}>Tab 3</Button>

            <!-- Content logic here -->
            <p>Current Tab is {current}</p>
          </ToggleGroup>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <ToggleGroup bind:current={currentTab} let:current let:setCurrent>
          <Button value={1} selected={current == 1} on:click={setCurrent}>Tab 1</Button>
          <Button value={2} selected={current == 2} on:click={setCurrent}>Tab 2</Button>
          <Button value={3} selected={current == 3} on:click={setCurrent}>Tab 3</Button>
        </ToggleGroup>
        <p>Current Tab with external state is {currentTab}</p>
      </div>
      <div class="uizg-previewCode">
        {`
          <script>
            let currentTab = 1;
          </script>
          <ToggleGroup bind:current={currentTab} let:current let:setCurrent>
            <Button value={1} selected={current == 1} on:click={setCurrent}>Tab 1</Button>
            <Button value={2} selected={current == 2} on:click={setCurrent}>Tab 2</Button>
            <Button value={3} selected={current == 3} on:click={setCurrent}>Tab 3</Button>
          </ToggleGroup>
          <p>Current Tab is {currentTab}</p>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <ToggleGroup current={'Item 2'} let:current let:setCurrent>
          {#each ['Item 1', 'Item 2', 'Item 3'] as option}
            <div><Checkbox value={option} checked={current == option} on:check={setCurrent} label={option} /></div>
          {/each}
        </ToggleGroup>
      </div>
      <div class="uizg-previewCode">
        {`
          <ToggleGroup current={'Item 2'} let:current let:setCurrent>
            {#each ['Item 1', 'Item 2', 'Item 3'] as option}
              <div><Checkbox value={option} checked={current == option} on:check={setCurrent} label={option} /></div>
            {/each}
          </ToggleGroup>
        `}
      </div>
    </div>

    <div class="uizg-previewArea">
      <div class="uizg-previewElement">
        <ToggleGroup current={1} let:current let:setCurrent>
          <Collapsible value={1} collapsed={current != 1} on:expand={setCurrent} title="Item 1">Hello World!</Collapsible>
          <Collapsible value={2} collapsed={current != 2} on:expand={setCurrent} title="Item 2">Hello World!</Collapsible>
          <Collapsible value={3} collapsed={current != 3} on:expand={setCurrent} title="Item 3">Hello World!</Collapsible>
        </ToggleGroup>
      </div>
      <div class="uizg-previewCode">
        {`
        <ToggleGroup current={1} let:current let:setCurrent>
          <Collapsible value={1} collapsed={current != 1} on:expand={setCurrent} title="Item 1">...</Collapsible>
          <Collapsible value={2} collapsed={current != 2} on:expand={setCurrent} title="Item 2">...</Collapsible>
          <Collapsible value={3} collapsed={current != 3} on:expand={setCurrent} title="Item 3">...</Collapsible>
        </ToggleGroup>
        `}
      </div>
    </div>

  </div>


</div>


<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
