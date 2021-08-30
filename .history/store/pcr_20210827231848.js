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
    console.log(state.p)
  }
}
export const actions = {
  fetchPcrData({commit}, payload){
    commit("setData", payload)
  },
  setParseData({commit}, payload){
    console.log(payload.data)
    const parseData = []
    for(let i = 0; i < payload.data.length;i++){
      if(payload.data[i]["PCR 検査実施件数"] === null){
        payload.data[i]["PCR 検査実施件数"] = 0
      }
      parseData.push({
        pcr_positive_num:payload.data[i]["PCR 検査陽性者数"],
        pcr_test_num:payload.data[i]["PCR 検査実施件数"]
      })
    }
    commit("setParseData", parseData)
  }
}