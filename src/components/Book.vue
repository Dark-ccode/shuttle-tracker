<template>
<div class="map">
<Header />
<Nav />

<div class="cont">

<div class="abouthead">Book a Ride</div>


<div class="formcont">

<div class="label">Position</div>
<div class="animate__animated animate__fadeIn" >
<input class="position input" type="text" placeholder="Current position">
</div>


<div class="label ib left_position">Destination</div>
<div class="label right_time ib">Time</div>
<div class="animate__animated animate__fadeIn inputcont" >
<input class="destination input ib" type="text" placeholder="Destination">
<input class="time input ib" type="time" placeholder="0:00">
</div>

<div class="label ib left_position">Seat</div>
<div class="label right_time ib">Price</div>
<div class="animate__animated animate__fadeIn inputcont">
<select class="seat input ib">
<option value="Select Seat">Select Seat</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
</select>
<input class="price input ib" type="text" placeholder="$0.00">
</div>


<button type="submit" class="submit sub animate__animated animate__fadeInUp pressed"> Book Now</button>

<!-- form end  -->
</div>

</div>
</div>

</template>

<script>

// import 'animate.css';
import Header from './plugins/header.vue'
import Nav from './plugins/rmenu.vue'

// import $ from "jquery"

export default {
name: 'Map',
components: {
Header,
Nav
},
methods:{},
}


</script>

<style scoped>

@media screen and (max-width:480px){


.map { background-color: white; background-image: url("../assets/map.jpg");
background-position: 0px 0px;background-size:300%;
background-repeat: no-repeat; animation:bgani 30s linear infinite;
animation-delay: 1s;

height: 580px;width: 100%;margin-left: -2%;padding-top: 0px;padding-bottom: 150px;
overflow-x: hidden;position: fixed;
}

@keyframes bgani{
0%{background-position: 1200 0px;}
50%{background-position: 50% 0px;}
100%{background-position: 100% 0px;}
}





*,body,.cont{overflow-x: hidden;}

.ib{display: inline-block;}
.abouthead{color:#940335}
.map{ background-color: white;}
.cont{margin-top: 90px;padding: 0px;text-align: center;background-color:rgba(255, 255, 255, 0.219);backdrop-filter: blur(20px);}
.input{margin-top: 0px;border-top: 3px solid white;height:35px;width:90%;margin-top:10px;margin-bottom: 40px;margin-left: 0%;
background-color: white;border-radius: 4px;font-size: 14px;padding-left: 10px;border:none;color: black;
box-shadow: 2px 2px 4px 4px rgba(197, 197, 197, 0.944);}
/* border:2px solid #940335; */
input{outline: none;}
.label{text-align: left;margin-left: 3%;color: #fc5b3f;}
.formcont{margin-top: 40px;width: 95%;margin-left:2.5%;}
.inputcont{width: 100%;}
.destination{width: 60%;float: left;margin-right: 0px;margin-left: 3%;}
.time{width: 20%;float: right;margin-right: 3%;}
.right_time{float: right;margin-right: 3%;}
.left_position{float: left;}

.sub{width: 70%;height: 40px;background-color:#fc5b3f;border-radius: 4px;;margin-top:30px;margin-bottom: 20px;color: white;border: none;font-weight: bold;}

.seat{width: 44%;float: left;margin-right: 0px;margin-left: 3%;}
.price{width: 44%;float: right;margin-right: 3%;}

}
</style>
