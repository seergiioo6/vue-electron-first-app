<template>
	<div id="input-box">
      <div class="header white">
        Microsoft Windows [Version 10.0.16299.371]
		<br/>
        (c) 2017 Microsoft Corporation. All rights reserved.
        <br/><br/>
        {{ username }} {{ path}}
      </div>
      <div class="input white">

        <span class="blink">$ <input type="text" name="" value="" class="shell-input"/></span> 
      </div>
	</div>
</template>

<script>
  export default {
    name: 'Type-box',
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
	%courier{
		font-size: 16px;
		font-family: 'Courier New', Courier, monospace;
	}

	.left-side {
		display: flex;
		flex-direction: column;
	}

	.header{
		@extend %courier;
	}
	.title {
		color: #ffffff;
		font-size: 17px;
		margin-bottom: 6px;
	}

	.title.alt {
		font-size: 18px;
		margin-bottom: 10px;
	}

	.type-box {
		display: flex;
		flex-direction: row;
	}
	.shell-input {
		color: white;
		background: black;
		border: none;
		padding-left: 10px;
		&:focus{
			outline: 0;
		}
		@extend %courier;
	}


	.white{
		color: white;
	}

	/* Keyframes */
	@keyframes blink {
		50% {
		opacity: 0;
		}
	}

</style>
