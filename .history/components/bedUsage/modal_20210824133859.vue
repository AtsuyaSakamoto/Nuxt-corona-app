<template>
  <div>
        <vue-final-modal v-model="showModal" classes="flex justify-center items-center">
        <div class="p-4 bg-white rounded">
          <h1 class="text-2xl mx-7">{{modalData.prefecture_name}}  病床使用率{{modalData.use_bed_rate_hospitalization}}%</h1>
          <div class="modal">

          </div>
          <h2>{{modalData.per_positive}}</h2>
          <p>hello</p>
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