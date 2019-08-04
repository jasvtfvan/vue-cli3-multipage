<template>
  <div>
    childTwo
    <cube-button @click="sendCommand">向childOne发消息</cube-button>
  </div>
</template>

<script>
export default {
  name: 'childOne',
  inject: ['evtBus'],
  mounted () {
    this.evtBus.$on('command1', (res) => {
      console.log(res)
      const toast = this.$createToast({
        time: 3000,
        txt: '收到来自childOne的消息:' + res.message,
        mask: true
      })
      toast.show()
    })
  },
  methods: {
    sendCommand () {
      this.evtBus.$emit('command2', {
        form: 'two', to: 'one', message: 'hello child-one'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
