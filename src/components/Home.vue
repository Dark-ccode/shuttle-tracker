<template>
<div class="home">
<Header />
<br>
<div class="reshome">

<div class="cardrow r1">
<span class="ib welcome">Welcome</span><br>
<span class="name ib">Prosper Chukwuebuka</span>
<router-link to="/Book" class="book ib">Book a Ride</router-link>
</div>


<div class="cardrow r2">
<div class="statcard statcard1">
    <p class="cap">Free Shuttles</p>
    <p class="no">20</p>
</div>
<div class="statcard statcard2">
    <p class="cap">Total Booking</p>
    <p class="no">43</p>
</div>
</div>

<div class="cardrow r1 r3">
<span class="scheduled ib">Sheduled Tickets</span>
<span class="noo ib">5</span>
</div>

<br>
<br>
<br>
<div class="chart">
<div class="subhead center">monthly transport overview</div><br>
<canvas id="myChart"></canvas>
</div>
<br><br>









</div>
<Footer />

<Nav />

</div>



<!-- <div class="deskview none">
    use mobile view to see page content
</div> -->

</template>

<script>
import Header from './plugins/header.vue'
import Footer from './plugins/Footer.vue'
import Nav from './plugins/rmenu.vue'
import Chart from 'chart.js/auto';

export default {
name: 'Home',
components: {
Header,
Footer,
Nav
},

 methods:{
},
mounted(){
    const myChart = document.getElementById('myChart')
var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart(myChart, {
  type: "line",
  data: {
    labels: xValues,
     options: {
        animation: true,},
    datasets: [{
      label: 'Transportation overview',
      backgroundColor: "#940335", //8B57E5 #fc5b3f
      borderColor: "#940335",
      data: yValues
    }]
  },
  options:{}
});
}

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only display: flex;flex-direction: row;flex-basis: 1200px;--> 
<style scoped>
.deskview{display: block;margin-top: 20%;font-size: 25px;text-align: center;color: #008a31;text-transform: uppercase;}
.none{display: none;}
.center{text-align: center;}
.subhead {text-transform: uppercase;}



@media screen and (max-width:480px){
.ib{display: inline-block;}
.welcome{font-size: 18px;color: #940335;}
.book{background-color: #fc5b3f; float: right; color: white;text-align: center;padding: 10px;border-radius: 10px;margin-top: -15px;
box-shadow: 2px 2px 4px 4px rgba(197, 197, 197, 0.944);}

.cardrow{width: 100%;}
.r1{margin-top: 90px;margin-bottom: 30px;padding: 10px;box-shadow: 2px 2px 4px 4px rgba(197, 197, 197, 0.944);
width: 90%;margin-left: 3%;border-radius: 12px;}
.r3{margin-top: 40px;margin-bottom: 20px;padding: 10px;box-shadow: 1px 1px 1px 1px rgba(197, 197, 197, 0.944);
width: 90%;margin-left: 2%;border-radius: 12px;}

.r2{display: flex;}
.statcard{height: 100px;width: 45%;margin-left: 3%;box-shadow: 2px 2px 4px 4px rgba(197, 197, 197, 0.944); border-radius: 12px;}
.statcard1{border-left: 4px solid #940335}
.statcard2{border-right: 4px solid #940335;}
p{text-align: center;}
.cap{font-size: 20px;margin-top: 20px;}
.no{font-size: 29px;margin-top: -15px;color: #fc5b3f;font-weight: bold;}
.noo{float: right; color:#008a31;margin-top: -7px;font-size: 24px;}



}

</style>
