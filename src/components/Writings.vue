<template>
  <div class="page">
    <h1>{{name}}</h1>
   
    <div>
    <h2>Impressions</h2>
    <h3>A Collection of Poems</h3>
  </div>

  <div id="writings">

  <div>
    <h4>On Mont Saint Michel</h4>
    <p>
      A narrow cobblestone road,<br>
      Lined with little shops,<br>
      Winds up the island<br>
      We climb, and see the Abbey,<br>
      Steeple stretching into the sky<br>
      I notice bits of beauty--<br>
      The new green moss<br>
      Growing out from the cracks<br>
      Of the ancient wall;<br>
      The metal sign,<br>
      Ornately carved and tinted<br>
      Hanging above a little shop;<br>
      And now, up above, we look out<br>
      Over the sea and sand stretching<br>
      Out below<br>
      Wind rushing,<br>
      Bringing the smell of the sea,<br>
      Up from the cerulean-gray tides<br>
      Stretched out into an indigo horizon;<br>
      I turn into the wind,<br>
      Leaning in over the worn down wall,<br>
      And it rushes through my hair<br>
      Ivigorating<br>
      A river of life
    </p> 
  </div>

  <div>
    <h4>On Parisian Window-Shopping</h4>
    <p>
      Anna points out the glowing store,<br>
      Its midnight name<br>
      Lit from behind with smooth white light<br>
      Louis Vuitton<br>
      Bold in the darkening night--<br>
      I see a purse, finely made, elite<br>
      Posing on a pedastal behind the glass<br>
      She tells me of one<br>
      Made of fine snakeskin<br>
      Priced at $18,000--<br>
      And as we walk away, a woman<br>
      Stretches out her hand, cracked clay beneath her nails<br>
      And shakes her crumpled paper cup;<br>
      Her amber eyes<br>
      Overshadowed by the night settling in;<br>
      I add a single coin,<br>
      Rummaged from my pocket depths,<br>
      To the few already resting within.<br>
      And I, fallen behind, quicken my steps<br>
      As the night falls<br>
      Over this fallen world.<br>
    </p>
  </div>

  <div>
    <h4>On Riding the Chunnel</h4>
    <p>
      Tonight<br>
      We rush beneath the waves<br>
      Train heading, onward<br>
      Through the fortress of the tunnel<br>
      Beneath the rippling,<br>
      Reflecting back the cresent’s light;<br>
      Softly<br>
      Lights still glow within the train<br>
      Pulsing against the darkness<br>
      Not letting me<br>
      Fall<br>
      Into<br>
      Sleep;<br>
      So instead,<br>
      I pull out my soft leather book, tucked within<br>
      My travel-scuffed drawstring bag,<br>
      And let my words<br>
      Flow out<br>
      Tonight<br>
    </p>
  </div>

  <div>
    <h4>On Walking Home</h4>
    <p>
      We walk slowing<br>
      My friend,<br>
      My sisters,<br>
      And I,<br>
      Hands joined,<br>
      Drifting, we spread apart,<br>
      Then bump, softly, into one another<br>
      Like skiffs, roped together,<br>
      Floating on a clear and gentle sea.<br>
      The cool darkness of the evening<br>
      Settles softly on our backs.<br>
      A lamp upon its pole<br>
      Glows warmly behind us<br>
      Our shadows stretching, tall<br>
      Along the pavement<br>
      And we lift our joined hands together,<br>
      Bowing to our imaginary audience,<br>
      Laughing,<br>
      Together<br>
    </p>
  </div>

</div>

<div id="app">
  <h2>Comments</h2>
    <form v-on:submit.prevent="addTicket">
      <textarea v-model="addedProblem" placeholder="Share Your Thoughts On My Poetry"></textarea>
      <input v-model="addedName" placeholder="Name"></input>
      <button type="submit">Submit</button>
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

  <div>
    <h2>A Hidden Well</h2>
    <h3>Creative Essay</h3>
  </div>

