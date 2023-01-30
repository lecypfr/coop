<script setup>
</script>

<template>
  <router-link :to="{ name: 'Connexion' }">
    <button>SE CONNECTER</button>
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
  color: #292a2d;
  background-color: #ff7d86;
}
</style>