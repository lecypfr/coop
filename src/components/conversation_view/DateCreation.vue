<script setup>
import { useConversationStore } from '../../stores/conversation';

const conversation_store = useConversationStore();
</script>

<template>
  <p class="date">{{ conversation_store.datas.conversation.datas.created_at }}</p>
</template>

<style scoped>
.date {
  grid-row: 3;
  color: #bcc0c5;
  line-height: 1.5em;
  border: 0;
  border-radius: 1em;
  padding: 0.25em .75em;
  outline: 0;
  margin: 0 1.5em;
}
</style>