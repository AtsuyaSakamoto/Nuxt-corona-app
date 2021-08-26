<template>
<div>
  <h1>病床使用率</h1>
  {{bedUsage}}
</div>
</template>

<script>
import axios from "axios"
// import Content from '../../components/data/beds/Content.vue'
export default{
  // components:{
  //   Content
  // },
  async fetch({store}){
    await axios.get('https://www.stopcovid19.jp/data/covid19japan_beds/latest.json')
    .then(res => {
    store.dispatch("bedUsage/fetchBedsUsageData", res.data)
    })
  },
  computed:{
    bedUsage(){
      return this.$store.state.bedUsage.bedUsage
    }
  }
}
</script>