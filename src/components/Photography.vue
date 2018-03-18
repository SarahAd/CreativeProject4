<template>
  <div class="page">
    <h1>{{name}}</h1>
   
      <div class="photographs">
        <!-- <div class="itsaboy">
          <img src="/static/images/itsaboy.jpg">
          <button v-on:click="like(0)" type="button">♥ {{ likes[0] }}</button>
        </div>
        <div class="portia">
          <img src="/static/images/portia.jpg">
          <button v-on:click="like(1)" type="button">♥ {{ likes[1] }}</button>
        </div> -->
        <div class="itsaboy">
          <img src="/static/images/itsaboy.jpg">
          <button v-on:click="likeItsaboy()" type="button">♥ {{ numberOfLikesItsaboy }}</button>
        </div>
        <div class="portia">
          <img src="/static/images/portia.jpg">
          <button v-on:click="likePortia()" type="button">♥ {{ numberOfLikesPortia }}</button>
        </div>
        <div class="christmas1">
          <img src="/static/images/christmas1.jpg">
          <button v-on:click="likeChristmas1()" type="button">♥ {{ numberOfLikesChristmas1 }}</button>
        </div>
        <div class="christmas2">
          <img src="/static/images/christmas2.jpg">
          <button v-on:click="likeChristmas2()" type="button">♥ {{ numberOfLikesChristmas2 }}</button>
        </div>
         <div class="christmas3">
          <img src="/static/images/christmas3.jpg">
          <button v-on:click="likeChristmas3()" type="button">♥ {{ numberOfLikesChristmas3 }}</button>
        </div>
        <div class="vonnie1">
          <img src="/static/images/vonnie1.jpg">
          <button v-on:click="likeVonnie1()" type="button">♥ {{ numberOfLikesVonnie1 }}</button>
        </div>
        <div class="vonnie2">
          <img src="/static/images/vonnie2.jpg">
          <button v-on:click="likeVonnie2()" type="button">♥ {{ numberOfLikesVonnie2 }}</button>
        </div>
        <div class="vonnie3">
          <img src="/static/images/vonnie3.jpg">
          <button v-on:click="likeVonnie3()" type="button">♥ {{ numberOfLikesVonnie3 }}</button>
        </div>
        <div class="ellisisland">
          <img src="/static/images/ellisisland.jpg">
          <button v-on:click="likeEllisisland()" type="button">♥ {{ numberOfLikesEllisisland }}</button>
        </div>
        <div class="green">
          <img src="/static/images/green.jpg">
          <button v-on:click="likeGreen()" type="button">♥ {{ numberOfLikesGreen }}</button>
        </div>
        <div class="cathedral">
          <img src="/static/images/cathedral.jpg">
          <button v-on:click="likeCathedral()" type="button">♥ {{ numberOfLikesCathedral }}</button>
        </div>
        <div class="vonniev">
          <img src="/static/images/vonniev.jpg">
          <button v-on:click="likeVonniev()" type="button">♥ {{ numberOfLikesVonniev }}</button>
        </div>
      </div>

      <div id="app">
  <h2>Comments</h2>
    <form v-on:submit.prevent="addTicket(ticket)">
      <textarea v-model="addedProblem" placeholder="Share Your Thoughts On My Photographs"></textarea>
      <input v-model="addedName" placeholder="Name"></input>
      <button class="submit" type="submit">Submit</button>
    </form>
      <div v-for="ticket in tickets">
        <hr>
          <div class="ticket">
            <div class="problem">
              <p>{{ticket.problem}}</p>
              <p><i>— {{ticket.name}}</i></p>
            </div>
          <div class="delete">
          <button v-on:click="deleteTicket(ticket)" class="delete">Delete</button>
        </div>
      </div>
    </div>
  </div>
    
  </div>

</template>
<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Cinzel+Decorative|Meddon|Julius+Sans+One|Amatic+SC|Calligraffitti|Shadows+Into+Light|Over+the+Rainbow');
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js" integrity="sha256-mpnrJ5DpEZZkwkE1ZgkEQQJW/46CSEh/STrZKOB/qoM=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.js" integrity="sha256-pU9euBaEcVl8Gtg+FRYCtin2vKLN8sx5/4npZDmY2VA=" crossorigin="anonymous"></script>
<script src="/script.js"></script>

