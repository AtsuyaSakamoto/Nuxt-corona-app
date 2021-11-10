<template>
  <div>
    <h1
      id="title"
      class="
        text-center text-sm
        sm:text-base
        md:text-xl
        lg:text-2xl
        text-white
        py-10
      "
    >
      都道府県別病床使用率（データ更新日：{{ dataArry[0].updateDate }}）
    </h1>
    <div class="modal">
      <Modal ref="modal" :modal-data="modalData" />
    </div>
    <div class="flex items-center justify-center">
      <div
        class="
          grid grid-cols-2
          gap-6
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-6 lg:mx-20
          xl:grid-cols-8 xl:mx-20
        "
      >
        <div v-for="(data, index) in dataArry" :key="data.id">
          <div
            id="card"
            class="relative py-1 px-1 rounded-md w-36 hover:bg-gray-700"
            :class="
              data.use_bed_rate_hospitalization > 100
                ? 'bg-gray-500'
                : data.use_bed_rate_hospitalization > 60
                ? 'bg-red-800'
                : data.use_bed_rate_hospitalization > 30
                ? 'bg-red-300'
                : 'bg-gray-300'
            "
            @click="show(index)"
          >
            <p class="mb-2 text-md font-medium text-white text-center text-lg">
              {{ data.prefecture_name }}
            </p>
            <p class="text-sm font-normal text-white text-center">
              {{ data.use_bed_rate_severe }}
            </p>
            <p class="text-sm font-normal text-white text-center">
              {{ data.num_hospitalization }}人/{{
                data.beds_num_hospitalization
              }}床
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-white py-9 underline text-xs text-center md:text-base">
      <a class="hover:text-red-500" href="https://www.stopcovid19.jp/"
        >療養状況等及び入院患者受入病床数等に関するデータ情報提供:新型コロナウイルス対策ダッシュボード</a
      >
      <br />
      <a
        class="hover:text-red-300 mt-1"
        href="https://www.mhlw.go.jp/stf/seisakunitsuite/newpage_00023.html"
        >療養状況等及び入院患者受入病床数等に関する調査についての元データ情報提供:厚生労働省</a
      >
    </div>
  </div>
</template>
<script>
import Modal from './Modal.vue'
export default {
  components: {
    Modal,
  },
  props: {
    dataArry: {
      type: Array,
    },
  },
  data() {
    return {
      modalData: {},
    }
  },
  methods: {
    show(index) {
      this.modalData = this.dataArry[index]
      this.$refs.modal.show()
    },
  },
}
</script>
