<template>

<div> 
<form class="form" @submit.prevent="handleSubmit">
    
    <input type="text" class="form-input-email" placeholder="Email" required v-model="email">
    <input type="password" class="form-input-password"  placeholder="Password" required v-model="password">
 <div v-if="error"><h3 class="error-msg">{{error}}</h3></div>
 <span v-if="v$.email.$error" class="error-msg">  {{ v$.email.$errors[0].$message }} </span>


    <button @click="login">LOG IN</button>




</form>
</div> 
</template>

<script>
 import { mapState } from 'vuex';
 import api from '../services/api'
 import axios from 'axios'
 import useValidate from '@vuelidate/core'
import { helpers,required } from '@vuelidate/validators'

export default {
      name: "Login",

      data() {
        return {
          v$: useValidate(),
          email:'',
          password:'',
          isUserLoggedIn:false,
          error:'',
        }
        
        
      },
      validations() {
    return {
      email:{
        required:helpers.withMessage(`Please enter a valid email`,required)
      },
          password:{ required },
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
            //  window.location.reload();
              this.v$.$validate() // checks all inputs
      if (!this.v$.$error) {
        // if ANY fail validation
        alert('Form successfully submitted.')
      }


      } catch (error) {
        this.error = error.response.data.error;

       
        console.log(this.error);
        this.v$.$validate()
        if (this.v$.$error) {
        // if ANY fail validation
      }
        console.log(this.v$)

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
           height: 40px;
    border-radius: 5px;
      border: 2px solid grey;

      color: black;
       }
      
     

       .form-button {
                   
    height: 40px;
    width: 150px;
    background: #8c00ff;
    font-size: 25px;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 10px;
    border: 2px solid white;
font-family: 'Poppins', sans-serif;
    color: white;
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