import { createApp } from "vue";
import "./style.css";
import "./style/card.css";
import App from "./App.vue";
import router from "./router";
import { cardEffect } from './composable/cardEffect';


const app = createApp(App);

cardEffect('.card');

app.use(router);
app.mount("#app");
