<script setup>
import LabelForm from './LabelForm.vue';
import TopicForm from './TopicForm.vue';
import DateCreation from './DateCreation.vue';
import ButtonEdition from './ButtonEdition.vue';
import ButtonSuppression from './ButtonSuppression.vue';

import { useConversationStore } from '../../stores/conversation';

const conversation_store = useConversationStore();

</script>

<template>
  <header>
    <form @submit.prevent="conversation_store.editer()">
      <LabelForm />
      <TopicForm />
      <DateCreation />
      <ButtonEdition />
      <ButtonSuppression />
    </form>
  </header>
</template>

<style scoped>
header form {
  display: grid;
  grid-template-columns: auto 64px;
  grid-template-rows: 60px 6em 2em;
  column-gap: 1em;
  row-gap: 1em;
  margin: 0;
}
</style>