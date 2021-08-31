export const state = () => ({
  TotalDead: [],
})

export const mutations = {
  setFetchTotalDead(state, fetchTotalDead) {
    state.TotalDead = fetchTotalDead
  },
}

export const getters = {
  count: state => state.count,
}

export const actions = {
  setFetchTotalDead({ commit }, fetchTotalDead) {
    commit('setFetchTotalDead', fetchTotalDead)
  },
}