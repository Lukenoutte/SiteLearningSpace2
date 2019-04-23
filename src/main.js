// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//Importar as LIBS de CSS
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Importar font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser)
library.add(faLock)
library.add(faCalendar)
library.add(faSearch)
library.add(faBook)
library.add(faAt)
library.add(faGraduationCap)

Vue.component('font-awesome-icon', FontAwesomeIcon)

//Enquanto o projeto estiver em desenvolvimento deve estar setado como false
Vue.config.productionTip = false

//Chamando o bootstrapVue
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
