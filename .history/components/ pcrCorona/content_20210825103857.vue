<template>
  <div>

  </div>
</template>

<script>
// import LineChart from "./LineChart"
export default{
  components:{
    LineChart
  },
  props:{
    pcrDataArray:{
      type: Array,
      default:() => {}
    }
  },
  data(){
    return{
      dataArry:{}
    }
  },
  mounted(){
    this.fillData()
  },
  methods:{
    fillData(){
      this.dataArry ={

      }
    }
  }
}
</script>
