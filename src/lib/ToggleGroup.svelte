<script>

  export let current = null;

  function setCurrent(val) {
    if (val?.detail) {
      current = val.detail;
    } else {
      current = val;
    }
  }

</script>

<slot {current} {setCurrent} />
