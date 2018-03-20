<template>
  <div class="page">
    <h1>{{name}}</h1>
   
    <div id="app">

    <div class="photographs">
      <div v-for="photo in photos">
        <img v-bind:src="photo.path">
          <button v-on:click="like(photo)" type="button">♥ {{ photo.likes }}</button>
      </div>
    </div>

  <h2>Comments</h2>
    <form v-on:submit.prevent="addPhotoTicket()">
      <textarea v-model="addedProblem" placeholder="Share Your Thoughts On My Photographs"></textarea>
      <input v-model="addedName" placeholder="Name"></input>
      <button class="submit" type="submit">Submit</button>
    </form>
      <div v-for="photoTicket in photoTickets">
        <hr>
          <div class="ticket">
            <div class="problem">
              <p>{{photoTicket.problem}}  — {{photoTicket.name}}</p>
            </div>
          <div class="delete">
          <button v-on:click="deletePhotoTicket(photoTicket)" class="delete">Delete</button>
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
       photos: [
          {id: 0, path: '../static/images/itsaboy.jpg', likes: 0},
          {id: 1, path: '../static/images/portia.jpg', likes: 0},
          {id: 2, path: '../static/images/christmas1.jpg', likes: 0},
          {id: 3, path: '../static/images/christmas2.jpg', likes: 0},
          {id: 4, path: '../static/images/christmas3.jpg', likes: 0},
          {id: 5, path: '../static/images/vonnie1.jpg', likes: 0},
          {id: 6, path: '../static/images/vonnie2.jpg', likes: 0},
          {id: 7, path: '../static/images/vonnie3.jpg', likes: 0},
          {id: 8, path: '../static/images/ellisisland.jpg', likes: 0},
          {id: 9, path: '../static/images/green.jpg', likes: 0},
          {id: 10, path: '../static/images/cathedral.jpg', likes: 0},
          {id: 11, path: '../static/images/vonniev.jpg', likes: 0},
       ],
       addedName: '',
       addedProblem: '',
       photoTickets: {},
       }
     },
  created: function() {
    this.getPhotoTicket();
  },
  // created: function() {
  //   this.getPhotos();
  // },

  methods: {
    getPhotoTicket: function() {
      axios.get("/api/photoTickets").then(response => {
      this.photoTickets = response.data;
      return true;
      }).catch(err => {
      });
    },
    addPhotoTicket: function() {
      axios.post("/api/photoTickets", {
      name: this.addedName,
      problem: this.addedProblem
      }).then(response => {
      this.addedName = "";
      this.addedProblem = "";
      this.getPhotoTicket();
      return true;
      }).catch(err => {
      });
    },
    deletePhotoTicket: function(ticket) {
      axios.delete("/api/photoTickets/" + ticket.id).then(response => {
      this.getPhotoTicket();
      return true;
      }).catch(err => {
      });
    },
    // getPhotos: function() {
    //     axios.get("api/paintings/").then(response => {
    //     this.paintings = response.data;
    //     return true;
    //     }).catch(err => {
    //     });
    //   }
    // like: function(photo) {
    //     photo.likes += 1;
    // },
    like: function(photo) {
      photo.likes += 1;
        axios.put("/api/photos/" + photo.id, {
        
      }).then(response => {
        return true;
      }).catch(err => {
      });
    },
   },
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
  padding: 3vw 10vw 3vw 10vw;
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
 img {
    box-shadow: 0vw 1vw 3vw black;
 }
.container {
    margin: 4vw;
    padding: 2vw;
 }
.page {
    background-color: #F0F0F0;
    padding-bottom: 5vw;
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
    height: 100vw;
    }
  
</style>