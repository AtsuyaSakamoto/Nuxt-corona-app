

export const state = () => ({
  total : {},
  totalDeath:{}
})

export const mutations = {
  setTotalData(state,totalData){
    state.total = totalData
  }
}
export const actions = {
  fetchTotalData({commit}, payload){
    commit("setTotalData", payload)
  }
}