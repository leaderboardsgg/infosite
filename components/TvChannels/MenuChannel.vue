<template>
  <div class="tv">
    <main ref="main" class="scanlines">
      <div class="screen">
        <canvas id="canvas" ref="canvas" class="picture"></canvas>
        <div class="overlay">
          <div ref="text" class="text">
            <span>LB.GG</span>
          </div>
          <div ref="menu" class="menu">
            <header>
              Coming Soon(TM)
            </header>
            <ul ref="list">
              <li class="active"><a href="#" title="">Github</a></li>
              <li><a href="https://discord.leaderboards.gg" title="">Discord</a></li>
              <li><a href="#" title="">Info and FAQs</a></li>
              <li><a href="#" title="">Blog</a></li>
              <li><a href="#" title="">Contact</a></li>
            </ul>
            <footer>
              <div class="key">Exit: <span>1</span></div>
              <div class="key">Select: <span>2</span></div>
            </footer>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'TvScreen',
  data() {
    return {
      frame: 0,
      idx: 0,
      toggle: true,
      windowWidth: 0,
    };
  },
  computed: {
  },
  watch: {
    windowWidth(newWidth) {
      this.$refs.canvas.width = newWidth / 3;
      this.$refs.canvas.height = (newWidth * 0.5625) / 3;
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.ctx = this.$refs.canvas.getContext('2d');
    this.animate();
    for (let i = 0; i < 4; i++) {
      const span = this.$refs.text.firstElementChild.cloneNode(true);
      this.$refs.text.appendChild(span);
    }
    setTimeout(() => {
      this.$refs.main.classList.add('on');
      this.$refs.main.classList.remove('off');
      this.animate();
    }, 1000);
  },
  updated() {
  },
  methods: {
    snow(){
      const w = this.ctx.canvas.width
      const h = this.ctx.canvas.height
      const d = this.ctx.createImageData(w, h)
      const b = new Uint32Array(d.data.buffer)
      const len = b.length

      for (let i = 0; i < len; i++) {
        b[i] = ((255 * Math.random()) | 0) << 24;
      }

      this.ctx.putImageData(d, 0, 0);
    },
    animate() {
      this.snow();
      this.frame = requestAnimationFrame(this.animate);
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  },
}
</script>


<style lang="scss">

$secondary: #1b2838;
$screen-background: #121010;

$lime: lime;
$font-family: "Terminal";
$font-size: 20px;

@font-face {
  src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/86186/terminal_copy.ttf);
  font-family: 'Terminal';
}
@font-face {
  src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/86186/sys.ttf)
  format('truetype');
  font-family: 'Sys';
}

@mixin pseudo {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  content: " ";
}

@mixin center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}

@mixin flexCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}

body{
  background: $secondary none repeat scroll 0 0;
  margin: 0;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}

