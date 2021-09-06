<template>
  <Content 
  :positive-num="positiveNum"
  :pcr-test-date="pcrTestDate"
  :pcr-test-num="pcrTestNum"
  />
</template>

<script>
import axios from 'axios'
import Papa from 'papaparse'
import { mapState } from "vuex"
import Content from '../../components/pcrCorona/content'
export default {
  name:"PcrCorona",
  components: {
    Content,
  },
  async fetch({ store, error }) {
    try {
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
          content: '新型コロナウイルスのPCR検査数と陽性者数を掲載するページ。',
        },
        // ページのキーワード
        {
          hid: 'keyword',
          name: 'keyword',
          content: '新型コロナウイルス,日本,PCR検査,陽性者数,PCR検査数,PCR陽性率',
        },
        { hid: 'og:type', property: 'og:type', content: ' website' },
        { hid: 'og:title', property: 'og:title', content: "らくらくコロナ" },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '新型コロナウイルスのPCR検査数と陽性者数を掲載しています。',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://rakucoro-sakaaaa.vercel.app/data/pcrcorona',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: "https://image.freepik.com/free-vector/covid-19-red-logo-template_23-2148501246.jpg",
        },
      ],
    }
    },
  computed: 
    mapState({
      positiveNum: state => state.pcr.positive_num,
      pcrTestDate: state => state.pcr.pcr_test_date,
      pcrTestNum: state => state.pcr.pcr_test_num,
    }),
}
</script>