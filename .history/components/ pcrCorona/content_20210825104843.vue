<template>
  <div>

  </div>
</template>

<script>
// import LineChart from "./LineChart"
export default{
  // components:{
  //   LineChart
  // },
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
        labels: ['推定病床残数', '入院者数'],
        datasets: [
          {
            backgroundColor: [
              'rgba(255, 60, 60, 0.3)',
              'rgba(60, 60, 60, 0.3)',
            ],
            data: [
            ],
          },
        ],
      }
    }
  }
}
</script>
