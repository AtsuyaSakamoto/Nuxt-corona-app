<template>
<div class="bgre">
  <Content  :data-arry = "bedUsage"/>
</div>
</template>

<script>
import axios from "axios"
import Content from '../../components/bedUsage/content.vue'
export default{
  components:{
    Content
  },
  async fetch({store}){
    await axios.get('https://www.stopcovid19.jp/data/covid19japan_beds/latest.json')
    .then(res => {
    store.dispatch("bedusage/fetchBedsUsageData", res.data)
    })
  },
  computed:{
    bedUsage(){
      return this.$store.state.bedusage.bedUsage
    }
  }
}
</script>