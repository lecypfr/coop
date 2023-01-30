<script setup>
import { useConversationStore } from '../../stores/conversation';

const conversation_store = useConversationStore();
</script>

<template>
  <h1 class="label">
    {{ conversation_store.datas.conversation.datas.label }}</h1>
</template>

<style scoped>
.label {
  font-weight: 600;
  font-size: 1.5rem;
  color: #bcc0c5;
  line-height: 2rem;
  border: 0;
  border-radius: 1rem;
  padding: 0.25rem .75rem;
  outline: 0;
  margin: calc((60px - 2.5rem) / 2) 1.5rem;
}

input {
  background-color: #3c4043;
}
</style>