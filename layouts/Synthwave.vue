<template>
  <div class="layout-synthwave">
    <NavHeader />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Footer from "~/components/blocks/Footer"
import NavHeader from "~/components/blocks/NavHeader";
export default {
  components: { NavHeader, Footer }
}
</script>
