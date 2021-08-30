import { mount } from '@vue/test-utils'
import About from '../pages/about.vue'

describe('Aboutのテスト', () => {
  const wrapper = mount(About)
  test('AboutページのVueインスタンスが存在するのか確認', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  test('Aboutページのタイトルのタグ確認', () => {
    expect(wrapper.text()).toContain("当サイトに関して")
  })
  test('Aboutページのスタイル確認', () => {
    expect(wrapper.attributes().style).toContain("当サイトに関して")
  })
})