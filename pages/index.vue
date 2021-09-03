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
  head() {
    return{
      title: "らくらくコロナ",
      meta: [
        // ページの説明
        {
          hid: 'description',
          name: 'description',
          content: '新型コロナウイルスの日本国内感染状況',
        },
        // ページのキーワード
        {
          hid: 'keyword',
          name: 'keyword',
          content: '新型コロナウイルス,日本,病床使用率,類券感染者数,累計死亡者数,PCR陽性率',
        },
        { hid: 'og:type', property: 'og:type', content: ' website' },
        { hid: 'og:title', property: 'og:title', content: "らくらくコロナ" },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '新型コロナウイルスの国内状況を掲載するサイトです。',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://rakucoro-sakaaaa.vercel.app/',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: "https://image.freepik.com/free-vector/covid-19-red-logo-template_23-2148501246.jpg",
        },
      ],
    }
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
