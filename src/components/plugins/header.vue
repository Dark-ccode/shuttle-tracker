<template>
<div id="head" class="head">
 <img src="../../assets/menu.png" alt="" class="resmenu headimgs menuimg" v-on:click="showmenu()">
<img src="../../assets/x.png" alt="" class="back none headimgs" v-on:click="hidemenu()">

<img src="../../assets/logo.png" alt="" class="logoimg">

</div>

<!--- -->
</template>

<script>
import $ from "jquery"
// import 'animate.css';

export default {
  name: 'Header',
  methods:{
showmenu: function(){
$(".back").show(0)
$(".resmenu").slideDown(400)
$(".menuimg").hide(0)
},

hidemenu: function(){
$(".resmenu,.back").hide(0)
$(".menuimg").show(0)
},
}}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only  border-bottom-right-radius: 0px;border-bottom-left-radius: 15px;-->
<style scoped>
.none{display: none;}
.ib{display: inline-block;}
.head{position: fixed;width: 100%;box-shadow: 0px 0px 2px 2px rgba(245, 245, 245, 0.655);
background-color: white;top: 0px;height: 60px;color: white;padding: 15px;z-index: 999;left: 0px;}
.headimgs{height: 30px;width: 30px;margin-left: 0%;margin-top: 0%;padding: 10px;padding-left: 5px;}

.logoimg{width: 200px;height: 50px;margin-left: 0px;}

@media screen and (max-width:480px){

}

</style>
