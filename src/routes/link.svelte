<script>
  import Link from "$lib/Link.svelte";
</script>


<h2>Link</h2>

<hr />

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <p><Link class="btn btn__label" classCurrent="btn--primary" href="/button">Button docs</Link></p>
    <p><Link class="btn btn__label" classCurrent="btn--primary" href="/dropdown">Dropdpown docs</Link></p>
    <p><Link class="btn btn__label" classCurrent="btn--primary" href="/link">Link docs</Link></p>
  </div>
  <div class="uizg-previewCode">
    {`
<Link class="btn btn__label" classCurrent="btn--primary" href="/button">Button docs</Link>
<Link class="btn btn__label" classCurrent="btn--primary" href="/dropdown">Dropdpown docs</Link>
<Link class="btn btn__label" classCurrent="btn--primary" href="/link">Link docs</Link>
    `}
  </div>
</div>
