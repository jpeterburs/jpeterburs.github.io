<template>
  <div>
    <div id="about-me">
      <img :src="me" alt="Jonas" class="image" />

      <div class="text">
        <h1>Hallo, mein Name ist Jonas</h1>

        <p>
          Ich bin Softwareentwickler aus Kreis Warendorf, mit Erfahrung in <span v-html="experienced_in"></span>.
          In meiner Freizeit <span v-html="in_my_freetime"></span>.
        </p>
      </div>
    </div>

    <social-media />
  </div>
</template>

<script>
import me from '@/assets/images/me.png'
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  name: 'about',
  components: {
    SocialMedia
  },
  methods: {
    list: function (list) {
      const last = list.pop()

      return `<b>${list.join('</b>, <b>')}</b> und <b>${last}</b>`
    }
  },
  data () {
    return {
      me: me,
      experienced_in: this.list(
        [
          'Ruby on Rails',
          'JavaScript',
          'HTML',
          'CSS'
        ]
      ),
      in_my_freetime: this.list(
        [
          'lerne ich gerne neues',
          'spiele Videospiele',
          'helfe meinem Vater in seiner Werkstatt aus'
        ]
      )
    }
  }
}
</script>

<style scoped>
#about-me {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  flex-basis: 40%;
}

.text {
  font-size: 1.2rem;
  margin-left: 2rem;
}

@media screen and (max-width: 640px) {
  #about-me {
    display: block;
  }

  .text {
    margin-left: auto;
  }
}
</style>
