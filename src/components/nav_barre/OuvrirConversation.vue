<script setup>

import { reactive } from 'vue';
import { useConversationStore } from '../../stores/conversation';

let conversation_store = useConversationStore();

let conversation = reactive({
  label: ''
})

function ouvrir() {
  conversation_store.ouvrir(conversation);
  conversation.label = '';
}

</script>

<template>
  <form @submit.prevent="ouvrir()">
    <div>
      <input type="text" name="labelForm" id="labelForm" v-model="conversation.label"
        placeholder="Engager une conversation">
    </div>
    <div v-if="conversation.label != ''">
      <button class="material-symbols-outlined">add</button>
    </div>
  </form>
</template>

<style scoped>
form {
  display: grid;
  margin: .5rem;
  grid-template-columns: auto 1.7em;
  grid-gap: 1em;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #ff7d86;
  font-size: 1.7em;
}

input {
  width: 100%;
  color: #bcc0c5;
  line-height: 1rem;
  border: 0;
  border-radius: .35rem;
  padding: .25rem .5rem;
  outline: 0;
  background-color: #3c4043;
}
</style>
