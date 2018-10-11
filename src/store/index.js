import Vue from 'vue'
import Vuex from 'vuex'

import duitang from './modules/duitang'
Vue.use(Vuex)

const state = {
}

export default new Vuex.Store({
  state,
  modules: {
    duitang: duitang
  }
})