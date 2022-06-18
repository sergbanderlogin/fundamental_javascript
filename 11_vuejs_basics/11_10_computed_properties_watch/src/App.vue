<template>
  <div id="app">
    <h1>Hello {{ fullName }}</h1>
    <label for="for-label">Enter Your Name
      <input type="text" name="for-label" @keyup.enter="setName">
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
    firstName: '',
    lastName: '',
  }),
  computed: {
    fullName: {
      get() {
        return `${this.firstName || 'Default'} ${this.lastName || 'User'}`;
      },
      set(value) {
        console.log(value);
        const [firstName, lastName] = value.split(' ');
        console.log(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
      },
    },
  },
  methods: {
    setName(e) {
      // this.firstName = e.target.value;
      this.fullName = e.target.value;
    },
    onListNameUpdate(value) {
      console.log('watch', value);
    },
  },
  watch: {
    lastName: 'onListNameUpdate',
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
