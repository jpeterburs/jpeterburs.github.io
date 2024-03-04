<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <Topnav :routes="routes" />

    <div id="component">
      <RouterView />
    </div>

    <MadeWithLove />
  </div>
</template>

<script>
import Topnav from '@/components/Topnav.vue'
import MadeWithLove from '@/components/MadeWithLove.vue'

export default {
  name: 'App',
  components: {
    Topnav,
    MadeWithLove
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

#component {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
}

#component div {
  max-width: 90rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: auto 2rem;
}
</style>
