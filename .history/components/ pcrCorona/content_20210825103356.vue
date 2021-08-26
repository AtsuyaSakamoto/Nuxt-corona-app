<template>
  <h1>content</h1>
</template>

<script>
import LineChart from "./LineChart"
export default{
  components:{
    LineChart
  }
  props:{
    pcrDataArray:{
      type: Array,
      default:() => {}
    }
  }
}
</script>
