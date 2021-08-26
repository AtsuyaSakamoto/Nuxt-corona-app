<template>
  <div class="m-10 border-2 border-gray-200">
    <h1 class="text-center m-5 text-xl">都道府県別病床使用率(データ更新日：{{dataArry[0].updateDate}})</h1>
      <div class="grid grid-cols-2 gap-6 mb-8 sm:grid-cols-4 lg:grid-cols-6 sm:mx-10">
      <div v-for="(data, index) in dataArry" :key="index">
      <div class="flex items-center p-4  border-2 border-gray-200 rounded-md"
      :class="data.use_bed_rate_hospitalization > 100? 'bg-gray-500':
      data.use_bed_rate_hospitalization > 60?
      'bg-red-800':
      data.use_bed_rate_hospitalization > 30?
      'bg-red-300':'bg-red-100'
      "
      >
        <div>
          <p class=" text-center mb-2 text-md font-medium text-gray-900 whitespace-no-wrap">{{data.prefecture_name}}</p>
          <p class="text-sm font-normal text-gray-800 text-center whitespace-no-wrap">{{data.use_bed_rate_hospitalization}}%</p>
          <p class="text-sm font-normal text-gray-800 text-center whitespace-no-wrap">{{data.num_hospitalization}}人/{{data.beds_num_hospitalization}}床</p>
        </div>
      </div>
      </div>

  </div>
    <!-- <Modal v-if="showModal" :val="postItem" @close="closeModal"></Modal> -->
  </div>
</template>

<script>
export default{
  props: {
    dataArry:{
      type: Array,
      default: () => []
    }
  }
}
</script>