import { reactive } from 'vue'
const state = reactive({
    count: 10,
    color: 'blue',
})

const mutations = {
    increase () {
        state.count++
    },
    decrease () {
        state.count--
    },
    setColor (value) {
        state.color = value
    }
}

// state: count의 기본값을 변경
const getters = {
    tripleCount () {
        return state.count * 3
    },
    tripleOneCount () {
        return state.count * 0.3
    }
}

export default {
    state, 
    mutations,
    getters
}