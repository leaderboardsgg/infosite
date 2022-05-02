<template>
  <div class="page">
    <HeroBanner />
    <h3 class="intro">Open Source. Community Built. Community Kept.</h3>
    <div>
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
