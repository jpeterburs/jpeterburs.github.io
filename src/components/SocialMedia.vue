<template>
  <div id="social-media" >
    <span v-for="platform in platforms" :key="platform.name">
      <a class="platform" :href="platform.link">
        <img :src="platform.logo" :alt="platform.name" height="30" />
      </a>
    </span>
  </div>
</template>

<script>
import TwitterLogo from '@/assets/twitter.png'
import GithubLogo from '@/assets/github.png'
import LinkedinLogo from '@/assets/linkedin.png'

export default {
  name: 'social-media',
  data () {
    return {
      platforms: [
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/jpeterburs/',
          logo: LinkedinLogo
        },
        {
          name: 'GitHub',
          link: 'https://github.com/jpeterburs',
          logo: GithubLogo
        },
        {
          name: 'Twitter',
          link: 'https://twitter.com/jpeterburs_',
          logo: TwitterLogo
        }
      ]
    }
  }
}
</script>

<style scoped>
#social-media {
  text-align: center;
}

.platform {
  margin: 1rem 0.5rem;
}

img {
  filter: brightness(0) invert(1);
  -webkit-filter: brightness(0) invert(1);
  -moz-filter: brightness(0) invert(1);
  -ms-filter: brightness(0) invert(1);
  -o-filter: brightness(0) invert(1);
}

img:hover {
  filter: none;
  -webkit-filter: none;
  -moz-filter: none;
  -ms-filter: none;
  -o-filter: none;
}
</style>
