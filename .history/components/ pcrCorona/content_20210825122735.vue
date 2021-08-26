<template>
  <div class="bg-gray-900 bg-opacity-95">
    <h1 class="text-white text-center text-3xl py-11">PCR検査数と陽性者数の推移</h1>
    <div class="mx-28 lg:mx-80">
    <LineChart :chart-data="dataArry" :options="options"/>
    </div>
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
      options:{},
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
        this.pcr_test_num.push(data.npatients)
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
        responsive: true,
        maintainAspectRatio: false,
                    scales: {                          // 軸設定
                xAxes: [                           // Ｘ軸設定
                    {
                        scaleLabel: {                 // 軸ラベル
                            display: true,                // 表示設定
                            fontColor: "white",             // 文字の色
                            fontSize: 16                  // フォントサイズ
                        },
                        gridLines: {                   // 補助線
                            color: "white", // 補助線の色
                        },
                        ticks: {                      // 目盛り
                            fontColor: "white",             // 目盛りの色
                        }
                    }
                ],
                yAxes: [                           // Ｙ軸設定
                    {
                        scaleLabel: {                  // 軸ラベル
                            display: true,                 // 表示の有無
                              min: 5,                        // 最小値
                            max: 10,                       // 最大値
                            fontFamily: "sans-serif",
                            fontColor: "white",             // 文字の色
                        },
                        gridLines: {                   // 補助線
                            color: "white", // 補助線の色
                            zeroLineColor: "black"         // y=0（Ｘ軸の色）
                        },
                        ticks: {                       // 目
                            fontColor: "white",             // 目盛りの色
                        }
                    }
                ]
            }
      }
    },
  }
}
</script>
