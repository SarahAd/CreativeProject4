<template>
  <div class="page">
    <h1>{{name}}</h1>
   
    <div class="paintings">
      <div class="self">
        <img src="/static/images/self.jpg">
        <button v-on:click="likeSelf()" type="button">♥ {{ numberOfLikesSelf }}</button>
      </div>
      <div class="earth">
        <img src="/static/images/earth.jpg">
        <button v-on:click="likeEarth()" type="button">♥ {{ numberOfLikesEarth }}</button>
      </div>
      <div class="smoothies">
        <img src="/static/images/smoothies.jpg">
        <button v-on:click="likeSmoothies()" type="button">♥ {{ numberOfLikesSmoothies }}</button>
      </div>
      <div class="violin">
        <img src="/static/images/violin.jpg">
        <button v-on:click="likeViolin()" type="button">♥ {{ numberOfLikesViolin }}</button>
      </div>
       <div class="marble">
        <img src="/static/images/marblev.jpg">
        <button v-on:click="likeMarble()" type="button">♥ {{ numberOfLikesMarble }}</button>
      </div>
      <div class="bird">
        <img src="/static/images/bird.jpg">
        <button v-on:click="likeBird()" type="button">♥ {{ numberOfLikesBird }}</button>
      </div>
    </div>

    <div id="app">
  <h2>Comments</h2>
    <form v-on:submit.prevent="addTicket">
      <textarea v-model="addedProblem" placeholder="Share Your Thoughts On My Paintings"></textarea>
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

<script>
 export default {
   name: 'Paintings',
   data() {
     return {
       name: 'Paintings',
       imagePath: '/static/images/me.jpg',
       numberOfLikesSelf: 0,
       numberOfLikesEarth: 0,
       numberOfLikesSmoothies: 0,
       numberOfLikesViolin: 0,
       numberOfLikesMarble: 0,
       numberOfLikesBird: 0,
       addedName: '',
       addedProblem: '',
       tickets: {},
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
      likeSelf: function () {
        this.numberOfLikesSelf += 1;
      },
      likeEarth: function () {
        this.numberOfLikesEarth += 1;
      },
      likeSmoothies: function () {
        this.numberOfLikesSmoothies += 1;
      },
      likeViolin: function () {
        this.numberOfLikesViolin += 1;
      },
      likeMarble: function () {
        this.numberOfLikesMarble += 1;
      },
      likeBird: function () {
        this.numberOfLikesBird += 1;
      },
  }

};

</script>


<style scoped>
p {
  font-family: 'Bad Script', sans-serif;
  font-size:calc(12px + 1.5vw);
}
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
  font-family: 'Julius Sans One', sans-serif;
}
button:hover {
  opacity: 1;
}
.paintings {
  display: grid;
  grid-gap: 2.5vw;
  padding: 2.5vw;
  grid-template-columns: 1fr 1fr;
}
.paintings img {
  width: 46.2vw;
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
</style>


