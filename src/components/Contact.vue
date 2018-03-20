<template>
  <div class="page">
    <h1>{{name}}</h1>

     <h2>I would love to hear from you!</h2>
     

      <div class='info'>
        <form class="contactform" method="POST" action="https://formspree.io/sarah.hilton.1997@gmail.com">
          <input type="email" name="email" placeholder="Your Email"><br>
          <textarea name="message" placeholder="Your Message"></textarea><br>
          <button type="submit">Send</button>
        </form>
      </div>

  </div>

</template>
<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Cinzel+Decorative|Meddon|Julius+Sans+One|Amatic+SC|Calligraffitti|Shadows+Into+Light|Over+the+Rainbow');
</style>

<script>
 export default {
   name: 'Contact',
   data () {
     return {
       name: 'Contact',
     }
   }
 }
</script>

<style scoped>
.page {
  background-color: #F0F0F0;
  padding-bottom: 1vw;
  box-shadow: 0vw 1vw 3vw black;
  margin-bottom: 0;
}
h1 {
  color: black;
  padding-top: 7vw;
  padding-bottom: 4vw;
  font-family: 'Julius Sans One', cursive;
  font-weight: lighter;
  font-size:calc(12px + 3vw);
  line-height: 70%;
}
h2 {
  font-size:calc(13px + 1.5vw);
  font-family: 'Meddon', cursive;
  line-height: 90%;
  color: black;
  font-weight: lighter;
}
input {
  padding: 2vw;
  width: 50vw;
  font-family: 'Julius Sans One', sans-serif;
  font-size:calc(12px + 1vw);
  color: black;
  font-weight: lighter;
  vertical-align: center;
  margin: 1vw;
  border: 0;
  box-shadow: 0.5vw 0.5vw 0.5vw grey;
}
textarea {
  padding: 2vw;
  width: 50vw;
  height:calc(70px + 5vw);
  font-family: 'Julius Sans One', sans-serif;
  font-size:calc(12px + 1vw);
  color: black;
  font-weight: lighter;
  vertical-align: center;
  margin: 1vw;
  border: 0;
  box-shadow: 0.5vw 0.5vw 0.5vw grey;
}
button {
  padding: 2vw;
  font-family: 'Julius Sans One', sans-serif;
  font-size:calc(12px + 1vw);
  width: 53.9vw;
  color: white;
  font-weight: lighter;
  vertical-align: center;
  background-color:  #e3af35;
  margin: 1vw;
  margin-bottom: 8vw;
  border: 0;
  box-shadow: 0.5vw 0.5vw 0.5vw grey;
}
</style>


