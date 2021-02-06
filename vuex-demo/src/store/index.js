import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:100
  },
  mutations: {
    increment(state){
      state.num++
    }
  },
  actions: {
    increment(context){
      context.commit('increment')
    }
  },
  modules: {
  }
})
