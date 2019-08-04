<template>
  <div id="app">
    <cube-button @click="triggerBus">模拟触发总线通信</cube-button>
    <demo1/>
  </div>
</template>

<script>
import evtBus from 'common/js/evtBus'
import Demo1 from './Demo1'
export default {
  name: 'app',
  provide () {
    return {
      evtBus: evtBus
    }
  },
  components: {
    Demo1
  },
  data () {
    return {
      evtBus: evtBus
    }
  },
  beforeDestroy () {
    this.evtBus.$off('command')
  },
  methods: {
    triggerBus () {
      this.evtBus.$emit('command', { abc: 'abc' })
    }
  }
}
</script>
