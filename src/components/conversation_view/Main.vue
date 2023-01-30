<script setup>
import Message from './Message.vue';

import { useConversationStore } from '../../stores/conversation';

const conversation_store = useConversationStore();
</script>

<template>
  <Message v-for="message in conversation_store.datas.conversation.messages" :message="message" />
</template>

<style scoped>

</style>