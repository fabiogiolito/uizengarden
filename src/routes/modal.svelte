<script>
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

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Modal title="My modal" let:openModal >
      <Button slot="trigger" on:click={openModal}>
        Modal with title
      </Button>
      <p>Content</p>
    </Modal>
  </div>
  <div class="uizg-previewCode">
    {`
<Modal title="My modal" let:openModal >
<Button slot="trigger" on:click={openModal}>
  Modal with title
</Button>
<p>Content</p>
</Modal>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Modal let:openModal let:closeModal>
      <Button slot="trigger" on:click={openModal}>
        Modal with header and footer
      </Button>
      <div slot="header">My modal</div>
      <p>Content</p>
      <Button slot="footer" on:click={closeModal}>Close modal</Button>
    </Modal>
  </div>
  <div class="uizg-previewCode">
    {`
<Modal let:openModal let:closeModal>
<Button slot="trigger" on:click={openModal}>
  Modal with header and footer
</Button>
<div slot="header">My modal</div>
<p>Content</p>
<Button slot="footer" on:click={closeModal}>Close modal</Button>
</Modal>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
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
  <div class="uizg-previewCode">
    {`
<Modal dialog title="Are you sure?" let:openModal let:closeModal>
<Button slot="trigger" on:click={openModal}>
  Modal dialog
</Button>
<div slot="footer">
  <Button on:click={() => { console.log('action'); closeModal(); }}>Yes</Button>
  <Button on:click={closeModal}>No</Button>
</div>
</Modal>
    `}
  </div>
</div>
