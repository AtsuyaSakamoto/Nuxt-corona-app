export const state = () => ({
  total : {},
  totalDeath:{}
})

export const mutations = {
  setTotalData(state,totalData){
    state.total = totalData
    console.log(state.total)
  }
}
export const actions = {
  fetchTotalData({commit}, payload){
    commit("setTotalData", payload)
  }
}