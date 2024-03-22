<template>
<div class="home">
<Header />
<Nav />

<div class="about text-center">

<div class="abouthead animate__animated animate__fadeInDown">About</div>

Introducing the Shuttle Tracker & Booking App, brought to you by Prosper. This innovative app offers seamless access to real-time shuttle location tracking and easy shuttle booking.
 Whether you're commuting or planning rides in advance, this app simplifies your shuttle experience.<br><br>



<div class="developed">Developed By</div>
Emmanuel Chukwuebuka Prosper

<p class="developed">Key Features:</p>
<ol>
<li> Real-Time Shuttle Tracking: See live shuttle locations on the map, minimizing wait times.</li>
<li> Shuttle Schedules: Access up-to-date shuttle schedules for efficient planning.</li>
<li> Shuttle Booking: Reserve your seats and manage shuttle bookings with just a few taps.</li>
<li> Route Information: Get detailed route information and estimated arrival times.</li>
<li> Fare Estimation: Calculate trip costs before booking to budget your rides.</li>
<li> Notifications: Receive timely alerts for shuttle arrivals and departures.</li>
<li> User-Friendly Interface: Intuitive design for effortless navigation.</li>
</ol>
Stay on top of your shuttle rides and simplify your commute with the Shuttle Tracker & Booking App, created by Emmanuel Chukwuebuka. Download it today for a hassle-free shuttle experience.




</div>



</div>
</template>

<script>
import Header from './plugins/header.vue'
import Nav from './plugins/rmenu.vue'
import $ from "jquery"

export default {
name: 'AboutPage',
components: {
  Header,
Nav
},
mounted(){
$('#app,document,body').css("background-color","white")
$('.about').css('color','black')

}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

@media screen and (max-width:480px){
.about{padding: 20px;margin-top: 90px;color: black;font-size: 16px;text-align: justify;font-family: Tahoma, Tahoma, Courier;}
.abouthead{font-size: 18px;margin-bottom: 20px;margin-top: 20px;color: #fc5b3f;font-weight: bold;}
.developed{font-weight: bold;margin-top: 20px;color: #fc5b3f}
li{margin-bottom: 10px;}
}
</style>
