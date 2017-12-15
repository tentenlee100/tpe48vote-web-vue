import * as types from '../mutation-types'
import Vue from 'vue'

const state = {
  girls: [],
  defaultGirls: [],
  orderType: {type:"seq" ,asc:1 },
}
const getters = {
  girls: state => {

    if (state.orderType.type == 'seq'){
      return Array.prototype.slice.call(state.defaultGirls).sort((a,b)=>{
        if (a.seq < b.seq){
          return -state.orderType.asc  ;
        }
        if (a.seq > b.seq){
          return state.orderType.asc ;
        }
        return 0;
      })
  }else if (state.orderType.type == 'today'){
    return Array.prototype.slice.call(state.defaultGirls).sort((a,b)=>{
      if (a.voteToday < b.voteToday){
        return state.orderType.asc  ;
      }
      if (a.voteToday > b.voteToday){
        return -state.orderType.asc  ;
      }
      return 0;
    })
  }else if (state.orderType.type == 'total'){
    return Array.prototype.slice.call(state.defaultGirls).sort((a,b)=>{
      if (a.voteCount < b.voteCount){
        return state.orderType.asc ;
      }
      if (a.voteCount > b.voteCount){
        return -state.orderType.asc ;
      }
      return 0;
    })
  }else{
    return state.girls
  }

  },
  orderType: state => state.orderType
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
  setOrderType({ commit, state }, type){
    commit(types.SET_ORDER_TYPE,  type)
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
  [types.SET_ORDER_TYPE] (state , data) {
    // clear cart
    Vue.set(state,'orderType',data)
  },
}
export default {
  state,
  getters,
  actions,
  mutations
}
