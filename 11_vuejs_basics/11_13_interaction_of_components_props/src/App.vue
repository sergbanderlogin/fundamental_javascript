<template>
  <div id="app">
    <HelloWorld :user-object="user" :title="title" @onChangeCounter="onChangeCounterInComponents"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
  data: () => ({
    title: 'Some title',
    user: {
      name: 'Sergey',
      age: 58,
    },
  }),
  methods: {
    onChangeCounterInComponents(value) {
      console.log('In App.vue, conter:', value);
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
