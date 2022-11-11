<template>
  <div id="topnav">
    <router-link :to="{ name: 'about' }">Über mich</router-link>
    <router-link :to="{ name: 'projects' }">Projekte</router-link>
    <router-link :to="{ name: 'contact' }">Kontakt</router-link>
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
  padding-bottom: 1rem;
}

a {
  color: #81a1c1;
  text-align: center;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-size: 1.5rem;
}

a:hover, .router-link-exact-active {
  text-decoration: underline;
}

@media screen and (max-width: 640px) {
  a {
    font-size: 1.4rem;
  }
}
</style>
