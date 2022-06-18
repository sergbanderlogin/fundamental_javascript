<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <button @click="onClick">Send event</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: {
      type: String,
      default: 'Default title',
      // required: true,
    },
    userObject: {
      type: Object,
      // default: () => ({})
      validator(value) {
        console.log(value);
        return value.age;
      },
    },
  },
  data: () => ({
    counter: 0,
  }),
  methods: {
    onClick() {
      this.counter += 1;
      this.$emit('onChangeCounter', this.counter);
      console.log('click from parent component');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
