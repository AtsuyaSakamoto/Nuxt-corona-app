<template>
  <div class="bg-gray-500">
    <LineChart :chart-data="dataArry" :options="op"/>
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
                    scales: {                          // 軸設定
                xAxes: [                           // Ｘ軸設定
                    {
                        scaleLabel: {                 // 軸ラベル
                            display: true,                // 表示設定
                            labelString: '横軸ラベル',    // ラベル
                            fontColor: "red",             // 文字の色
                            fontSize: 16                  // フォントサイズ
                        },
                        gridLines: {                   // 補助線
                            color: "rgba(255, 0, 0, 0.2)", // 補助線の色
                        },
                        ticks: {                      // 目盛り
                            fontColor: "red",             // 目盛りの色
                            fontSize: 14                  // フォントサイズ
                        }
                    }
                ],
                yAxes: [                           // Ｙ軸設定
                    {
                        scaleLabel: {                  // 軸ラベル
                            display: true,                 // 表示の有無
                            labelString: '縦軸ラベル',     // ラベル
                            fontFamily: "sans-serif",
                            fontColor: "blue",             // 文字の色
                            fontFamily: "sans-serif",
                            fontSize: 16                   // フォントサイズ
                        },
                        gridLines: {                   // 補助線
                            color: "rgba(0, 0, 255, 0.2)", // 補助線の色
                            zeroLineColor: "black"         // y=0（Ｘ軸の色）
                        },
                        ticks: {                       // 目盛り
                            min: 0,                        // 最小値
                            max: 25,                       // 最大値
                            stepSize: 5,                   // 軸間隔
                            fontColor: "blue",             // 目盛りの色
                            fontSize: 14                   // フォントサイズ
                        }
                    }
                ]
            }
      }
    },
  }
}
</script>
