<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>

import Layout  from "@/layout/index.vue";
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
#app {
  height: 100%;
}
</style>
