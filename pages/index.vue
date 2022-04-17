<template>
  <div class="page">
    <HeroBanner />
    <h3 class="intro">Open Source. Community Built. Community Kept.</h3>
    <div>
      <CtaLinks />
    </div>
  </div>
</template>

<script>
import HeroBanner from "@/components/blocks/HeroBanner";
import CtaLinks from "@/components/blocks/CtaLinks";

export default {
  name: 'IndexPage',
  components: { HeroBanner, CtaLinks },

  layout: 'Synthwave'
}
</script>
