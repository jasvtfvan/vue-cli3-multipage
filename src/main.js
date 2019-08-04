import Vue from 'vue'
import './cube-ui'
import 'common/stylus/index.styl'

Vue.config.productionTip = false

export const render = function ({
  App = Object.assign({}),
  ele = '#app'
} = {}) {
  new Vue({
    render: h => h(App)
  }).$mount(ele)
}
