<script setup>
import Logo from './Logo.vue';
import btnDeconnection from '../btnSession/btnDeconnection.vue';
</script>

<template>
  <div id="titre">
    <Logo />
    <btnDeconnection />
  </div>
</template>

<style scoped>
#titre {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 60px;
  padding-left: 1rem;
  width: 100%;
  color: #ff7d86;
}
</style>