<template>
    <body>
        <nav>
            <label for="show-menu" class="show-menu">Show Menu</label>
            <input type="checkbox" id="show-menu" role="button">
            <ul id="menu">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/paintings">Paintings</router-link></li>
                <!-- <li><router-link to="/photography">Photography</router-link></li> -->
                <li><router-link to="/writings">Writings</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>   
        </nav>
    </body>
</template>
<style>
  @import url('https://fonts.googleapis.com/css?family=Bad+Script');
</style>

<script>
 export default {
     name: 'AppHeader'
 }
</script>

<style scoped>
 /*Strip the ul of padding and list styling*/
 .clear {
     float: clear;
 }
 nav {
     display: grid;
 }
 ul {
     list-style-type:none;
     margin:0;
     padding:0;

 }

 /*Create a horizontal list with spacing*/
 li {
     display: inline-block;
     float: center;
 }
 /*Style for menu links*/
 li a {
     display: block;
     height: 40px;
     text-align: center;
     line-height: 50px;
     color: black;
     font-size:calc(15px + 1.25vw);
     text-decoration: none;
     padding: 2.5vw;
     font-family: 'Bad Script', cursive;
     font-weight: lighter; 
 }
 /*Active color*/
 li a.active {
 }
 /*Hover state for top level links*/
 li:hover a {
 }
 /*Style 'show menu' label button and hide it by default*/
 .show-menu {
     text-decoration: none;
     color: #fff;
     background: #FF5035;
     text-align: center;
     padding: 10px 0;
     display: none;
 }
 /*Hide checkbox*/
 input[type=checkbox]{
     display: none;
 }
 /*Show menu when invisible checkbox is checked*/
 input[type=checkbox]:checked ~ #menu{
     display: block;
 }
</style>