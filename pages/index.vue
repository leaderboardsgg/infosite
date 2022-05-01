<template>
  <div class="page">
    <HeroBanner />
    <h3 class="intro">Open Source. Community Built. Community Kept.</h3>
    <div>
      <CtaLinks />
      <MvpAccordion />
    </div>
    OUTLINE - TECH STACK
    OUTLINE - WHY IS THIS GOING TO WORK?
    OUTLINE - WHAT COULD GET IN OUR WAY?
    OUTLINE - WHY ARE YOU DOING IT?
    OUTLINE - HOW ARE YOU GOING TO PAY FOR IT?
    OUTLINE - WHO ARE WE? WHO IS IN CHARGE?
    OUTLINE - I WANT TO HELP/ I HAVE IDEAS/ I HAVE CONNECTIONS
    OUTLINE - ORIGINAL PASTEBIN MISSION STATEMENT
  </div>
</template>

<script>
import HeroBanner from "@/components/blocks/HeroBanner";
import CtaLinks from "@/components/blocks/CtaLinks";
import MvpAccordion from "@/components/blocks/MvpAccordion";


export default {
  name: 'IndexPage',
  components: { HeroBanner, CtaLinks, MvpAccordion },

  layout: 'Synthwave'
}
</script>
