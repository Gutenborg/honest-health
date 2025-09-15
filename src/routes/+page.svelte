<script lang="ts">
  const { data } = $props();
  let downloadIsActive = $state(false);

  function downloadDB(id: string) {
    const driveURL = `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t&at=AEz70l59X1M12q8Bkog7AbHbB5QX%3A1742538983895`;
    const response = fetch(driveURL, {
      referrerPolicy: "strict-origin-when-cross-origin",
    });

    console.log(response);
  }
</script>

<!-- Tauri Example -->
<!-- <main class="container">
  <h1>Welcome to Tauri + Svelte</h1>

  <div class="row">
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo vite" alt="Vite Logo" />
    </a>
    <a href="https://tauri.app" target="_blank">
      <img src="/tauri.svg" class="logo tauri" alt="Tauri Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank">
      <img src="/svelte.svg" class="logo svelte-kit" alt="SvelteKit Logo" />
    </a>
  </div>
  <p>Click on the Tauri, Vite, and SvelteKit logos to learn more.</p>

  <form class="row" onsubmit={greet}>
    <input id="greet-input" placeholder="Enter a name..." bind:value={name} />
    <button type="submit">Greet</button>
  </form>
  <p>{greetMsg}</p>
</main> -->

<header>
  <h1 class="title is-1">Honest Health</h1>

  <p class="block">
    We are trying to bring honesty back to American Healthcare.
  </p>
</header>

<main>
  <div class="section">
    <div class="box">
      <div class="columns">
        <div class="column is-narrow">
          <h2 class="is-4 title">Providers</h2>
        </div>

        <div class="column is-narrow">
          <button
            class="button is-success"
            onclick={() => (downloadIsActive = true)}
          >
            Add Provider
          </button>
        </div>
      </div>

      <div class="fixed-grid has-4-cols">
        <ul class="grid">
          {#each data.downloadedProviders as provider}
            <li class="cell">{provider.name}</li>
          {/each}
        </ul>
      </div>
    </div>
  </div>

  <div class={["modal", { "is-active": downloadIsActive }]}>
    <div class="modal-background"></div>
    <div class="modal-content box">
      <h3 class="title is-3">Download Provider Price Lists</h3>

      <ul class="grid">
        {#each data.allProviders as provider}
          <li class="cell">
            {provider.name}
            <button
              class="button is-primary"
              onclick={() => downloadDB(provider.downloadId)}>Download</button
            >
          </li>
        {/each}
      </ul>
    </div>

    <button
      aria-label="close"
      class="modal-close is-large"
      onclick={() => (downloadIsActive = false)}
    ></button>
  </div>
</main>
