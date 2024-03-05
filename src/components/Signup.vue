<template>
    <div>
      <h2>Sign Up</h2>
      <form @submit.prevent="signUp">
        <div>
          <label for="id">Id:</label>
          <input type="text" id="id" name="id" v-model="id" required>
        </div>
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" v-model="username" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" v-model="password" required>
        </div>
        <div>
          <label for="phone">Phone:</label>
          <input id="Phone" name="phone" v-model="phone" required>
        </div>
        <div>
          <label for="gender">Gender:</label>
          <input type="text" id="Gender" name="gender" v-model="gender" placeholder="m" required>
        </div>
        <div>
          <label for="birth">Birth:</label>
          <input type="date" id="Birth" name="birth" v-model="birth" value="2024-02-22" required>
        </div>
        <div>
          <label for="terms-agree">terms-agree:</label>
          <input type="checkbox" id="terms-agree" name="terms-agree" v-model="terms_agree" required>
        </div>
        <div>
          <label for="marketing-agree">Password:</label>
          <input type="checkbox" id="marketing-agree" name="terms-agree" v-model="marketing_agree" required>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        id: '',
        username: '',
        email: '',
        password: '',
        phone:'',
        gender:'',
        birth:'',
        terms_agree: 0,
        marketing_agree: 0
      };
    },
    methods: {
      async signUp() {
        try {

          this.terms_agree = document.getElementById('terms-agree').checked ? 1 : 0;
          this.marketing_agree = document.getElementById('marketing-agree').checked ? 1 : 0;
          alert(this.marketing_agree)
          const response = await axios.post('/api/v1/user/customer', {
            id: this.id,
            password: this.password,
            email: this.email,
            username: this.username,
            phone: this.phone,
            gender: this.gender,
            birth: this.birth,
            terms_agree: this.terms_agree,
            marketing_agree: this.marketing_agree
          });
          console.log(response.data); // handle success response
        } catch (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);

        } else if (error.request) {
              console.log(error.request);
              
        } else {
              console.log('Error', error.message);
        }
              console.log(error.config);
        }
      }
    }
  };
  </script>
  