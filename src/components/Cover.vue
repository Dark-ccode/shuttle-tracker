<template>
<div class="home">

<div class="cont">

    <img src="../assets/logo.png" alt="" class="logoimg">


<div class="pcont">
<div class="powered1">Powered By</div>
<div class="powered">Echelon Tech LLC</div>
</div>
</div>
</div>
</template>

<script>

//import $ from "jquery"

export default {
name: 'loadpage',
components: {
},
data() { 
return {}},
mounted(){
function loader(){
window.location.href='#/Login'
}
setTimeout(loader,3000)
//setTimeout(loader,6000)

}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only display: flex;flex-direction: row;flex-basis: 1200px;--> 
<style scoped>

@media screen and (max-width:480px){
.none{display: none;}
.cont{width:100%;padding-top: 30%;overflow-y: hidden;position: fixed;}
.home{display: block;}
.ib{display: inline-block;}



.logoimg {
    text-align: center;
    margin-top:35%;
    width: 60%;height: 70px;margin-left: 20%;
}

@keyframes fade {
from { opacity: 1.0; }
50% { opacity: 0.4; }
to { opacity: 1.0; }
}

.blink {
animation:fade 3000ms infin0ite;
-webkit-animation:fade 3000ms infinite;
}

.powered{color:#940335;font-weight: bolder;width: 100%;text-align: center;font-size: 16px;}
.powered1{color:rgba(0, 0, 0, 0.612);font-weight: bolder;width: 100%;text-align: center;font-size: 14px;}
.pcont{position: fixed;bottom: 10px;width: 100%;text-align: center;}

sup{display: inline-block;margin-left: -13px;font-size: 35px;margin-top: 53px;}

}
</style>
