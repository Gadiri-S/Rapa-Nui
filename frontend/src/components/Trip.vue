<template>
  <div class="modals">
    
  
    <div class="home-destination-shop" :key="componentKey"   >
      <button class="close"  @click='$emit("close")'>×</button>


      <h1 class="country"> {{country}}</h1>
       
  
  
      <div class="main">
  
  <div v-if="this.hasBought==false" class="left">

    
   <div v-if="isAdmin == 1">
  
  <div class="buttons">
  <button class="button-new" @click="show">Modify this trip</button>
  <button class="button-delete" @click="show">Delete this trip</button>
  <label for="image">
            <input
              type="file"
              name="image"
              id="image"
              ref="image"
              class="custom-file-input"
              v-on:change="handleFileUpload()"
            />
          </label>
          <button class="button-add" @click="addImages">Add new picture</button>
          </div>
  
  
  
   <div v-show="ok">
    <NewTrip/>
    </div> 
    </div>
  
  <div v-if="ok == false">
    <div class="info-trip">

      <h2>{{city}}</h2>
       <h2>{{price}} €</h2>
  
     
  <div v-if="!OrderNumber">
          <div class="calendar">
            
            <div class="box">
        <h2>Departure</h2>
      <input type="date" name="Depature" id="departure" class="trip">  
      </div>
  
      <div class="box">
       <h2>Arrival</h2>
      <input type="date" name="" id="arrival" class="trip">
      </div>
      
      </div>
          <div v-if="error"><p class="error-msg">{{error}}</p></div>
  
      </div>
  
  
    
       
  
   </div>
    </div>
  </div>
  <div class="right" v-if="this.hasBought==false">
    <div v-if="!firstname" class="warning"><span class="warning">You must be logged in to book a trip</span></div>
 
    <div v-else>
   <form class="form"  @submit.prevent="handleSubmit">
      
      <input type="text" class="form-input" placeholder="Firstname" required v-model="firstname" disabled>
      <input type="text" class="form-input"  placeholder="Lastname" required v-model="lastname" disabled>
      <input type="text" class="form-input"  placeholder="Card number" required v-model="cardnumber" disabled>
      <input type="text" class="form-input"  placeholder="Expiration date (MM/YY)" required v-model="expiration" disabled>
          <input type="text" class="form-input"  placeholder="CVC" required v-model="cvc" disabled>
  
      <button type="submit" class="form-button" @click="buy">Buy</button>
      <p class="message">This is a demo, press buy to purchase the trip</p> 
      
  
  </form>
  </div>
  </div>

  <div v-else-if="this.hasBought == true" class="gogo">


<h1>THANK YOU FOR TRAVELING WITH US <br> {{firstname}}!</h1>
<p>Your order id is : <span>{{OrderNumber}}</span></p> 
 <p>You leave for <span> {{city}}</span> on the <span>{{Orderstarts}}</span></p>
 <p>and come back to <span>{{cityUser}}</span> on the <span> {{Orderends}}</span></p>
