<script setup>

import { reactive } from 'vue';

import { useRoute } from 'vue-router';
import { useConversationStore } from '../../stores/conversation';

const route = useRoute();
const conversation_store = useConversationStore();

const props = defineProps(['conversation'])


let message = reactive({
  contenu: ""
})

function posterMessage() {
  if (message.contenu != "") {
    conversation_store.posterMessage(route.params.conversation, message.contenu);
    message.contenu = ""; h
  }
}
</script>

<template>
  <form @submit.prevent="posterMessage">
    <input class="message" type="text" name="labelForm" id="labelForm" v-model="message.contenu"
      placeholder="Votre message..." autocomplete="off">
    <button class="material-symbols-outlined">send</button>
  </form>
</template>

<style scoped>
.message {
  color: #bcc0c5;
  line-height: 1.5rem;
  border: 0;
  border-radius: 1rem;
  padding: 0.25rem .75rem;
  outline: 0;
}

input {
  background-color: #3c4043;
}

button {
  background-color: transparent;
  color: #ff7d86;
  border: none;
  cursor: pointer;
}

form {
  margin: 1.5rem;
  display: grid;
  grid-template-columns: auto 32px;
  gap: 1em;
}
</style>