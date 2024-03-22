<template>
<div class="home">
  <!-- <video src="../assets/bgvideo.mp4" class="bgvideo"></video> -->
<img src="../assets/logo.png" alt="" class="logoimg">

<div class="cont">
<div class="pageH animate__animated animate__fadeInDown">Login</div>


<div class="for_name animate__animated animate__fadeIn" >
<input class="input inname" type="text" placeholder="Name"  v-on:click="focus()" value="Emmanuel Chukwuebuka Prosper" >
<div class="place1 p1 none animate__animated animate__tada ib">Name</div>
</div>

<div class="for_mail fm1 animate__animated animate__fadeIn">
<input class="input inpass" type="password" placeholder="Password"  v-on:click="focus()" value="prop4040">
<!--<input class="input inpass" type="text" placeholder="Registration number" v-model="pass" v-on:click="focus()">-->
<div class="place1 p2 none animate__animated animate__tada ib">Password</div>
</div>



<div class="e animate__animated animate__tada">User not found on database.</div>

<button type="submit" class="submit sub animate__animated animate__fadeInUp pressed"> Login </button>

<button type="submit" class="sub animate__animated animate__fadeInUp loadbtn anime none"> 
  Authenticating
  <span class="ib animate__animated animate__fadeInLeft dot d3"> .</span>
  <span class="ib animate__animated animate__fadeInLeft dot d2"> .</span>
  <span class="ib animate__animated animate__fadeInLeft dot d1"> .</span>
   </button>
</div>
</div>


</template>

<script>
// import Header from './plugins/Loginheader.vue'
// import Footer from './plugins/Footer.vue'
// import 'animate.css';

import $ from "jquery"
export default {
name: 'Home',
components: {
},

methods:{

focus(){
//$(".input").css("text-transform","uppercase")
}
},
mounted(){
$(".submit").click(function(){
function loader(){
//this.$router.push('/Home')
window.location.href='#/Dashboard'
}
var pass = $(".inpass").val()
var name = $(".inname").val()

if(pass==""&& name==""){
$(".input").css("border","1px solid red")
}

else if(pass!=""&& name!=""){
$(".pressed").hide()
$(".loadbtn").show()

setTimeout(loader,3000)

}

})

$(".inname").click(function(){
$(".p2").hide()
$(".p1").show(300)
$(".inname").attr("placeholder","").css("border","2px solid #fc5b3f")
// $(".inpass").attr("placeholder","Registration number").css("border","none")
$(".inpass").attr("placeholder","Password")

$(".e").hide()

})

$(".inpass").click(function(){
$(".p1").hide()
$(".p2").show(300)
$(".inpass").attr("placeholder","").css("border","2px solid #fc5b3f")
// $(".inname").attr("placeholder","Name").css("border","none")
$(".inname").attr("placeholder","Name")
$(".e").hide()

})


}
}


</script>

<!-- animate_animated animate_bounce Add "scoped" attribute to limit CSS to this component only display: flex;flex-direction: row;flex-basis: 1200px;--> 
<style scoped>
.deskview{display: block;margin-top: 20%;font-size: 25px;text-align: center;color: #fc5b3f;text-transform: uppercase;}



@media screen and (max-width:480px){

/* .home { background-color: black; background-image: url("../assets/bloom.PNG");
    background-position: 0px 0px;background-size:300%;
    background-repeat: no-repeat; animation:bgani 30s linear infinite;
animation-delay: 1s;

height: 500px;width: 120%;margin-left: -10%;margin-top: -10%;padding-top: 90px;padding-bottom: 130px;
overflow-x: hidden;position: fixed;
} */


.home { background-color: white; background-image: url("../assets/map.jpg");
background-position: 0px 0px;background-size:300%;
background-repeat: no-repeat; animation:bgani 30s linear infinite;
animation-delay: 1s;

height: 500px;width: 100%;margin-left: -2%;padding-top: 80px;padding-bottom: 150px;
overflow-x: hidden;position: fixed;
}

@keyframes bgani{
0%{background-position: 1200 0px;}
50%{background-position: 50% 0px;}
100%{background-position: 100% 0px;}
}





input{outline: none;}
.cont{margin-top: 0px;padding: 10px;text-align: center;background-color:rgba(255, 255, 255, 0.612);height: 300px;padding-top: 50px;border-radius: 20px;
backdrop-filter: blur(20px);width: 76%;margin-left: 8%;}
.ib{display: inline-block;}
.pageH{font-size:21px;font-weight: bolder;margin-bottom: 0px;margin-top: 0px;color:#fc5b3f;display: inline-block;}
.input{margin-top: 0px;height:35px;width:90%;margin-top:20px;margin-bottom: 10px;margin-left: 0%;
background-color: white;border-radius: 4px;font-size: 14px;padding-left: 10px;border:2px solid white;
box-shadow: 2px 2px 4px 4px rgba(197, 197, 197, 0.944);color: black;}
/* box-shadow:#f5f5f6 0px 0px 4px 4px ; */
.sub{width: 70%;height: 40px;background-color:#fc5b3f ;border-radius: 4px;;margin-top:30px;margin-bottom: 20px;color: white;border: none;font-weight: bold;}
.place1{position: absolute; background-color: #fc5b3f;color:white ;
font-size: 14px;margin-top: -65px;margin-left: 62%;padding:4px;font-weight: bolder;border-radius: 4px;}
.p2{width: 30%;margin-left: 40%}
.none{display: none;}
.dot{margin-left: 2px;margin-right: 2px;font-size: 18px;font-weight: bold;}
.e{color: red;font-size: 13px;margin-top: 10px;display: none;}
.iam{font-size: 14px;margin-top: 20px;}
.link{font-weight: bold; color: #fc5b3f ;}
@keyframes fade {
from { opacity: 1.0; }
50% { opacity: 0.5;background-color: #fc5b3f;color:white }
to { opacity: 1.0; }
}

.anime {
animation:fade 3000ms infinite;
-webkit-animation:fade 3000ms infinite;
}


/* .bgvideo{height: 800px;width: 200%;position: fixed;top: 0px;left: -50px;z-index: -2;} */
.d1{animation-delay: 1.5s;animation-iteration-count: infinite;}
.d2{animation-delay: 2.5s;animation-iteration-count: infinite;}
.d2{animation-delay: 3.5s;animation-iteration-count: infinite;}


.logoimg{width: 40%;height: 50px;margin-left: 30%;margin-bottom: 50px;}

}
</style>
