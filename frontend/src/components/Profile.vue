<template>
    <div>
      <div class="home-profile">
      
        <div class="main-profile">
    
   
    
    <div class="right-profile">
        <form v-on:submit.prevent="onSubmit">
         <input type="text" class="form-input"  v-model="firstname">
        <input type="text" class="form-input"    v-model="lastname">
        <input type="email" class="form-input"   v-model="email">
       <input type="text" class="form-input"    v-model="country">
        <input type="text" class="form-input"    v-model="city">
        <div v-if="error" class="error">{{error}}</div>
        <button type="submit" class="form-button-profile" @click="updateUser" >Save changes</button>
        <button class="form-button-profile" @click="logout">Log out</button>

    
    </form>
    
        </div>
    
      </div>
      </div>
      </div>
    </template>
    
    <script>
    // @ is an alias to /src
    import Featured from '../components/Featured.vue'
    import Interface from '../components/Interface.vue';
    import NewTrip from '../components/NewTrip.vue';
    import Trip from '../components/Trip.vue';
    import axios from 'axios';
    import { conditionalExpression } from '@babel/types';
    
    export default {
      name: 'Profile',
      components: {
        Featured,Interface,NewTrip,Trip
      },
    
      data() {
        return {
          isAdmin:false,
          ok:false,
          trips:'',
          ProductId:'',
          country:'',
          lastname:"",
          firstname:"",
            country:'',
            city:"",
            email:'',
            password:"",
            city:"",
            id:this.id,
            error:'',
            passwordVerification:'',
            Product: {
             TripCountry: this.TripCountry,
             TripCity:this.TripCity,
            TripImage: this.TripImage
          },
        }
      },
       beforeMount() {
          this.getOneUser();
          this.getOrders();
    
      },
      methods: {
    
        show() {
          this.ok = !this.ok
        },
         async getOneUser() {
    
          const id = this.$store.state.user.id;
         const token = this.$store.state.user.token;
    
        if(id) {
        try {
            const res = await fetch(`http://localhost:3000/api//user/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            const user = await res.json();
    
          this.firstname = user.firstname;
          this.lastname = user.lastname;
          this.country = user.country;
          this.city = user.city;
          this.email = user.email;
          this.isAdmin = user.isAdmin;
          this.password = user.password
        //  console.log(user)
    
        } catch (error) {
            console.log(error)
        } } 
    
        },
    
        async updateUser() {
          const user_id = this.$store.state.user.id;
               const token = this.$store.state.user.token;
    
    
    
          try {
            const response = await axios.put(
              `http://localhost:3000/api/user/${user_id}`,
    
              {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                country:this.country,
                city:this.city,
                email:this.email,
                error: this.error,
                password:this.password,
                passwordVerification:this.passwordVerification
              },
              { headers: { Authorization: `Bearer ${token}` } }
            );
    
            console.log(response);
                  window.location.reload();
    
          } catch (error) {
            this.error = error.response.data.message;
    
            console.log(this.error);
          }
        },
    
    
    
       async getOrders() {
    
          const id = this.$store.state.user.id;
    
         try { 
            const response = await  fetch(`http://localhost:3000/api/order/${id}`)
    
            const trips = await response.json();
    
    
            console.log(trips)
    
          this.trips = trips;
    
    
           trips.forEach(trip => {
              const ProductId = trip.ProductId;
              this.ProductId = ProductId;
              const id = ProductId;
              this.TripCountry = trip.Product.country,
              this.TripCity = trip.Product.city,
              this.TripImage = trip.Product.image;
               
               const starts = trip.starts
    
         function padTo2Digits(starts) {
      return starts.toString().padStart(2, '0');
    }
    padTo2Digits(starts)
    
    console.log(starts)
    
    
           
         
    
           });
    
    
         } catch(error) {
            console.log(error)
         }
        },
          logout() {

      this.$store.dispatch("setToken", null);
      window.location.reload();

    return this.$store.commit('logout');
    

    
    },
    
      
      }
      
    }
    </script>
    
    <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); 
    
    
    html,body {
      height: 100%;
      width:100%;
    }
    
    
    .home-profile {
      
      padding: 1%;
    min-height: 100vh}
    
 
    .right-profile {
    margin-top: 5px;
    }
    form {
       display: flex;
      flex-direction: column;

    }
    
    
    
    form input {
      width: 100%;
      height: 5vh;
      border-radius: 5px;
      font-size:25px;
    margin-bottom: 15px;
    padding-left: 8px;
    }
    .form-button-profile {
       height: 40px;
        width: 350px;
        background: #8c00ff;
        font-size: 25px;
        font-weight: bold;
        border-radius: 5px;
        margin-top: 10px;
        border: none;
        font-family: 'Roboto';
        color: white;
    }
    
    .button-profile-page {
         height: 60px;
        width: 200px;
        background: transparent;
        font-size: 25px;
        font-weight: bold;
        border-radius: 5px;
        margin: 0px;
        border: 2px solid;
        font-family: 'Roboto';
        color: white;
        margin-right: 15px;
    }
    .button-profile-page-mobile {
      display: none;
       height: 60px;
        width: 200px;
        background: transparent;
        font-size: 25px;
        font-weight: bold;
        border-radius: 5px;
        margin: 0px;
        border: 2px solid;
        font-family: 'Roboto';
        color: white;
        margin-right: 15px;
    }
    
    
    
    .error {
      color: red;
    }
    
    @media (max-width:700px) {
      .main-profile {
        display: flex;
        flex-direction: column-reverse;
        justify-items: flex-start;
      }
      .right-profile {
        margin-bottom: 40px;
      }
    
    
    
    .button-profile-page {
    visibility: hidden;
    }
    .button-profile-page-mobile {
    display: block; 
     margin: auto;
    }
    
    
     
    }
    </style>