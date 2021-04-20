<template>
  <div id="app">
    <button @click="openMask">Open</button>
    <button @click="closeMask">Close</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    openMask() {
      this.$loadingmask.openMask({ loadingText: 'test...' })
      setTimeout(() => {
        this.closeMask()
      },2000)
    },
    closeMask() {
      this.$loadingmask.closeMask()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100000px;
}
</style>
