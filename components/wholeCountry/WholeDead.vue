<template>
  <p> </p>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  data(){
    return {
      wholeData:[]
    }
  },
  computed: {
    ...mapGetters(['wholeCountryData']),
  },
  created() {
    this.wholeCountryData = this.wholeData
  }
}
</script>