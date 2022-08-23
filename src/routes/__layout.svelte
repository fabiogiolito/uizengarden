<script>
  import "../styles/_preflight.css"
  import "../styles/_prism.css"
  import "../styles/_app.css"

  import Link from "$lib/Link.svelte";
</script>

<div class="uizg-columns">
  <div class="uizg-sidebar">
    <div class="uizg-sidebar__content">
      <h1><a href="/">UIZG</a></h1>

      <hr />

      <h4>Components</h4>
      <ul>
        <li><Link href="/button">Button</Link></li>
        <li><Link href="/dropdown">Dropdown</Link></li>
        <li><Link href="/collapsible">Collapsible</Link></li>
        <li><Link href="/modal">Modal</Link></li>
        <li><Link href="/input">Input</Link></li>
        <li><Link href="/icons">Icons</Link></li>
        <li><Link href="/loading-indicator">Loading indicator</Link></li>
        <li><Link href="/select">Select</Link></li>
        <li><Link href="/checkbox">Checkbox</Link></li>
        <li><Link href="/tooltip">Tooltip</Link></li>
        <li><Link href="/toggle-group">ToggleGroup</Link></li>
        <li><Link href="/slider">Slider</Link></li>
        <li><Link href="/link">Link</Link></li>
        <li><Link href="/breadcrumb">Breadcrumb</Link></li>
        <li><Link href="/highlight">Highlight</Link></li>
      </ul>

      <hr />

      <h4>Styles</h4>
      <ul>
      </ul>
    </div>
  </div>
  <div class="uizg-container">
    <slot />
  </div>
</div>

<div id="teleport-container" />
