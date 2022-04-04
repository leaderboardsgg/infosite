<template>
  <div ref="nav-header" class="nav-header">
    <div class="nav-container">
      <div ref="nav-overlay" :class="{ open: navOpen }" :style="{ height: windowDiagonal * 2 + 'px', width: windowDiagonal * 2 + 'px', marginTop: -windowDiagonal + 'px', marginLeft: -windowDiagonal + 'px'  }" class="nav-overlay "></div>
      <nav ref="nav-fullscreen" :class="{ open: navOpen }" :style="{ height: windowHeight + 'px' }" class="nav-fullscreen ">
        <ul>
          <li><a href="https://discord.leaderboards.gg">Discord</a></li>
          <li><a href="https://github.com/leaderboardsgg">Github</a></li>
        </ul>
      </nav>
      <a ref="nav-toggle" :class="{ open: navOpen }" class="nav-toggle" @click="toggleNav" ><span></span><span></span><span></span></a>
    </div>
  </div>
</template>

<script>
export default{
  name: 'NavHeader',
  data() {
    return {
      windowHeight: 0,
      windowDiagonal: 0,
      windowWidth: 0,
      navOpen: false,
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      this.windowDiagonal = Math.sqrt(Math.pow(this.windowHeight, 2) + Math.pow(this.windowWidth, 2));
    },
    toggleNav() {
      this.navOpen = !this.navOpen;
    }
  }
}
</script>

<style scoped lang="scss">
.nav-header {
  outline: 1px solid palevioletred;
  display: flex;
  padding: 16px;
  color: white;
  top: 0;
  position: sticky;

  .nav-container {
    margin-left: auto;
    position: relative;

    .nav-toggle {
      display: block;
      cursor: pointer;
      transform: rotate(0deg);

      span {
        background-color: black;
        width: 100%;
        display: block;
        position: absolute;
        left: 0;
        content: '';
        transform-origin: left center;
        // transition time and time function
        transition: .5s ease-in-out;
      }

      &.open {
        span {
          &:nth-child(1) {
            transform: rotate(45deg);
          }

          &:nth-child(2) {
            width: 0;
            opacity: 0;
          }

          &:nth-child(3) {
            transform: rotate(-45deg);
          }
        }
      }
    }
    .nav-overlay {
      position: absolute;
      z-index: 0;
      border-radius: 50%;
      transition: 1s;
      transform: scale3d(0, 0, 0);
      &.open {
        transform: scale3d(1, 1, 1);
      }
    }
    .nav-fullscreen {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;

      transition: ease-in-out 0.25s;
      transition-delay: 0s;

      visibility: hidden;
      opacity: 0;

      ul {
        list-style: none;
      }

      a {
        color: white;
        text-decoration: none;
      }
      &.open{
        visibility: visible;
        opacity: 1;
        transition: ease-in-out 0.5s;
        transition-delay: 0.25s;
      }
    }
    .nav-toggle span {
      background-color: white;
    }
    .nav-fullscreen {
      display: flex;
      align-items: center;
      justify-content: center;

      color: white;
      font-family: sans-serif;
      font-size: 10vh;

      li:hover {
        list-style: disc;
      }
    }
  }
}

</style>
