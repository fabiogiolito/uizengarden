<script>
  import Highlight from "$lib/Highlight.svelte";

  import Link from "$lib/Link.svelte";
</script>


<h2>Link</h2>

<hr />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <p><Link class="btn btn__label" classCurrent="btn--primary" href="/dropdown">Dropdpown docs</Link></p>
    <p><Link class="btn btn__label" classCurrent="btn--primary" href="/link">Link docs</Link></p>
  </div>
</div>
<Highlight code={`
  <Link class="btn btn__label" classCurrent="btn--primary" href="/link">Link docs</Link>
`} />


<div class="uizg-preview">
  <div class="uizg-preview__element">
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
</div>
<Highlight code={`
  <Link href="/link">
    Link docs
    <span slot="current">(current page)</span>
  </Link>
`} />
