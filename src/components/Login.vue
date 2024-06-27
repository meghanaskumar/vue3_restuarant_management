<template>
  <img class="logo" alt="Vue logo" src="../assets/download.jpg" />
  <h1>Login</h1>
  <div class="login">
    <input type="email" v-model="email" placeholder="Enter Email" required />
    <input type="password" v-model="password" placeholder="Enter Password" required/>
    <button v-on:click="login">Login</button>
    <p>
      <router-link to="/sign-up">Sign Up</router-link>
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "LoginComp",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      if (this.email && this.password) {
        let res = await axios.get(
          `http://localhost:3000/user?email=${this.email}&password=${this.password}`
        );
        if (
          res.status === 200 &&
          res.data.length > 0 &&
          res.data[0].password === this.password
        ) {
          localStorage.setItem("user-info", JSON.stringify(res.data[0]));
          this.$router.push({ name: "HomeComp" });
        }
      }
    },
  },
  mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'HomeComp'})
        }
    }
};
</script>
