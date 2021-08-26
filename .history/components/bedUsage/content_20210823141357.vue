<template>
  <div class="m-10">
    <div>都道府県別病床使用率(データ更新日：{{ graphData[0].update }})</div>

    <ul class="md:flex flex flex-wrap m-8">
      <li v-for="graph in graphData" :key="graph.pref_code">
        <div
          :class="
            parseFloat(graph.use_bed_rate) > 50
              ? 'bg-red-500 shadow p-3 rounded lg:w-64 text-center m-3 hover:bg-gray-300  hover:shadow-lg hover:border-transparent '
              : parseFloat(graph.use_bed_rate) > 25
              ? 'bg-red-300 shadow p-3 rounded lg:w-64 text-center m-3 hover:bg-gray-300  hover:shadow-lg hover:border-transparent'
              : parseFloat(graph.use_bed_rate) > 5
              ? 'bg-red-100 shadow p-3 rounded lg:w-64 text-center m-3 hover:bg-gray-300  hover:shadow-lg hover:border-transparent'
              : 'bg-white shadow p-3 rounded lg:w-64 text-center m-3 hover:bg-gray-300  hover:shadow-lg hover:border-transparent'
          "
          @click="openModal(graph)"
        >
          <div class="mt-6">
            <p class="text-lg text-bold tracking-wide text-black mb-2">
              {{ graph.prefecture }}
            </p>
            <p class="text-md text-black font-hairline">
              {{ graph.use_bed_rate }}
            </p>

            <p class="text-md text-black font-hairline">
              {{ graph.inpatient }}人/ {{ graph.secure_bed }}床
            </p>
            <!-- <button @click="openModal(graph)">詳細</button> -->
          </div>
          <div class="mt-6"></div>
        </div>
      </li>
    </ul>
    <Modal v-if="showModal" :val="postItem" @close="closeModal"></Modal>
  </div>
</template>

<script>

</script>