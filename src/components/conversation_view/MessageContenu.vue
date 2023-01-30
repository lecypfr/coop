<script setup>


const props = defineProps(['message'])
</script>

<template>
  <article class="messageContenu">{{ message }}</article>
</template>

<style scoped>
.messageContenu {
  line-height: 1.5em;
  border: 0;
  border-radius: 1em;
  padding: 0.25em .75em;
  outline: 0;
  background-color: #3c4043;
}
</style>