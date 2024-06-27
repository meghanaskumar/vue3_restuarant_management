<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restuarant</router-link>
    <a href="#" v-on:click="logout">Logout</a>
  </div>
</template>
<script>
export default {
  name: "AppHeader",
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push({name: 'LoginComp'})
    }
  }
};
</script>
<style>
.nav {
  background-color: #333;
  overflow:hidden;
}
.nav a {
  float: left;
  color: white;
  padding: 14px 16px;
  text-align: center;
  text-decoration: none;
  margin-right: 5px;
  font-size: 17px;
}
.nav a:hover{
  color: #333;
  background-color: #ddd;
}
</style>
