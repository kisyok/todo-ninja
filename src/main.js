import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
import { firestorePlugin } from 'vuefire'
import RichTextEditor from 'rich-text-editor-vuetify'

Vue.use(VueTextareaAutosize)
Vue.use(firestorePlugin)
Vue.use(RichTextEditor)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
