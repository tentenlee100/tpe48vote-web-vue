import * as types from '../mutation-types'
import Vue from 'vue'

const state = {
  workIndex: [],
}
const getters = {
  workIndex: state => state.workIndex
}


const actions = {
  setWorkIndex({ commit, state }, workIndex){
    commit(types.SET_WORK_INDEX, workIndex)
  }
}
const mutations = {
  [types.SET_WORK_INDEX] (state , data) {
    // clear cart
    Vue.set(state,'workIndex',data)
  },
}
export default {
  state,
  getters,
  actions,
  mutations
}
