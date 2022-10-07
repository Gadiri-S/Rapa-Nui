<template>

  <div class="container">

<router-link to="/"><div class="logo-container">
      <img src="../assets/images/mask.png" class="logo-header" /> <h3>Rapa Nui Wonders</h3>
         </div> </router-link> 

           <div class="burger">
                <i class="fas fa-bars"></i>
                <li><router-link to="/">Home</router-link></li>
            <li @click="nav(destinations[0].id)">Destinations</li>
            <li>About</li>
            <li @click="nav(contact[0].id)">Contact</li>
            </div>
         
<div class="list">    
             
             <div class="navigation">
            <li><router-link to="/">Home</router-link></li>
            <li @click="nav(destinations[0].id)">Destinations</li>
            <li li @click="nav(about[0].id)">About</li>
            <li @click="nav(contact[0].id)">Contact</li>
            </div>

          
           <i class="far fa-user" @click="showEl"></i>

           <div v-if="showModal==true">

  <teleport to=".container"> 

      <div v-if="isUserLoggedIn == false"></div>
    <Interface v-if="showModal==true"
      @close="closeModal">
     </Interface>

    
     
  </teleport>    
  </div>

</div>
      
  </div>
</template>

<script>
 import { mapState } from 'vuex';
 import Interface from '../components/Interface.vue'
 import User from '../components/User.vue'

export default {
  name: "Header",
  components:{Interface,User},

  data() {
      return {
           email:'',
          password:'',
          isUserLoggedIn:false,
          error:'',
          show:false,
          showUser:false,
          login:false,
                  showModal:false,


               destinations: [
   {
id: 'destination'}],

  contact: [
   {
id: 'contact'}],
      }
  },
    computed: {
    
        ...mapState(['status'])

    },
  
    methods:{
       
       showEl() {
      this.showModal = true;
      this.showUser = true;
      console.log(this.showUser)
    },
     closeModal() {
       this.showModal = false;
       this.showUser = false
       console.log(this.showModal)
              console.log(this.showUser)

     },
     

      nav(id) {

        const position = document.getElementById(id).offsetTop;
          // smooth scroll
         window.scrollTo({ top: position, behavior: "smooth" });  
    }
    }
}
</script>

<style scoped>




.container {
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: transparent;


    height: 12vh;
/*background-color: #f7b42c;
background-image: linear-gradient(315deg, #f7b42c 0%, #fc575e 74%);*/


    color: white;
}

.fa-user {
    font-size: 25px;
    padding: 25px;
}
.fa-user:hover {
cursor: pointer;
}

.header {
    display: flex;
    justify-content: space-between;
}

.list {
    display: flex;

    align-items: center;
       
}
.navigation {
      display: flex;

    align-items: center;
       
    list-style: none;
    color: white;
    font-size: 20px;
}

.list li {
    padding: 0 10px 0 10px;
    cursor: pointer;
}

.fa-bars {
    color: white;
    font-size: 35px;
    cursor: pointer;
}

.burger {
display: none;
}

a {
    text-decoration: none;
}
a:visited {
    text-decoration: none;
    color: inherit;
}

.logo-header {
    height: 75px;
}

.logo-container {
    display: flex;
    align-items: center;
}
.logo-container h3 {
    font-size: 25px;
}


@media (max-width:800px) {
    
    .container {
        padding: 5px;
    }
    

    .navigation {
        display: none;
    }

    .logo-container h3 {
    font-size: 20px;
}

}
</style>