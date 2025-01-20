import { createApp } from "vue";
import "./style.css";
import "./style/card.css";
import App from "./App.vue";
import router from "./router";
import { cardEffect } from './composable/cardEffect';
// /* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'

// /* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* add icons to the library */
// library.add(...all)

const app = createApp(App);

cardEffect('.card');

// app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount("#app");
