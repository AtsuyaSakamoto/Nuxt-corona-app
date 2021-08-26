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
  mounted(){
    this.fillData()
    console.log(this.positive_num)
  },
  methods:{
    fillData(){
      this.getPositiveData()
      this.dataArry ={
        labels: ['推定病床残数','推定病床残数','推定病床残数','推定病床残数','推定病床残数','推定病床残数','推定病床残数','推定病床残数','推定病床残数','推定病床残数',],
        datasets: [
          {
            backgroundColor: [
              'rgba(255, 60, 60, 0.3)',
              'rgba(60, 60, 60, 0.3)',
            ],
            data: [this.positive_num],
          },
        ],
      }
    },
    getPositiveData(){
      this.pcrDataArray.forEach(data=>{
        this.positive_num.push(data.adpatients)
      })
      console.log(this.positive_num)
    }

  }
}
</script>
