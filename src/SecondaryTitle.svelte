<script>
import { fly, scale } from "svelte/transition";

export let content;

</script>

<style>
p {
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
  position: absolute;
  top: 20%;
}
</style>

<p class="content" in:scale={{ delay: 300 }} out:fly>
  {@html content}
</p>
