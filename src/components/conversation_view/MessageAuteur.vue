<script setup>

const props = defineProps(['auteur'])

</script>

<template>
  <router-link :to="{ name: 'Membre', params: { membre: auteur.id } }">
    <article class="auteur">{{ auteur.fullname }}</article>
  </router-link>
</template>

<style scoped>
.auteur {
  line-height: 1em;
  border: 0;
  padding: 0.25em .75em;
}
</style>