<script>
  import Prism from '@magidoc/plugin-svelte-prismjs';
  import 'prism-svelte';

  import Button from "$lib/Button.svelte";
  import ToggleGroup from "$lib/ToggleGroup.svelte";

  export let language = "svelte";
  export let code = "";
  export let tabs = [];

  export let showLineNumbers = true;
  export let showCopyButton = true;

  // Tabs state
  let toggleGroupCurrent = tabs[0]?.name;

  // ==================================

  function cleanCode(code) {
    code = code.replace(/\t/, '  '); // replace tabs with 2 spaces
    code = code.replace(/\s*\n+/, ''); // remove first empty line

    // find how many spaces before first character
    const leadingSpaces = code.match(/^\s+/); 
    if (leadingSpaces) {
      let exp = new RegExp(`^\\s{${leadingSpaces[0].length}}`, "gm"); // Build regex
      code = code.replace(exp, ''); // remove spaces from beginning of each line
    }

    return code.trim();
  }

</script>

<div class="highlight">
  {#if tabs.length}

  <ToggleGroup bind:current={toggleGroupCurrent} let:setCurrent>
    
    <!-- Tabs -->
    <!-- TODO: Replace with actual tabs component -->
    <div class="highlight__tabs">
      {#each tabs as tab}
        <Button size="sm" type={toggleGroupCurrent == tab.name ? "primary" : "secondary"}
          value={tab.name}
          on:click={setCurrent}
        >
          {tab.name}
        </Button>
      {/each}
    </div>

    <!-- Content -->
    {#each tabs as tab}
      {#if toggleGroupCurrent == tab.name}
        <Prism {language} source={cleanCode(tab.code)} {showLineNumbers} {showCopyButton} />
      {/if}
    {/each}
  </ToggleGroup>


  {:else if code}
    <Prism {language} source={cleanCode(code)} {showLineNumbers} {showCopyButton} />
  {/if}
</div>
