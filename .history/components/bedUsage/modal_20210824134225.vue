<template>
  <div>
        <vue-final-modal v-model="showModal" classes="flex justify-center items-center">
        <div class="p-4 bg-white rounded">
          <h1 class="text-2xl mx-7">{{modalData.prefecture_name}}  病床使用率{{modalData.use_bed_rate_hospitalization}}%</h1>
          <div class="modalContent">
          <h2>PCR検査要請者数：{{modalData.per_positive}}人</h2>
          <h2>うち重傷者数：{{modalData.num_severe}}人</h2>
          <h2>入院患者受入確保病床：{{modalData.per_positive}}床</h2>
          <h2>入院患者数：{{modalData.per_positive}}</h2>
          <h2>出典：{{modalData.per_positive}}</h2>
          <h2>最終更新日：{{modalData.per_positive}}人</h2>
          </div>
        </div>
    </vue-final-modal>
  </div>
</template>

<script>
export default{
  props:{
    modalData:{
      type: Object,
      default: () => {}
    },
  },
  data(){
    return{
      showModal : false
    }
  },
  methods:{
    show(){
      this.showModal = true
    }
  },
}
</script>