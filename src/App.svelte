<script>
  export let title, src, num;
  import Footer from "./components/Footer.svelte";
</script>

<main>
  <h1>{title}</h1>
  <img {src} alt="Latest xkcd comic" />
  <p>{num}</p>
  <Footer />
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
</style>
