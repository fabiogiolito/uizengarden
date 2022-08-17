<script>
  import "../styles/_preflight.css"
  import "../styles/_app.css"
</script>

<div class="uizg-columns">
  <div class="uizg-sidebar">
    <div class="uizg-sidebar-content">
      <h1>
        <a href="/">UIZG</a>
      </h1>
      <br />
      <h4>Components</h4>
      <ul>
        <li><a href="/button">Button</a></li>
        <li><a href="/dropdown">Dropdown</a></li>
        <li><a href="/collapsible">Collapsible</a></li>
        <li><a href="/modal">Modal</a></li>
        <li><a href="/input">Input</a></li>
        <li><a href="/icons">Icons</a></li>
        <li><a href="/loading-indicator">Loading indicator</a></li>
        <li><a href="/select">Select</a></li>
        <li><a href="/checkbox">Checkbox</a></li>
        <li><a href="/tooltip">Tooltip</a></li>
        <li><a href="/toggle-group">ToggleGroup</a></li>
        <li><a href="/slider">Slider</a></li>
      </ul>
    </div>
  </div>
  <div class="uizg-container">
    <slot />
  </div>
</div>

<div id="teleport-container" />
