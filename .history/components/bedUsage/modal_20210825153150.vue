<template>
  <div>
    <vue-final-modal
      v-model="showModal"
      classes="flex justify-center items-center text-white mx-"
    >
      <div class="p-4 bg-gray-900 rounded">
        <p class="text-2xl m-7 text-center">
          {{ modalData.prefecture_name }} 病床使用率{{
            modalData.use_bed_rate_hospitalization
          }}%
        </p>
        <div class="modalContent">
          <Chart :chart-data="da" />
          <div class="mt-5">

          <p>PCR検査要請者数：{{ modalData.per_positive }}人</p>
          <p>うち重傷者数：{{ modalData.num_severe }}人</p>
          <p>
            入院患者受入確保病床：{{ modalData.beds_num_hospitalization }}床
          </p>
          <p>入院患者数：{{ modalData.num_hospitalization }}</p>
          <p class="hover:text-red-300 underline">
            <a :href="modalData.source">出典：{{ modalData.source }}</a>
          </p>
          <p>最終更新日：{{ modalData.updateDate }}</p>
          </div>
        </div>
      </div>
    </vue-final-modal>
  </div>
</template>
<script>
import Chart from './Chart1'
// import Chart from '../prefectures/Chart.js'
export default {
  components: {
    Chart,
  },
  props: {
    modalData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      da: {},
      showModal: false,
    }
  },
  beforeUpdate() {
    this.fillData()
  },
  methods: {
    show() {
      this.showModal = true
    },
    fillData() {
      this.da = {
        labels: ['推定病床残数', '入院者数'],
        datasets: [
          {
            backgroundColor: [
              '#333333',
              '#ff3300',
            ],
            data: [
              Number(this.modalData.beds_num_hospitalization) -
                Number(this.modalData.num_hospitalization),
              Number(this.modalData.num_hospitalization),
            ],
          },
        ],
      }
    },
  },
}
</script>