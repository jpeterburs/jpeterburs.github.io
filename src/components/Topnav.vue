<template>
  <div id="topnav">
    <div class="navbar">
      <router-link :to="{ name: 'about' }">Über mich</router-link>
      <router-link :to="{ name: 'projects' }">Projekte</router-link>
      <router-link :to="{ name: 'contact' }">Kontakt</router-link>

      <a href="javascript:void(0);" class="icon" v-on:click="toggleTopbar()">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topnav',
  methods: {
    toggleTopbar: function () {
      const topnav = document.querySelector('#topnav')

      if (topnav.className === 'responsive') {
        topnav.className = ''
      } else {
        topnav.className = 'responsive'
      }
    }
  }
}
</script>

<style scoped>
#topnav {
  margin-bottom: 4rem;
}

.navbar {
  overflow: hidden;
  background-color: #3b4252;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 15%;
}

a {
  float: left;
  display: block;
  color: #81a1c1;
  text-align: center;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-size: 1.5rem
}

a:hover, .router-link-exact-active {
  background-color: #4c566a;
  color: #eceff4;
}

.icon {
  display: none;
}

@media screen and (max-width: 640px) {
  .navbar {
    padding: 0;
  }

  a {
    display: none;
  }

  a.icon {
    float: right;
    display: block;
  }

  a.icon span {
    display: block;
    width: 2rem;
    height: 0.28rem;
    background-color: #81a1c1;
    margin: 0.35rem 0;
  }

  a.icon span:first-child {
    margin-top: 0.1rem;
  }

  a.icon span:last-child {
    margin-bottom: 0.1rem;
  }

  .responsive {
    position: relative;
  }

  .responsive a.icon {
    position: absolute;
    top: 0;
    right: 0;
  }
  .responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
