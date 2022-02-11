import { reactive } from 'vue'
const state = reactive({
    count: 10,
})

const mutations = {
    increase () {
        state.count++
    },
    decrease () {
        state.count--
    }
}

// state: count의 기본값을 변경
const getters = {
    tripleCount () {
        return state.count * 3
    }
}

export default {
    state, 
    mutations,
    getters
}