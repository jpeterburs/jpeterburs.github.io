<template>
  <div id="about-me">
    <img :src="me" alt="Profilbild" class="avatar" width="300" height="300" />

    <h1 id="name">Jonas</h1>
    <h2 id="job-description">Junior Softwareentwickler</h2>
    <h3 id="home-town">aus Kreis Warendorf</h3>

    <SocialMedia />
  </div>
</template>

<script>
import me from '@/assets/images/me.png'
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  name: 'about',
  components: {
    SocialMedia
  },
  data () {
    return {
      me: me
    }
  }
}
</script>

<style scoped>
#about-me {
  display: flex;
  flex-direction: column;
}

#avatar {
  flex-basis: 40%;
}

h1, h2, h3 {
  margin-bottom: .5rem;
}

#name {
  margin-top: 2rem;
}

#job-description {
  margin-top: 1rem;
}

#home-town {
  margin-top: 0;
}
</style>
