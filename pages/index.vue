<template>
  <Content
    :infection-data="infectionData"
    :death-data="deathData"
    :pcr-data="pcrData"
    :whole-country-bed-usage="wholeCountryBedUsage"
  />
</template>

<script>
import axios from 'axios'
import Papa from 'papaparse'
import Content from '../components/topPage/Content.vue'

export default {
  components: {
    Content,
  },
  async fetch({ store, error }) {
    try {
      // 累積感染者数
      await axios
        .get(
          'https://data.corona.go.jp/converted-json/covid19japan-npatients.json'
        )
        .then((res) => {
          const necessaryData = res.data.slice(-7)
          const payload = {
            latestDate: necessaryData[6].date,
            totalInfection: necessaryData[6].npatients,
            comparison_yesterday:
              necessaryData[6].npatients - necessaryData[5].npatients,
            comparison_oneWeek:
              necessaryData[6].npatients - necessaryData[0].npatients,
          }
          store.dispatch('fetchTotalData', payload)
        })
      // 累積死亡者
      await axios
        .get(
          'https://data.corona.go.jp/converted-json/covid19japan-ndeaths.json'
        )
        .then((res) => {
          const necessaryData = res.data.slice(-7)
          const payload = {
            totalDeath: necessaryData[6].ndeaths,
            comparison_yesterday:
              necessaryData[6].ndeaths - necessaryData[5].ndeaths,
            comparison_oneWeek:
              necessaryData[6].ndeaths - necessaryData[0].ndeaths,
          }
          store.dispatch('fetchTotalDeath', payload)
        })
      // PCR 検査数
      await axios
        .get('https://www.stopcovid19.jp/data/mhlw_go_jp/opendata/covid19.csv')
        .then((res) => {
          const parseData = Papa.parse(res.data, {
            header: true,
            TransformHeader(header) {
              if (header === 'PCR 検査陽性者数') {
                return 'pcr_positive_num'
              } else if (header === 'PCR 検査実施件数') {
                return 'pcr_test_num'
              } else if (header === '日付') {
                return 'date'
              }
            },
          })
          store.dispatch('pcr/setParseData', parseData.data)
        })
      // 病床使用率
      await axios
        .get('https://www.stopcovid19.jp/data/covid19japan_beds/latest.json')
        .then((res) => {
          store.dispatch('bedusage/fetchBedsUsageData', res.data)
        })
    } catch (err) {
      error({
        statusCode: err.response.status,
      })
    }
  },
  head: {
    title: 'コロナ情報サイト',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description',
      },
    ],
  },
  computed: {
    infectionData() {
      return this.$store.state.totalInfection
    },
    deathData() {
      return this.$store.state.totalDeath
    },
    pcrData() {
      return this.$store.getters['pcr/indexPcrData']
    },
    wholeCountryBedUsage() {
      return this.$store.getters['bedusage/wholeCountryBedUsage']
    },
  },
}
</script>
