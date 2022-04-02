<template>
  <div ref="nav-container" class="nav-container">
    <div ref="nav-overlay" class="nav-overlay" :style="navOverlay"></div>
    <nav ref="nav-fullscreen" class="nav-fullscreen">
      <ul ref="list">
        <li><a href="#" title="">Github</a></li>
        <li><a href="https://discord.leaderboards.gg" title="">Discord</a></li>
        <li><a href="#" title="">Info and FAQs</a></li>
        <li><a href="#" title="">Blog</a></li>
        <li><a href="#" title="">Contact</a></li>
      </ul>
    </nav>
    <a ref="nav-toggle" class="nav-toggle" @click="toggleNav">
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>
</template>

<script>
export default{
  name: 'NavHeader',
  data() {
    return {
      navOpen: false,
      navFullscreen: {
        // width: 0,
        // height: 0,
      },
      navOverlay: {
        // width: 0,
        // height: 0,
        // marginTop: 0,
        // marginLeft: 0,
      },
    };
  },
  methods: {
    toggleNav() {
      if (!this.navOpen) {
        this.$refs["nav-toggle"].classList.add('open');
        this.$refs["nav-overlay"].classList.add('open');
        this.$refs["nav-fullscreen"].classList.add('open');
        this.navOpen = true;
      } else {
        this.$refs["nav-toggle"].classList.remove('open');
        this.$refs["nav-overlay"].classList.remove('open');
        this.$refs["nav-fullscreen"].classList.remove('open');
        this.navOpen = false;
      }

    },

    handleResize() {
      this.$refs["nav-fullscreen"].height = window.innerHeight;

      const radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
      const diameter = radius * 2;
      this.$refs["nav-overlay"].width = diameter;
      this.$refs["nav-overlay"].height = diameter;
      this.navOverlay.marginTop = radius;
      this.navOverlay.marginLeft = radius;
    }
  },
}
</script>
