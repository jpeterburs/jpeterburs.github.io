<template>
  <header>
    <Logo />

    <span>gestaltung digitaler Erlebnisse</span>
  </header>

  <main>
    <Projects />
  </main>

  <footer>
    <span>Hallo! Ich bin Jonas, Softwareentwickler aus Kreis Warendorf.</span>

    <SocialMedia />
  </footer>
</template>

<script setup>
import Logo from './logo.svg'
</script>

<script>
import Projects from '@/components/Projects.vue'
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  components: {
    Projects,
    SocialMedia
  }
}
</script>

<style scoped>
header {
  margin-top: 3rem;
}

header, footer {
  display: grid;
  place-items: center;
}

header svg {
  fill: light-dark(var(--ctp-latte-text), var(--ctp-mocha-text));
}

header span {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

main {
  margin-bottom: 3rem;
}

footer {
  margin-bottom: 3rem;
}

footer span {
  margin-bottom: 1rem;
}
</style>