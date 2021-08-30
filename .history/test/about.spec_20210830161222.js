import { mount } from '@vue/test-utils'
import About from '../pages/about.vue'

describe('Aboutのテスト', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(About)
    expect(wrapper.vm).toBeTruthy()
  })
})