

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
  fetchTData({commit}, payload){
    commit("setData", payload)
  }
}