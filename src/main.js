import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

import App from "./App.vue";
import router from "./router";
import { useSessionStore } from "./stores/session";
import { useConversationStore } from "./stores/conversation";
import "./assets/main.css";

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");
