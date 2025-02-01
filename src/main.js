import { createApp } from "vue";
import "./style.scss";
import "./style/card.scss";
import "./style/button.scss";
import "./style/input.scss";
import "./style/container.scss";
import "./style/box.scss";
import App from "./App.vue";
import router from "./router";
import { cardEffect } from './composable/cardEffect';
import { saveData } from "./composable/saveData";

saveData()

const app = createApp(App);

// cardEffect('.card');

app.use(router);
app.mount("#app");
