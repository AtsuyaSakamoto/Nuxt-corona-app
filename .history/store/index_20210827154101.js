export const state = () => ({
  total : {},
  totalDeath:{}
})

e

export const mutations = {
  setTotalData(state,totalData){
    state.total = totalData
    console.log(state.total)
    console.log("トータル")
  },
  setTotalDeath(state,totalDeath){
    state.totalDeath = totalDeath
    console.log(state.totalDeath)
    console.log("total death")
  }
}
export const actions = {
  fetchTotalData({commit}, payload){
    commit("setTotalData", payload)
  },
  fetchTotalDeath({commit}, payload){
    commit("setTotalDeath", payload)
  }
}