// background when TV is off
.screen:before {
  background: transparent
  linear-gradient(to bottom, #85908c 0%, #323431 100%)
  repeat
  scroll
  0
  0;
  content: "";
  @include center;
  width: 100%;
  height: 100%;
  z-index: -1;
}
// CRT scanlines
.scanlines .overlay {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  @include flexCenter;

  &:after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/86186/crt.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    content: "";
  }
  &:before {
    @include pseudo;
    background: linear-gradient(
        transparentize($screen-background, 1) 50%,
        transparentize(darken($screen-background, 10), 0.75) 50%
    ),
    linear-gradient(
        90deg,
        transparentize(#ff0000, 0.94),
        transparentize(#00ff00, 0.98),
        transparentize(#0000ff, 0.94)
    );
    z-index: 2;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
  }
}

.picture {
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  z-index: -1;
  transform: scale(0, 0);
  background: transparent
  linear-gradient(to bottom, #85908c 0%, #323431 100%)
  repeat
  scroll
  0
  0;
}

.menu {
  opacity: 0;
  background-color: #0069ff;
  box-sizing: border-box;
  font-family: "Sys";
  font-size: 32px;
  height: auto;
  text-transform: uppercase;
  width: 34%;
  text-shadow: 1px 1px 0 #000000,
  -1px -1px 0 #000000,
  1px -1px 0 #000000,
  -1px 1px 0 #000000;
  filter: blur(1px);
  color: #fff;
  animation: jerkup 100ms infinite;

  header {
    color: #e7e05c;
    margin-bottom: 10px;
    padding: 5px 15px;
    animation: 5s ease 2000ms normal none infinite running glitch;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      box-sizing: border-box;
      list-style: outside none none;
      padding: 5px 15px;

      &.active {
        background-color: #1af2ff;
        a {
           //background-color: #1af2ff;
        }
      }

      a {
        color: #fff;
        text-decoration: none;
      }
    }
    animation: 5s ease 2000ms normal none infinite running glitch;
  }

  footer {
    background-color: #2afd72;
    margin-top: 10px;
    padding: 5px 15px;
    animation: 5s ease 2000ms normal none infinite running glitch;

    &:after {
      clear: both;
      content: " ";
      display: table;
    }

    .key {
      float: left;
      width: 50%;

      span {
        background-color: #0069ff;
        border: 6px solid #e7e05c;
        border-radius: 6px;
        display: inline-block;
        height: 34px;
        line-height: 36px;
        padding-left: 6px;
      }
    }
    .key:last-child {
      text-align: right;
    }
  }
}

.on .picture {
  animation: 3000ms linear 0ms normal forwards 1 running on;
}
.off .picture {
  animation: 750ms
  cubic-bezier(0.230, 1.000, 0.320, 1.000)
  0ms
  normal
  forwards
  1
  running
  off;
}

$delay: 2000ms;

.text {
  color: $lime;
  content: "AV-1";
  opacity: 0;
  filter: blur(0.5px);
  font-family: Sys;
  font-size: 6vmin;
  left: 5%;
  position: absolute;
  text-shadow: 0 0 3px lime;
  top: 10%;
  width: 200px;
}

.on {
  .text, .menu {
    opacity: 1;
    transition: opacity 10ms ease 2000ms;
  }
}

@keyframes on {
  0% {
    transform: scale(1, 0.8) translate3d(0, 0, 0);
    filter: brightness(4);
    opacity: 1;
  }
  3.5% {
    transform: scale(1, 0.8) translate3d(0, 100%, 0);
  }

  3.6% {
    transform: scale(1, 0.8) translate3d(0, -100%, 0);
    opacity: 1;
  }

  9% {
    transform: scale(1.3, 0.6) translate3d(0, 100%, 0);
    filter: brightness(4);
    opacity: 0;
  }

  11% {
    transform: scale(1, 1) translate3d(0, 0, 0);
    filter: contrast(0) brightness(0);
    opacity: 0;
  }

  100% {
    transform: scale(1, 1) translate3d(0, 0, 0);
    filter: contrast(1) brightness(1.2) saturate(1.3);
    opacity: 1;
  }
}

@keyframes off {
  0% {
    transform: scale(1, 1);
    filter: brightness(1);
  }
  40% {
    transform: scale(1, 0.005);
    filter: brightness(100);
  }
  70% {
    transform: scale(1, 0.005);
  }
  90% {
    transform: scale(0.005, 0.005);
  }
  100% {
    transform: scale(0, 0);
  }
}

.text span {
  filter: blur(1px);
  position: absolute;
}
.text span:nth-child(1) {
  color: red;
  margin-left: -2px;
  filter: blur(2px);
}
.text span:nth-child(2) {
  color: lime;
  margin-left: 2px;
  filter: blur(2px);
}
.text span:nth-child(3) {
  color: blue;
  position: 20px 0;
  filter: blur(1px);
}
.text span:nth-child(4) {
  color: #fff;
  filter: blur(1px);
  text-shadow: 0 0 50px rgba(255, 255, 255, 0.4);
}
.text span:nth-child(5) {
  color: rgba(255, 255, 255, 0.1);
  filter: blur(15px);
}

.text span {
  animation: blur 30ms infinite, jerk 50ms infinite;
}

@keyframes blur {
  0% {
    filter: blur(1px);
    opacity: 0.8;
  }
  50% {
    filter: blur(1px);
    opacity: 1;
  }
  100% {
    filter: blur(1px);
    opacity: 0.8;
  }
}
@keyframes jerk {
  50% {
    transform: translateX(1px);
  }
  51% {
    transform: translateX(0);
  }
}
@keyframes jerkup {
  0% {
    transform: translateY(1px);
  }
  100% {
    transform: translateY(0);
  }
}
.text span:nth-child(2) {
  animation: jerkup 1s infinite;
}
.text span:nth-child(3) {
  animation: glitch1 1s infinite;
}
@keyframes glitch1 {
  0% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(0);
  }
  31% {
    transform: translateX(10px);
  }
  32% {
    transform: translateX(0);
  }
  98% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(10px);
  }
}
.text span:nth-child(2) {
  animation: glitch2 1s infinite;
}
@keyframes glitch2 {
  0% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(0);
  }
  31% {
    transform: translateX(-10px);
  }
  32% {
    transform: translateX(0);
  }
  98% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-10px);
  }
}

.overlay .text {
  animation: 5s ease 2000ms normal none infinite running glitch;
}
@keyframes glitch {
  30% {
  }
  40% {
    opacity: 1;
    transform: scale(1, 1) skew(0, 0);
  }
  41% {
    opacity: 0.8;
    transform: scale(1, 1.2) skew(80deg, 0);
  }
  42% {
    opacity: 0.8;
    transform: scale(1, 1.2) skew(-50deg, 0);
  }
  43% {
    opacity: 1;
    transform: scale(1, 1) skew(0, 0);
  }
  65% {
  }
}

</style>
