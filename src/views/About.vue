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

        <p>
          In meiner derzeitigen Position arbeite ich in einem Team, das für die Entwicklung mehrerer webbasierten Anwendungen und Schnittstellen für ein großes Lebensmittelunternehmen zuständig ist.
          Zu meinen Aufgaben gehören das Schreiben von sauberem, effizientem Code, die Durchführung von Code-Reviews und die Zusammenarbeit mit anderen Teammitgliedern bei der Fehlersuche und Problemlösung.
        </p>

        <p>
          Vor meiner hetzigen Stelle habe ich miene Ausbilduch zum Fachinformatiker in Anwendungsentwicklung abgeschlossen, wo ich an einem Projekt zur beantragung von Hilfs- und Betribsstoffen in einer bestehenden Anwendung implementiert habem
          Dabei konnte ich praktische Erfahrungen mit der Planung und Entwicklung webbasierter Anwendungen sammeln und meine Fähigkeiten in der Zusammenarbeit mit einem Team zur Lieferung eines hochwertigen Produkts weiterentwickeln.
        </p>

        <p>
          Ich freue mich darauf, als Softwareentwickler weiterzulernen und zu wachsen, und bin immer auf der Suche nach neuen Möglichkeiten, mich selbst herauszufordern und meine Fähigkeiten zu erweitern.
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
  height: 300px;
  width: 300px;
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
