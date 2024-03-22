<template>
<div class="home">
<Header />
<br>
<div class="cont">

<div class="subhead center">Trip History</div><br>

<div class="chart">
<canvas id="myChart2"></canvas>
</div>


<div class="subhead center">Most Journied Routes</div><br>

<div class="piecont"><canvas id="pie"></canvas></div>








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
    const myChart = document.getElementById('myChart2')
var xValues = [10,20,30,35,44,40,10,5,1];
var yValues = ["Jan","Fab","Mar","Apr","May","Jun","Jul","Aug","Sep"];

new Chart(myChart, {
  type: "bar",
  data: {
    labels: yValues,
     options: {
        animation: true,
        scales:{
          xAxis:5,
          yAxis:20,
        }
        },
    datasets: [{
      label: 'Transportation overview',
      backgroundColor: "#fc5b3f", //8B57E5
      borderColor: "#fc5b3f",
      data: xValues
    }]
  },
  options:{}
});



// var PxValues = ['IBB','School Library','COLPAS','CEET','Gate Six'];
var PxValues = ['COLPAS','Gate Six'];
var PyValues = [40,60];
// var PyValues = [30,5,40,5,15];
var pieColors = ["#0098f0", "#f1b922"];

// #f8b700
new Chart("pie", {
  type: "pie",
  data: {
    labels: PxValues,
    datasets: [{
      backgroundColor: pieColors,
      data: PyValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Major take off points"
    }
  }
});






}

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only display: flex;flex-direction: row;flex-basis: 1200px;--> 
<style scoped>
.none{display: none;}
.center{text-align: center;}
.subhead {text-transform: uppercase;}

.cont{margin-top: 80px;}

@media screen and (max-width:480px){
.ib{display: inline-block;}
#myChart2,.chart{height: auto;margin-bottom: 80px;}


}

</style>
