<template>
  <Content :pcr-data-array="pcrDataArray" :pcr-parse-data="pcrParseData"/>
</template>
<script>
import Content from '../../components/pcrCorona/content.vue'
export default {
  components: {
    Content,
  },
  asy
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
