<template>
<header class="text-gray-100 body-font bg-gray-900 border-b">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nuxt-link to="/">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
        
      </svg>
      <span class="ml-1 text-4xl text-gray-100">Covid-19</span>
    </a>
    </nuxt-link>

    <nav class="md:mx-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

      <nuxt-link to="/data/wholecountry">
      <div class="mr-7">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 sm:h-10 sm:w-10 text-white" fill="none" viewBox="0 0 24 24 " stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <a class="text-base sm:text-lg hover:text-gray-400">全国</a>
      </div>
      </nuxt-link>

      <nuxt-link to="/data/prefectures">
        <div class="mr-7">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-4 sm:h-10 sm:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <a class="text-sm sm:text-lg hover:text-gray-400">都道府県</a>
        </div>
      </nuxt-link>

        <nuxt-link to="/data/bedusage">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-6 sm:h-10 sm:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
        </div>
        <a class="mr-7 text-sm sm:text-lg hover:text-gray-400">病床使用率</a>
        </nuxt-link> 
        <nuxt-link to="/data/pcrcorona">
       <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-3 sm:h-10 sm:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        </div>
        <a class="mr-7 hover:text-gray-400 text-sm sm:text-lg">PCR検査</a>
      </nuxt-link>

    </nav>
    <nuxt-link to="/about">
      <div class="inline-flex items-center py-1 px-3 focus:outline-none text-xl mt-4 md:mt-0 hover:text-gray-400">About</div>
    </nuxt-link>
  </div>
</header>
</template>
