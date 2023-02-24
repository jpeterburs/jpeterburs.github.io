<template>
  <div id="projects">
    <h1>Projekte</h1>

    <div v-for="project in projects" :key="project.static_id" class="preview">
      <h2 class="title">
        <a :href="project.link">{{ project.name }}</a>
      </h2>

      <p class="desc">
        {{ project.desc }}
      </p>

      <ul class="contributions">
        <li v-for="contribution in project.contributions" :key="contribution">{{ contribution }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Project } from '../mixins/projects'

export default {
  name: 'projects',
  mixins: [Project],
  data () {
    return {
      projects: this.allProjects()
    }
  }
}
</script>

<style scoped>
#projects, .preview {
  align-items: initial !important;
}

.title a {
  text-decoration: none;
  color: #81a1c1;
}

.preview {
  margin-bottom: 1.5rem;
}

.contributions {
  padding-left: 0;
}

.contributions li {
  color: #d8dee9;
  list-style-position: inside;
}
</style>
