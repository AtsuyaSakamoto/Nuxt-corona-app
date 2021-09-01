import { mount } from '@vue/test-utils'
import PrefecturesInfection from '@/components/prefectures/PrefecturesInfection.vue'

describe('PrefecturesInfection', () => {
  test('コンポーネントが存在する', () => {
    // PrefecturesDeadコンポーネントをマウントする
    const wrapper = mount(PrefecturesInfection)
    // expect()の中身がtrueだったらテスト合格
    // expect(wrapper.exists()).toBeTruthy()
    console.log(wrapper.text())
  })
})
