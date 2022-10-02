<template>
  <div>
    <div id="about-me">
      <img :src="me" class="image" />

      <div class="text">
        <h1>Hi, ich bin Jonas 👋</h1>

        <p>
          Ich bin ein Webentwickler aus Kreis Warendorf, mit Erfahrung in <span v-html="experienced_in"></span>,
          mit einem Verständnis von <span v-html="understanding_of"></span>.
        </p>

        <p>
          In meiner Freihzeit <span v-html="in_my_freetime"></span>.
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
  name: 'About',
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
      understanding_of: this.list(
        [
          'SQL',
          'Docker',
          'Versionskontrollsystemen'
        ]
      ),
      in_my_freetime: this.list(
        [
          'lerne ich gerne neues',
          'spiele',
          'helfe meinem Vater in seiner Werkstatt'
        ]
      )
    }
  }
}
</script>

<style>
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
</style>
