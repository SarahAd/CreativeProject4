<template>
  <body>
    <div class="main">
      <div class="hero">
        <h1 class="text">Welcome to</h1>
        <h2 class="text">Sarah Adeline</h2>
        <h3 class="text">Artistry</h3>
      </div>
    </div>
    <div class='footer'>
      <a href="https://github.com/SarahAd/CreativeProject4"><img src="/static/images/githublogo.png"></a>
      <a href="https://github.com/SarahAd/CreativeProject4">Find My Code On GitHub!</a>
    </div>
  </body>
</template>
<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Cinzel+Decorative|Meddon|Julius+Sans+One|Amatic+SC|Calligraffitti|Bad+Script|Shadows+Into+Light|Over+the+Rainbow');
</style>

<script>

  export default {
      name: 'HomePage',
      data () {
      }
    }

</script>

<style scoped>
 body {
     padding: 0px;
     margin: 0px;
 }
 .hero {
     text-align: center;
 }
 h1, h2, h3 {
     font-size: 6vw;
     /*letter-spacing: .2rem;*/
     color: black;
     margin: 0;
 }
 .hero {
     background-image: url("/static/images/fullwhitecircle.png");
     opacity: 0.8;
     background-size:calc(80px + 60vw);
     height: 42vw;
     background-repeat: no-repeat;
     background-position: center;
     padding: 14vw 0vw 14vw 0vw;
 }
 h1 {
    font-size:calc(12px + 1.8vw);
    padding: 4vw 0vw 8vw 0vw;
    font-family: 'Julius Sans One', cursive;
 }
 h2 {
    text-shadow: 0.3vw 0.4vw 1vw black;
    font-size:calc(12px + 6.5vw);
    line-height: 1%;
    font-family: 'Julius Sans One', cursive;
    font-weight: lighter;
 }
 h3 {
    text-shadow: 0.5vw 0.4vw 1vw black;
    font-size:calc(12px + 6.5vw);
    font-family: 'Meddon', cursive;
    font-weight: lighter;
    padding-bottom: 0vw;
 }
 img {
     width: 100%;
 }
 .main {
    background-image: url("/static/images/paintblur.jpg");
    background-size: 120%;
    background-repeat: no-repeat;
    border: 0;
    margin-bottom: 10vw;
    margin-top: 3vw;
    padding: 0;
    box-shadow: 0vw 1vw 6vw black;
 }
 .footer {
  text-align: left;
 }
 .footer a {
  text-decoration: none;
  font-size:calc(12px + 3vw);
  font-family: 'Bad Script', cursive;
  color: black;
  padding: 2vw 2vw 7vw 2vw;
  text-align: center;
  float: top;
}
.footer img {
  box-shadow: none;
  height:calc(12px + 3vw);
  width:calc(12px + 3vw);
  padding-left: 5vw;
}
 template {
    border: 0;
    margin: 0;
    padding: 0;
 }
</style>
