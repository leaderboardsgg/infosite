<template>
  <div class="grid"></div>
</template>

<script>
export default {
  name: 'ScrollingFloor'
}
</script>

<style scoped>
.grid {
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  left: -50%;
  background-image: linear-gradient(90deg, transparent 0%, transparent 85%, #F66CF7 90%, transparent 95%), linear-gradient(0deg, transparent 0%, transparent 85%, #AF50AF 90%, transparent 95%);
  background-size: 50px 25px;
  width: 200vw;
  height: 30vh;
  transform: translate3D(0, 0, 0) perspective(150px) rotateX(45deg) ;
  perspective-origin: top;

  /* animation-name: movement; */
  animation-duration: 7s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.grid:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, transparent, black);
}

@keyframes movement {
  0% {background-position: 0% 0%;}
  100% {background-position: 0% 100%;}
}
</style>
