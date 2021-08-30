export const state = () => ({
  pcrData : {},
  parseData:{}
})

export const mutations = {
  setData(state,pcrData){
    state.pcrData = pcrData
  }
}
export const actions = {
  fetchPcrData({commit}, payload){
    commit("setData", payload)
  },
  setParseData({commit}, payload){
    const parseData = []
    
  }
}