<p>The total amount for your trip is <span>{{price}}€</span></p>
<p>We will send you by <span>email</span> your <span>flight tickets</span>, see you soon!</p>


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
import {ref} from "vue";
  
  
  export default {
    name: 'Home',
    components: {
     Featured,Interface,NewTrip,Trip
    },
  
  
    data() {
      return {
        componentKey:'',
        isAdmin:false,
        ok:false,
        showpic:false,
        error:"",
        list:this.list,
        wago:this.wago,
        products:'',
        name:"",
        firstname:"",
        lastname:"",
        cardnumber:"Card Number",
        expiration:"Expiration Date",
        cvc:"CVC",
          country:'',
          starts:'',
          ends:"",
          Orderstarts:this.Orderstarts,
          Orderends:this.Orderends,
          city:"",
          price:"",
          number:"",
          image:"",
          description:"",
          id:this.id,
          total:"",
          starts:"",
          ends:"",
          OrderNumber:"",
          UserId:"",
          ProductId:"",
          OrderProductId:'',
          hasBought:false,
          faved:false,
          cityUser:''
      }
    },
    
      
     beforeMount() {
        this.getOneUser();
        this.get();
        this.getOrders();
        
    },
    onchange() {
  
this.buy()    },
    computed: {
      stata () {
      return this.hasBought}},
    methods: {
  
    
      show() {
        this.ok = !this.ok
      },
  showImages() {
    this.showpic = !this.showpic
    console.log('ok')
  },
      async get(){
         
         const id = localStorage.getItem('idtrip');
  
         this.id = id;
  
  
   try {
           const res = await fetch(`http://localhost:3000/api/product/${id}`);
  
           const response = await res.json();
  
           
          this.name = response.name;
          this.country = response.country;
          this.price = response.price; 
          this.number = response.number;
          this.starts = response.starts;
          this.ends = response.ends;
          this.city = response.city;
          this.image = response.image;
          this.description = response.description
  
          
  
          console.log(id)
  
   /*    document.querySelector(".home-destination-shop").style.background=`linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url(${this.image})`;
  
  */
       } catch (error) {
              console.log(error)
       }
     }  ,

     closeModal() {
       this.showModal = false;
       this.showUser = false
       console.log(this.showModal)

     },
  
      switch() {
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
        this.isAdmin = user.isAdmin;
        this.cityUser = user.city
        console.log(user)
  
      } catch (error) {
          console.log(error)
      } } 
  
      }, 
         handleFileUpload() {
        this.image = this.$refs.image.files[0];
        //console.log(this.$refs.image.files)
      },
  
      async addImages() {
           const token = this.$store.state.user.token;
                  const ProductId = localStorage.getItem('idtrip');
  
              const formData = new FormData();
  
  
              formData.append("image",this.image)
              formData.append("ProductId",ProductId)
          
         try {
  
             const response = await axios.post('images', formData
             
             , {
            headers: {
          'Content-Type': 'multipart/form-data',
  
              Authorization: `Bearer ${token}`,
            },
          })
          console.log(response)
         } catch (error) {
             console.log(error.response)
  for(var pair of formData.entries()) {
     console.log(pair[0]+ ', '+ pair[1]);
  }       }},
  
  
  async buy() {
  
  
  try {
    const crypto = require("crypto");
    const UserId = this.$store.state.user.id;
    const ProductId = localStorage.getItem('idtrip');
    const starts = document.getElementById("departure").value;
    const ends = document.getElementById("arrival").value;
  
  const response = await axios.post("order", { 
          UserId:UserId,
          ProductId:ProductId,
          total:this.price,
          OrderNumber: crypto.randomBytes(16).toString("hex"),
          starts:starts,
          ends:ends,
          error:this.error
            } );
             //   window.location.reload();
            this.getOrders()
           //  this.componentKey+=1;
    } catch (error) {
             this.error = error.response.data.error;
  
     console.log(error.response.data.error)
    }
  },
  async getOrders() {
  

  
    try {
        const UserId = this.$store.state.user.id
      const response = await axios.get(`order/${UserId}`)
  
      console.log(response.data)
  
  
      for (const element of response.data) {
     //   console.log(element.ProductId)
  
      const OrderProductId = element.ProductId
  
      this.OrderProductId = OrderProductId;
  
  if(this.id == OrderProductId){
   //  console.log("KAWABOUNGA!")
     this.hasBought = true;
  

     //

    
  this.OrderNumber = element.OrderNumber;

  
  const start = element.starts
  const end = element.ends


    var d = new Date(start),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate()

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

 this.Orderstarts = [month, day].join('-');

 var e = new Date(end),
        month = '' + (e.getMonth() + 1),
        day = '' + e.getDate()

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
 this.Orderends = [month, day].join('-');
;

     }


      }

     
  
  
    } catch(error) {
      console.log(error)
    }
  },
  
  
  },
  
    
  }
  </script>
  
  <style scoped>
    @keyframes movedown {

0% {
    transform: translateY(-100vh);
}
100% {
    transform: translateY(0);

}
}


  .home-destination-shop {
    background:url('../assets/images/travel5.jpg');
    background-size: cover;
    background-position: center;
    box-sizing: border-box;
    padding: 5%;
       color: white;
       top: 0;
  /**/  left: 0;
    position: fixed;
    width: 100vw;
    min-height: 100vh;
    z-index: 998;
    margin: auto;
    margin-top: 0;
    animation: movedown 1s linear 1;



;
  }
  .error-msg{
    color:#ffc400;
  }
  .close{
    margin-right: 50px;
float: right;
background: transparent;
border: none;
color: white;
font-size: 30px;
cursor: pointer;
}
  
  
  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  margin-top:5vh;
  
  }
  
  
  
  .button-buy {
      height: 40px;
      width: 350px;
      background: transparent;
      font-size: 25px;
      font-weight: bold;
      border-radius: 5px;
      margin-top: 10px;
      border: 2px solid white;
      color: white;
    
  }

  .info-trip h2{
    font-weight: 900;
    font-size:40px;
  }
  /*
  .button-new {
                      
      height: 80px;
      width: 180px;
      background: rgb(0, 3, 165);
      font-size: 25px;
      font-weight: bold;
      border-radius: 5px;
      margin-top: 10px;
      border: none;
      font-family: 'Roboto';
      color: white;
  }
  .button-delete {
                        
      height: 80px;
      width: 180px;
      background: red;
      font-size: 25px;
      font-weight: bold;
      border-radius: 5px;
      margin-top: 10px;
      border: none;
      font-family: 'Roboto';
      color: white;
      margin-left: 50px;
  }
  .button-add {
                        
      height: 80px;
      width: 180px;
      background: rgb(0, 165, 102);
      font-size: 25px;
      font-weight: bold;
      border-radius: 5px;
      margin-top: 10px;
      border: none;
      font-family: 'Roboto';
      color: white;
      margin-left: 50px;
  }
  
  
  .buttons {
      display: flex;
  }*/
  
  .country {
    text-align: center;
            font-size: 70px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 2.5px;

  }


  
  .con {
    display: flex;
    margin-left: 35px;
  }
  
  .second {
      height: 100vh;
      background: black;
  }
  .warning {
    margin-top: 30vh;
    font-size: 40px;
    font-weight: bold;
    text-transform:uppercase;
    margin:auto;
  }
  
  .validation {
    font-size: 70px;
  }
  
  .confirmation {
    font-size: 30px;
    color:black;
  }
  .info-trip {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  

  p {
    margin-top: 15px;
    color: color;
    font-weight: bold;
  }
  
  .calendar {
    display: flex;
  }
  
  
  .box {
    padding:10px;
  }
  
  .trip {
    height: 50px;
    font-size: 25px;
  }
  .message {
    font-size: 20px;
    font-weight: 900;
  }
  
  .form {
    display: flex;
    flex-direction: column;

  }
  
  .form-input {
    margin: 10px 0 10px 0;
  font-size: 20px;
  padding: 5px;
  font-family: 'Poppins', sans-serif;
  background: rgba(255, 255, 255, 0.826);
  }
  .form button{
    margin: 10px 0 10px 0;

    border: none;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
   background:#8c00ff;
     padding: 10px;
     color: white;
     cursor: pointer;
  }

  .form button:hover{
    background:rgb(0, 207, 110);
   transition: .2s ease-in-out;
  }
  
  .gogo {
    
    margin: 50px auto auto auto;
    background: rgba(0, 0, 0, 0.651);
    padding: 10px;
    border-radius: 15px;

    
  }
  .gogo h1{
    font-size: 40px;
    font-weight:900;
    margin-bottom: 25px;
  }
  .gogo h2{
    font-size: 25px;
  }
  .gogo p{
    font-size: 25px;
  }
  .gogo span{
    color: #ffc400;
  }
  .order {
    color:black;
  }
  .validation {
    font-size: 50px;
    color:black;
  }
  
  .confirmation h2 {
    font-size: 35px;
    color:black;
  }
  
  @media (max-width:1000px) {
  
    .home-destination-shop {
    background-size: cover;
    box-sizing: border-box;
    padding: 1%;
    color:white;
  }
  .close{
    margin-right: 15px
}
.country{
  font-size: 40px;
}

.form button{
  margin:0;
}
.form-input {
    margin: 0;
  font-size: 20px;
  padding: 3px;
  font-family: 'Poppins', sans-serif;
  background: rgba(255, 255, 255, 0.826);
  }
 
    .main {
      display: flex;
      flex-direction: column;



    }
  
  
    .info-trip h2 {
      font-size: 20px;
    }
    .validation,.warning,.confirmation,.message{
      font-size:20px;
      margin: 0;
    }
  
    .calendar {
      display: flex;
      margin: 30px 0 30px 0;
      width: 90%;
    }
    .calendar h2{
      font-size: 20px;
    }
    .calendar input{
      font-size: 20px;
      height: 25px;
    }
  
  .main {
    margin:auto;
    padding: auto;
  }
  
  .order {
    font-size: 20px;
  }

  .gogo {
    
    margin: 50px 0 0 0;
    background: rgba(0, 0, 0, 0.651);
    padding: 10px;
    border-radius: 15px;

    
  }
  .gogo h1{
    font-size: 25px;
    font-weight:900;
    margin-bottom: 25px;
  }
  .gogo h2{
    font-size: 15px;
  }
  .gogo p{
    font-size: 15px;
  }

  
  @media (max-width:470px) {
    .order {
    font-size: 17px;
  }
  }
  }
  </style>