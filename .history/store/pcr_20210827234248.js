export const state = () => ({
  pcrData : {},
  parseData:{}
})

export const mutations = {
  setData(state,pcrData){
    state.pcrData = pcrData
  },
  setParseData(state, parseData){
    state.parseData = parseData
    console.log(state.parseData)
  }
}
export const actions = {
  fetchPcrData({commit}, payload){
    commit("setData", payload)
  },
  setParseData({commit}, payload){
    console.log(payload)
    const parseData = []
    for(let i = 0; i < payload.length;i++){
      if(payload[i]["PCR 検査実施件数"] === null){
        payload[i]["PCR 検査実施件数"] = 0
      }
      parseData.push({
        pcr_positive_num:payload[i]["PCR 検査陽性者数"],
        pcr_test_num:payload[i]["PCR 検査実施件数"],
        date: payload[i][""]
      })
    }
    commit("setParseData", parseData)
  }
}