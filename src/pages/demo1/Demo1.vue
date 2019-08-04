<template>
  <div class="container">
    <hello-world />
  </div>
</template>

<script>
import {
  getSeller
} from 'api'
import HelloWorld from 'components/HelloWorld'

export default {
  name: 'Demo1',
  inject: ['evtBus'],
  components: {
    HelloWorld
  },
  data () {
    return {
    }
  },
  mounted () {
    this.evtBus.$on('command', (res) => {
      console.log('接受触发', res)
    })
    getSeller().then(res => {
      console.log(res)
    })
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.container
  padding 10px 0px
  text-align center
</style>
