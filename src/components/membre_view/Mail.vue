<script setup>
const props = defineProps(['mail'])
</script>

<template>
  <p>{{ mail }}</p>
</template>

<style scoped>
p {
  color: #bcc0c5;
  margin: .5rem calc((1.4rem + .3rem * 2) / 2 + .6rem);
}
</style>