<template>
<div class="m-10 border-2 border-gray-200 bg-white">
    <h1 class="text-center m-5 text-xl">都道府県別病床使用率(データ更新日：{{dataArry[0].updateDate}})</h1>
<div>
  <Modal ref="modal" :modal-data="modalData" :show-modal="showModal" :chart-data="chartData :options="options"/>
</div>
<div class="flex items-center justify-center">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        <div v-for="(data, index) in dataArry" :key="data.id">

        <div class="relative bg-white py-2 px-2 rounded-xl w-52 my-1"
        :class="data.use_bed_rate_hospitalization > 100? 'bg-gray-500':
      data.use_bed_rate_hospitalization > 60?
      'bg-red-800':
      data.use_bed_rate_hospitalization > 30?
      'bg-red-300':'bg-red-100'
      "
      @click="show(index)"
      >
            <div>
              <p class="mb-2 text-md font-medium text-gray-900 text-center text-lg">{{data.prefecture_name}}</p>
            <p class="text-sm font-normal text-gray-800 text-center">{{data.use_bed_rate_hospitalization}}%</p>
            <p class="text-sm font-normal text-gray-800 text-center">{{data.num_hospitalization}}人/{{data.beds_num_hospitalization}}床</p>
            </div>
        </div>
        </div>
    </div>
    <!-- <div class="flex justify-center items-center h-screen">
    <vue-final-modal v-model="showModal" classes="flex justify-center items-center">
        <div class="p-4 bg-white rounded text-2xl">Hello, world!</div>
    </vue-final-modal>
 
    <button class="m-2 p-2 border rounded" @click="showModal = true">Simple</button>
</div> -->
</div>
</div>

  
  
  
  
</template>

<script>
import Modal from "./modal.vue"
export default{
  components:{
    Modal
  },
  props: {
    dataArry:{
      type: Array,
      default: () => []
    }
  },
  data(){
    return{
      showModal: false,
      modalData: {},
      chartData: {},
      options:{}
    }
  },
  methods: {
    show(index) {
      this.$refs.modal.show()
      this.modalData = this.dataArry[index]
      this.chartData = {
        labels:['推定病床残数', '入院者数'],
        datasets:[{
          backgroundColor:[
            'rgba(255, 60, 60, 0.3)',
            'rgba(60, 60, 60, 0.3)'
          ],
          data:[this.modalData.beds_num_hospitalization - this.modalData.num_hospitalization,this.modalData.num_hospitalization]
        }]
      }
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
      }
  }
}
}
</script>