<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav">
    
    
      <!-- <li class="nav-item">
           router-link - это аналог <a>, но позволяет без перезагрузки страницы менять страницы
           to -это аналог href, но для router-link 
        <router-link class="nav-link" :to="'/'">Home</router-link>
      </li> -->
       <router-link tag="li" class="nav-item" exact to="/" active-class="active">
          <a class="nav-link">Home</a>
      </router-link>


      
      <!-- <li class="nav-item" active>
        <router-link class="nav-link" :to="'/pizzas'">Pizza</router-link>
      </li> -->

      <router-link tag="li" class="nav-item" to="/pizzas" active-class="active">
          <a class="nav-link">Pizzas</a>
      </router-link>
     
    </ul>
  </div>
</nav>


      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",

  data () {
    return {
      
    }
  },
 
};
</script>
