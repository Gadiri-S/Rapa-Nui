<template>
<div class="contact">
  <h1>CONTACT</h1>
  <div class="home-contact">

<div class="main-contact">
    <div class="left"> 
        <form class="form-contact">
            <input type="text" placeholder="Firstname*" v-model="firstname" required>
            <input type="text" placeholder="Lastname*" v-model="lastname" required>
            <input type="email" placeholder="Email*" v-model="email" required>
            <textarea rows="7" class="input" placeholder="Message*" required></textarea>
            <button class="send">Send a message</button>
        </form>
    </div>
    
    <div class="right">
      <form action="">
        <input type="text" placeholder="Your name*" required>
        <input type="tel" placeholder="Your phone number*" required>
        <button>Request a Callback</button>

      </form>
    </div>
   
</div>
  </div>
  </div>
</template>

<script>
import Header from './Header.vue';
export default {
 components: {
    Header
  },

  data() {
      return {
          firstname:"",
        lastname:"",
          email:"",

      }
     
  },
   beforeMount() {
          this.getOneUser()
      },
  methods: {
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
      this.lastname = user.lastname;
      this.email = user.email;
      this.isAdmin = user.isAdmin
      console.log(user)

    } catch (error) {
        console.log(error)
    }

    }
     
  }
  
  }
</script>

<style scoped>



h1{
    font-size: 40px;
    padding: 20px;
    font-weight: 500;
}

.main-contact {
  display: flex;
  justify-content: space-around;
  padding: 25px 0 25px 0;
}
.main-contact input{
  margin: 10px 0 10px 0;
  font-size: 20px;
  padding: 5px;
  font-family: 'Poppins', sans-serif;
}

.main-contact button{
  border: none;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
   background:#8c00ff;
     padding: 10px;
     color: white;
     cursor: pointer;


}
.home-contact {
 color:black;
   


}

.right{
  width: 30%;
}
.left{
  width:40%
}
.right form {
  display: flex;
  flex-direction: column;


}

.left form {
    display: flex;
  flex-direction: column;
}

textarea {
   font-size: 20px;
  padding: 5px;
  font-family: 'Poppins', sans-serif;
  margin: 15px 0 15px 0;
}

@media (max-width:800px) {
  .main-contact {
  display: block;
  margin:auto auto 25px auto

}
.right,.left{
  width: 80%;
  margin: 25px auto 25px auto;
}

}
</style>