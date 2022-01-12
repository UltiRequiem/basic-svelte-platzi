<script>
  export let name;
</script>

<main>
  <h1>Hello</h1>
  <p />
</main>

<style>
  :global(body) {
    background-color: #f2eee2;
    color: #0084f6;
  }

  :global(:root) {
    --theme-color: purple;
  }

  p {
    color: var(--theme-color);
    font-size: 22px;
  }

  main {
    text-align: center;
  }
</style>
