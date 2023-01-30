<script setup>
import Label from './Label.vue';
import Topic from './Topic.vue';
import DateCreation from './DateCreation.vue';
import ButtonEdition from './ButtonEdition.vue';

</script>

<template>
  <header>
    <Label />
    <Topic />
    <DateCreation />
    <ButtonEdition />
  </header>
</template>

<style scoped>
header {
  display: grid;
  grid-template-columns: auto 64px;
  grid-template-rows: 60px 2em 2em;
  column-gap: 1em;
  row-gap: 1em;
}
</style>