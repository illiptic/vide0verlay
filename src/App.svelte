<script>
  import { onMount } from "svelte";
  import { fade, fly, scale } from "svelte/transition";
  import PannedMap from "./PannedMap.svelte";
  import Camera from "./Camera.svelte";
  import PageStack from "./PageStack.svelte";
  import SonarCorner from "./SonarCorner.svelte";
  import Crown from "./Crown.svelte";
  import Timeline from "./Timeline.svelte";
  import Title from "./Title.svelte";
  import SecondaryTitle from "./SecondaryTitle.svelte";

  export let slides;

  let currentSlideIndex = 0;
  let step = 0;

  $: currentSlide = slides[currentSlideIndex];

  function handleKeydown({ key }) {
    switch (key) {
      case " ":
      case "ArrowDown":
      case "ArrowRight":
        if (currentSlide.steps && step < currentSlide.steps - 1) {
          step += 1;
        } else {
          currentSlideIndex = Math.min(
            slides.length - 1,
            currentSlideIndex + 1
          );
          step = 0;
        }
        break;
      case "ArrowUp":
      case "ArrowLeft":
        if (currentSlide.steps && step > 0) {
          step -= 1;
        } else {
          currentSlideIndex = Math.max(0, currentSlideIndex - 1);
          step = (slides[currentSlideIndex].steps || 1) - 1;
        }
        break;
      default:
      //ignore
    }
  }
</script>

<style>
  main {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
  }

  .wrapper {
    position: relative;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 32px;
  }

  .right {
    position: absolute;
    top: calc(50% - 300px);
    right: 50px;
    width: 450px;
    height: 600px;
  }

  .left {
    position: absolute;
    top: 150px;
    left: 50px;
    width: 30%;
  }

  .illustration {
    position: absolute;
    top: 50px;
    bottom: 50px;
    right: 50px;
    width: 30%;
  }

  .illustration img {
    width: 100%;
  }

  .footer {
    position: absolute;
    bottom: 10px;
    left: 50px;
    right: 50px;
  }

  .pane {
    box-shadow: 0 0 10px 0 black;
    border-radius: 2px;
  }

  .illustration img {
    width: 100%;
  }

  item {
    background-image: linear-gradient(
      to right,
      rgb(108, 88, 57),
      rgba(108, 88, 57, 0)
    );
    padding: 8px;
    margin: 0;
    color: whitesmoke;
    margin-top: 16px;
    font-size: 45px;
    display: block;
  }
</style>

<svelte:window on:keydown={handleKeydown} />

<main>

  <div class="wrapper">
    <Camera />
  </div>

  {#if currentSlide.crown}
    <Crown content={currentSlide.crown} />
  {/if}

  {#if currentSlide.location && currentSlide.map}
    <div class="right pane" transition:fade>
      <PannedMap location={currentSlide.location} map={currentSlide.map} />
    </div>
  {/if}

  {#if currentSlide.illustration}
    <div class="illustration" transition:fade>
      <img
        alt={currentSlide.illustration}
        src="/images/{currentSlide.illustration}" />
    </div>
  {/if}

  {#if currentSlide.pages}
    <div class="right" in:fade={{ delay: 300 }} out:fade>
      <PageStack {step} {...currentSlide} />
    </div>
  {/if}

  <div class="overlay">
    {#each slides as s}
      {#if s === currentSlide}
        {#if currentSlide.title}
          <Title content={currentSlide.title} />
        {/if}

        {#if currentSlide.subTitle}
          <SecondaryTitle content={currentSlide.subTitle} />
        {/if}
      {/if}
    {/each}
  </div>

  {#if currentSlide.items}
    <div class="left">
      {#each currentSlide.items as item, i (item)}
        {#if i < step}
          <item transition:fly={{ x: -100 }}>{item}</item>
        {/if}
      {/each}
    </div>
  {/if}

  <SonarCorner />
  {#if currentSlide.timeline}
    <Timeline step={step} timeline={currentSlide.timeline} />
  {/if}
</main>
