<script setup>
import Titre from "./MembresTitre.vue";
import Membre from './Membre.vue';

import { useMembreStore } from '../../stores/membre';

let membres_store = useMembreStore();

onMounted(() => {

  membres_store.charger();

})
</script>

<template>
  <section id="liste_membres">
    <Titre />
    <Membre v-for="membre in membres_store.datas.membres" :membre="membre" />
  </section>
</template>

<style scoped>

</style>
