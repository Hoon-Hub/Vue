<template>
    <main>
        <h1>반복문 사용하기</h1>
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
export default {
    name: '',
    components: {},
    data() {
        return {
            products: [
                { name: '게이밍마우스', price: 34500, category: '컴퓨터/주변기기', delivery: 4000 },
                { name: '무선게이밍마우스', price: 52000, category: '컴퓨터/주변기기', delivery: 3000 },
                { name: '게이밍키보드', price: 42000, category: '컴퓨터/주변기기', delivery: 3000 },
                { name: '무선게이밍키보드', price: 50000, category: '컴퓨터/주변기기', delivery: 4000 },
                { name: '무선충전기기', price: 24000, category: '컴퓨터/주변기기', delivery: 3000 },
                { name: '갤럭시탭', price: 385000, category: '모바일/휴대기기', delivery: 0 },
            ]
        }
    },
    methods: {}
}
</script>