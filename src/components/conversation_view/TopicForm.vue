<script setup>
import { useConversationStore } from '../../stores/conversation';

const conversation_store = useConversationStore();
</script>

<template>
  <textarea class="topic" v-model="conversation_store.datas.conversation.datas.topic"></textarea>
</template>

<style scoped>
.topic {
  grid-row: 2;
  color: #bcc0c5;
  line-height: 1.5em;
  border: 0;
  border-radius: 1em;
  padding: 0.25em .75em;
  outline: 0;
  margin: 0 1.5em;
}

textarea {
  background-color: #3c4043;
  height: 100%;
}
</style>