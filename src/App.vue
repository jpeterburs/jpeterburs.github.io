<template>
  <div id="app">
    <topnav :routes="routes" />

    <div id="component">
      <router-view />
    </div>

    <made-with-love />
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
#app {
  font-family: Arial, Verdana, Helvetica;
  color: #2E3837;
}

#component {
  margin: 1rem 20%;
}
</style>
