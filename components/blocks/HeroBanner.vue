<template>
<div :class="`hero-banner--${color}`" class="hero-banner">
  <div class="heading">
    <slot>
      <h1><span>Leaderboards</span> gg</h1>
    </slot>
  </div>
</div>
</template>

<script>
export default {
  name: "HeroBanner",
  components: {
  },
  props: {
    color: {
      type: String,
      default: 'purple',
    }
  }
};
</script>

<style scoped>
.hero-banner{
  margin-left: -20px;
  margin-right: -20px;
}
</style>
