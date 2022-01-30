import Vue from 'vue'
import Vuex from 'vuex'
import { mapState } from 'vuex'

Vue.use(Vuex)


// 해당 내용은 store.js 를 생성해서 import 하는 방법도 있음. 
const store = new Vuex.Store({
    state: {
      count: 0,
    },
    mutations: {
      increment (state) {
        console.log('increment')
        state.count ++
      },
      decrement (state) {
          console.log('decrement')
        state.count --
      }
    },
    computed: mapState({
        // 화살표 함수는 코드를 매우 간결하게 만들어 줍니다!
        count: state => state.count,
    
        // 문자열 값 'count'를 전달하는 것은 `state => state.count`와 같습니다.
        countAlias: 'count',
    
        // `this`를 사용하여 로컬 상태에 액세스하려면 일반적인 함수를 사용해야합니다
        countPlusLocalState (state) {
          return state.count + this.localCount
        }
      })
  })



  export default store