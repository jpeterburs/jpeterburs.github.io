<template>
  <div class="projects">
    <div v-for="project in projects" :key="project.name" class="project">
      <a :href="project.link">
        <img :alt="project.name" :src="project.thumbnail" height="120" width="320" class="project-img" />
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
          thumbnail: 'https://placehold.co/320x120?text=drei-fragezeichen'
        },
        {
          name: 'Ist es Mittwoch?',
          link: 'https://istesmittwoch.de',
          thumbnail: 'https://placehold.co/320x120?text=istesmittwoch'
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects {
  display: flex;
  justify-content: center;
}

.project {
  margin: 0.5rem 1rem;
}

.project-img {
  border-radius: 1.5rem;
  transition: transform 0.15s ease-in-out;
}

.project-img:hover {
  transform: scale(1.05);
}
</style>