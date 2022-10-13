import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.directive("resize", (el, binding) => {
  const onResizeCallback = binding.value;
  window.addEventListener("resize", () => {
    onResizeCallback(window.innerWidth);
  });
});

app.use(store).use(router).mount("#app");
