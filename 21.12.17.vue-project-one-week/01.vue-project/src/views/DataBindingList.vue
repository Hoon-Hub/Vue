<template>
    <main>
        <h1>Postman으로 반복문 사용하기</h1>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product, i) in products">
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.delivery }}</td>
                </tr>
            </tbody>
        </table>
    </main>
</template>
<script>
import axios from 'axios'

export default {
    name: '',
    components: {},
    data() {
        return {
            products: []
        }
    },
    created() {
        this.getList()
    },
    methods: {
        async getList() {
            await axios.get("https://292675e3-c5d4-4f61-8389-fb6137c1e325.mock.pstmn.io/list")
            .then( (response) => {
                this.products = response.data
            }).catch( (error) => {
                console.log(error)
            })
        }
    }
}
</script>
<style scoped>
table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}
td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
</style>