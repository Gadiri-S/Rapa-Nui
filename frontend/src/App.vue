<template>
<div>
 <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  <Loader/>

  </div>-->
        <router-view/>

  </div>
  
</template>
<script>
// @ is an alias to /src


export default {
  components: {
  }}
  </script>
<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
 .error-msg {
    font-size: 20px;
    color: red;
  }

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Roboto:wght@300;400;500;700&display=swap');

</style>
