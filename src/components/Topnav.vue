<template>
  <div id="topnav">
    <router-link to="/">Über mich</router-link>
    <router-link to="/projects">Projekte</router-link>
    <router-link to="/contact">Kontakt</router-link>
  </div>
</template>

<script>
export default {
  name: 'topnav'
}
</script>

<style scoped>
#topnav {
  overflow: hidden;
  text-align: center;
}

a {
  color: #81a1c1;
  text-align: center;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-size: 1.5em;
}

a:hover, .router-link-exact-active {
  text-decoration: underline;
}
</style>
