<template>
  <div id="app">
    <button @click.right="onClick('some value', $event)">Click events</button>
    <!--  eslint-disable-next-line -->
    <a href @click.prevent="onLinkClick" >Link</a>  
    <h1>{{ text }}</h1>
    <label for="keyup">
      <input id="keyup" type="text" @keyup.enter="onKeyUp">
    </label>
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
  }),
  methods: {
    onClick(value, e) {
      console.log(value, e);
    },
    onLinkClick() {
      console.log('Link click');
    },
    onKeyUp(e) {
      console.log(e);
      this.text = e.target.value;
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
