<template>
  <div>
    <h1>Projekte</h1>

    <p>
      Einige meiner Arbeiten aus der Freizeit.
    </p>

    <br />

    <div v-for="project in projects" :key="project.static_id" class="preview">
      <div class="media">
        <img :src="project.media" :alt="project.name" />
      </div>
      <div class="content">
        <h2 class="title">
          <a :href="project.link">{{ project.name }}</a>
        </h2>

        <p class="desc">
          {{ project.desc }}
        </p>

        <ul>
          <li v-for="contribution in project.contributions" :key="contribution" class="contribution">{{ contribution }}</li>
        </ul>
      </div>
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
.media img {
  width: 100%;
  background-color: #d8dee9;
  border-radius: 0.5rem;
}

.title a {
  text-decoration: none;
  color: #81a1c1;
}

.preview {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.media {
  flex-basis: 30%;
}

.content {
  margin-left: 1.5rem;
  flex-basis: 70%;
}

.contribution {
  color: #d8dee9;
  list-style-position: inside;
}

@media screen and (max-width: 640px) {
  .preview {
    flex-direction: column;
  }

  .media img {
    width: 100%;
  }

  .content {
    margin: 0;
  }
}
</style>
