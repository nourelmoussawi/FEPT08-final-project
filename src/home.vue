<template>
  <div class="home">
    <h1>Welcome to the Home Page</h1>
    <h2>{{ counter.name }}</h2>
    <h4>{{ counter.count }}</h4>
    <p>This is a simple Vue.js home page.</p>
    <div>
      <button @click="counter.increment">+</button>
      <button @click="counter.decrement">-</button>
      <button @click="counter.restart">restart</button>
    </div>
  </div>
</template>

<script>

import { useCounterStore } from './stores/counter';

export default {
  name: "Home",
  data() return{},
  computed: {
    counter(){
      return useCounterStore()
    },
  },
  methods:{

  },
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

h1 {
  color: #42b983;
}

p {
  font-size: 18px;
  color: #333;
}
</style>
