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
  computed: 
    mapState({
      positiveNum: state => state.pcr.positive_num,
      pcrTestDate: state => state.pcr.pcr_test_date,
      pcrTestNum: state => state.pcr.pcr_test_num,
    })
}
</script>