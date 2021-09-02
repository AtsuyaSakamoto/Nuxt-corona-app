import { shallowMount,createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import WholeCountry from '../pages/data/wholeCountry.vue'

const localVue = createLocalVue()
localVue.use(Vuex)


describe('全国情報ページのテスト', () => {
  let store
  let wrapper

  test('全国情報ページのVueインスタンスが存在するのか確認', () => {
    const wrapper =shallowMount(WholeCountry,{store,localVue})
    expect(wrapper.vm).toBeTruthy()
  })
  test('全国情報ページのHTML要素のテスト', () => {
    console.log(wrapper.html())
  })
  test('コンポーネントが存在する', () => {
    const wrapper = shallowMount(WholeCountry)
    console.log(wrapper.text())
  })
})