<template>
<div :class="`hero-banner--${color}`" class="hero-banner">
  <PinkGrid></PinkGrid>
  <div class="heading">
    <slot>
      <h1><span>Leaderboards</span> gg</h1>
    </slot>
  </div>
</div>
</template>

<script>
import PinkGrid from "@/components/elements/PinkGrid";
export default {
  name: "HeroBanner",
  components: {
    PinkGrid
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
  border-top: 1px solid cyan;
  margin-left: -20px;
  margin-right: -20px;
}
</style>
