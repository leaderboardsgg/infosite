<template>
  <div class="page">
    <HeroBanner></HeroBanner>
    <h3 class="intro">
      <p>A (WIP) site to host leaderboards for games.</p>
      <p>Open Source. Community Built. Community Kept.</p>
    </h3>
    <div class="container">
      <CtaLinks />
      <MvpAccordion />
      <InfoAccordion />
    </div>
  </div>
</template>

<script>
import HeroBanner from "@/components/blocks/HeroBanner";
import CtaLinks from "@/components/blocks/CtaLinks";
import MvpAccordion from "@/components/blocks/MvpAccordion";
import InfoAccordion from "@/components/blocks/InfoAccordion";


export default {
  name: 'IndexPage',
  components: { HeroBanner, CtaLinks, MvpAccordion, InfoAccordion },

  layout: 'Synthwave'
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
}
</style>
