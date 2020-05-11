import App from "./App.svelte";
import slides from "./slides.js";

const app = new App({
  target: document.body,
  props: {
    slides,
  },
});

export default app;
