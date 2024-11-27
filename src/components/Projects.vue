<template>
  <div id="projects">
    <div v-for="project in projects" :key="project.name" class="project">
      <a :href="project.link">
        <img :alt="project.name" :src="project.thumbnail" height="256" width="512" class="project-img" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'drei-fragezeichen',
          link: 'https://jpeterburs.de/drei-fragezeichen',
          thumbnail: 'https://placehold.co/512x256?text=drei-fragezeichen'
        },
        {
          name: 'Ist es Mittwoch?',
          link: 'https://istesmittwoch.de',
          thumbnail: 'https://placehold.co/512x256?text=istesmittwoch'
        }
      ]
    }
  }
}
</script>

<style scoped>
#projects {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

#projects div {
  margin: 0.5rem 1rem;
}

img {
  border-radius: 1.5rem;
  transition: transform 0.15s ease-in-out;
}

img:hover {
  transform: scale(1.05);
}
</style>