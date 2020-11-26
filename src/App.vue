<template>
  <div id="app">
    <h2>{{ title | upperCase}}</h2>

    <input type="text"  v-model="search" >

    <ul>
        <li v-for="name in filteredNames" :key="name">{{name}}</li>
    </ul>

<hr>

<app-list></app-list>

  </div>
</template>

<script>
import ListMixin from './ListMixin.js'
export default {
  name: "app",

  data () {
    return {
      title: 'Изучаем фильтры'
    }
  },

  filters: {
    upperCase(value) {
      return value.toUpperCase();
    }
  },
  mixins: [ListMixin]


 
};
</script>
