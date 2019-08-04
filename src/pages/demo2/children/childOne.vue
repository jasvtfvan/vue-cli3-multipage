<template>
  <div>
    childOne
    <cube-button :primary="true" @click="sendCommand">向childTwo发消息</cube-button>
  </div>
</template>

<script>
export default {
  name: 'childOne',
  inject: ['evtBus'],
  mounted () {
    this.evtBus.$on('command2', (res) => {
      console.log(res)
      const toast = this.$createToast({
        time: 2000,
        txt: '收到来自childTwo的消息:' + res.message
      })
      toast.show()
    })
  },
  methods: {
    sendCommand () {
      this.evtBus.$emit('command1', {
        form: 'one', to: 'two', message: 'hello child-two'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
