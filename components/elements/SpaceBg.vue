<template>
  <canvas ref="field" id="field" />
</template>

<script>

export default {
  name: 'SpaceBg',
  data() {
    return {
      sPageURL: '',
      windowWidth: 0,
      stars: {},
      starIndex: 0,
      numStars: 0,
      acceleration: 1,

    }
  },
  watch: {
    windowWidth(newWidth) {
      this.$refs.field.width = newWidth / 3;
      this.$refs.field.height = (newWidth * 0.5625) / 3;
    },
  },
  mounted() {
    this.f = this.$refs.field.getContext("2d");
    this.starsToDraw = (this.$refs.field.width * this.$refs.field.height) / 200;
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    if (this.getUrlParameter("stars")) {
      this.starsToDraw = this.getUrlParameter("stars");
    }
    if (this.getUrlParameter("accel")) {
      this.acceleration = this.getUrlParameter("accel");
    }
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    getUrlParameter(sParam) {
      let sParameterName;
      const sPageURL = decodeURIComponent(window.location.search.substring(1));
      const sURLVariables = sPageURL.split("&");
      for (let i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : sParameterName[1];
        }
      }
    },
    Star() {
      this.X = this.$refs.field.width / 2;
      this.Y = this.$refs.field.height / 2;

      this.SX = Math.random() * 10 - 5;
      this.SY = Math.random() * 10 - 5;

      let start = 0;

      if (this.$refs.field.width > this.$refs.field.height)
        start = this.$refs.field.width;
      else
        start = this.$refs.field.height;

      this.X += this.SX * start / 10;
      this.Y += this.SY * start / 10;

      this.W = 1;
      this.H = 1;

      this.age = 0;
      this.dies = 500;

      this.$refs.starIndex++;
      this.$refs.stars[this.$refs.starIndex] = this;

      this.ID = this.$refs.starIndex;
      this.C = "#ffffff";
    }
  }
}

</script>

<style scoped>
* {
  color: #FFFFFF;
  background-color: #000;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
