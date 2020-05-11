<script>
import { fly } from "svelte/transition";

export let content;

</script>

<style>
h1 {
  background-image: linear-gradient(
    to right,
    rgb(108, 88, 57),
    rgba(108, 88, 57, 0)
  );
  padding: 8px;
  margin: 0;
  color: whitesmoke;
  width: 50%;
  position: absolute;
  font-size: 60px;
}
</style>

<h1
  in:fly={{ delay: 300, x: -100 }}
  out:fly={{ duration: 50, x: -100 }}>
  {content}
</h1>
