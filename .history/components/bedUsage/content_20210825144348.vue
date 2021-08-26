<template>
  <div>

    <h1 class="text-center text-2xl text-white py-10 ">
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
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-6
        "
      >
        <div v-for="(data, index) in dataArry" :key="data.id">
          <div
            class="relative py-2 px-2 rounded-md w-36 my-1"
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