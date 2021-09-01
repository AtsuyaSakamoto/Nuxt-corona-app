<template>
  <div class="bg-gray-900 bg-opacity-95 text-white">
    <h1 class="text-center text-xl sm:2xl  py-11">PCR検査数と陽性者数の推移</h1>
    <div class="mr-9 sm:mx-12 md:mx-32 lg:mx-52 xl:mx-72">
      <LineChart :chart-data="chartDataArry" :options="options"/>
    </div>
    <h2 class="mt-5 pb-10 text-center underline text-xs sm:text-base"><a href="https://www.mhlw.go.jp/stf/covid-19/open-data.html" class="whitespace-no-wrap">PCR検査数と陽性者数の情報提供：厚生労働省オープンデータ</a></h2>
  </div>
</template>


<script>
import LineChart from "./LineChart"
export default{
  components:{
    LineChart
  },
  props:{
    pcrParseData:{
      type: Array,
      default:() => {}
    }
  },
  data(){
    return{
      chartDataArry:{},
      options:{},
      positive_num:[],
      pcr_test_date:[],
      pcr_test_num:[],
    }
  },
  created(){
      this.pcrParseData.forEach(data=>{
        this.pcr_test_date.push(data.date)
      })
      this.pcrParseData.forEach(data=>{
        this.positive_num.push(data.pcr_positive_num)
      })
      this.pcrParseData.forEach(data=>{
        this.pcr_test_num.push(data.pcr_test_num)
      })
    },

  mounted(){
    this.fillData()
  },
  methods:{
    fillData(){
      this.chartDataArry ={
        labels: this.pcr_test_date,
        datasets: [
          {
            backgroundColor: [
              'rgba(235, 204, 0, 0.3)',
            ],
            color:["#fff"],
            data: this.pcr_test_num,
            label:["PCR検査数"]
          },
          {
            backgroundColor: [
              'rgba(255, 60, 60, 0.3)',
            ],
            data: this.positive_num,
            label:["陽性者数"]
          },
        ],
      }
      this.options ={
        // responsive: true,
        maintainAspectRatio: false,
        scales: { // 軸設定
          xAxes: [  // Ｘ軸設定
            {
            scaleLabel: {  // 軸ラベル
            display: true,  // 表示設定
            fontColor: "white", // 文字の色
            },
            ticks: { fontColor: "white"} // メモリ
            }
          ],
          yAxes: [  // Ｙ軸設定
            {
              scaleLabel: {    // 軸ラベル
              display: true,  // 表示の有無
              fontColor: "white", // 文字の色
              },
              gridLines: {  // 補助線
                color: "white", // 補助線の色
                // zeroLineColor: "black" // y=0（Ｘ軸の色）
              },
              ticks: { fontColor: "white"}
            }
          ]
        }
      }
    }
  }
}
</script>
