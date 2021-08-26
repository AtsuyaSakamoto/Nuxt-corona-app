<template>
  <h1>PCR検査</h1>
</template>

<script>
import axios from "axios"
export default{
  async fetch({store}){
    await axios.get('')
    .then(res => {
      store.dispatch("pcr/fetchPcrData",res.data)
    })
  }
}
</script>