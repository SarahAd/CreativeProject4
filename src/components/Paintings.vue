<template>
  <div class="page">
    <h1>Paintings</h1>
    
    <div id="app">
   
<div class="paintings">
  <div v-for="painting in paintings">
    <img v-bind:src="painting.path">
    <button v-on:click="putLike(painting)" type="button">   ♥ {{ painting.likes }}</button>
  </div>
</div>

<!-- <button v-on:click="getPaintings()" type="button">♥</button> -->
    
  <h2>Comments</h2>
    <form v-on:submit.prevent="addPaintingTicket()">
      <textarea v-model="addedProblem" placeholder="Share Your Thoughts On My Paintings"></textarea>
      <input v-model="addedName" placeholder="Name"></input>
      <button class="submit" type="submit">Submit</button>
    </form>
      <div v-for="paintingTicket in paintingTickets">
        <hr>
          <div class="ticket">
            <div class="problem">
              <p>{{paintingTicket.problem}}  — {{paintingTicket.name}}</p>
            </div>
          <div class="delete">
          <button v-on:click="deletePaintingTicket(paintingTicket)" class="delete">Delete</button><br>
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
   data() {
     return {
      paintings: [
          {id: 0, path: '../static/images/self.jpg', likes: 0},
          {id: 1, path: '../static/images/earth.jpg', likes: 0},
          {id: 2, path: '../static/images/smoothies.jpg', likes: 0},
          {id: 3, path: '../static/images/violin.jpg', likes: 0},
          {id: 4, path: '../static/images/marblev.jpg', likes: 0},
          {id: 5, path: '../static/images/bird.jpg', likes: 0},
       ],
       addedName: '',
       addedProblem: '',
       paintingTickets: {},
     }
   },
   created: function() {
    this.getPaintingTicket();
    },
    created: function() {
    this.getLike();
    },
    // created: function() {
    // this.getPaintings();
    // },
    methods: {
      getPaintingTicket: function() {
        axios.get("http://localhost:3000/api/paintingTickets").then(response => {
        this.paintingTickets = response.data;
        return true;
        }).catch(err => {
        });
      },
      addPaintingTicket: function() {
        axios.post("/api/paintingTickets", {
        name: this.addedName,
        problem: this.addedProblem
        }).then(response => {
        this.addedName = "";
        this.addedProblem = "";
        this.getPaintingTicket();
        return true;
        }).catch(err => {
        });
      },
      deletePaintingTicket: function(paintingTicket) {
        axios.delete("/api/paintingTickets/" + paintingTicket.id).then(response => {
        this.getPaintingTicket();
        return true;
        }).catch(err => {
        });
      },
      // getPaintings: function() {
      //   axios.get("api/paintings/").then(response => {
      //   this.paintings = response.data;
      //   return true;
      //   }).catch(err => {
      //   });
      // }
    // like: function(painting) {
    //     painting.likes += 1;
    // },
    getLike: function() {
        axios.get("/api/paintings").then(response => {
        this.paintings = response.data;
        return true;
      }).catch(err => {
      });
    },
    putLike: function(painting) {
      painting.likes += 1;
        axios.put("/api/paintings/" + painting.id, {
        likes: painting.likes,
      }).then(response => {
        return true;
      }).catch(err => {
      });
    },
    addLike: function() {
      painting.likes += 1;
        axios.post("/api/paintings", {
        text: this.text,
        completed: false,
        priority: this.priority,
        likes: painting.likes,
      }).then(response => {
        this.text = "";
        this.getLike();
        console.log("in addLike function");
        return true;
      }).catch(err => {
      });
    },
  }

};

</script>


<style scoped>
.ticket {
  padding-bottom: 5vw;
}
hr {
    height: 12px;
    border: 0;
    box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);
}
p {
  font-family: 'Bad Script', sans-serif;
  font-size:calc(12px + 2vw);
  padding: 0 10vw 0 10vw;
}
h2 {
  font-size:calc(20px + 3vw);
  font-family: 'Meddon', cursive;
  line-height: 50%;
  padding-top: 5vw;
  font-weight: lighter;
}
input {
  padding: 2vw;
  width:calc(80px + 40vw);
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
  width:calc(80px + 40vw);
  height:calc(70px + 5vw);
  font-family: 'Julius Sans One', sans-serif;
  font-size:calc(12px + 0.9vw);
  color: black;
  font-weight: lighter;
  vertical-align: center;
  margin: 1vw;
  border: 0;
  box-shadow: 0.5vw 0.5vw 0.5vw grey;
}
.submit {
  padding: 2vw 0 2vw 0;
  font-family: 'Julius Sans One', sans-serif;
  font-size:calc(12px + 1vw);
  width:calc(80px + 40vw);
  color: white;
  font-weight: bold;
  vertical-align: center;
  background-color:  #e3af35;
  margin: 2vw;
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
    width: 30vw;
 }
.container {
    margin: 4vw;
    padding: 2vw;
 }
 .page {
    background-color: #F0F0F0;
    padding-bottom: 3vw;
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


