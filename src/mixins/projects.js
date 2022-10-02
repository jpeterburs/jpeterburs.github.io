import SuperProductivity from '@/assets/images/super-productivity.png'
import GameOfLife from '@/assets/images/game-of-life.png'
import Timelib from '@/assets/images/timelib.png'

export const Project = {
  methods: {
    allProjects () {
      return [
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
          static_id: 'game-of-life',
          name: 'The Game of Life',
          desc: 'Basierend auf dem Spiel des Lebens von Conway.',
          media: GameOfLife,
          link: 'https://github.com/jpeterburs/game_of_life',
          contributions: [
            'UI/UX',
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
            'Umsetzung',
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
