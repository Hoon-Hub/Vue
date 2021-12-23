<template>
    <main>
        <button type="button" @click="childFunc" ref="btn">Click</button>
        <br><hr>
        <h1>{{ msg }}</h1>
    </main>
</template>
<script>
export default {
    data () {
        return {
            msg: '자식 컴포넌트로부터 보내는 메세지',
        }
    },
    methods: {
        childFunc() {
            console.log('부모 컴포넌트에서 이벤트 트리거 전달하여 발생한 함수')
        },
        callFromParent() {
            console.log('부모 컴포넌트에서 직접 호출한 함수')
        }
    },
    mounted () {
        this.$emit('send-message', this.msg)
    }
}
</script>