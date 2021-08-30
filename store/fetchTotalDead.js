export const state = () => ({
  TotalDead: [],
})

export const mutations = {
  setFetchTotalDead(state, fetchTotalDead) {
    state.TotalDead = fetchTotalDead
  },
}

export const actions = {
  setFetchTotalDead({ commit }, fetchTotalDead) {
    commit('setFetchTotalDead', fetchTotalDead)
  },
}

export const getters = {
  fetchTotalDead: (state) => {
    return state.fetchTotalDead
  },
}