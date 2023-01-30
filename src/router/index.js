import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/membre/:membre",
      name: "Membre",
      component: () => import("../views/MembreView.vue"),
    },
    {
      path: "/conversation/:conversation",
      name: "Conversation",
      component: () => import("../views/ConversationView.vue"),
    },
    {
      path: "/se-connecter",
      name: "Connexion",
      component: () => import("../views/SeConnecterView.vue"),
    },
    {
      path: "/s-inscrire",
      name: "Inscription",
      component: () => import("../views/SInscrireView.vue"),
    },
  ],
});

export default router;
