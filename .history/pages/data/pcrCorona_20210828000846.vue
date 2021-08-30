<template>
  <Content :pcr-data-array="pcrDataArray" :pcr-parse-data="pcrParseData"/>
</template>
<script>
// import axios from 'axios'
// import Papa from 'papaparse'
import Content from '../../components/pcrCorona/content.vue'
export default {
  components: {
    Content,
  },
  // async fetch({ store }) {

  // },
  computed: {
    pcrDataArray() {
      return this.$store.state.pcr.pcrData
    },
    pcrParseData(){
      return this.$store.state.pcr.parseData
    }
  },
}
</script>
