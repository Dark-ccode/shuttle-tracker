<template>
<div class="map">
<Header />
<div class="cont">

<div class="abouthead">Live Map</div>


<img src="../assets/map1.webp" alt="" class="mapimg">
</div>

<div class="blink1 blink"></div>
<div class="blink2 blink"></div>
<div class="blink3 blink"></div>
<div class="blink4 blink"></div>

<div class="blink5 blink blink_green"></div>
<div class="blink6 blink blink_green"></div>

<Nav />


<div class="indicatorcont">

<div class="indicator">
<div class="indicators indicator1">
<div class="indi indi1 ib"></div> Occupied Shuttles
</div>

<div class="indicators indicator2">
<div class="indi indi2 ib"></div> Free Shuttles
</div>
</div>


<div class="indicators indicator3">
<img src="../assets/location.png" alt="" class="locationimgsmall">
 My Location
</div>
</div>


<img src="../assets/location.png" alt="" class="locationinmg">


</div>

</template>

<script>

// import 'animate.css';
import Header from './plugins/header.vue'
// import Footer from './plugins/Footer.vue'
import Nav from './plugins/rmenu.vue'

// import $ from "jquery"

export default {
name: 'Map',
components: {
Header,
// Footer,
Nav
},
methods:{


},


}


</script>

<!-- animate_animated animate_bounce Add "scoped" attribute to limit CSS to this component only display: flex;flex-direction: row;flex-basis: 1200px;--> 
<style scoped>



@media screen and (max-width:480px){
*,body,.cont{overflow-x: hidden;}
/* *,.mapimg,.cont{overflow-x: hidden;} */
/* .map{ background-color: black; background-image: url("../assets/d.jpg");
background-position: 0px -100px;background-size:400%;
background-repeat: no-repeat; animation:bgani 30s linear infinite;
animation-delay: 1s;

height: 700px;width: 120%;margin-left: -10%;margin-top: -10%;padding-top: 200px;

} */

/* @keyframes bgani{
0%{background-position: 1200;}
50%{background-position: 50%;}
100%{background-position: 100%;}
} */
.ib{display: inline-block;}
.abouthead{color:#940335}
.map{ background-color: white;}
.cont{margin-top: 80px;padding: 0px;text-align: center;background-color:rgba(255, 255, 255, 0.219);backdrop-filter: blur(20px);}
.mapimg{width: 160%;margin-left: -5%;height: 450px;}
.blink{width: 12px;height: 12px;padding: 0px;background-color: red;border-radius: 50%;position: absolute;
animation:fade 3000ms infinite;}
.blink1{top: 45%;left: 35px;}
.blink2{top: 34.5%;right: 30px;}
.blink3{top: 54%;left: 45%;}
.blink4{top: 80%;left: 78%;}

.blink_green{background-color: green;position: absolute;
animation:fade2 3000ms infinite;}
.blink5{top: 65%;left: 5%;}
.blink6{top: 30%;right: 30%;}


.indi{width: 12px;height: 12px;border-radius: 50%;}
.indi1{background-color: red;}
.indi2{background-color: green;}
.indicators{margin-right: 20px;font-size: 13px;}
.indicatorcont{width: 100%;height: 40px;position: fixed;bottom: 0%;left: 0%;padding: 10px;background-color: white;
box-shadow: 0px 0px 2px 2px rgba(245, 245, 245, 0.655);z-index: -2px;}
.indicator{display: flex;flex-direction: row;margin-bottom: 10px;}
@keyframes fade {
from { opacity: 1.0; }
20% { opacity: 0.8;background-color: rgba(255, 0, 0, 0.308);}
40% { opacity: 0.6;background-color: rgba(255, 0, 0, 0.512);}
60% { opacity: 0.4;background-color: rgba(255, 0, 0, 0.683);}
80% { opacity: 0.2;background-color: red;}
to { opacity: 1.0; }
}

@keyframes fade2 {
from { opacity: 1.0; }
20% { opacity: 0.8;background-color: rgba(0, 128, 0, 0.404);}
40% { opacity: 0.6;background-color: rgba(0, 128, 0, 0.501);}
60% { opacity: 0.4;background-color: rgba(0, 128, 0, 0.845);}
80% { opacity: 0.2;background-color: green;}
to { opacity: 1.0; }
}


.locationinmg{width: 30px;height: 30px;position: fixed;top: 70%;left: 19%;animation:location 3000ms infinite;}
@keyframes location {
from { transform: scale(0.5) }
50% {transform: scale(1.0)}
to {transform: scale(1.2)}
}



/* @keyframes location {
from { width: 10px;height: 10px; }
50% { width: 20px;height: 20px;}
to { width: 30px;height: 30px; }
} */

.locationimgsmall{width: 15px;height: 15px;margin-left: 0px;}


}
</style>
