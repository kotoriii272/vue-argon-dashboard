import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'

const appInstance = createApp(App);
appInstance.provide('$axios', axios)
appInstance.use(store);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.use(ElementPlus)
appInstance.mount("#app");
