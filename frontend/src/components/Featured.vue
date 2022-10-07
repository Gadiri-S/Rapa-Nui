<template>
  <div>

    
<div class="text">
<h2>start your adventure <br> today</h2>

<button  @click="nav(destinations[0].id)">EXPLORE</button>
</div>

<div class="controls" >
  <div class="img-btn active invisible"></div>
   <div  v-for="product in products"
                  :key="product"
                  :id="product.id"
                   class="img-btn"
                 @click='carousel(product.id)' > 

  </div>

</div>

<!--<label for="image">
          <input
            type="file"
            name="image"
            id="image"
            ref="image"
            class="custom-file-input"
            v-on:change="handleFileUpload()"
          />
        </label>
                <button class="button-add" @click="addImages">Add new picture</button>-->

  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: "Featured",

  data() {
    return {
image:"",
products:"",
selected:false,
     destinations: [
   {
id: 'destination'}],
    }
  
  }, 
   beforeMount() {
this.getImages()
    },
  methods:{


       nav(id) {

        const position = document.getElementById(id).offsetTop;
          // smooth scroll
         window.scrollTo({ top: position, behavior: "smooth" });  
    },

  handleFileUpload() {
      this.image = this.$refs.image.files[0];
      console.log(this.$refs.image.files)
    },

    async addImages() {
 

            const formData = new FormData();


            formData.append("image",this.image)
        
       try {

           const response = await axios.post('featured', formData
           
           , {
          headers: {
        'Content-Type': 'multipart/form-data',

           // Authorization: `Bearer ${token}`,
          },
        })
        console.log(response)
       } catch (error) {
           console.log(error.response)
for(var pair of formData.entries()) {
   console.log(pair[0]+ ', '+ pair[1]);
}       }},

 async getImages() {


        try {

          const response = await  axios.get(`featured`);

          const products = response.data;
        
        this.products = products;
           



        products.forEach(product => {

             
      
        this.image = product.image;
       
       // console.log(this.image)

        });
        }
      catch(error) {
          console.log(error)
      }
    },


   async carousel(id){
     
        try {

          const response = await  axios.get(`featured/${id}`);

          const products = response.data;
        
      

      const btn = document.getElementById(id);

 const imgBtn = document.querySelectorAll('.img-btn')

     imgBtn.forEach(btn => {
       

    btn.addEventListener('click',()=> {
       
                document.querySelector('.active').classList.remove("active");

        btn.classList.add("active") 
        }) } );




        const src= products.image
        
document.querySelector(".home").style.background=`linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.25)),url(${src})`;
document.querySelector(".home").style.backgroundSize="cover";
document.querySelector(".home").style.backgroundPosition="left";
document.querySelector(".home").style.boxSizing="border-box";
document.querySelector(".home").style.height="100vh";



                
        }
      catch(error) {
          console.log(error)
      }

      
    }
    

  }

}
</script>

<style scoped>


.featured {
 color: white;
 height: 100vh;
}

.text {
    margin-top: 20vh;

    
}

            h2 {
  text-align: center;
            font-size: 60px;
            font-weight: 900;
            margin-bottom: 25px;
            text-transform: uppercase;
            letter-spacing: 2.5px;
             color: rgb(255, 255, 255);
            }



            button {
    height: 40px;
    width: 150px;
    background: transparent;
    font-size: 25px;
    font-weight: bold;
    margin-top: 10px;
    border: none;
font-family: 'Poppins', sans-serif;
    color: white;
    cursor: pointer;
      border:1px solid white;

}
button:hover{
  background: transparent;
  transition: .1s;
     background:#8c00ff;

}


.img-btn {
  height: 2rem;
  width: 2rem;
  margin: 0.5rem;
  display: inline-block;
  border-radius: 50%;
  background: white;
  cursor: pointer;
}

.invisible {
  display: none;
}

.controls {
  display: flex;
  justify-content: center;
  width: 230px;
  margin: 2rem auto auto auto;
 background:linear-gradient(rgba(0,0,0,0.85),rgba(0,0,0,0.85));
  padding: 0.5rem;
  border-radius: 25px;
}

.img-btn.active { 
   background:#ffc400;

}

@media (max-width:800px) {
  .text {
    margin: 0;
    padding: 0;
  }
 
  h2 {
    font-size: 25px;
  }
  .featured {
 color: white;
 height: auto;
}

.controls {
  margin-bottom:20px;
}
}

</style>