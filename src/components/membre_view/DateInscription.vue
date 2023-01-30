<script setup>
const props = defineProps(['created_at'])
</script>

<template>
  <p>{{ created_at }}</p>
</template>

<style scoped>
p {
  color: #bcc0c5;
  margin: .5rem calc((1.4rem + .3rem * 2) / 2 + .6rem);
}
</style>