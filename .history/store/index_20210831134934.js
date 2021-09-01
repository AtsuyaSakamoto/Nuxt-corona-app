export const state = () => ({
  totalInfection : {},
  totalDeath:{}
})

export const getters = {
  totalInfection:(state) => state.totalInfection,
  totalDeath: state => state.to
}

export const mutations = {
  setTotalData(state,totalData){
    state.totalInfection = totalData
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