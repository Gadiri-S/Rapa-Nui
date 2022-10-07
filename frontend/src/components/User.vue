<template>
<div>
  
      <div>
                  <button class="button-profile" @click="getOneUser" > 
Profile</button> 
               <button class="button-logout" @click="logout">Log out</button>
                  <button class="close"  @click='$emit("close")'>×</button>


      <h1>Hello {{firstname}}</h1>        
    
    
    
    
    </div>


    <div>
    </div>
  </div>


</template>

<script>


export default {
      name: "User",

      data() {
        return {
          firstname:this.firstname,
          lastname:this.lastname,
          showUser:false
        }
        
      },
       computed: {
   
    },

    beforeMount() {
      this.getOneUser()
    },
    
      methods: {
      
    
logout() {

      this.$store.dispatch("setToken", null);
      
    return this.$store.commit('logout');
    
    },

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

    } catch (error) {
        console.log(error)
    }

    },
     
        showUserPage() {
      this.showUser = true;
      console.log(this.showUser)
    },
     closeUser() {
       this.showUser = true;
       console.log(this.showUser)
     }
      }

}
</script>

<style scoped>

h1 {
    margin-top : 8vh;
}

.button-logout {
     height: 40px;
    width: 150px;
    background: transparent;
    font-size: 25px;
    font-weight: bold;
    border-radius: 5px;
    margin: 0px;
    border: 2px solid crimson;
    font-family: 'Roboto';
    color: crimson;
    margin-right: 15px;
}
.button-profile {
     height: 40px;
    width: 150px;
    background: transparent;
    font-size: 25px;
    font-weight: bold;
    border-radius: 5px;
    margin: 0;
    border: 2px solid white;
    font-family: 'Roboto';
    color: white;
    margin-right: 15px;
}
.close {
  margin: auto;
float: right;
background: transparent;
border: none;
color: white;
font-size: 30px;
}
</style>