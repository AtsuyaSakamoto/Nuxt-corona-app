<template>
  <div class="relative w-64">
    <select
      v-model="selected_pref_code"
      name="pref_code"
      class="
        w-1
        px-auto
        mx-auto
        md:block
        appearance-none
        w-full
        bg-white
        border border-gray-400
        hover:border-gray-500
        px-4
        py-2
        pr-8
        rounded
        shadow
        leading-tight
        focus:outline-none focus:shadow-outline
        pl-24
      "
      @change="send"
    >
      <option value="1">北海道</option>
      <option value="2">青森県</option>
      <option value="3">岩手県</option>
      <option value="4">宮城県</option>
      <option value="5">秋田県</option>
      <option value="6">山形県</option>
      <option value="7">福島県</option>
      <option value="8">茨城県</option>
      <option value="9">栃木県</option>
      <option value="10">群馬県</option>
      <option value="11">埼玉県</option>
      <option value="12">千葉県</option>
      <option value="13">東京都</option>
      <option value="14">神奈川県</option>
      <option value="15">新潟県</option>
      <option value="16">富山県</option>
      <option value="17">石川県</option>
      <option value="18">福井県</option>
      <option value="19">山梨県</option>
      <option value="20">長野県</option>
      <option value="21">岐阜県</option>
      <option value="22">静岡県</option>
      <option value="23">愛知県</option>
      <option value="24">三重県</option>
      <option value="25">滋賀県</option>
      <option value="26">京都府</option>
      <option value="27">大阪府</option>
      <option value="28">兵庫県</option>
      <option value="29">奈良県</option>
      <option value="30">和歌山県</option>
      <option value="31">鳥取県</option>
      <option value="32">島根県</option>
      <option value="33">岡山県</option>
      <option value="34">広島県</option>
      <option value="35">山口県</option>
      <option value="36">徳島県</option>
      <option value="37">香川県</option>
      <option value="38">愛媛県</option>
      <option value="39">高知県</option>
      <option value="40">福岡県</option>
      <option value="41">佐賀県</option>
      <option value="42">長崎県</option>
      <option value="43">熊本県</option>
      <option value="44">大分県</option>
      <option value="45">宮崎県</option>
      <option value="46">鹿児島県</option>
      <option value="47">沖縄県</option>
    </select>
    <div
      class="
        pointer-events-none
        absolute
        inset-y-0
        right-0
        flex
        items-center
        px-2
        text-gray-700
      "
    >
      <svg
        class="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected_pref_code: 1,
    }
  },
  methods: {
    send() {
      this.$emit('my-click', this.selected_pref_code)
    },
  },
}
</script>
