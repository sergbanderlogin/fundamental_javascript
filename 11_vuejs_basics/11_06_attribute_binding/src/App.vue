<template>
  <div id="app">
    <h1>{{ firstName }}</h1>
    <h2>{{ num * 2 }}</h2>
    <h3>{{ num > 1 ? "Number: > 1" : "Number: < 1" }}</h3>
    <h3>{{ obj }}</h3>
    <a :href="linkUrl">Link</a>
    <a :[attrKey]="linkUrl">Link</a>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  // eslint-disable-next-line quotes
  name: "App",
  components: {
    // HelloWorld,
  },
  data: () => ({
    // eslint-disable-next-line quotes
    firstName: 'Sergey',
    num: 2,
    obj: {
      age: 58,
    },
    linkUrl: 'https://google.com',
    attrKey: 'href',
  }),
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
