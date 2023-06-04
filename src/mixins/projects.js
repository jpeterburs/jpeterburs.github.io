import Errbit from '@/assets/images/errbit.png'
import SuperProductivity from '@/assets/images/super-productivity.png'
import CarParkAPI from '@/assets/images/car-park-api.jpg'
import CarParkUI from '@/assets/images/car-park-ui.jpg'
import GameOfLife from '@/assets/images/game-of-life.png'
import Timelib from '@/assets/images/timelib.png'

export const Project = {
  methods: {
    allProjects () {
      return [
        {
          static_id: 'haiku-bot',
          name: 'Haiku-bot',
          desc: 'Ein einfacher Diskord-Bot, um versehentliche Haiku zu erkennen.',
          media: '', // TODO: Add Media
          link: 'https://github.com/jpeterburs/haiku-bot',
          contributions: [
            'Implementation',
            'Wartung'
          ]
        },
        {
          static_id: 'errbit',
          name: 'Errbit',
          desc: 'Die Open Source-Fehlerüberwachung, welche mit der Airbrake API kompatibel ist.',
          media: Errbit,
          link: 'https://github.com/errbit/errbit',
          contributions: [
            'API-Endpunkt für Kommentare'
          ]
        },
        {
          static_id: 'super-productivity',
          name: 'Super Productivity',
          desc: 'Eine fortschrittliche ToDo-Listen-App mit integrierten Timeboxing- und Zeiterfassungsfunktionen.',
          media: SuperProductivity,
          link: 'https://github.com/johannesjo/super-productivity',
          contributions: [
            'Redmine Integration'
          ]
        },
        {
          static_id: 'car-park-api',
          name: 'Parkhausverwaltung (Backend)',
          desc: 'Serverlösung für das Zufahrtsmanagement eines mehrstöckigen Parkhauses.',
          media: CarParkAPI,
          link: 'https://github.com/jpeterburs/car-park-api',
          contributions: [
            'Planung',
            'Implementation',
            'Einführung Docker'
          ]
        },
        {
          static_id: 'car-park-ui',
          name: 'Parkhausverwaltung (Frontend)',
          desc: 'Clientlösung für das Zufahrtsmanagement eines mehrstöckigen Parkhauses.',
          media: CarParkUI,
          link: 'https://github.com/jpeterburs/car-park',
          contributions: [
            'UX/UI',
            'Einführung Docker'
          ]
        },
        {
          static_id: 'game-of-life',
          name: 'The Game of Life',
          desc: 'Basierend auf dem Spiel des Lebens von Conway.',
          media: GameOfLife,
          link: 'https://github.com/jpeterburs/game_of_life',
          contributions: [
            'UX/UI',
            'Planung',
            'Dokumentation'
          ]
        },
        {
          static_id: 'timelib',
          name: 'timelib',
          desc: 'Diese Bibliothek berechnet, welcher Tag des Jahres das angegebene Datum ist.',
          media: Timelib,
          link: 'https://github.com/jpeterburs/timelib',
          contributions: [
            'Planung',
            'Implementation',
            'Dokumentation'
          ]
        }
      ]
    },

    findProject (staticId) {
      return this.allProjects().find(project => project.static_id === staticId)
    }
  }
}
