<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

const props = defineProps(['membre'])

</script>

<template>
  <router-link :to="{
    name: 'Membre', params: { membre: membre.id }
  }" :class="{ selected: membre.id == route.params.membre }">
    <h3>{{ membre.fullname }}</h3>
  </router-link>
</template>

<style scoped>
a {
  display: block;
  margin: .5rem;
  padding: .25rem .5rem;
  border-radius: .35rem;
  cursor: pointer;
}

a:hover,
a.selected {
  background-color: #3c4043;
}
</style>