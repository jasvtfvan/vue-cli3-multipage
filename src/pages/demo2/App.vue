<template>
  <div id="app">
    <demo2/>
  </div>
</template>

<script>
import evtBus from 'common/js/evtBus'
import Demo2 from './Demo2'
export default {
  name: 'app',
  provide () {
    return {
      evtBus: evtBus
    }
  },
  components: {
    Demo2
  },
  data () {
    return {
      evtBus: evtBus
    }
  },
  beforeDestroy () {
    this.evtBus.$off('command1')
    this.evtBus.$off('command2')
  }
}
</script>
