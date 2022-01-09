<template>
  <div>
    <h1>Naver Login</h1>
    <hr>
    <div id="naverIdLogin">
      <img :src="loginButtonImage" alt="네이버로그인버튼">
    </div>
    <button type="button" @click="logout">로그아웃</button>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data () {
    return {
      loginButtonImage: require('@/assets/naver_login_button.png'),
      logoutButtonImage: require('@/assets/naver_logout_button.png'),
      naverLogin: null
    }
  },
  mounted () {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: 'rbChTt03jszJyuXK6GTB',
      clientSecretId: 'PXG3b_Jt7K',
      callbackUrl: 'http://localhost:8080/naverLogin',
      isPopup: false
    })
    this.naverLogin.init()

    this.naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log(status)
        console.log(this.naverLogin.user)

        var email = this.naverLogin.user.getEmail()
        if (email === undefined || email == null) {
          alert('이메일은 필수 정보입니다.')
          this.naverLogin.reprompt()
          return false
        }
      } else {
        console.log('callback 처리에 실패하였습니다.')
      }
    })
  }
  // methods: {
  //   logout () {
  //     const accessToken = this.naverLogin.accessToken.accessToken
  //     const url = '/oauth2.0/token?'
  //   }
  // }
}
</script>

<style scoped>
  h1 {
    color: green;
  }
</style>
