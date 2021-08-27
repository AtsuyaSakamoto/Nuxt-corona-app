<template>
  <div class="bg-gray-50">
    <div v-show="error.statusCode === 404" class="text-center mt-7 mx-3 border-2 border-gray-400 py-2 mb-5">
      <h1 class="text-4xl font-semibold">４０４</h1>
      <h2 class="mt-3 text-lg">お探しのページが見つかりません。</h2>
      <h3 class="text-lg">リンクに問題があるか、ページが削除された可能性があります。</h3>
      <img src="/image/error.png" class="w-32 h-32 mx-auto">
    <NuxtLink to="/">トップページに戻る</NuxtLink> 
      </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
      mounted(){
        if(this.$route.name === null){
          console.log("エラーページ")
          let x = () => {
            setTimeout(this.redirect,5000)
          }
          x()
        }else if(this.$route.name !== null){
          console.log("エラーページから離れる")
          clearTimeout(this.x)
        }
      },
      beforeDestroy(){
        clearTimeout(this.x)
        console.log("destroy")
      },
    methods:{
      redirect(){
        this.$router.push("/data/pcrcorona")
      }
    },
  }
</script>