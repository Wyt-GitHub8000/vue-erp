import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'

Vue.use(Vuex)

export default new Vuex.Store({
//进行了模块的封装
  modules: {
    tab
  }
})
