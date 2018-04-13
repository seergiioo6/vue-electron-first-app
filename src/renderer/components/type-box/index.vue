<template>
    <div class="left-side">
      <span class="title">
        {{ username }} {{ path}}
      </span>
      <div class="type-box">
        <input type="text" name="" value="" class="shell-input" placeholder="|">
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

<style>

  .left-side {
    display: flex;
    flex-direction: column;
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

  .blink {
    animation: blink-animation 1s steps(5, start) infinite;
    -webkit-animation: blink-animation 1s steps(5, start) infinite;
    color: white;
  }
  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
  @-webkit-keyframes blink-animation {
    to {
      visibility: hidden;
    }
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
  }
  .shell-input:focus {
    outline: 0
  }
  .path {
    color: white;
  }
</style>
