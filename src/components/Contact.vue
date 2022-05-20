<template>
  <div>
    <h3>
      Vernetzen Sie sich mit mir auf LinkedIn und GitHub, oder über Twitter:
    </h3>

    <social-media />
  </div>
</template>

<script>
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  name: 'Contact',
  components: {
    SocialMedia
  }
}
</script>

<style>
h3 {
  text-align: center;
}
</style>
