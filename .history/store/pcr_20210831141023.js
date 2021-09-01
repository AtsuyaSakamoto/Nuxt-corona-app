export const state = () => ({
  parseData:[]
})

export const mutations = {
  setParseData(state, parseData){
    state.parseData = parseData
  }
}

export const getters = {
  indexPcrData:(state) => {
    const necessaryData = state.pcr.parseData.slice(-7)
    const payload = {
      positive_rate: Math.floor((necessaryData[6].pcr_positive_num / necessaryData[6].pcr_test_num) * 100),
      positive_rate_yesterday: Math.floor((necessaryData[5].pcr_positive_num / necessaryData[5].pcr_test_num) * 100),
      positive_rate_oneWeekAgo: Math.floor((necessaryData[0].pcr_positive_num / necessaryData[0].pcr_test_num) * 100),
    }
    return payload
  },
  data : state => {
    state.parseData
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