<script setup>
import { reactive } from 'vue';
import { useSessionStore } from '../stores/session';

let session_store = useSessionStore();

let membre = reactive({
  fullname: '',
  email: '',
  password: ''
})
</script>

<template>
  <div class="about">
    <h1>S'INSCRIRE</h1>
    <form @submit.prevent="session_store.inscription(membre)">
      <div>
        <label for="pseudoForm">Nom complet ou pseudonyme</label>
        <input type="text" name="pseudoForm" id="pseudoForm" v-model="membre.fullname">
      </div>
      <div>
        <label for="mailForm">Adresse e-mail</label>
        <input type="email" name="mailForm" id="mailForm" autocomplete="username" v-model="membre.email">
      </div>
      <div>
        <label for="mdpForm">Mot de passe</label>
        <input type="password" name="mdpForm" id="mdpForm" autocomplete="current-password" v-model="membre.password">
      </div>
      <button>SE CONNECTER</button>
    </form>
  </div>
</template>

<style>

</style>
