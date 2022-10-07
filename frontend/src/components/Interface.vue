<template>

<div class="modals">

<div class="backdrop">
  <button class="close"  @click='$emit("close")'>×</button>



 <div class="featured">
  
  
 <div v-if="stat == stat && stat !=='' && stat !==null">

    <div class="user">
     <div class="user-header">
                   <div class="profile">  
              </div>

 

               </div>

       
    <div>
      <Profile/>
    </div>

      <!-- <User/>
<User/>-->
  </div>           
         </div>

         <div v-else class="test">
          <button class="button-user" @click="signup">Sign up</button>
         <button class="button-user" @click="login">Log in</button>
          <button class="button-user" @click="demologin">Demo user</button>


          <div v-if="ok==true && ko==false"> 

    <Signup/>
  </div>
<div v-if="ko==true && ok==false">
   <Login/>
</div>
<div v-if="ko==false && ok==false && demo == true">
   <DemoLogin/>
</div>

</div>
      </div>
      </div>
      </div>
</template>

<script>
import Signup from '../components/Signup.vue';
import Login from '../components/Login.vue';
import User from '../components/User.vue'
import DemoLogin from '../components/DemoLogin.vue'
import Profile from '../components/Profile.vue'

export default {
  name: "Interface",
  components: {
    Signup,Login,User,DemoLogin,Profile
  },

  data() {
      return {
          ok:true,
          ko:false,
          demo:false,
          isUserLoggedIn:false,
          firstname:'',
          showUser:false,
            showModal:false,
            revo:false,

          id:''
      }
  },
  beforeMount() {
this.getOneUser()
  },
   computed: {
    stat () {
      return this.$store.state.token}
   },
    
  methods: {
      signup() {
    this.ok =true;
    this.ko = false;

      },
      login() {
    this.ok = false;
    this.ko = true;

      },
      demologin() {
    this.ok = false;
    this.ko = false;
    this.demo = true
      }
  ,


   async getOneUser() {

      const id = this.$store.state.user.id;
     const token = this.$store.state.user.token;

    
    try {
        const res = await fetch(`http://localhost:3000/api//user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const user = await res.json();

      this.firstname = user.firstname;
      this.isAdmin = user.isAdmin
      console.log(user)

      this.revo =!this.revo

    } catch (error) {
        console.log(error)
    }

    }
     
      },
       showUserPage() {
      this.showUser = true;
      console.log(this.showUser)
    },
     closeUser() {
       this.showUser = false;
       console.log(this.showUser)
     },
     

}
</script>

<style scoped>

.user{
  display: flex;
  flex-direction: column;

}


.user-header {
  display: flex;
    justify-content: space-evenly;
    margin-top: 150px;

}


.featured {
display: flex;
justify-content: center;
align-items: flex-start;
background: linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.35)),url('../assets/images/travel.jpg');
background-size: cover;
  background-position: left;
  box-sizing: border-box;
  top: 0;
left: 0;

    position: fixed;
    width: 100vw;
    min-height: 100vh;
    z-index: 998;
    margin: auto;


}
.test{
  margin-top: 50px;
}

h1 {
  text-align: center;
            font-size: 70px;
            margin-bottom: 25px;}
            h2 {
  text-align: center;
            font-size: 40px;
            margin-bottom: 25px;}


.form {
    display: flex;
    flex-direction: column;
    justify-content: center;    
}

       .form input {
           height: 7vh;
           padding-left: 5px;
           border-radius: 5px;
           border: 2px solid white;
           margin-bottom: 2vh;
           font-size: 25px;
           color: white;

       }

 
.button-user {
    width: 150px;
    background: #8c00ff;
    font-size: 25px;
    border-radius: 5px;
    border:none;
font-family: 'Poppins', sans-serif;
    color: white;
    margin-right: 15px;
    cursor:pointer;
}

.backdrop {
    top: 0;
    left: 0;
    position: fixed;
    background: white;
    width: 100vw;
    height: 100vh;
    z-index: 998;
    margin: auto;
    margin-top: 0;
}



.close {
  position: relative;
  right: 40px;
  top: 5px;
  margin: auto;
float: right;
background: transparent;
border: none;
color: #ffc400;;
font-size: 50px;
cursor: pointer;
z-index: 999;
}





@media (max-width:750px) {




h1 {
  font-size: 25px;
  margin: auto;
}
     .button-user {
                   
    height: 40px;
    width: 80px;
    background: transparent;
    font-size: 10px;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 10px;
    border: 2px solid white;
font-family: 'Poppins', sans-serif;
    color: white;
  }

 
     .button-profile {
                   
    height: 40px;
    width: 100px;
    background: transparent;
    font-size: 15px;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 10px;
    border: 2px solid white;
font-family: 'Poppins', sans-serif;
    color: white;
  }
     .button-logout {
                   
    height: 40px;
    width: 100px;
    background: transparent;
    font-size: 15px;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 10px;
    border: 2px solid white;
font-family: 'Poppins', sans-serif;
    color: white;
  }

  .close-user {
width: 50px;
  }
  .user-header {
    margin-bottom: 40px;
  }
  .backdrop {
    top: 0;
    left: 0;
    position: fixed;
    background: white;
    width: 100%;
    height: 100vh;
    z-index: 998;
    margin-top: 0;
}
}
</style>