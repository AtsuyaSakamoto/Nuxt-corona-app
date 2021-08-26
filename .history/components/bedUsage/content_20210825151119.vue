<template>
  <div>

    <h1 class="text-center text-ｌｇ text-white py-10 ">
      都道府県別病床使用率（データ更新日：{{ dataArry[0].updateDate }}）
    </h1>
    <div>
      <Modal ref="modal" :modal-data="modalData" />
    </div>
    <div class="flex items-center justify-center">
      <div
        class="
          grid grid-cols-2
          gap-6
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-6
          lg:mx-20
          xl:grid-cols-8
          xl:mx-20
        "
      >
        <div v-for="(data, index) in dataArry" :key="data.id">
          <div
            class="relative py-1 px-1 rounded-md w-36"
            :class="
              data.use_bed_rate_hospitalization > 100
                ? 'bg-gray-500'
                : data.use_bed_rate_hospitalization > 60
                ? 'bg-red-800'
                : data.use_bed_rate_hospitalization > 30
                ? 'bg-red-300'
                : 'bg-red-100'
            "
            @click="show(index)"
          >
            <p
              class="mb-2 text-md font-medium text-white text-center text-lg"
            >
              {{ data.prefecture_name }}
            </p>
            <p class="text-sm font-normal text-white text-center">
              {{ data.use_bed_rate_hospitalization }}%
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
    <div class="text-white m-5 py-9 underline text-xs text-center md:text-base">
    <p class="hover:text-red-300"><a href="https://www.stopcovid19.jp/">療養状況等及び入院患者受入病床数等に関するデータ情報提供:新型コロナウイルス対策ダッシュボード</a></p>
    <p class="mt-2 hover:text-red-300">療養状況等及び入院患者受入病床数等に関する調査についての元データ情報提供:厚生労働省</p>

    </div>
  </div>
</template>
<script>
import Modal from './modal.vue'
export default {
  components: {
    Modal,
  },
  props: {
    dataArry: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      modalData: {},
    }
  },
  methods: {
    show(index) {
      this.$refs.modal.show()
      this.modalData = this.dataArry[index]
    },
  },
}
</script>