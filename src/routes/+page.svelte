<script>
  import List from "$lib/List.svelte";
  import ListItem from "$lib/ListItem.svelte";
</script>


<h2>To Do</h2>

<hr />

<List dividers>
  <ListItem>
    <p><code>{'<Token />'}</code> component</p>
    <p><small>prepend, append, delete</small></p>
  </ListItem>
  <ListItem>
    <p>Refactor <code>icon</code> and <code>iconRight</code> as <code>prepend</code> and <code>append</code></p>
    <p><small>Label, Button, Input, ListItem, Select, Slider, Stepper</small></p>
  </ListItem>
  <ListItem>
    <p>Tabs</p>
    <p><small>Animate current indicator, icons and badges</small></p>
  </ListItem>
  <ListItem>
    <p>Input types</p>
    <p><small>color, number, tel, date, datetime-local, time, email, file, month, password, search, url, week</small></p>
  </ListItem>
  <ListItem>
    <p>Input mask</p>
    <p><small>(xxx) xxx xxxx</small></p>
  </ListItem>
  <ListItem>
    <p>Tokenized input</p>
  </ListItem>
  <ListItem>
    <p>Form item</p>
    <p><small>Label, helper, input, error message…</small></p>
  </ListItem>
  <ListItem>
    <p>Input list items</p>
    <p><small>Grouped fields in stack</small></p>
  </ListItem>
  <ListItem>
    <p>List row inside regular List to form a grid</p>
  </ListItem>
  <ListItem>
    <p>Carousel</p>
    <p><small>similar to tabs with next/prev and overflow?</small></p>
  </ListItem>
  <ListItem>
    <p>Select with horizontal options and selected subtitle</p>
    <p><small>eg: emoji picker with current selected emoji description</small></p>
  </ListItem>
  <ListItem>
    <p>Keyboard shortcut</p>
    <p><small>Same as token?</small></p>
  </ListItem>
  <ListItem>
    <p>Divider (hr) with label</p>
  </ListItem>
  <ListItem>
    <p>ListItem with progress bar background</p>
    <p><small>Eg: File upload</small></p>
  </ListItem>
  <ListItem>
    <p>List item with right side dropdown</p>
  </ListItem>
</List>
