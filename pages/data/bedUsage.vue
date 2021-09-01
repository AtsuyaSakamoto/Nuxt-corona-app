<template>
  <div class="bg-gray-900">
    <Content  :data-arry = "bedUsage"/>
  </div>
</template>

<script>
import axios from "axios"
import Content from '../../components/bedUsage/Content.vue'

export default{
  components:{
    Content
  },
  async fetch({store}){
    try{
      await axios.get('https://www.stopcovid19.jp/data/covid19japan_beds/latest.json').then(res => {
        store.dispatch("bedusage/fetchBedsUsageData", res.data)
      })
    } catch(error){
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
  computed:{
    bedUsage(){
      return this.$store.state.bedusage.bedUsageData
    }
  }
}
</script>