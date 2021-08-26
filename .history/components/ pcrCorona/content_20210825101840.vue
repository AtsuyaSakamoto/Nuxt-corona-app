<template>
  <h1>content{{pcrDataArray}}</h1>
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
