module.exports = {
    chainWebpack: config => {
        config.plugins.delete('prefetch');  // prefetch 삭제
    },
    
    // Proxy 설정
    devServer: {
        port: 8080,
        proxy: {
            // proxy 요청을 보낼 때  api 시작 부분
            '^/api': {
                target,
                changeOrigin: true
            }
        }
    }
}