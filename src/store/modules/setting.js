import * as types from '../mutation-types'


function initAllAllowType(){
  return  [
    {
      type: "48",
      name: "AKB48 Group"
    }, {
      type: "46",
      name: "坂道46 Group"
    }, {
      type: "og",
      name: "元AKB48 Group"
    }, {
      type: "love",
      name: "=Love"
    }, {
      type: "227",
      name: "22/7(ナナブンノニジュウニ)"
    }
  ]
}
function initSetting(){
  const setting = {
    userAllow: initAllAllowType().map(obj => { return { type: obj.type , show: true } }),
    showLowUrl: false ,
    showImage: true
  }
  let settingString = JSON.stringify(setting)
  localStorage.setItem("setting",settingString);
  return setting
}
function initUserAllow(){
  var settingString = localStorage.getItem("setting")
  var setting = {}
  if (settingString == null){
    setting = initSetting()
  }else{
    setting = JSON.parse(settingString)

  }
  var userAllow = []

  try {
    userAllow = setting.userAllow.filter(obj =>{ return obj.show == true }).map(obj => obj.type)
  } catch (e) {
    initSetting()
    userAllow = initUserAllow()
  }

  return userAllow
}
function initShowLowUrl(){
  var settingString = localStorage.getItem("setting")
  var setting = {}
  if (settingString == null){
    setting = initSetting()
  }else{
    setting = JSON.parse(settingString)

  }

  if (!setting.hasOwnProperty("showLowUrl") ){
    initSetting()
    return initShowLowUrl()
  }

  return setting.showLowUrl
}
function initShowImage(){
  var settingString = localStorage.getItem("setting")
  var setting = {}
  if (settingString == null){
    setting = initSetting()
  }else{
    setting = JSON.parse(settingString)

  }

  if (!setting.hasOwnProperty("showImage") ){
    initSetting()
    return initShowImage()
  }

  return setting.showImage
}
function saveSettingToStorge(obj){
  var settingString = localStorage.getItem("setting")
  var setting = {}
  if (settingString == null){
    setting = initSetting()
  }else{
    setting = JSON.parse(settingString)
  }
  setting = {...setting , ...obj}
  localStorage.setItem("setting",JSON.stringify(setting));
}

const state = {
  allAllowType:initAllAllowType(),
  userAllow: initUserAllow(),
  showLowUrl: initShowLowUrl(),
  showImage: initShowImage(),
}
const getters = {
  userAllow: state => {
    return state.userAllow
  },
  allAllowType: state => {
    return state.allAllowType
  },
  showLowUrl: state => {
    return state.showLowUrl
  },
  showImage: state => {
    return state.showImage
  }
}
const actions = {
  addAllow({ commit, state }, addType){
    var nowAllow = getters.userAllow(state)
    if (nowAllow.indexOf(addType) > -1) {
      return
    }
    commit(types.ADD_USER_AllOW, addType)
  },
  deleteAllow({ commit, state }, deleteType){

    var nowAllow = getters.userAllow(state)
    const index = nowAllow.indexOf(deleteType)
    if (index < 0) {
      return
    }

    commit(types.DELETE_USER_AllOW, deleteType)
  },
  updateShowLowUrl({ commit, state }, newType){

    commit(types.UPDATE_SHOW_LOW_URL, newType)
  },
  updateShowImage({ commit, state }, newType){

    commit(types.UPDATE_SHOW_IMAGE, newType)
  },
}

// mutations
const mutations = {
  [types.UPDATE_USER_AllOW] (state , data) {
    // clear cart
    localStorage.setItem("allow_v2",JSON.stringify(data));
    state.userAllow = data;
  },
  [types.ADD_USER_AllOW] (state , data) {
    // clear cart
    state.userAllow.push(data)

    saveSettingToStorge({userAllow:initAllAllowType().map(obj => { return { type: obj.type , show: state.userAllow.indexOf(obj.type) > -1 ? true : false } })})

  },
  [types.DELETE_USER_AllOW] (state , data) {
    // clear cart
    state.userAllow.splice(state.userAllow.indexOf(data), 1)
    saveSettingToStorge({userAllow:initAllAllowType().map(obj => { return { type: obj.type , show: state.userAllow.indexOf(obj.type) > -1 ? true : false } })})

  },
  [types.UPDATE_SHOW_LOW_URL] (state , data) {
    // clear cart
    state.showLowUrl = data
    saveSettingToStorge({showLowUrl:data})

  },
  [types.UPDATE_SHOW_IMAGE] (state , data) {
    // clear cart
    state.showImage = data
    saveSettingToStorge({showImage:data})

  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
