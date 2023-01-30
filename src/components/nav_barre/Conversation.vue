<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

const props = defineProps(['conversation'])

</script>

<template>
  <router-link :to="{ name: 'Conversation', params: { conversation: conversation.id } }"
    :class="{ selected: conversation.id == route.params.conversation }">
    <h3>{{ conversation.label }}</h3>
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