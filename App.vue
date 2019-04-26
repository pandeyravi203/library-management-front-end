<template>
  <div id="app">
    <librayhomeheader></librayhomeheader>
    <router-view/>
  </div>
</template>

<script>

import librayhomeheader from '@/components/libraryhomeheader.vue'
export default {
  name: 'app',
  components: {
   librayhomeheader,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
