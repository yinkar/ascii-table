<script>
  import AsciiTable from './lib/AsciiTable.svelte';
</script>

<main>
  <AsciiTable />
</main>

<style>
  :global(html, body) {
    margin: 0;
    padding: 0;
  }
  :global(body) {
    background-color: #111;
    color: #eee;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
