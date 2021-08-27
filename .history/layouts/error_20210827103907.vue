<template>
  <div class="bg-gray-50">
    <h1 v-if="error.statusCode === 404" class="text-center mt-10 mx-3 border-2 border-gray-400 p-2">
      <h2 class="text-4xl font-semibold">４０４</h2>
      <h3 class="mt-3 text-lg">お探しのページが見つかりません。</h3>
      <h4 class="text-lg">リンクに問題があるか、ページが削除された可能性があります。</h4>
      <img src="/image/error.png" class="w-32 h-32">
      </h1>
    <h1 v-else>
      An error occurred
      </h1>
    <NuxtLink to="/">トップページに戻る</NuxtLink> 
  </div>

</template>

<script>
  export default {
    props: ['error'],
  }
</script>