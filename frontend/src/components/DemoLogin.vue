<template>

<div> 
<form class="form" @submit.prevent="handleSubmit">
    
    <input type="text" class="form-input-email" placeholder="Email" required v-model="email">
    <input type="password" class="form-input-password"  placeholder="Password" required v-model="password">
  <div v-if="error"><h3 class="error-msg">{{error}}</h3></div>

    <button @click="login">LOG IN</button>




</form>
</div> 
</template>

<script>
 import { mapState } from 'vuex';
 import api from '../services/api'
 import axios from 'axios'

export default {
      name: "Login",

      data() {
        return {
          email:'Demouser@gmail.com',
          password:'Demouser10',
          isUserLoggedIn:false,
          error:'',
        }
        
        
      },
       computed: {
    stat () {
      return this.$store.state.isUserLoggedIn},
        ...mapState(['status'])

    },
      methods: {
       async login(){
          
          const self = this;
this.$store.dispatch('login', {
      
       password : this.password, 
       email : this.email,
      // error : this.error      
     })

   
 try {
        const response = await axios.post(
          "http://localhost:3000/api/login",
         {
             email: this.email,
          password: this.password,
          error: this.error,
          }
        );
        console.log(response);
                      window.location.reload();

      } catch (error) {
        this.error = error.response.data.error;
        if(this.error == 'Incorrect email') {
          document.querySelector(".form-input-email").style.borderColor=`red`;
        } else {
          document.querySelector(".form-input-password").style.borderColor=`red`;
        }
        console.log(this.error);
      }


     }
      }

}
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    padding-top: 25px;


}



   .form-input-email,.form-input-password {
           margin-bottom: 2vh;
           font-size: 25px;
           padding: 5px;
                background: rgb(255, 255, 255);
;
           height: 40px;
    border-radius: 5px;
      border: 2px solid grey;

    color: black;
       }
      
     

    button{
    font-size: 25px;
    background: #8c00ff;
    color: white;
    padding: 10px;
    margin-top: 15px;
    font-family: 'Poppins', sans-serif;
    border: none;
    cursor: pointer;


  }
  button:hover{
   background:rgb(0, 207, 110);
   transition: .2s ease-in-out;
  }

</style>