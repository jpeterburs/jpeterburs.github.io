<template>
  <div>
    <h3>
      Vernetze dich mit mir auf LinkedIn und GitHub, oder über GitLab:
    </h3>

    <p>
      Wenn du mit mir in Kontakt treten möchtest, kannst du mir gerne eine Nachricht schicken.
      Ich würde mich freuen, von dir zu hören und deine Fragen oder Anliegen zu besprechen.
    </p>

    <b>Ich freue mich darauf, von dir zu hören.</b>

    <social-media />
  </div>
</template>

<script>
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  name: 'contact',
  components: {
    SocialMedia
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
}
</style>
