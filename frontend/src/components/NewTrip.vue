<template>
  <form class="form"  @submit.prevent="handleSubmit">
    
    <input type="text" class="form-input"  placeholder="Country" required v-model="country">
    <input type="text" class="form-input"  placeholder="City" required v-model="city">
        <input type="text" class="form-input"  placeholder="Description" required v-model="description">
        <input type="number" class="form-input"  placeholder="Price in euros" required v-model="price">


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


    <button type="submit" class="form-button-dest" @click="create">Create a new trip</button>

</form>
</template>

<script>

import axios from 'axios';
import api from '../services/api'


export default {
      name: "NewTrip",
      components: {},
  data() {
    return {
     
     
        name: "",
        country: "",
        city:"",
        starts: "",
        ends:"",
        price:"",
        number:"",
        image:'',
        description:'',
    
      showError: false
    };
  },
 
  methods: {
       handleFileUpload() {
      this.image = this.$refs.image.files[0];
      //console.log(this.$refs.image.files)
    },
   async create() {
            const token = this.$store.state.user.token;
            const formData = new FormData();


            formData.append("image",this.image)
           formData.append("name",this.name)
                      formData.append("country",this.country)
           formData.append("city",this.city)
           formData.append("number",this.number)
           formData.append("price",this.price)
           formData.append("starts",this.starts)
                      formData.append("ends",this.ends)


           

    
       try {

           const response = await axios.post('product', formData
           
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
}       }
   },
  
  
  },
};

</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    margin: auto;
}

       .form-input {
           height: 7vh;
           width: 40vw;
           margin-bottom: 2vh;
           font-size: 25px;
           background: transparent;
               margin: 10px auto 10px auto;
                   border: 2px solid #ffffff;
                   border-radius: 5px;
                   color:white;


       }


       .form-button-dest {
                   
    height: 70px;
    width: 220px;
    background: transparent;
    font-size: 25px;
    font-weight: bold;
    border-radius: 5px;
    margin: 30px auto auto auto;
    font-family: 'Roboto';
  }
  .custom-file-input {
      border: none;
  }
</style>