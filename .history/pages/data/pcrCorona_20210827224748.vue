<template>
  <Content :pcr-data-array="pcrDataArray" />
</template>
<script>
// import axios from 'axios'
import Content from '../../components/pcrCorona/content.vue'
export default {
  components: {
    Content,
  },
  async fetch({ store }) {
    await axios
      .get(
        'https://data.corona.go.jp/converted-json/covid19japan-npatients.json'
      )
      .then((res) => {
        store.dispatch('pcr/fetchPcrData', res.data)
      })
  },
  computed: {
    pcrDataArray() {
      return this.$store.state.pcr.pcrData
    },
  },
}
</script>