<div id="writings">
  <div>
    <p>
      The sun scorches down, pulsing on the sand and dirt, as it pulls up water from the ground, leaving it dry and cracked and thirsty.  The desert stretches on, seemingly lifeless.  Yet life remains - within the cactus, a hidden well of precious water is found.<br><br>

      The cactus is designed to preserve moisture.  Water seeps in through its roots, which often hide just below the surface, expanding out like a spider's web below the dirt.  The water then fills the succulent cells of the stem or taproot.  These cells soak in the moisture, expanding like a sponge as they welcome the thirst quenching drops.  Cactus skin is ribbed and fluted.  As the seasons, rainy and dry, pass by, it expands like an accordian filled with air, and then contracts again, the troughs running deeper, the peaks more prominent.  As with all plants, a cactus must take in carbon dioxide to survive, as we take in breath, and so opens it tiny pores, called stomata, in a process called transpiration.  Most flora open their apertures beneath the sun's rays, but cactus wait until the darkness of night, so the sun won’t rob them of their drops.  A cactus's spines are highly modified leaves, thin to prevent water loss in transpiration, and tapered to a point to guard from thirsty preditors who would try to seize the water within.<br><br>

      Cacti are quite diversified, each one uniquely adapted to survive the desert dryness.  The Sacasil, the Desert Prickly Pear, the Pasakana and Patilon, the Kepo and Koko, Aboringine's Comb, the Arizona Hedgehog, the Rhinoceros Cactus, the Old Man of Mexico, the Quepo, the Odieri, the Owl's Eye, the Lady Finger Cactus, the Sacamatraca and the Sandillon, the Queen of the Night.  Each distictive, each designed to survive.  The diversiform collection seem almost alien, the prickly barrels hunching near the ground, the taller stems reaching into the arid sky, some stretching out like antennae from another world.  Some almost colorless, blending in with the barren landscape, some dotted with delicate sprouts of color.  Each an auquifer within, each expanding and contracting, plusing with the seasons.<br><br>

      Water is life.  The earth a living, breathing sphere, seventy-one percent water.  The soggy clouds drifting above us.  The glaciers frozen on mountain tops and ice caps hardened at the top and bottom of our world. The unseen reservoirs flowing beneath the surface.<br><br>
    </p>
  </div>
  <div>
    <p>
      Our home, though firm beneath our feet, its hardened ground stretching out to the horizon, is mostly water, ebbing and flowing even down to its molten core, churning and giving life.<br><br>

      The human body is seventy-five percent water at its birth.  But as we age, the water slowly ebbs away.  Aged and arid, we leave this life only half water, the remainder drained away.  We would only survive about a week without water.  One man survived for twenty-four days, unconscious, his pulse slowed, almost silent.  We, too, depend on water’s life-giving force.  It carries nutrients and vitamins throughout the body, and electrical messages between cells.  It protects the spinal cord, and helps absorb the daily shocks and pressures on our joints.  It aids in digesting food, and clearing out waste and toxins, cleasing the body from within.  Sometimes the water within us finds its way out, whether as sweat to cool us, urine to cleanse us, or as tears to reveal something deeper inside us.<br><br>

      Some cactus roots catch the dew that drips off its stem in the morning light.  They catch their own tears.  Without, their spines seems to threaten, push away, but within they have water and life.  And tears seep out, but are caught again as quickly, hidden away within the cacti, just as we hide our tears within our hearts.<br><br>

      Sometimes our tears leak out also, showing a piece of us, revealing what lies in our watery depths.  Perhaps, like the cactus, we too build prickly spines, keeping others out to protect what lies within.<br><br>

      Cactus are buit to survive, adapted to save what's scarce.  But sometimes this can backfire, flooding it out, rotting it from within and making it more vulnerable to disease when water is too abundant.  Our protections can also bring harsh consequences.  The walls we build around ourselves, our protective spines, guard our fragile hearts during threatening times.  But they also keep others out, as we hide, alone within ourselves.  Perhaps we can learn to pluck out these spines, and open ourselves so that our water, our life, can give life to all, and them to us, because there is more than enough to spare.<br><br>
    </p>
  </div>
</div>


<div id="app">
  <h2>Comments</h2>
    <form v-on:submit.prevent="addTicket">
      <textarea v-model="addedProblem" placeholder="Share Your Thoughts On My Essay"></textarea>
      <input v-model="addedName" placeholder="Name"></input>
      <button type="submit">Submit</button>
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
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Cinzel+Decorative|Meddon|Julius+Sans+One|Amatic+SC|Calligraffitti|Shadows+Into+Light|Bad+Script|Over+the+Rainbow');
</style>

<script>
 export default {
   name: 'Writings',
   data () {
     return {
       name: 'Writings',
     }
   }
 }
</script>

<style scoped>
input {
  padding: 2vw;
  width: 50vw;
  font-family: 'Julius Sans One', sans-serif;
  font-size:calc(12px + 1vw);
  color: black;
  font-weight: lighter;
  vertical-align: center;
  margin: 1vw;
  margin-bottom: 1.5vw;
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
button {
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
#writings {
  padding: 0 10vw 0 10vw;
  display: grid;
  grid-gap: 3vw;
  padding: 2.5vw;
  grid-template-columns: 1fr 1fr;
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
  font-family: 'Julius Sans One', cursive;
  font-weight: lighter;
  font-size:calc(12px + 3vw);
  line-height: 70%;
}
h2, h3, h4, p {
  font-family: 'Bad Script', cursive;
  font-weight: lighter;
  color: black;
}
h2 {
  font-size:calc(40px + 1vw);
  font-family: 'Meddon', cursive;
  line-height: 50%;
  padding-top: 5vw;
}
h3 {
  font-size:calc(27px + 0.4vw);
  line-height: 50%;
  padding-bottom: 5vw;
  font-family: 'Julius Sans One', cursive;
}
h4 {
  font-size:calc(30px + 0.5vw);
}
p {
  font-size:calc(20px + 0.5vw);
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


