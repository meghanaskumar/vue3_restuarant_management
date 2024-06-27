<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.body{
  margin: 0;
  padding: 0;
}

.logo {
    width: 100px;
}

.login input, .register input, .add input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border: 1px solid skyblue;
    margin-bottom: 20px;
    border-radius: 10px;

}

.login button, .register button, .add button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: skyblue;
    color: white;
    cursor: pointer;

}
</style>