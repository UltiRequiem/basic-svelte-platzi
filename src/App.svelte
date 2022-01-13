<script>
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import { onMount } from "svelte";

  let literatureClubMembers = [];

  onMount(async () => {
    // Copy of "https://ddlcapi.herokuapp.com/characters", not working because of CORS
    const response = await fetch("/data.json");
    literatureClubMembers = await response.json();
  });
</script>

<main>
  <Header />
  {#each literatureClubMembers as doki}
    <div class="doki_container">
      <h2>
        {doki.name}
      </h2>

      <img src={doki.illustration} alt={`${doki.name} illustration`} />

      <p>
        Age: {doki.age}
      </p>

      {#if doki.birthday}
        <p>
          Birthday: {doki.birthday}
        </p>
      {/if}
      <p>
        Height : {`${doki.concept_height.inches}/${doki.concept_height.cm}cm`}
      </p>

      <p>
        Appears on: {`${doki.appears.join(", ")}.`}
      </p>

      <p>
        Eye Color: {doki.eye_color}
      </p>

      <p>
        Hair Color: {doki.hair_color}
      </p>

      <p>
        Filename: "{doki.filename}"
      </p>
    </div>
  {/each}

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
    margin: 2%;
    text-align: center;
  }

  .doki_container {
    border: 2px solid #0084f6;
    border-radius: 10px;
    margin-top: 2%;
    background-color: #d8bfd8;
  }
</style>
