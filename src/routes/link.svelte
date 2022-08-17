<script>
  import Link from "$lib/Link.svelte";
</script>


<h2>Link</h2>

<hr />

<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <p><Link class="btn btn__label" classCurrent="btn--primary" href="/dropdown">Dropdpown docs</Link></p>
    <p><Link class="btn btn__label" classCurrent="btn--primary" href="/link">Link docs</Link></p>
  </div>
  <div class="uizg-previewCode">
    {`
<Link class="btn btn__label" classCurrent="btn--primary" href="/link">Link docs</Link>
    `}
  </div>
</div>


<div class="uizg-previewArea">
  <div class="uizg-previewElement">
    <p>
      <Link href="/dropdown">
        Dropdpown docs
        <span slot="current">(current page)</span>
      </Link>
    </p>
    <p>
      <Link href="/link">
        Link docs
        <span slot="current">(current page)</span>
      </Link>
    </p>
  </div>
  <div class="uizg-previewCode">
    {`
<Link href="/link">
  Link docs
  <span slot="current">(current page)</span>
</Link>
    `}
  </div>
</div>
