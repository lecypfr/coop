<script setup>
import BtnConnection from '../components/btnSession/btnConnection.vue';
import BtnInscription from '../components/btnSession/btnInscription.vue';

import { onMounted } from 'vue';

import { useSessionStore } from '../stores/session';
import { useConversationStore } from "../stores/conversation";

const session_store = useSessionStore();
const conversation_store = useConversationStore();

const session = reactive({
  ok: true,
})

onMounted(() => {
  session_store.ok().then((reponse) => {
    if (reponse) {
      session.ok = true;
      conversation_store.charger();
    } else {
      session.ok = false;
      conversation_store.vider();
    }
  });
})
</script>


<template>
  <div v-if="!session.ok">
    <BtnConnection />
    <BtnInscription />
  </div>
</template>

<style scoped>
div {
  margin: 1.5rem;
  display: flex;
  gap: 1rem;
}
</style>

