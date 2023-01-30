<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useSessionStore } from '../../stores/session';

const router = useRouter();
const session_store = useSessionStore();

onMounted(() => {
})
</script>

<template>
  <router-link :to="{ name: 'Inscription' }">
    <button>S'INSCRIRE</button>
  </router-link>
</template>

<style scoped>
button {
  background-color: transparent;
  padding: .25rem .5rem;
  line-height: 1.5em;
  border-radius: calc(1em + 2px);
  border: none;
  cursor: pointer;
  color: #ff7d86;
  border: solid 2px #ff7d86;
}
</style>