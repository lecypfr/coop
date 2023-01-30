<script setup>
import Header from "../components/nav_barre/Header.vue";
import Conversations from '../components/nav_barre/Conversations.vue'
import Membres from '../components/nav_barre/Membres.vue'

import { useSessionStore } from '../stores/session';

const session_store = useSessionStore();

</script>

<template>
  <nav class="panel">
    <Header />
    <div>
      <Conversations v-if="session_store.session.ok" />
      <Membres v-if="session_store.session.ok" />
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: #202124;
  border-right: 1px solid #3c4043;
  color: #fff;
}
</style>