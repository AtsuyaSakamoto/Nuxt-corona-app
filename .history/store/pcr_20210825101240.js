export const state = () => ({
  pcrData : {}
})

export const mutations = {
  setData(state,pcrData){
    state.pcrData = pcrData
    console.log(state.pcrData)
  }
}
export const actions = {
  fetchPcrData({commit}, payload){
    commit("setData", payload)
  }
}