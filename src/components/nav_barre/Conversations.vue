<script setup>
import Titre from './ConversationsTitre.vue';
import OuvrirConversation from './OuvrirConversation.vue';
import Conversation from './Conversation.vue';

import { useConversationStore } from '../../stores/conversation';

const conversation_store = useConversationStore();

</script>

<template>
  <section id="liste_conversations">
    <Titre />
    <OuvrirConversation />
    <Conversation v-for="conversation in conversation_store.datas.conversations" :conversation="conversation" />
  </section>
</template>

<style scoped>

</style>