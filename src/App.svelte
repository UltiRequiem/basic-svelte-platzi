<script>
  export let title, src, num;
</script>

<main>
  <h1>{title}</h1>
  <img {src} alt="Latest xkcd comic" />
  <p>{num}</p>

  <footer>
    <p>
      <a href="https://github.com/UltiRequiem"
        >Eliaz Bobadilla (a.k.a UltiRequiem)</a
      >
    </p>
  </footer>
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
    margin: 10%;
  }

  footer {
    margin-top: 100px;
    bottom: 0;
  }
</style>
