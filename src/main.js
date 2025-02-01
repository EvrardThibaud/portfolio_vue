import { createApp } from "vue";
import "./style.css";
import "./style/card.css";
import "./style/button.css";
import "./style/container.css";
import "./style/box.css";
import App from "./App.vue";
import router from "./router";
import { cardEffect } from './composable/cardEffect';
import { saveData } from "./composable/saveData";

saveData()

const app = createApp(App);

// cardEffect('.card');

app.use(router);
app.mount("#app");
