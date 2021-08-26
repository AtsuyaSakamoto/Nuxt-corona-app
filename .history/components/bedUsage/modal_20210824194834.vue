<template>
  <div>
        <vue-final-modal v-model="showModal" classes="flex justify-center items-center">
        <div class="p-4 bg-white rounded">
          <h1 class="text-2xl mx-7 text-center">{{modalData.prefecture_name}}  病床使用率{{modalData.use_bed_rate_hospitalization}}%</h1>
          <Chart/>
          <div class="modalContent">
            <h2>PCR検査要請者数：{{modalData.per_positive}}人</h2>
            <h2>うち重傷者数：{{modalData.num_severe}}人</h2>
            <h2>入院患者受入確保病床：{{modalData.beds_num_hospitalization}}床</h2>
            <h2>入院患者数：{{modalData.num_hospitalization}}</h2>
            <h2 class="hover:text-red-300"><a :href="modalData.source">出典：{{modalData.source}}</a></h2>
            <h2>最終更新日：{{modalData.updateDate}}</h2>
          </div>
        </div>
    </vue-final-modal>
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
import Chart from "./chart.vue"
export default{
  extends:Pie,
  components:{
    Chart
  },
  props:{
    modalData:{
      type: Object,
      default: () => {}
    },
  },
    data(){
      return{
        showModal : false,
        chart:{
        labels:['推定病床残数', '入院者数'],
        datasets:[{
          backgroundColor:[
            'rgba(255, 60, 60, 0.3)',
            'rgba(60, 60, 60, 0.3)'
          ],
          // data:[Number(this.modalData.beds_num_hospitalization) - Number(this.modalData.num_hospitalization),Number(this.modalData.num_hospitalization)]
          data:[20,100]
        }]
        },
        options:{
          responsive: true,
          maintainAspectRatio: false,
        }
      }
    },
  methods:{
    show(){
      this.showModal = true
    }
  },
}
</script>