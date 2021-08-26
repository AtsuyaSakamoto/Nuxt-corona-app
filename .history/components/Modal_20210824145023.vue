<template>
  <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container">
          <p>{{ val.prefecture }}病床使用率{{ val.use_bed_rate }}(参考)</p>
          <p>推定病床残数：{{ val.secure_bed - val.inpatient }}床</p>
          <p>入院者数：{{ val.inpatient }}人</p>
          <p><ChartPie :chartdata="chartdata" :options="options" /></p>
          <p>PCR検査陽性者数：{{ val.pcr_positive }}人</p>
          <p>うち重傷者数： {{ val.injured }}人</p>
          <p>入院患者受入確保病床：{{ val.secure_bed }}床</p>
          <p>入院者数：{{ val.inpatient }}人</p>
          <p>出典：{{ val.source }}</p>

          <!-- <button @click="$emit('close')">OK</button> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ChartPie from './ChartPie.vue'
export default {
  // components: ChartPie,

  props: {
    val: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      chartdata: {
        labels: ['推定病床残数', '入院者数'],

        datasets: [
          {
            label: ['累計感染者数'],
            backgroundColor: '#f87979',
            borderColor: '#FFFFFF',
            borderWidth: 3,
            data: [3, 33],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 70%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
</style>
