<template>
  <div>
    <h2>Sign In</h2>
    <form @submit.prevent="signin">
      <div>
        <label for="id">id:</label>
        <input type="text" id="id" v-model="id" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">signin</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';


export default {
  data() {
    return {
      id: '',
      password: ''
    };
  },
  methods: {
    signin() {
      // Axios를 사용하여 서버에 로그인 요청을 보냄
      axios.post('/api/v1/auth/signin', {
        id: this.id,
        password: this.password
      })
      .then(response => {
        console.log(response.data);
        // 로그인 성공 시의 동작
        if (response.data.status.statusCodeValue == 200 ) {

          // response 데이터 쿠키에 저장
          Cookies.set("loginUser", response.data)

          // 로그인 성공 시에만 / 페이지로 리다이렉트
          this.$router.push('/');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // 로그인 실패 시의 동작
      });
    }
  }
};
</script>
