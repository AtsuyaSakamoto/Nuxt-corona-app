<template>
  <div>
    <h1 v-if="error.statusCode === 404">
      <h2></h2>
      <img src="/image/error.png" class="w-32 h-32">
      </h1>
    <h1 v-else>
      
      An error occurred
      
      </h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>

</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // エラーページ用のカスタムレイアウトを指定できます
  }
</script>