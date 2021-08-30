<template>
  <div class="bg-gray-50">
    <div v-show="error.statusCode === 404" class="text-center mt-7 mx-3 border-2 border-gray-400 py-2 mb-5 sm:mx-12 md:mx-44 lg:mx-64 xl:mx-96">
      <h1 class="text-4xl font-semibold lg:text-5xl lg:mt-7">４０４</h1>
      <h2 class="mt-3 text-lg lg:text-2xl">お探しのページが見つかりません。</h2>
      <h3 class="text-lg lg:text-2xl">リンクに問題があるか、ページが削除された可能性があります。</h3>
      <img src="/image/error.png" class="w-32 h-32 mx-auto lg:w-52 lg:h-52">
      <p >※5秒後に自動でトップページに遷移します。</p>
      </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    // mounted(){
    //   const redirect = () => {
    //     this.$router.push("/data/pcrcorona")
    //   }
    //   setTimeout(() => {
    //     if(this.$route.name !==null){
    //       console.log("他の画面に移動")
    //     }else if(this.$route.name === null){
    //       console.log("自動遷移")
    //       redirect()
    //     }
    //   },5000)
    // },
  }
</script>