<script>
  export let pages;
  export let step;
  export let steps;

  $: stack = pages.slice().reverse();
</script>

<style>
  .page {
    position: absolute;
    background-color: whitesmoke;
    color: black;
    width: 100%;
    height: 100%;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page img {
    width: 100%;
  }
</style>

{#each stack as page, i (page)}
  {#if i < steps - step}
    <div class="page" style="transform: rotate({(i % 2 ? -1 : 1) * 2 * i}deg)">
      <img alt={page} src="/images/{page}" />
    </div>
  {/if}
{/each}
