<script setup>
import { useConversationStore } from '../../stores/conversation';

const conversation_store = useConversationStore();

</script>

<template>
  <div><button class="material-symbols-outlined" @click="conversation_store.supprimer()">delete</button></div>
</template>

<style scoped>
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #ff7d86;
  margin: 1rem;
}
</style>