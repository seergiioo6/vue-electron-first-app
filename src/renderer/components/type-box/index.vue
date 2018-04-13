<template>
	<div id="input-box">
      <div class="header white">
        Microsoft Windows [Version 10.0.16299.371]
		<br/>
        (c) 2017 Microsoft Corporation. All rights reserved.
        <br/><br/>
        {{ username }} {{ path }}
      </div>
      <div class="input white">
        <span class="blink">$ <input v-model="text" @keydown="input" type="text" name="" value="" class="shell-input"/></span>
      </div>
	</div>
</template>

<script>
/* eslint-disable */
  import { mapActions, mapGetters } from 'vuex'
  import open from '../../services/open'
  import list from '../../services/list'
  import cd from '../../services/cd'
  export default {
    name: 'Type-box',
    data () {
      return {
        electron: process.versions['atom-shell'],
        name: this.$route.name,
        node: process.versions.node,
        // path: this.$route.path,
        platform: require('os').platform(),
        vue: require('vue/package.json').version,
        username: require('os').userInfo().username,
        text: '',
        commands: [
          'ls',
          'mkdir',
          'cd',
          'open',
          'clear'
        ]
      }
    },
    computed: {
      ...mapGetters({
        path: 'getPath'
      })
    },
    methods: {
      ...mapActions([
        'setOutput'
      ]),
      input (e) {
        if (e.key === 'Enter') {
          let keyWord = this.text.replace(/ .*/, '')
          if (this.commands.includes(keyWord)) {
            if (this.text.includes('open')) {
              this.$electron.shell.openExternal(open.getUrl(this.text))
            } else if (this.text === 'ls') {
              let files = list.getFiles(this.path)
              this.setOutput({
                type: 'ls',
                content: files
              })
            } else if (this.text === 'clear') {
              this.setOutput({
                type: false,
                content: false
              })
            } else if (this.text.startsWith('cd')) {
              let err = cd.changePath(this.text)
              if(err != ""){
                this.setOutput({
                  type: 'error',
                  content: err
                })
              }else{
                let files = list.getFiles(this.path)
                this.setOutput({
                  type: 'ls',
                  content: files
                })
              }
            }
          } else {
            this.setOutput({
              type: 'error',
              content: 'Command not found'
            })
          }
          this.text = ''
        }
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
