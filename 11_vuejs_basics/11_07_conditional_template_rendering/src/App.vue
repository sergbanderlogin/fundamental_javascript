<template>
  <div id="app">
    <h1>{{ firstName }}</h1>
    <h2>{{ num * 2 }}</h2>
    <h3>{{ num > 1 ? "Number: > 1" : "Number: < 1" }}</h3>
    <h3>{{ obj.age }}</h3>
    <a :href="linkUrl">Link</a>
    <a :[attrKey]="linkUrl">Link</a>
    <template v-if='msgIsVisible === 1'>
      <div class="message">Some message!</div>
    </template>
    <template v-else-if="msgIsVisible === 2">
      <div class="message">v else message</div>
    </template>
    <template v-else>
      <div class="message">Another message!</div>
    </template>

    <div v-show="isVisibleBlock">
      v-show template
    </div>

    <div class="name-input" v-if="inputNameVisible">
      <label for="name-one">Name
        <input  id="name-one" type="text" placeholder="input name" key="name-input">
      </label>
    </div>

    <div class="nickname-input" v-else>
      <label for="nickname">NickName
        <input  id="nickname"  type="text" placeholder="input nickname" key="nickname-input">
      </label>
    </div>

    <button @click="inputNameVisible = !inputNameVisible">Change form</button>
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
    // eslint-disable-next-line quotes
    firstName: "Sergey",
    num: 2,
    obj: {
      age: 58,
    },
    linkUrl: 'https://google.com',
    attrKey: 'href',
    msgIsVisible: 1,
    isVisibleBlock: true,
    inputNameVisible: true,
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
