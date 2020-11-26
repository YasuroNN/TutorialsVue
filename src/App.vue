<template>
  <div id="app">

      <h2 v-colored:background="'red'">{{ title }}</h2>
      <h2 v-colored:color="'orange'">{{ title }}</h2>
      

  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      title: "Derective"
    }
  }

};
</script>
