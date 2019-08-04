<template>
  <div class="container">
    <child-one />
    <child-two />
  </div>
</template>

<script>
import childOne from './children/childOne'
import childTwo from './children/childTwo'

export default {
  name: 'Demo2',
  inject: ['evtBus'],
  components: {
    childOne,
    childTwo
  }
}
</script>

<style lang="stylus" scoped>
.container
  padding 10px 0px
  text-align center
</style>
