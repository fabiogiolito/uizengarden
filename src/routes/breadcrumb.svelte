<script>
  import Highlight from "$lib/Highlight.svelte";

  import Breadcrumb from "$lib/Breadcrumb.svelte";
</script>


<h2>Breadcrumbs</h2>

<hr />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Breadcrumb links={[
        { title: 'UIZG', href: "/" },
        { title: 'Components', href: "/" },
        { title: 'Breadcrumb', href: "/breadcrumb" },
      ]}
    />
  </div>
</div>
<Highlight code={`
  <Breadcrumb links={[
      { title: 'UIZG', href: "/" },
      { title: 'Components', href: "/" },
      { title: 'Breadcrumb', href: "/breadcrumb" },
    ]}
  />
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Breadcrumb links={[
        { title: 'UIZG', href: "#uizg" },
        { title: 'Components', href: "#components" },
        { title: 'Breadcrumb', href: "#breadcrumb" },
      ]}
      separator="›"
      current="#breadcrumb"
    />
  </div>
</div>
<Highlight code={`
  <Breadcrumb links={[
      { title: 'UIZG', href: "#uizg" },
      { title: 'Components', href: "#components" },
      { title: 'Breadcrumb', href: "#breadcrumb" },
    ]}
    separator="›"
    current="#breadcrumb"
  />
`} />
