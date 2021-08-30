

export const state = () => ({
  total : {},
  totalDeath:{}
})

export const mutations = {
  setData(state,pcrData){
    state.pcrData = pcrData
  }
}
export const actions = {
  fetchTotalData({commit}, payload){
    commit("setTotalData", payload)
  }
}