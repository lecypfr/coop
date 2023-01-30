<script setup>
const props = defineProps(['nom'])
</script>

<template>
  <h1>{{ nom }}</h1>
</template>

<style scoped>
h1 {
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 60px;
  margin: 0 calc((1.4rem + .3rem * 2) / 2 + .6rem);
}
</style>