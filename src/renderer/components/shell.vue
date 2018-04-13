<template>
  <div id="wrapper">
    <main>
      <Type-box></Type-box>
      <Result-box></Result-box>
      <audio id="audio" loop>
         <source src="../assets/electronLatino.mp3" type="audio/mpeg">
      </audio>
      <div class="container"></div>
    </main>
    <div class="foto" id="sergio">
      <img src="../assets/sergio.jpg" />
    </div>
	<div class="foto" id="pere">
      <img src="../assets/pere.jpg" />
    </div>
    <div class="foto" id="andrea">
      <img src="../assets/andrea.jpg" />
    </div>

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
      }
    }
  }
</script>

<style lang="scss">

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background: black;
    height: 100vh;
    padding: 5px 5px;
    width: 100vw;
  }

  $size:150px;
  .foto{
    animation:spin 4s linear infinite;
    &>img{
      width: $size;
      height: $size;
	  border-radius: 100px;
	  border: 6px solid white;
	  box-sizing: border-box;
    }
    width: $size;
    height: $size;
    margin-right: -$size/2;
    margin-bottom: -$size/2;
  }

	#sergio{
		position: fixed;
		right: (10px + $size/2);
		top: 10px;
	}
	#pere{
		position: fixed;
		right: (10px + $size/2);
		top: 10px + $size*1.2;
	}
	#andrea{
		position: fixed;
		right: (10px + $size/2);
		top: 10px + $size*1.2 * 2;
	}


  	@keyframes spin { 100% {  transform:rotate(360deg); } }


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
