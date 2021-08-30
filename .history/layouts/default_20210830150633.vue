<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
// import Papa from 'papaparse'

export default{
  async fetch({store}){
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
        console.log("default", pa)
        store.dispatch("fetchTotalData", payload)
      })
  }
}
</script>
