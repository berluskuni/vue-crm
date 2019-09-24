import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import titlePlugin from '@/utils/title.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


Vue.config.productionTip = false

Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.use(VueMeta)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)
firebase.initializeApp({
  apiKey: "AIzaSyDvC7VeSQtstSm-EzAS3Lb-LLQQ_ZfKrmo",
  authDomain: "vue-crm-e3215.firebaseapp.com",
  databaseURL: "https://vue-crm-e3215.firebaseio.com",
  projectId: "vue-crm-e3215",
  storageBucket: "vue-crm-e3215.appspot.com",
  messagingSenderId: "674560379202",
  appId: "1:674560379202:web:4f5739150901777a"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

