<template>
  <div id="wrapper">
    <main>
      <Type-box></Type-box>
      <Result-box></Result-box>
      <audio id="audio" loop>
         <source src="../assets/electronLatino.mp3" type="audio/mpeg">
      </audio>
      <img src="../assets/marciano.gif" class="gif">
      <div class="container"></div>
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
    mounted () {
      this.music()
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      music () {
        document.getElementById('audio').play()
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

  .gif {
    max-width: 180px;
    max-height: 100px;
    position: absolute;
    bottom: 20px;
    left: 0px;
  }

  .container {
    position: absolute;
    bottom: 60px;
    left: 160px;
    width: 20px;
    height: 70px;
    background-color: black;
  }

</style>
