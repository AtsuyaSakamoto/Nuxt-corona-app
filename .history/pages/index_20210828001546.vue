<template>
<div>
  <h1>index{{infectionData}}</h1>
  <p>{{deathData}}</p>
  <p>{{pcrData}}</p>
</div>
</template>

<script>
import axios from 'axios'
import Papa from 'papaparse'
export default{
    async fetch({ store }) {
      await axios
      .get(
        'https://data.corona.go.jp/converted-json/covid19japan-npatients.json'
        // 累積感染者数
      )
      .then((res) => {
        const necessaryData = res.data.slice(-7)
        const payload = {
          totalInfection: necessaryData[6].npatients,
          comparison_yesterday: (necessaryData[6].npatients) - (necessaryData[5].npatients),
          comparison_oneWeek: (necessaryData[6].npatients) - (necessaryData[0].npatients)
        }
        store.dispatch("fetchTotalData", payload)
      })

      await axios
      .get("https://data.corona.go.jp/converted-json/covid19japan-ndeaths.json")
        // 累積死亡者
      .then(res => {
        const necessaryData = res.data.slice(-7)
        const payload = {
          totalDeath: necessaryData[6].ndeaths,
          comparison_yesterday: (necessaryData[6].ndeaths) - (necessaryData[5].ndeaths),
          comparison_oneWeek: (necessaryData[6].ndeaths) - (necessaryData[0].ndeaths)
        }
        store.dispatch("fetchTotalDeath",payload)
      })

      // PCR検査データの取得
      await axios
      .get(
        'https://data.corona.go.jp/converted-json/covid19japan-npatients.json'
      )
      .then((res) => {
        store.dispatch('pcr/fetchPcrData', res.data)
      })
      
  // 病床使用率データの取得
    await axios.get('https://www.stopcovid19.jp/data/covid19japan_beds/latest.json')
    .then(res => {
    store.dispatch("bedusage/fetchBedsUsageData", res.data)
    })

      await axios
      .get(
        'https://www.stopcovid19.jp/data/mhlw_go_jp/opendata/covid19.csv'
      )
      .then((res) => {
        // store.dispatch('pcr/fetchPcrData', res.data)
      const parseData = Papa.parse(res.data,{
        // csvヘッダーをプロパティに変更
      header: true,
      // 文字列を数値に変換
      dynamicTyping: true,
      // 文字化け防止
      encoding: 'Shift-JIS',
      // エラーを取り除く
      skipEmptyLines: true,
      TransformHeader(header){
        if(header === "PCR 検査陽性者数"){
          return "pcr_positive_num"
        }else if(header === "PCR 検査実施件数"){
          return "pcr_test_num"
        }else if(header === "日付"){
          return "date"
        }
      }
      })
      store.dispatch("pcr/setParseData", parseData.data)
      })
  },
  computed:{
    infectionData(){
      return this.$store.state.total
    },
    deathData(){
      return this.$store.state.totalDeath
    },
    pcrData(){
      const necessaryData = this.$store.state.pcr.parseData.slice(-7)
      const payload = {
        positive_rate: necessaryData[6].
      }
    return necessaryData
    }
  }
}
</script>