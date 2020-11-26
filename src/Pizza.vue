<template>
  <div>
    <h2>Pizza Name: {{pizzaName}} / {{reverseName}}</h2>
    <p>price: {{pizzaPrice}}</p>
    <button @click="changeName">changeName</button>
    <button @click="changeFunc()">ChangeFormParent</button>
    <button @click="updateCounter">updateCounter</button>
  </div>
</template>

<script>
import {eventEmitter} from './main.js'
export default {
  props: {
    pizzaName: String,
    pizzaPrice: Number,
    changeFunc: Function
  },

  computed: {
    reverseName() {
      return this.pizzaName.split("").reverse().join("");
    }
  },

  methods: {
    changeName() {
      this.pizzaName = "Margarita";
      this.$emit("nameChanged", this.pizzaName);
    },
    updateCounter() {
      eventEmitter.$emit('counterUpdated', 5)
    }
  }
};
</script>