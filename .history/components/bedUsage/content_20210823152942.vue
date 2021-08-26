<template>
  <div class="m-10">
    <h1 class="text-center mb-5">都道府県別病床使用率(データ更新日：</h1>
      <div class="grid grid-cols-2 gap-6 mb-8 sm:grid-cols-4 lg:grid-cols-6 sm:mx-10">
      <!-- Card 1 -->
      <div v-for="(data, index) in dataArry" :key="index">
      <div class="flex items-center p-4  border-2 border-gray-200 rounded-md"
      :class="data.data.use_bed_rate_hospitalization > 100? 'bg-gray-500':
      data.data.use_bed_rate_hospitalization > 70?
      'bg-red-800':
      data.data.use_bed_rate_hospitalization > 30?
      
      "
      >
        <div>
          <p class=" text-center mb-2 text-md font-medium text-gray-900">{{data.prefecture_name}}</p>
          <p class="text-sm font-normal text-gray-800 text-center">{{data.use_bed_rate_hospitalization}}%</p>
          <p class="text-sm font-normal text-gray-800 text-center">{{data.num_hospitalization}}人 / {{data.beds_num_hospitalization}}床</p>
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