<script>
 export default {
   name: 'Photography',
   data () {
     return {
       name: 'Photography',
       likes: [],
       numberOfLikesItsaboy: 0,
       numberOfLikesPortia: 0,
       numberOfLikesChristmas1: 0,
       numberOfLikesChristmas2: 0,
       numberOfLikesChristmas3: 0,
       numberOfLikesVonnie1: 0,
       numberOfLikesVonnie2: 0,
       numberOfLikesVonnie3: 0,
       numberOfLikesEllisisland: 0,
       numberOfLikesGreen: 0,
       numberOfLikesCathedral: 0,
       numberOfLikesVonniev: 0,
       addedName: '',
       addedMessage: '',
       comments: {},
       }
     },
  created: function() {
    this.getTickets();
  },
  methods: {
    getTickets: function() {
      axios.get("http://localhost:3000/api/tickets").then(response => {
      this.tickets = response.data;
      return true;
      }).catch(err => {
      });
    },
    addTicket: function() {
      axios.post("http://localhost:3000/api/tickets", {
      name: this.addedName,
      problem: this.addedProblem
      }).then(response => {
      this.addedName = "";
      this.addedProblem = "";
      this.getTickets();
      return true;
      }).catch(err => {
      });
    },
    deleteTicket: function(ticket) {
      axios.delete("http://localhost:3000/api/tickets/" + ticket.id).then(response => {
      this.getTickets();
      return true;
      }).catch(err => {
      });
    },


   // created: {
    // for (let i = 1; i < 13; i++) {
    //   likes[i] = 0;
   //  }
   // }
   // methods: {
   //  like: function (index) {
   //    likes[index] += 1;
   //  },
    likeItsaboy: function () {
      this.numberOfLikesItsaboy += 1;
    },
    likePortia: function () {
      this.numberOfLikesPortia += 1;
    },
    likeChristmas1: function () {
      this.numberOfLikesChristmas1 += 1;
    },
    likeChristmas2: function () {
      this.numberOfLikesChristmas2 += 1;
    },
    likeChristmas3: function () {
      this.numberOfLikesChristmas3 += 1;
    },
    likeVonnie1: function () {
      this.numberOfLikesVonnie1 += 1;
    },
    likeVonnie2: function () {
      this.numberOfLikesVonnie2 += 1;
    },
    likeVonnie3: function () {
      this.numberOfLikesVonnie3 += 1;
    },
    likeEllisisland: function () {
      this.numberOfLikesEllisisland += 1;
    },
    likeGreen: function () {
      this.numberOfLikesGreen += 1;
    },
    likeCathedral: function () {
      this.numberOfLikesCathedral += 1;
    },
    likeVonniev: function () {
      this.numberOfLikesVonniev += 1;
    },
  }
 };
</script>

<style scoped>
h2 {
  font-size:calc(40px + 1vw);
  font-family: 'Meddon', cursive;
  line-height: 50%;
  padding-top: 5vw;
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
  height:calc(80px + 10vw);
  font-family: 'Julius Sans One', sans-serif;
  font-size:calc(12px + 1vw);
  color: black;
  font-weight: lighter;
  vertical-align: center;
  margin: 1vw;
  border: 0;
  box-shadow: 0.5vw 0.5vw 0.5vw grey;
}
.submit {
  padding: 2vw;
  font-family: 'Julius Sans One', sans-serif;
  font-size:calc(12px + 1vw);
  width: 53.9vw;
  color: white;
  font-weight: bold;
  vertical-align: center;
  background-color:  #e3af35;
  margin: 1vw;
  margin-bottom: 8vw;
  border: 0;
  box-shadow: 0.5vw 0.5vw 0.5vw grey;
}
button {
  font-size: 3vw;
  color: #ff6666;
  opacity: 0.7;
  border: none;
  background: none;
}
button:hover {
  opacity: 1;
}
 img {
    box-shadow: 0vw 1vw 3vw black;
 }
.container {
    margin: 4vw;
    padding: 2vw;
 }
.page {
    background-color: #F0F0F0;
    padding-bottom: 1vw;
    box-shadow: 0vw 1vw 3vw black;
    margin-bottom: 0;
  }
 h1 {
    color: black;
    padding-top: 7vw;
    padding-bottom: 2vw;
    font-family: 'Julius Sans One', cursive;
    font-weight: lighter;
    font-size:calc(12px + 3vw);
    line-height: 70%;
 }
 .footer {
  text-align: left;
 }
 .footer a {
  text-decoration: none;
  font-size: 5vw;
  font-family: 'Shadows Into Light', cursive;
  color: black;
  padding: 2vw 2vw 7vw 2vw;
  text-align: center;
  float: top;
}
.footer img {
  box-shadow: none;
  height: 4.5vw;
  width: 4.5vw;
  padding-left: 5vw;
}
 template {
    border: 0;
    margin: 0;
    padding: 0;
 }
  .paintings {
    display: grid;
    grid-gap: 2.5vw;
    padding: 2.5vw;
    grid-template-columns: 1fr 1fr;
  }

  .photographs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:  
                "itsaboy      portia"
                "christmas1   christmas2"
                "christmas3   christmas3"
                "vonnie1      vonnie1"
                "vonnie2      vonnie3"
                "ellisisland  green"
                "cathedral    vonniev";
    grid-gap: 2.5vw;
    padding: 2.5vw;
  }
    .photographs img {
    width: 46vw;
    }
    .itsaboy {
      grid-area: itsaboy;
    }
    .portia {
      grid-area: portia;
    }
    .vonniev {
      grid-area: vonniev;
    }
    .christmas1 {
      grid-area: christmas1;
    }
    .christmas2 {
      grid-area: christmas2;
    }
    .christmas3 {
      grid-area: christmas3;
    }
    .cathedral {
      grid-area: cathedral;
    }
    .green {
      grid-area: green;
    }
    .ellisisland {
      grid-area: ellisisland;
    }
    .vonnie1 {
      grid-area: vonnie1;
    }
    .vonnie2 {
      grid-area: vonnie2;
    }
    .vonnie3 {
      grid-area: vonnie3;
    }
    .vonnie1 img {
    width: 94.6vw;
    }
    .christmas3 img {
    width: 94.6vw;
    }
    .cathedral img {
    height: 69vw;
    }
  
</style>