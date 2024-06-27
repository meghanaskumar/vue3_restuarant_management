<template>
  <AppHeader />
  Welcome {{ name }}
  <table border="1">
    <tr>
      <td>id</td>
      <td>name</td>
      <td>contact</td>
      <td>address</td>
      <td>Actions</td>
    </tr>
    <tr v-for="item in resto" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>
        <router-link :to="'/update/' + item.id" class="editLink">Edit</router-link>
        <a v-on:click="deleteResto(item.id)">Delete</a>
      </td>
    </tr>
  </table>
</template>
<script>
import AppHeader from "./Header.vue";
import axios from "axios";
export default {
  name: "HomeComp",
  data() {
    return {
      name: "",
      resto: [],
    };
  },
  methods: {
    async deleteResto(id) {
      const res = await axios.delete("http://localhost:3000/resto/" + id);
      if (res.status === 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      if (!user) {
        this.$router.push({ name: "SignUp" });
      } else {
        this.name = JSON.parse(user).name;
        let result = await axios.get("http://localhost:3000/resto");
        this.resto = result.data;
      }
    },
  },
  components: {
    AppHeader,
  },
  async mounted() {
    this.loadData();
  },
};
</script>
<style>
td {
  width: 150px;
  height: 40px;
}
.editLink{
  padding: 5px;
}
</style>
