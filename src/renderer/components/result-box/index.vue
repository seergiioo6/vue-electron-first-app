<template>
    <div id="output-box" v-if="output.content">
      <div class="list" v-if="output.type === 'ls'">
        <ul>
          <li class="ls-item" v-for="item in output.content">
            {{item}}
          </li>
        </ul>
      </div>
      <div class="eror" v-if="output.type === 'error'">
        {{ output.content }}
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
