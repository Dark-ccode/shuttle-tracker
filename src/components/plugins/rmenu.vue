<template>

<div class="resmenu">

<div class="searchcont">
<input type="Search" class="search" placeholder="search location, shuttle number">
 <img src="../../assets/search.png" alt="" class="searchicon">

</div>

<div class="mmenucont">
<router-link to="/Dashboard" class="res_navs">  Dashboard</router-link>
<router-link to="/Map" class="res_navs">  Map</router-link>
<router-link to="/Stats" class="res_navs">Statistics</router-link>
<router-link to="/Book" class="res_navs">Book Now</router-link>


<hr>
<router-link to="/About" class="res_navs ">About App</router-link>
<router-link to="/Login" class="res_navs">Log out</router-link>
 </div>

<!-- <router-link to="/Login" class="action_btn rm">LOGIN <img src="../../assets/a2.png" alt="" class="rmimg"></router-link> -->
<div class="resicon">
 <img src="../../assets/settings.png" alt="" class="utilityicons ib" title="Settings">
 <img src="../../assets/community.png" alt="" class="utilityicons ib" title="Community">
 <img src="../../assets/info.png" alt="" class="utilityicons ib" title="info">
 <img src="../../assets/share.png" alt="" class="utilityicons ib" title="Share app">

</div>
</div>
</template>


<script>

export default {
  name: 'Resmenu',
  components: {
  }
}
</script>

<style scoped>


@media screen and (max-width:480px){
.res_navs{margin-top: 25px;margin-bottom: 25px;padding-left: 5px;font-size: 21px;
text-decoration: none;color: black;display: block;}
.resmenu{padding-bottom: 20px;;width: 80%;display: none;
padding: 20px;color: black;background-color:rgba(255, 255, 255, 0.98);position: fixed;left:0%;top: 80px;height: 100%;backdrop-filter: blur(20px);z-index: 999;}


.mmenucont{margin-top: 40px;}
.searchcont{margin-top: 30px;font-size: 14px;width: 100%;margin-left: 0%;margin-bottom: 20px;border: 1px solid #940335;border-radius: 6PX;height: 35PX;}
.search{width: 82%;margin-left: 1%;border: none;height: 100%;outline: none;background-color: transparent;}


.rmimg{height: 17px;width: 17px;margin-left: 5px;}
.router-link-active{color: #fc5b3f;font-weight: bold;}
hr{color: #940335;background-color: #940335;}
.res_navssmall{font-size: 17PX;}

.searchicon{width: 25px;height: 25px;padding: 0px;margin-right: 5px;margin-top: 5px;float: right;}

.utilityicons{width: 20px;height: 20px;padding: 5px;margin-right: 50px;}
.resicon{margin-top: 80px;}
}

</style>