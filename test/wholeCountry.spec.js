import { mount } from "@vue/test-utils"
import WholeCountry from '../pages/data/wholeCountry.vue'

describe('Aboutのテスト', () => {
  const wrapper = mount(WholeCountry)
  test('WholeCountryページのVueインスタンスが存在するのか確認', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  test('WholeCountryページのタイトルのタグ確認', () => {
    expect(wrapper.text()).toContain("当サイトに関して")
  })
})