<template>
  <div>
    Header
    {{ usersList }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderApp",
  computed: {
    ...mapGetters("users", ["usersList"]),
  },
};
</script>
