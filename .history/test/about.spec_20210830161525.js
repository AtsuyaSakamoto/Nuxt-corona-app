import { mount } from '@vue/test-utils'
import About from '../pages/about.vue'

describe('Aboutのテスト', () => {
  test('AboutページのVueインスタンスが存在するのか確認', () => {
    const wrapper = mount(About)
    expect(wrapper.vm).toBeTruthy()
  })
  test('Aboutページのタイトルのタグ確認', () => {
    const wrapper = mount(About)
    expect(wrapper.vm).toBeTruthy()
  })
})