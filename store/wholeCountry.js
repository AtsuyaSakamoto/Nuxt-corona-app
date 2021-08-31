export const state = () => ({
  TotalDead: [],
  DailyDead: [],
  TotalData: [],
})

export const mutations = {
  setFetchTotalDead(state, fetchTotalDead) {
    state.TotalDead = fetchTotalDead
  },
  setFetchDailyDead(state, fetchDailyDead) {
    state.DailyDead = fetchDailyDead
  },
  setFetchTotalData(state, fetchTotalData) {
    state.TotalData = fetchTotalData
  },
}

export const actions = {
  setFetchTotalDead({ commit }, fetchTotalDead) {
    commit('setFetchTotalDead', fetchTotalDead)
  },
  setFetchDailyDead({ commit }, fetchDailyDead) {
    commit('setFetchDailyDead', fetchDailyDead)
  },
  setFetchTotalData({ commit }, fetchTotalData) {
    commit('setFetchTotalData', fetchTotalData)
  },
  
}

export const getters = {
  fetchTotalDead: (state) => {
    return state.TotalDead
  },
  fetchDailyDead: (state) => {
    return state.DailyDead
  },
  fetchTotalData: (state) => {
    return state.TotalData
  },
}