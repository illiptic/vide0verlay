<script>

export let content;

</script>

<style>
.crown {
  position: absolute;
  top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 120px;
  color: black;
  font-weight: bold;
  text-shadow: 0 0 10px white;
}
</style>

<div class="crown">{@html content}</div>
