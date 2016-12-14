import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'

import SurvivalStrijd from './components/SurvivalStrijd.vue'
import Eindtijden from './components/Eindtijden.vue'
import Fotos from './components/Fotos.vue'
import Parcours from './components/Parcours.vue'
import Bedrijfsrun from './components/Bedrijfsrun.vue'
import Sponsoren from './components/sponsoren/Sponsoren.vue'
import Informatie from './components/Informatie.vue'
import Trainingen from './components/Trainingen.vue'
import Vrijwilligers from './components/Vrijwilligers.vue'

import translations from './translations.json'

const routes = [
    {path: '/', redirect: '/survivalstrijd'},
    {path: '/survivalstrijd', component: SurvivalStrijd},
    {path: '/informatie', component: Informatie},
    {path: '/eindtijden', component: Eindtijden},
    {path: '/fotos', component: Fotos},
    {path: '/sponsoren', component: Sponsoren},
    {path: '/parcours', component: Parcours},
    {path: '/bedrijfsrun', component: Bedrijfsrun},
    {path: '/trainingen', component: Trainingen},
    {path: '/vrijwilligers', component: Vrijwilligers}
]

const router = new VueRouter({
    routes: routes
})

Vue.use(VueI18n)
Vue.config.lang = 'nl'
Object.keys(translations).forEach(function (lang) {
    Vue.locale(lang, translations[lang])
})
Vue.use(VueRouter)

window.Vue = Vue;

new Vue({
    router,
    el: '#app',
    render: h => h(App),
    data: {
        locale: 'nl'
    }
})

