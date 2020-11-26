<template>
  <div id="app">

    <app-pizza></app-pizza>
    <app-counter></app-counter>

  </div>
</template>

<script>
import Pizza from "./Pizza.vue";
import Counter from "./Counter.vue"
export default {
  name: "app",

  components: {
    appPizza: Pizza,
    appCounter: Counter
  },

};
</script>
