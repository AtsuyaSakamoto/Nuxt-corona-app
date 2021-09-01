<template>
  <div class="">
    <div
      v-show="error.statusCode === 404"
      class="
        text-center
        my-14
        mx-3
        border-2 border-gray-400
        bg-gray-200
        py-2
        sm:mx-12
        md:mx-44 md:my-12
        lg:mx-64 lg:my-24
        xl:mx-96
      "
    >
      <h1 class="text-4xl font-semibold lg:text-5xl lg:mt-7">４０４</h1>
      <h2 class="mt-3 text-lg lg:text-2xl">お探しのページが見つかりません。</h2>
      <h3 class="text-lg lg:text-2xl">
        リンクに問題があるか、ページが削除された可能性があります。
      </h3>
      <img src="/image/error.png" class="w-32 h-32 mx-auto lg:w-52 lg:h-52" />
      <p class="my-5">※5秒後に自動でトップページに遷移します。</p>
    </div>
    <div
      v-show="error.statusCode !== 404"
      class="
        text-center
        my-14
        mx-3
        border-2 border-gray-400
        bg-gray-200
        py-2
        sm:mx-12
        md:mx-44 md:my-12
        lg:mx-64 lg:my-24
        xl:mx-96
      "
    >
      <h1 class="text-4xl font-semibold lg:text-5xl lg:mt-7">５００</h1>
      <h2 class="mt-3 text-lg lg:text-2xl">予期せぬエラーが発生しました。</h2>
      <img src="/image/error.png" class="w-32 h-32 mx-auto lg:w-52 lg:h-52" />
      <nuxt-link to="/">
        <p class="my-5 underline text-blue-700 text-xl">トップページに戻る</p>
      </nuxt-link>
    </div>
  </div>
</template>

//
<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    const redirect = () => {
      this.$router.push('/')
    }
    setTimeout(() => {
      if (this.$route.name !== null) {
        return null
      } else if (this.$route.name === null) {
        redirect()
      }
    }, 5000)
  },
}
</script>
