<script>
  import { onMount } from "svelte";

  let videoElement;

  onMount(async () => {
    await connectCam();
  });

  async function connectCam() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    videoElement.srcObject = stream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  }
</script>

<style>
  video {
    background-color: black;
    width: 1900px;
    height: auto;
    transform: scale(-1, 1);
  }
</style>

<video bind:this={videoElement} />
