import { shallowMount,createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Index from '../pages/index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('トップページのテスト', () => {
  test('AboutページのVueインスタンスが存在するのか確認', () => {
    const wrapper =shallowMount(Index,{store,localVue})
    console.log(wrapper.html())
  })
})