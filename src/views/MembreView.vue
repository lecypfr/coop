<script setup>
import Header from '../components/membre_view/Header.vue';
import { reactive } from 'vue';
import { useMembreStore } from '../stores/membre';
import { useRoute } from 'vue-router';
import { useSessionStore } from '../stores/session';
import { useConversationStore } from '../stores/conversation';

const route = useRoute();

const session_store = useSessionStore();
const conversation_store = useConversationStore();

let membres_store = useMembreStore();

let membre = reactive({
  datas: {},
})

onMounted(() => {
  session_store.ok().then((reponse) => {
    if (reponse) {
      conversation_store.charger();
      membres_store.charger(route.params.membre).then((reponse) => {
        membre.datas = reponse;
      })
    } else {
      conversation_store.vider();
    }
  });
})
</script>

<template>
  <Header :membre="membre.datas" />
</template>

<style scoped>

</style>