<template>
<AppHeader/>
<h1>Update Restuarant</h1>

<form class="add" v-on:submit.prevent="updateResto">
    <input type="text" v-model="resto.name" placeholder="Enter Name" />
    <input type="text" v-model="resto.contact" placeholder="Enter conatct" />
    <input type="text" v-model="resto.address" placeholder="Enter Address" />
    <button v-on:click="updateResto">Update Resto</button>
  </form>
</template>
<script>
import axios from 'axios';
import AppHeader from './Header.vue'
export default {
    name: 'UpdateComp',
    components:{
        AppHeader
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
    async updateResto() {
      const result = await axios.put(`http://localhost:3000/resto/${this.$route.params.id}`, {
        name: this.resto.name,
        contact: this.resto.contact,
        address: this.resto.address,
      });
      if(result.status === 200){
        this.$router.push({name:'HomeComp'})
      }
    },
  },
    async mounted(){
        let user = localStorage.getItem('user-info');
        
        if(!user){
            this.$router.push({name:'SignUp'})
        }
        const res = await axios.get(`http://localhost:3000/resto/${this.$route.params.id}`);
        this.resto = res.data;
    }
}
</script>