<template>
<div id="app">
<router-view></router-view>
</div>

</template>

<script>

//import Header from './components/plugins/header.vue'  <Header />
//import Footer from './components/plugins/Footer.vue'

export default {
  name: 'App',
   components: {
 //   Header,
  //  Footer
  }
}





</script>

<style>
body{background-color: rgba(255, 255, 255, 0.89);}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;

}

 
 /* .reshome{ display:none} */
@media screen and (max-width:480px){
.reshome {display:block}
}

</style>
