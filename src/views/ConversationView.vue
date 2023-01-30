<script setup>
import Header from '../components/conversation_view/Header.vue';
import HeaderForm from '../components/conversation_view/HeaderForm.vue';
import Main from '../components/conversation_view/Main.vue';
import PostMessage from '../components/conversation_view/PostMessage.vue';

import { reactive } from 'vue';

import { useRoute } from 'vue-router';
import { useSessionStore } from '../stores/session';
import { useConversationStore } from '../stores/conversation';

const route = useRoute();
const session_store = useSessionStore();
const conversation_store = useConversationStore();

let conversation = reactive({
  datas: {},
  messages: [],
})

onMounted(() => {

  session_store.ok().then((reponse) => {
    if (reponse) {
      conversation_store.charger();
      conversation_store.charger(route.params.conversation);
      conversation_store.chargerMessages(route.params.conversation);
    } else {
      conversation_store.vider();
    }
  });
})
</script>

<template>
  <Header v-if="!conversation_store.datas.conversation.edit" />
  <HeaderForm v-else />
  <Main />
  <PostMessage :conversation="conversation.datas" />
</template>


<style scoped>

</style>