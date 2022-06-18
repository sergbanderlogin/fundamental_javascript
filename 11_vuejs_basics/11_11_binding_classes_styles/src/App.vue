<template>
  <div id="app">
    <h1 class="title" :class="[classObj, activeClass]" :style="{'font-size': fontSize + 'em'}">Hello World</h1>
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
    activeClass: 'my-active-class',
    isActive: false,
    fontSize: 3,
  }),
  computed: {
    classObj() {
      return {
        'active-class': this.isActive,
        error: !this.isActive,
      };
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
