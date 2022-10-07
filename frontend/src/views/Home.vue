<template>
<div>
  <div class="home" id="home">
     <Header/>

    <div class="main-home">
  <Featured/>

    </div>
</div>

    <div class="destination">
      <DisplayTrips id="destination"/>
    </div>

    <About/>
  

 <!----> <div class="contact">
    <Contact id="contact"/>
  </div>
  
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue';
import Featured from '../components/Featured.vue'
import Interface from '../components/Interface.vue';
import Login from '../components/Login.vue'
import DisplayTrips from '../components/DisplayTrips.vue';
import Contact from '../components/Contact.vue';
import About from '../components/about.vue'

export default {
  name: 'Home',
  components: {
    Header,Featured,Interface,Login,DisplayTrips,Contact,About
  },
  data() {
    return {
      display:true
    }
    
  },
  methods: {
      show() {
        this.display = !this.display
      }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); 


* {
  padding: 0;
  margin: 0;
}

.home {
    background:linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.35)),url('../assets/images/indonesia8.jpg');
  background-size: cover;
  background-position: left;
  box-sizing: border-box;
  height: 100vh;
  color: white;

}

.main-home {

  display: flex;
  flex-direction: column;

}



.display {
  display: flex;
  flex-direction: column;
}

@media (max-width:800px) {
  .main-home {
margin-top: 150px;

}
}

</style>