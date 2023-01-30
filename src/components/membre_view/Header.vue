<script setup>
import Nom from './Nom.vue';
import Mail from './Mail.vue';
import DateInscription from './DateInscription.vue';

const props = defineProps(['membre'])
</script>

<template>
  <Nom :nom="membre.fullname" />
  <Mail :mail="membre.email" />
  <DateInscription :created_at="membre.created_at" />
</template>

<style scoped>

</style>