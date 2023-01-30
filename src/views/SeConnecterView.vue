<script setup>
import { reactive } from 'vue';
import { useSessionStore } from '../stores/session';
import BtnInscription from '../components/btnSession/btnInscription.vue';

let session_store = useSessionStore();

let membre = reactive({
  email: '',
  password: ''
})

</script>

<template>
  <h1>SE CONNECTER</h1>
  <form @submit.prevent="session_store.connexion(membre)">
    <div>
      <label for="mailForm">Adresse e-mail</label>
      <input type="email" name="mailForm" id="mailForm" autocomplete="username" v-model="membre.email">
    </div>
    <div>
      <label for="mdpForm">Mot de passe</label>
      <input type="password" name="mdpForm" id="mdpForm" autocomplete="current-password" v-model="membre.password">
    </div>
    <div><button>SE CONNECTER</button></div>
  </form>
</template>

<style>
form {
  margin: 1.5rem;
}

form>div {
  margin-bottom: 1rem;
}

button {
  background-color: transparent;
  padding: .25rem .5rem;
  line-height: 1.5em;
  border-radius: calc(1em + 2px);
  border: none;
  cursor: pointer;
  color: #292a2d;
  background-color: #ff7d86;
}

input {
  width: 100%;
  color: #bcc0c5;
  line-height: 1rem;
  border: 0;
  border-radius: .35rem;
  padding: .25rem .5rem;
  outline: 0;
  background-color: #3c4043;
}

h1 {
  font-weight: 600;
  font-size: 1.5rem;
  color: #bcc0c5;
  line-height: 2rem;
  border: 0;
  border-radius: 1rem;
  padding: 0.25rem .75rem;
  outline: 0;
  margin: calc((60px - 2.5rem) / 2) 1.5rem;
}
</style>
