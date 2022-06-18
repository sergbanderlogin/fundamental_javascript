<template>
  <div id="app">
    <ul>
      <li v-for="(color, index) in colors" :key="index">{{ index + 1 }} {{ color }}</li>
      <li v-for="user in users" :key="user.id">{{ user.name }} : {{ user.age }}</li>
      <li v-for="(value, name, index) in product" :key="value">{{ index }} {{ name }}: {{ value }}</li>
    </ul>

    <ul>
      <div>
        <label for="color">Add color
          <input type="text" name="color" @keyup.enter="addNewColor">
        </label>
      </div>
    </ul>

    <ul>
      <div>
        <label for="product">Delete product
          <input type="text" name="product" @keyup.enter="deleteProperty">
        </label>
      </div>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  // eslint-disable-next-line quotes
  name: "App",
  components: {
    // HelloWorld,
  },
  data: () => ({
    colors: ['orange', 'black', 'yellow'],
    users: [
      { name: 'Sergey', age: 58, id: 'one' },
      { name: 'John', age: 36, id: 'two' },
    ],
    product: {
      brand: 'Apple',
      model: 'IPhone 11 Pro',
      price: '$1000',
    },
  }),
  methods: {
    addNewColor(e) {
      console.log(e.target.value);
      // this.colors.push(e.target.value);
      // this.colors[this.colors.length] = e.target.value;
      console.log(this);
      this.$set(this.colors, this.colors.length, e.target.value);
    },
    deleteProperty(e) {
      console.log(e.target.value);
      // delete this.product[e.target.value];
      this.$delete(this.product, e.target.value);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
