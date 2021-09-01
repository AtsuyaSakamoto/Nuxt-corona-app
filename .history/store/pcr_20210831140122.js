export const state = () => ({
  parseData:[]
})

export const mutations = {
  setParseData(state, parseData){
    state.parseData = parseData
  }
}



export const actions = {
  setParseData({commit}, payload){
    const parseData = []
    for(let i = 0; i < payload.length;i++){
      if(payload[i]["PCR 検査実施件数"] === null){
        payload[i]["PCR 検査実施件数"] = 0
      }
      parseData.push({
        pcr_positive_num:payload[i]["PCR 検査陽性者数"],
        pcr_test_num:payload[i]["PCR 検査実施件数"],
        date: payload[i]["日付"]
      })
    }
    commit("setParseData", parseData)
  }
}