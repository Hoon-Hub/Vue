<template>
    <main>
        <button type="button" @click="event1(), event2()">다중이벤트버튼</button>
    </main>
</template>
<script>
export default {
    name: '',
    components: {},
    methods: {
        event1() {
            alert('event1')
        },
        event2() {
            alert('event2')
        }
    }
}
</script>
<style>
button {
    outline: none;   
    border: none;
    background: rgb(218, 83, 83);
    width: 250px;
    height: 100px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
}
button:hover{
    background: rgb(199, 29, 29);

}
</style>