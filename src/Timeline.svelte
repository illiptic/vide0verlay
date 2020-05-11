<script>
  import { fly } from "svelte/transition";

  export let step;
  export let timeline;

  let width;

  $: offset = width / 2;
</script>

<style>
  .timeline {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 0px;
    overflow: visible;
    box-shadow: inset 0 0 10px 4px whitesmoke;
    padding: 10px;
    bottom: 10px;
  }

  tick {
    width: 10px;
    height: 20px;
    border-radius: 5px 5px 0 0;
    position: absolute;
    left: calc(50% - 5px);
    margin-top: -39px;
    box-shadow: inset 0 0 5px 0px whitesmoke;
  }
</style>

<div class="timeline" bind:clientWidth={width}>
  {#if step%2 === 0}
    <tick
      in:fly={{ x: offset, opacity: 1 }}
      out:fly={{ x: -offset, opacity: 1 }}
    />
  {:else}
    <tick
      in:fly={{ x: offset, opacity: 1 }}
      out:fly={{ x: -offset, opacity: 1}}
    />
  {/if}
</div>
