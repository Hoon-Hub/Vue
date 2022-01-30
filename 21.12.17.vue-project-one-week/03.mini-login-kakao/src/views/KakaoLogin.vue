<template>
  <div>
    <div id="NoAuth" v-if="checkedIn == false">
      <button type="button" id="custom-login-btn" @click="kakaoLogin()">
        <img :src="loginButtonImage" alt="카카오톡 로그인하기" style="outline:none; border:none;">
      </button><br>
    </div>
    <div v-else>
      <button type="button" @click="logout()" style="background:#000; width:300px; height:30px;color:white;">로그아웃</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginButtonImage: require('@/assets/kakao_login_button_image.png'),
      checkedIn: false
    }
  },
  methods: {
    logout () {
      window.Kakao.Auth.logout((response) => {
        if (response) this.checkedIn = false
        console.log(response)
        alert('로그아웃 완료')
      })
    },
    kakaoLogin () {
      window.Kakao.Auth.login({
        scope: 'profile_nickname, profile_image, account_email',
        success: this.getKakaoAccount
      })
    },
    getKakaoAccount () {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: res => {
          const kakaoAccount = res.kakao_account
          const nickname = kakaoAccount.profile_nickname
          const profileImage = kakaoAccount.profile_image
          const email = kakaoAccount.account_email
          console.log('nickname', nickname)
          console.log('profileImage', profileImage)
          console.log('email', email)
          this.checkedIn = true

          alert('로그인 성공')
        },
        fail: error => {
          console.log(error)
        }
      })
    }
  }
}
</script>

<style>

</style>
