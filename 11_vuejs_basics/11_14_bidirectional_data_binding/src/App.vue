<template>
  <div id="app">
    <label for="for-data-binding">
      <input type="text" name="for-data-bindig" v-model="textComputed"/>
    </label>
    <h3>Input text value <i>{{ text }}</i></h3>
    <div class="checkboxes">
      <label for="for-checkbox">
        <input type="checkbox" v-model="checkbox"/>

        <h3>Checkbox value <i>{{ checkbox }}</i></h3>

        <input type="checkbox" v-model="checkboxArray" value='one'/>
        <input type="checkbox" v-model="checkboxArray" value='two'/>
        <input type="checkbox" v-model="checkboxArray" value='three'/>

        <h3>CheckboxArray value <i>{{ checkboxArray }}</i></h3>
      </label>
    </div>

    <select v-model="select">
      <option value="bmw">BMW</option>
      <option value="audi">Audi</option>
      <option value="katapeeller">Katapeeller</option>
    </select>

        <h3>Select value <i>{{ select }}</i></h3>
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
    text: '',
    checkbox: false,
    checkboxArray: [],
    select: '',
  }),
  computed: {
    textComputed: {
      get() {
        return this.text;
      },
      set(value) {
        console.log(value);
        this.text = value;
      },
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
