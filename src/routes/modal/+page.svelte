<script>
  import Highlight from "$lib/Highlight.svelte";

  import Modal from "$lib/Modal.svelte";
  import Button from "$lib/Button.svelte";

  let modalOpen = false;
  let modalRef;

  function handleOpenModal() {
    modalOpen = true;
  }
</script>

<h2>Modal</h2>

<hr />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Modal let:openModal let:closeModal>
      <Button slot="trigger" on:click={openModal}>
        Open modal with trigger slot
      </Button>
      <p>Content</p>
      <Button on:click={closeModal}>Close modal</Button>
    </Modal>
  </div>
</div>
<Highlight code={`
  <Modal let:openModal let:closeModal>
    <Button slot="trigger" on:click={openModal}>
      Open modal with trigger slot
    </Button>
    <p>Content</p>
    <Button on:click={closeModal}>Close modal</Button>
  </Modal>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Button on:click={handleOpenModal}>Open modal with external state</Button>
    <Modal bind:open={modalOpen} let:closeModal>
      <p>Content</p>
      <Button on:click={closeModal}>Close modal</Button>
    </Modal>
  </div>
</div>
<Highlight code={`
  <script>
    let modalOpen = false;
    function handleOpenModal() { modalOpen = true; }
  </script>
  <Button on:click={handleOpenModal}>Open modal with external state</Button>
  <Modal bind:open={modalOpen} let:closeModal>
    <p>Content</p>
    <Button on:click={closeModal}>Close modal</Button>
  </Modal>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Button on:click={modalRef.openModal}>Open modal with ref</Button>
    <Modal bind:this={modalRef}>
      <p>Content</p>
      <Button on:click={modalRef.closeModal}>Close modal</Button>
    </Modal>
  </div>
</div>
<Highlight code={`
  <script>
    let modalRef;
  </script>
  <Button on:click={modalRef.openModal}>Open modal</Button>
  <Modal bind:this={modalRef}>
    <p>Content</p>
    <Button on:click={modalRef.closeModal}>Close modal</Button>
  </Modal>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Modal title="My modal" let:openModal >
      <Button slot="trigger" on:click={openModal}>
        Modal with title
      </Button>
      <p>Content</p>
    </Modal>
  </div>
</div>
<Highlight code={`
  <Modal title="My modal" let:openModal >
    <Button slot="trigger" on:click={openModal}>
      Modal with title
    </Button>
    <p>Content</p>
  </Modal>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Modal let:openModal let:closeModal>
      <Button slot="trigger" on:click={openModal}>
        Modal with header and footer
      </Button>
      <div slot="header">My modal</div>
      <p>Content</p>
      <Button slot="footer" on:click={closeModal}>Close modal</Button>
    </Modal>
  </div>
</div>
<Highlight code={`
  <Modal let:openModal let:closeModal>
    <Button slot="trigger" on:click={openModal}>
      Modal with header and footer
    </Button>
    <div slot="header">My modal</div>
    <p>Content</p>
    <Button slot="footer" on:click={closeModal}>Close modal</Button>
  </Modal>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Modal dialog title="Are you sure?" let:openModal let:closeModal>
      <Button slot="trigger" on:click={openModal}>
        Modal dialog
      </Button>
      <div slot="footer">
        <Button on:click={() => { console.log('action'); closeModal(); }}>Yes</Button>
        <Button on:click={closeModal}>No</Button>
      </div>
    </Modal>
  </div>
</div>
<Highlight code={`
  <Modal dialog title="Are you sure?" let:openModal let:closeModal>
    <Button slot="trigger" on:click={openModal}>
      Modal dialog
    </Button>
    <div slot="footer">
      <Button on:click={() => { console.log('action'); closeModal(); }}>Yes</Button>
      <Button on:click={closeModal}>No</Button>
    </div>
  </Modal>
`} />
