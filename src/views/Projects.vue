<template>
  <div>
    <h1>Projekte</h1>

    <p>
      Einige meiner Arbeiten aus der Freizeit.
    </p>

    <br />

    <div v-for="project in projects" :key="project.static_id" class="preview">
      <img class="media" :src="project.media" :alt="project.name" />
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
.media {
  float: left;
  width: 35%;
  margin-right: 1.5rem;
  background-color: #d8dee9;
  border-radius: 0.5rem;
}

.title a {
  text-decoration: none;
  color: #81a1c1;
}

.preview {
  margin-bottom: 1.5rem;
}

.preview:after {
  content: "";
  display: table;
  clear: both;
}

.contribution {
  color: #d8dee9;
  list-style-position: inside;
}

@media screen and (max-width: 640px) {
  .media {
    float: none;
    width: 100%;
    margin-right: auto;
  }

  .preview {
    margin-bottom: 2rem;
  }
}
</style>
