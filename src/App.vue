<script setup>
import NavBarre from "./views/nbView.vue";

</script>

<template>
  <div id="content">

    <NavBarre />

    <main id="conversation">
      <RouterView :key="$route.path" />
    </main>

  </div>
</template>

<style scoped>
#content {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 300px auto;
}

#content main {
  background-color: #292a2d;
  color: #fff;
}

#content main {
  height: 100vh;
  overflow: auto;
}
</style>
