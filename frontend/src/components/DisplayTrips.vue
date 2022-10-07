<template>

<div class="container-destination">

   <div v-if="isAdmin == 1">

<button class="button-new" @click="show"> Create a new trip</button>

 <div v-if="ok==true">
  <NewTrip/>
  </div> 
  </div>


  <div class="img-container">

 <div  v-for="product in products"
                  :key="product"
                  class="card"  @click="get(product.id)"> 

                  <img :src="product.image" alt="" class="pic">
              <!--    <div class="sub">
                 <h3 class="text-img_title"> {{product.country}} </h3>

             
                  </div> -->
                    </div>
  </div>
  <Trip v-if="showModal==true"
      @close="closeModal">
</Trip>
  </div>

  
</template>

<script>
import axios from 'axios';
import NewTrip from '../components/NewTrip.vue'
import Trip from '../components/Trip.vue'
export default {
  name: "DisplayTrips",
  components: {
    NewTrip,Trip
  },
  data() {
    return {
         products:'',
      wago:this.wago,
      name:"",
      picture:"",
        country:'',
        starts:'',
        ends:"",
        city:"",
        price:"",
        number:"",
        image:"",
        description:"",
        ok:false,
        id:this.id,
        showButton:false,
        lorol:this.lorol,
        isAdmin:false,
        showModal:false
    }
  },
   beforeMount() {
   this.getProducts()
 //  this.user();

 //this.get(wago)
      
  },
  onchange() {
this.button();
  },
  computed: {
   
  },
  methods: {
    showEl() {
      this.showModal = true;
      this.showUser = true;
      console.log(this.showUser)
    },
    closeModal() {
       this.showModal = false;
       this.showUser = false
       console.log(this.showModal)

     },



async user() { 
        const id = this.$store.state.user.id;
        const token = this.$store.state.token

        try {
          const res = await fetch(`http://localhost:3000/api/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          const response = await res.json();

          this.isAdmin = response.isAdmin

        } catch(error) {
          console.log(error)
        }

},

show() {
  this.ok =  !this.ok;
  console.log("OKKK")
},

 async get(id){

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

  localStorage.setItem('idtrip',id);

  const lorol = localStorage.getItem("idtrip",id)

  this.lorol = lorol

        console.log(lorol)
        console.log(id)
        console.log(this.country)
      this.showButton = true;

      this.showModal = true;
      this.showUser = true;
      console.log(this.showUser)
      
     } catch (error) {
            console.log(error)
     }
   }  ,

    switch() {
      this.ok = !this.ok
    },

    async getProducts() {

        try {

          const response = await  axios.get('products');

          const products = response.data;
        
        this.products = products;
           

           const wago  = products[products.length-1].id;
           const m =  localStorage.setItem('featured',wago);

           console.log(products)





        products.forEach(product => {

             
        this.name = product.name;
        this.country = product.country;
        this.price = product.price; 
        this.number = product.number;
        this.starts = product.starts;
        this.ends = product.ends;
        this.city = product.city;
        this.image = product.image;
        this.description = product.description;
        this.id = product.id;

   
        });

        
        }
      catch(error) {

      }
    },

  


  }
  
}
</script>

 
<style scoped>


.card:nth-child(2n) {
  background-color: #ffc400;
}


    

.img-container {
    display: flex;
    flex-wrap: wrap;
    margin: 0;


}

.title-page {
  font-size: 60px;
}

.pic {
    object-fit: cover;
    height: 45vh;
        width: 100%;


   
}
 .card {
   display: flex;
   flex-direction: column;
  height: auto;
  width: 25%;
   background:#8c00ff;
  cursor: pointer;

}

.text-img_title {

text-align: left;
margin-left: 25px;
padding: 2px;
  color: white;
font-size: 20px;}
.text-img {
  text-align: left;
  padding: 2px;
margin-left: 25px;
color: black;
font-size: 15px;
}

.button-book {
  margin: 10px 0 0 25px;
   cursor: pointer;
    background-color: #d4418e;
background-image: linear-gradient(315deg, #d4418e 0%, #0652c5 74%);
height: 35px;
    width: 140px;
    font-size: 18px;
    font-weight: bold;
    border: 2px solid white;
font-family: 'Poppins', sans-serif;
    color: white;;
}



.button-new {
      margin-bottom:40px ;
      width:250px;
      background: transparent;

}

/***************************************************************************************** */

@media (max-width:800px) {
 .img-container{
  display: flex;
  flex-direction:column;
 }
.card{
  width: 100%;
}
.pic {
    object-fit: cover;
    height: 40vh;
        width: 100%;
}
.arrow{
  padding:3vh;
  font-size: 30px;

}
}
</style>