<script>

export let content;

</script>

<style>
ball {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  margin: 10px;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  box-shadow: 0 0 8px 0 white, inset 0 0 8px 0 white;
  color: transparent;
  text-shadow: 2px white;
}

ball::after {
  content: " ";
  display: block;
  height: 20px;
  width: 16px;
  box-shadow: inset 0 0 7px 0 white;
  border-radius: 0px 10px 0px 10px / 0px 20px;
  right: 16%;
  top: 20%;
  position: absolute;
}
</style>

<ball in:fade={{ delay: 300 }} out:fade>{content}</ball>
