<script setup>
import { useSessionStore } from '../../stores/session';

const session_store = useSessionStore();
</script>

<template>
  <div v-if="session_store.session.member"><button class="material-symbols-outlined"
      @click="session_store.deconnexion()">logout</button></div>
</template>

<style scoped>
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #ff7d86;
  margin: 1rem;
}
</style>