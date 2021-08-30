

export const state = () => ({
  total : {},
  totalDeath:{}
})

export const mutations = {
  setTotalData(state,pcrData){
    state.pcrData = pcrData
  }
}
export const actions = {
  fetchTotalData({commit}, payload){
    commit("setTotalData", payload)
  }
}