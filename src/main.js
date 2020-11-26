import Vue from 'vue'
import App from './App.vue'
import myDirective from './color.js'

Vue.directive('colored', myDirective)


new Vue({
  el: '#app',
  render: h => h(App)
})
