<template>
  <div id="app">
    <h1>Parent: {{ pizzaName }}</h1>
    <app-pizza :pizzaName="pizzaName" 
    :pizzaPrice="pizzaPrice"
    :changeFunc="changeNameToPizza"
    @nameChanged="pizzaName = $event"
    @counterUpdated="counter =  $event"
    ></app-pizza>

    <app-counter></app-counter>

------------HTML component_---------------
    <app-html>
      <h2 slot="htmlOne">HtmlOneContent</h2>
      <p slot="htmlTwo">HtmlTwoContent</p>
    </app-html>
  </div>
</template>

<script>
import Pizza from "./Pizza.vue";
import Counter from "./Counter.vue"
import HtmlComponent from "./Html.vue"
export default {
  name: "app",
  data() {
    return {
      pizzaName: "Derevensay from app.vue",
      pizzaPrice: 480
    };
  },
  components: {
    appPizza: Pizza,
    appCounter: Counter,
    appHtml: HtmlComponent
  },

  methods: {
    changeNameToPizza() {
      this.pizzaName = "Pizza"
    }
  }
};
</script>
