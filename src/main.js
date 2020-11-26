import Vue from 'vue'
import App from './App.vue'
import myDirective from './color.js'
import ListNames from './ListName.vue'

Vue.filter('snipped', (value)=> {
  return value.slice(0,10)
})

Vue.mixin({
  beforeUpdate () {
    console.log("Before Update")
  }
})

Vue.component('app-list', ListNames)


new Vue({
  el: '#app',
  render: h => h(App)
})
