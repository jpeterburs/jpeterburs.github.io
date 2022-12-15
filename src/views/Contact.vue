<template>
  <div>
    <h3>
      Vernetze dich mit mir:
    </h3>

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
