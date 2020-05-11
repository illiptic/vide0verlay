<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { fade } from "svelte/transition";

  const offsetX = tweened(0, {
    duration: 1000,
    easing: cubicOut
  });
  const offsetY = tweened(0, {
    duration: 1000,
    easing: cubicOut
  });

  export let location;
  export let map;

  let height, width;

  $: $offsetX = location && width ? location[0] - width / 2 : 0;
  $: $offsetY = location && height ? location[1] - height / 2 : 0;
  $: containerStyle = `
    background-image: url("/images/${map}");
    background-size: ${$offsetX ? 2400 : width}px;
    background-position: -${$offsetX}px -${$offsetY}px ;"
  `
</script>

<style>
  .map-container {
    width: 100%;
    height: 100%;
    background-color: black;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 24px 8px whitesmoke;
    transition: background-size 1s cubic-bezier(0, 1, 0.3, 1);
  }
</style>

<div
  class="map-container"
  bind:clientHeight={height}
  bind:clientWidth={width}
  style={containerStyle} />
