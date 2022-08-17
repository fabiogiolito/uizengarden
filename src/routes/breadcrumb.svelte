<script>
  import Breadcrumb from "$lib/Breadcrumb.svelte";
</script>


<h2>Breadcrumbs</h2>

<hr />

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Breadcrumb links={[
        { title: 'UIZG', href: "/" },
        { title: 'Components', href: "/" },
        { title: 'Breadcrumb', href: "/breadcrumb" },
      ]}
    />
  </div>
  <div class="uizg-previewCode">
    {`
<Breadcrumb links={[
    { title: 'UIZG', href: "/" },
    { title: 'Components', href: "/" },
    { title: 'Breadcrumb', href: "/breadcrumb" },
  ]}
/>
    `}
  </div>
</div>

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <Breadcrumb links={[
        { title: 'UIZG', href: "#uizg" },
        { title: 'Components', href: "#components" },
        { title: 'Breadcrumb', href: "#breadcrumb" },
      ]}
      separator="›"
      current="#breadcrumb"
    />
  </div>
  <div class="uizg-previewCode">
    {`
<Breadcrumb links={[
    { title: 'UIZG', href: "#uizg" },
    { title: 'Components', href: "#components" },
    { title: 'Breadcrumb', href: "#breadcrumb" },
  ]}
  separator="›"
  current="#breadcrumb"
/>
    `}
  </div>
</div>


