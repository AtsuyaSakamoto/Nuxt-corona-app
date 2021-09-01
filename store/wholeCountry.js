export const state = () => ({
  TotalDead: [],
  TotalData: [],
})

export const mutations = {
  setFetchTotalDead(state, fetchTotalDead) {
    state.TotalDead = fetchTotalDead
  },
  setFetchTotalData(state, fetchTotalData) {
    state.TotalData = fetchTotalData
  },
}

export const actions = {

  setFetchTotalDead({ commit }, fetchTotalDead) {
    commit('setFetchTotalDead', fetchTotalDead)
  },
  setFetchTotalData({ commit }, fetchTotalData) {
    commit('setFetchTotalData', fetchTotalData)
  },
}

export const getters = {
  fetchTotalDead: (state) => {
    return state.TotalDead
  },
  fetchTotalData: (state) => {
    return state.TotalData
  },
  fetchDailyDead:(state) => {
    const dead = []
    const array = []
    for(let i = 0 ; i < state.TotalDead.length ; i++){
      dead.push(state.TotalDead[i].ndeaths)
    }
    for(let i = 0 ; i < dead.length ; i++){
      if(i !== 0){
        array.push(dead[i] - dead[i - 1])
      }
    }
    return array
  },
}


