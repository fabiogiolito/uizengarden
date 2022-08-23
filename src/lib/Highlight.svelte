<script>
  import Prism from '@magidoc/plugin-svelte-prismjs';
  import 'prism-svelte';

  export let language = "svelte";
  export let code = "";

  export let showLineNumbers = true;
  export let showCopyButton = true;

  $: source = cleanCode(code);

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

<Prism {language} {source} {showLineNumbers} {showCopyButton} />
