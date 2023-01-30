<script setup>
import MessageAuteur from './MessageAuteur.vue';
import MessageContenu from './MessageContenu.vue';

import { useMembreStore } from '../../stores/membre';
import { reactive } from 'vue';

const membre_store = useMembreStore();

const props = defineProps(['message'])

let auteur = reactive({
  datas: {
    id: 0
  },
  OK: false
})

membre_store.charger(props.message.member_id).then((reponse) => {
  auteur.datas = reponse;
  auteur.OK = true
});




</script>

<template>
  <div class="message" v-if="auteur.OK">
    <MessageAuteur :auteur="auteur.datas" />
    <MessageContenu :message="message.message" />
  </div>
</template>

<style scoped>
.message {
  margin: 0.75em 1.5rem;
}
</style>