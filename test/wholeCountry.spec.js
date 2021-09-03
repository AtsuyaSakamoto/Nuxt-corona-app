import { shallowMount,createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import wholeCountry from '../pages/data/wholeCountry.vue'

const localVue = createLocalVue()
localVue.use(Vuex)


describe('全国情報ページのテスト', () => {
  let store
  beforeEach(() => {
    // eslint-disable-next-line import/no-named-as-default-member
    store = new Vuex.Store({
      state: {
        wholeCountry: {
          TotalData: [
            {
              date: '2020-04-21',
              npatients:11350,
              adpatients:370
            },
          ],
          TotalDead:[
            {
              date: '2020-04-21',
              ndeaths:277,
            },
          ]
        },
      },
    })
  })

  test('コンポーネントが存在する', () => {
    const wrapper = shallowMount(wholeCountry,{
      store,
      localVue,
    })
    expect(wrapper.exists()).toBeTruthy()
    console.log(wrapper.html())
  })
  test('非同期通信のテスト', async () => {
    const axios = require('axios')
    function fetchData(n) {
      return axios.get('https://jsonplaceholder.typicode.com/posts/' + n)
    }
    const wrapper = shallowMount(wholeCountry, {
      store,
      localVue,
    })
    expect.assertions(1)
    const res = await fetchData(3)
    expect(res.data.id).toBe(3)
    console.log(wrapper)
  })
})