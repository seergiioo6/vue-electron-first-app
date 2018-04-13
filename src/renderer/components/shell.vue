<template>
  <div id="wrapper">
    <main>
      <Type-box></Type-box>
      <Result-box></Result-box>
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

</style>
