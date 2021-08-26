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
      positive_num:[],
      pcr_date
    }
  },
  created(){
      this.pcrDataArray.forEach(data=>{
        this.positive_num.push(data.adpatients)
      })
      console.log(this.positive_num)
      console.log("create")

    },

  mounted(){
    this.fillData()
  },
  methods:{
    fillData(){
      console.log("filldata")
      this.dataArry ={
        labels: [],
        datasets: [
          {
            backgroundColor: [
              'rgba(255, 60, 60, 0.3)',
            ],
            data: this.positive_num,
            label:["PCR検査数"]
          },
        ],
      }
    },
  }
}
</script>
