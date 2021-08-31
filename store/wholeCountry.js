export const state = () => ({
  wholeCountryData: [],
})

export const mutations = {
  setWholeCountryData(state, wholeCountryData) {
    state.wholeCountryData = wholeCountryData
  },
}

export const actions = {
  setWholeCountryData({ commit }, wholeCountryData) {
    commit('setWholeCountryData', wholeCountryData)
  },
}

export const getters = {
  wholeCountryData: (state) => {
    return state.wholeCountryData
  },
}
