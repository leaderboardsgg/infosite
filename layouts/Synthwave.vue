<template>
  <div class="layout-synthwave">
    <NavHeader />
    <HeroBanner />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Footer from "~/components/blocks/Footer"
import NavHeader from "~/components/blocks/NavHeader";
import HeroBanner from "~/components/blocks/HeroBanner"
export default {
  components: { HeroBanner, NavHeader, Footer }
}
</script>
