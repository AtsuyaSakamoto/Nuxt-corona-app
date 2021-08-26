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
      dataArry:{},
      positive_num:[]
    }
  },
  beforeUpdate(){
    this.getPositiveData()
    this.fillData()
  },
  methods:{
    fillData(){
      this.dataArry ={
        labels: ['2020-04-01','2020-04-01','2020-04-01','2020-04-01','2020-04-01','2020-04-01','2020-04-01','2020-04-01','2020-04-01','2020-04-01','2020-04-01','2020-04-01','2020-04-01','2020-04-01','2020-04-01','2020-04-01','2020-04-01','2020-04-01','2020-04-01','2020-04-01',],
        datasets: [
          {
            backgroundColor: [
              'rgba(255, 60, 60, 0.3)',
              'rgba(60, 60, 60, 0.3)',
            ],
            data: [this.positive_num],
            label:["PCR検査数","陽性者数"]
          },
        ],
      }
    },
  }
}
</script>
