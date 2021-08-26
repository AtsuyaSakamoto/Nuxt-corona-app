<template>
  <h1>PCR検査</h1>
</template>

<script>
import axios from "axios"
export default{
  async fetch({store}){
    await axios.get('https://data.corona.go.jp/converted-json/covid19japan-npatients.json')
    .then(res => {
      store.dispatch("pcr/fetchPcrData",res.data)
    })
  },
  computed:{
    pcrData(){
      return this.
    }
  }
}
</script>