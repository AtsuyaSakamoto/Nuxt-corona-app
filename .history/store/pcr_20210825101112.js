export const state = () => ({
  pcrData : {}
})

export const mutations = {
  setData(state)
}
export const actions = {
  fetchPcrData({commit}, payload){
    console.log(payload)
    commit("setData", payload)
  }
}