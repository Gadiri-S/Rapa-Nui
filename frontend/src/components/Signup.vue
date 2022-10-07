<template>
<div class='form-container'>
  <form  @submit.prevent="handleSubmit">
    
    <input type="text" class="form-input" placeholder="Firstname" required v-model="firstname">
    <input type="text" class="form-input"  placeholder="Lastname" required v-model="lastname">
    <input type="email" class="form-input"  placeholder="Email" required v-model="email">
    <input type="password" class="form-input"  placeholder="Password" required v-model="password">
    <input type="password" class="form-input"  placeholder="Confirm Password" required v-model="password">
   <input type="text" class="form-input"  placeholder="Country" required v-model="country">
    <input type="text" class="form-input"  placeholder="City" required v-model="city">
    <button type="submit" @click="signup">SIGN UP</button>
    <div v-if="error"> <h3 class="error-msg">{{error}}</h3> </div>

</form>

</div>
</template>

<script>


import axios from "axios"
export default {
      name: "Signup",
      components: {},
      computed: {
        stat() {
           return this.$store.state.isUserLoggedIn
        }
      },
  data() {
    return {
     
        firstname: "",
        lastname: "",
        email:"",
        password: "",
        city:"",
        country:"",
        error:'',
    
      showError: false,       
       isUserLoggedIn:false

    };
  },
  methods: {  
   async signup() {/* 
     this.$store.dispatch('signup', {
       firstname : this.firstname, 
       lastname : this.lastname, 
       password : this.password, 
       email : this.email,
       country : this.country,
       city : this.city
     })
     const self = this;
this.$store.dispatch('login', {
      
       password : this.password, 
       email : this.email,
      
     })*/

     try {
        const response = await axios.post(
          "http://localhost:3000/api/signup",
         {
          firstname : this.firstname, 
       lastname : this.lastname, 
       password : this.password, 
       email : this.email,
       country : this.country,
       city : this.city,
         error: this.error,
          }
        );
      } catch (error) {
        this.error = error.response.data.message;
        console.log(error.response.data.message);
      }


     
   }
  },
};

</script>

<style scoped>

  .form-container{
    width:50vw;
  }
form {
    display: flex;
    flex-direction: column;   
    padding-top: 25px;


}

       .form-input {
          margin-bottom: 2vh;
           font-size: 25px;
           padding: 5px;
           background: rgb(255, 255, 255);
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
    cursor: pointer;
    border: none;


  }
  button:hover{
   background:rgb(0, 207, 110);
   transition: .2s ease-in-out;
  }
  @media (max-width:800px) {
    .form-container{
    width:90%;
    margin:auto;
  }

    .form-input {
          margin-bottom: 1vh;
           font-size: 20px;
           padding: 5px;
           background: transparent;
           height: 30px;
    border-radius: 5px;
      border: 2px solid white;

    color: white;

       }

       .error-msg{
        font-size: 15px;
       }
  }
 
</style>