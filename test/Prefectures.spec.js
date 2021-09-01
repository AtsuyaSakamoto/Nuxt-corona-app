import { mount } from '@vue/test-utils'
import prefectures from '@/pages/data/prefectures.vue'

describe('PrefecturesInfection', () => {
  test('コンポーネントが存在する', () => {
    // PrefecturesInfectionコンポーネントをマウントする
    const wrapper = mount(prefectures)
    // expect()の中身がtrueだったらテスト合格
    // expect(wrapper.exists()).toBeTruthy()
    console.log(wrapper.text())
  })
})
