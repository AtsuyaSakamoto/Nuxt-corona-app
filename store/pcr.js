export const state = () => ({
  parseData: [],
  positive_num:[],
  pcr_test_date:[],
  pcr_test_num:[],
})

export const mutations = {
  setParseData(state, parseData) {
    
    state.parseData = parseData

    const  PositiveNumArry = []
    parseData.forEach(data=>{
      PositiveNumArry.push(Number(data.pcr_positive_num))
    })
    console.log(typeof(PositiveNumArry[1]))
    state.positive_num = PositiveNumArry

    const PcrTestNum = []
    parseData.forEach(data=>{
      PcrTestNum.push(Number(data.pcr_test_num))
    })
    state.pcr_test_num = PcrTestNum

    const PcrTestDate = []
    parseData.forEach(data=>{
      PcrTestDate.push(data.date)
    })
    state.pcr_test_date = PcrTestDate
  },
}

export const getters = {
  indexPcrData: (state) => {
    const necessaryData = state.parseData.slice(-7)
    const payload = {
      positive_rate:
        Math.floor(
          (necessaryData[6].pcr_positive_num / necessaryData[6].pcr_test_num) *
            100 *
            100
        ) / 100,
      positive_rate_yesterday:
        Math.floor(
          (necessaryData[5].pcr_positive_num / necessaryData[5].pcr_test_num) *
            100 *
            100
        ) / 100,
      positive_rate_oneWeekAgo:
        Math.floor(
          (necessaryData[0].pcr_positive_num / necessaryData[0].pcr_test_num) *
            100 *
            100
        ) / 100,
    }
    return payload
  },
  data: (state) => {
    return state.parseData
  },
}

export const actions = {
  setParseData({ commit }, payload) {
    const parseData = []
    for (let i = 0; i < payload.length; i++) {
      if (payload[i]['PCR 検査実施件数'] === null) {
        payload[i]['PCR 検査実施件数'] = 0
      }
      parseData.push({
        pcr_positive_num: payload[i]['PCR 検査陽性者数'],
        pcr_test_num: payload[i]['PCR 検査実施件数'],
        date: payload[i]['日付'],
      })
    }
    commit('setParseData', parseData)
  },
}
