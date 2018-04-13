<template>
    <div id="output-box" v-if="output.content">
      <div class="list" v-if="output.type === 'ls'">
        <ul>
          <li v-bind:key="index" class="ls-item" v-for="(item, index) in output.content">
            {{item}}
          </li>
        </ul>
      </div>
      <div class="eror" v-if="output.type === 'error'">
        {{ output.content }}
      </div>
      <div v-if="output.type === 'music'" class="music">
      </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Result-box',
    data () {
      return { }
    },
    computed: {
      ...mapGetters({
        output: 'getOutput'
      })
    }
  }
</script>

<style lang="scss">
  #output-box {
    color: white;
    font-family: 'Courier New', Courier, monospace;
    margin-top: 20px;
  }
  .list {
    ul {
      list-style: none;
    }
  }
  .ls-item {
    width: 33%;
    float: left;
  }
</style>
