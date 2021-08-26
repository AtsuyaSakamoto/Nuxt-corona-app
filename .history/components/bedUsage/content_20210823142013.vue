<template>
  <div class="m-10">
    <div>都道府県別病床使用率(データ更新日：{{ graphData[0].update }})</div>
    <div class="grid grid-cols- gap-6">

    </div>
    <!-- <Modal v-if="showModal" :val="postItem" @close="closeModal"></Modal> -->
  </div>
</template>

<script>
export default{
  props:{
    type: Array,

  }
}
</script>