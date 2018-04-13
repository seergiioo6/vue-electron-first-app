<template>
    <div id="output-box" v-if="output.content">
      {{ output.type }}
      <div class="list" v-if="output.type === 'ls'">
        <ul>
          <li v-for="item in output.content">
            {{item}}
          </li>
        </ul>
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
</style>
