<template>
  <div id="wrapper">
    <main>
      <Type-box></Type-box>
      <Result-box></Result-box>
    </main>
  </div>
</template>

<script>
  import TypeBox from './type-box/index'
  import ResultBox from './result-box/index'

  export default {
    name: 'shell',
    components: { TypeBox, ResultBox },
    data () {
      return {
        electron: process.versions['atom-shell'],
        name: this.$route.name,
        node: process.versions.node,
        path: this.$route.path,
        platform: require('os').platform(),
        vue: require('vue/package.json').version,
        username: require('os').userInfo().username
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background: black;
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

</style>
