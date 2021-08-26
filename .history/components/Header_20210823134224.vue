<template>
  <nav class="bg-red-200 shadow dark:bg-gray-800">
    <div
      class="
        container
        px-6
        py-4
        mx-auto
        md:flex md:justify-between md:items-center
      "
    >
      <div class="flex items-center justify-between">
        <div>
          <NuxtLink
            to="/"
            class="
              text-2xl
              font-bold
              text-gray-800
              dark:text-white
              lg:text-3xl
              hover:text-gray-700
              dark:hover:text-gray-300
            "
            >Informetion</NuxtLink
          >
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button
            type="button"
            class="
              text-gray-500
              dark:text-gray-200
              hover:text-gray-600
              dark:hover:text-gray-400
              focus:outline-none focus:text-gray-600
              dark:focus:text-gray-400
              inline-block
              text-sm
              px-4
              py-2
              leading-none
              border
              rounded
              text-white
              border-white
            "
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div class="items-center md:flex">
        <div class="flex flex-col md:flex-row md:mx-6">
          <NuxtLink
            to="/"
            class="
              my-1
              text-sm
              font-medium
              text-gray-700
              dark:text-gray-200
              hover:text-indigo-500
              dark:hover:text-indigo-400
              md:mx-4 md:my-0
            "
            >Home</NuxtLink
          >
          <NuxtLink
            to="/data/wholeCountry"
            class="
              my-1
              text-sm
              font-medium
              text-gray-700
              dark:text-gray-200
              hover:text-indigo-500
              dark:hover:text-indigo-400
              md:mx-4 md:my-0
            "
            >全国</NuxtLink
          >
          <NuxtLink
            to="/data/pcrCorona"
            class="
              my-1
              text-sm
              font-medium
              text-gray-700
              dark:text-gray-200
              hover:text-indigo-500
              dark:hover:text-indigo-400
              md:mx-4 md:my-0
            "
            >PCR検査数</NuxtLink
          >
          <NuxtLink
            to="/data/bedUsage"
            class="
              my-1
              text-sm
              font-medium
              text-gray-700
              dark:text-gray-200
              hover:text-indigo-500
              dark:hover:text-indigo-400
              md:mx-4 md:my-0
            "
            >病床使用率</NuxtLink
          >
          <NuxtLink
            to="/data/totalDead"
            class="
              my-1
              text-sm
              font-medium
              text-gray-700
              dark:text-gray-200
              hover:text-indigo-500
              dark:hover:text-indigo-400
              md:mx-4 md:my-0
            "
            >死亡者数</NuxtLink
          >
          <NuxtLink
            to="/graph/prefectures"
            class="
              my-1
              text-sm
              font-medium
              text-gray-700
              dark:text-gray-200
              hover:text-indigo-500
              dark:hover:text-indigo-400
              md:mx-4 md:my-0
            "
            >都道府県</NuxtLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>
