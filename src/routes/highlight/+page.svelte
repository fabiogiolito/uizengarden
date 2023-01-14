<script>
  import Highlight from "$lib/Highlight.svelte";
</script>


<h2>Highlight</h2>

<hr />

<Highlight code={`
  <Highlight code={\`
    // Your code here
  \`} />
`} />

<Highlight 
  tabs={[
    { name: "Svelte", code: `<Button />`},
    { name: "HTML", code: `<button>Label</button>`}
  ]}
 />
