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
      pcr_test_date:[],
      pcr_test_num:[]
    }
  },
  created(){
      this.pcrDataArray.forEach(data=>{
        this.positive_num.push(data.adpatients)
      })
    this.pcrDataArray.forEach(data=>{
        this.pcr_test_date.push(data.date)
      })
      this.pcrDataArray.forEach(data=>{
        
      })
    },

  mounted(){
    this.fillData()
  },
  methods:{
    fillData(){
      this.dataArry ={
        labels: this.pcr_test_date,
        datasets: [
          {
            backgroundColor: [
              'rgba(255, 60, 60, 0.3)',
            ],
            data: this.positive_num,
            label:["PCR検査数"]
          },
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
