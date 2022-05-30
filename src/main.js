import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/styles/styles.scss";
import "jquery";
import "popper.js";
import "bootstrap";

createApp(App).use(store).use(router).mount('#app')
