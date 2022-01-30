const path = require('path')        // entry객체 내에 app의 path.join 지정  [node: require, module.export,  vue: import, export default]
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'production',
    entry: {    
        app: path.join(__dirname, 'main.js') // app => 합쳐질 파일명, main.js => webpack으로 build 할 파일
    },
    module: {   // rules를 통해 '.vue'로 끝나는 파일은 vue-loader를 사용하겠다고 정의
        rules: [{       // 이유: webpack은 기본적으로 javascript를 처리하는데, App.vue 파일은 javascript 파일이 아니기 때문에, vue-loader가 처리하게 만듬
            test: /\.vue$/,
            use: 'vue-loader'
        },
        {
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader']
        }
    ]},
    plugins: [  // vueloader plugin을 사용하기 위해 vue-loader plugin 모듈을 가져옴
        new VueLoaderPlugin()
    ],
    output: {   // build결과물에 대한 정보. 
        filename: 'app.js', // build 파일명 
        path: path.join(__dirname, 'dist')  // 파일이 저장될 디렉터리 지정
    }
}