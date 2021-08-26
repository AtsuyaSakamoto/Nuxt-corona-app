<template>
  <h1>content{{pcr}}</h1>
</template>

<script>
export default{
  props:{
    pcrDataArray:{
      type: Array,
      default:() => {}
    }
  }
}
</script>
