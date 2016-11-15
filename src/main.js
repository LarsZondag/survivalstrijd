import Vue from 'vue'
import App from './App.vue'
import i18n from 'voo-i18n'
import VueRouter from 'vue-router'

import SurvivalStrijd from './components/SurvivalStrijd.vue'
import Eindtijden from './components/Eindtijden.vue'
import Fotos from './components/Fotos.vue'
import Parcours from './components/Parcours.vue'
import Bedrijfsrun from './components/Bedrijfsrun.vue'
import Sponsoren from './components/sponsoren/Sponsoren.vue'
import Sponsor from './components/sponsoren/Sponsor.vue'
import Informatie from './components/Informatie.vue'
import WatIsEenSurvivalrun from './components/watIsEenSurvivalrun.vue'

const translations = {
    'nl': {
        'survivalstrijd': 'SurvivalStrijd',
        'watIsEenSurvivalrun': 'Wat is een survivalrun?',
        'informatie': 'Informatie',
        'eindtijden': 'Eindtijden',
        'fotos': 'Foto\'s',
        'sponsoren': 'Sponsoren',
        'bedrijfsrun': 'Bedrijfsrun',
        'parcours': 'Parcours'
    },
    'en': {
        'Hello world': 'Hello worlddd'
    }
}


const routes = [
  { path: '/', component: SurvivalStrijd },
  { path: '/wat_is_een_survivalrun', component: WatIsEenSurvivalrun },
  { path: '/informatie', component: Informatie },
  { path: '/eindtijden', component: Eindtijden },
  { path: '/fotos', component: Fotos },
  { path: '/sponsoren', component: Sponsoren },
  { path: '/parcours', component: Parcours },
  { path: '/bedrijfsrun', component: Bedrijfsrun }
]

const router = new VueRouter({
  routes: routes
})

Vue.use(i18n, translations)
Vue.use(VueRouter)

new Vue({
  router,
  el: '#app',
  render: h => h(App),
  data: {
    locale: 'nl'
  }
})
