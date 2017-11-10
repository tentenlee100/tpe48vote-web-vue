import * as types from '../mutation-types'
import Vue from 'vue'

const state = {
  girls: [],
  defaultGirls: [],
}
const getters = {
  girls: state => state.girls
}


const actions = {
  updateGirls({ commit, state }, girls){
    commit(types.UPDATE_GIRLS, girls)
  },
  setDefaultGirls({ commit, state }, girls){
    commit(types.SET_DEFAULT_GIRLS, girls)
  },
  resetDefaultGirls({ commit, state }, girls){
    commit(types.SET_DEFAULT_GIRLS, state.defaultGirls)
  },
}
const mutations = {
  [types.UPDATE_GIRLS] (state , data) {
    // clear cart
    Vue.set(state,'girls',data)
  },
  [types.SET_DEFAULT_GIRLS] (state , data) {
    // clear cart
    Vue.set(state,'girls',data)
    Vue.set(state,'defaultGirls',data)
  },
}
export default {
  state,
  getters,
  actions,
  mutations
}
