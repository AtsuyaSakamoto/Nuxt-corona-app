export const state = () => ({
  total : {},
  totalDeath:{}
})

export const mutations = {
  setTotalData(state,totalData){
    state.total = totalData
    console.log(state.total)
  },
  setTotalDeath(state,totalDeath){
    state
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