<template>
  <div>
    <LineChart :chart-data="dataArry"/>
  </div>
</template>

<script>
import LineChart from "./LineChart"
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
        labels: ['推定病床残数'],
        datasets: [
          {
            backgroundColor: [
              'rgba(255, 60, 60, 0.3)',
              'rgba(60, 60, 60, 0.3)',
            ],
            data: [20,10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            ],
          },
        ],
      }
    }
  }
}
</script>
