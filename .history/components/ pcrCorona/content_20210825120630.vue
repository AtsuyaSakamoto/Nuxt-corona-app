<template>
  <div class="bg-gray-500">
    <div class="mx-36">
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
                    scales: {                          // 軸設定
                xAxes: [                           // Ｘ軸設定
                    {
                        scaleLabel: {                 // 軸ラベル
                            display: true,                // 表示設定
                            labelString: '横軸ラベル',    // ラベル
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
                            labelString: '縦軸ラベル',     // ラベル
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
