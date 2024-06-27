<template>
  <AppHeader />
  <h1>Add Restuarant</h1>
  <form class="add" v-on:submit.prevent="addResto">
    <input type="text" v-model="resto.name" placeholder="Enter Name" />
    <input type="text" v-model="resto.contact" placeholder="Enter conatct" />
    <input type="text" v-model="resto.address" placeholder="Enter Address" />
    <button v-on:click="addResto">Add Resto</button>
  </form>
</template>
<script>
import AppHeader from "./Header.vue";
import axios from "axios";
export default {
  name: "AddComp",
  components: {
    AppHeader,
  },
  data() {
    return {
      resto: {
        name: "",
        contact: "",
        address: "",
      },
    };
  },
  methods: {
    async addResto() {
      const result = await axios.post("http://localhost:3000/resto", {
        name: this.resto.name,
        contact: this.resto.contact,
        address: this.resto.address,
      });
      if(result.status === 201){
        this.$router.push({name:'HomeComp'})
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
