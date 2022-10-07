<template>
  <div class="about">
    <h1>WHO WE ARE AND WHAT WE BELIEVE IN</h1>

    <div class="text-about">

        <p>Rapa Nui Wonders started from belief, the belief that it was everybody's mission to wander and witness the world's wonders!</p>
        <p>Too often tourism is perceived as a little escapade, not for us. We strongly believe that tourism should be about adventure.</p>
        <p>We are trying our best to provide the most exciting locations, all around the world to make you experience the beauty of each culture humanity has to offer.</p>
        <p>We often update our trips and add new locations so make sure to often check us out or surbiscribe to our newsletter to never miss anything!</p>
        <p>We are committed to create the most exciting experience for our customers, so come along!</p>

        <form class="newsletter">
        <input type="text" placeholder="Enter your email*" required>
        <button>Subscribe to the newsletter</button>
        </form>
    </div>

    <div class="process">
                  <h1>HOW DOES IT WORK?</h1>

                      <div class="text-process">


        <div class="icon"><img src="../assets/images/shopping.png" alt="" class="icon-about">
        <p>Select a trip that you would like to take by clicking on it</p>
        </div>
        <div class="icon"><img src="../assets/images/shopping.png" alt="" class="icon-about">
        <p>Select a trip that you would like to take by clicking on it</p>
        </div>
        <div class="icon"><img src="../assets/images/user.png" alt="" class="icon-about">
        <p>Log in or create an account</p>
        </div>
         <div class="icon"><img src="../assets/images/calendar.png" alt="" class="icon-about">
                <p>Select the date you are interested in. All our trips are 2 weeks long</p>
        </div>
        <div class="icon"><img src="../assets/images/card.png" alt="" class="icon-about">
                <p>Safely purchase the trip you selected by credit card</p>
        </div>
        <div class="icon"><img src="../assets/images/approval.png" alt="" class="icon-about">
                        <p>Once your payment is confirmed, you will receive a confirmation order</p>

        </div>

    </div>
    </div>
  </div>
</template>

<script>
export default {
name:'about'
}
</script>

<style scoped>

.about{
      background:linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url('../assets/images/wallpaper10.jpg');
        background-size: cover;
  background-position: left;
  box-sizing: border-box;
  color: white;



}

h1{
    font-size: 40px;
    padding: 20px;
    font-weight: 500;

}
.text-about{
  font-size: 20px;
  color: white;
  text-align: left;
  padding: 25px;
  line-height: 45px;
}

.newsletter{
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 30%;
}
.newsletter input{
    margin: 20px 0 20px 0;
    font-size: 20px;
  font-family: 'Poppins', sans-serif;
  padding: 5px 5px 5px 10px;
}
.newsletter button{
     font-size: 20px;
  font-family: 'Poppins', sans-serif;
  border:none;
   background:#8c00ff;
   color: white;
   padding: 10px;
   cursor: pointer;
}


.process{

   background:#8c00ff;
     margin-top:50px;

}
.text-process{
    display: flex;
  font-size: 20px;
  color: white;
  text-align: left;
  padding: 25px;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.icon-about{
    height: 50px;
    width: 50px;
}
.icon{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    text-align: center;
    padding:20px;
}

@media (max-width:800px) {
  .newsletter{
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%
}
}
</style>