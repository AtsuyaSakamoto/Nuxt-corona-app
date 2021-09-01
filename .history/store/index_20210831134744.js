export const state = () => ({
  total : {},
  totalDeath:{}
})

export const getters = {
  t:(state) => state.totalDeath.slice(-1)
}

export const mutations = {
  setTotalData(state,totalData){
    state.total = totalData
  },
  setTotalDeath(state,totalDeath){
    state.totalDeath = totalDeath
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