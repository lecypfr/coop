<script setup>
import { useConversationStore } from '../../stores/conversation';

const conversation_store = useConversationStore();


function ouvrirEditionConversation() {
  conversation_store.datas.conversation.edit = true;
}
function validerEditionConversation() {
  conversation_store.editer();
}
</script>

<template>
  <div v-if="!conversation_store.datas.conversation.edit"><button class="material-symbols-outlined"
      @click="ouvrirEditionConversation()">edit</button></div>
  <div v-else><button class="material-symbols-outlined" @click="validerEditionConversation()">check</button></div>
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