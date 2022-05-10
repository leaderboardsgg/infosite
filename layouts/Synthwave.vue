<template>
  <div class="layout-synthwave">
    <ScrollingSky></ScrollingSky>
    <div class="page-wrapper">
      <NavHeader />
      <Nuxt />
      <Footer />
    </div>
    <ScrollingFloor></ScrollingFloor>
  </div>
</template>
<script>
import Footer from "~/components/blocks/Footer"
import NavHeader from "~/components/blocks/NavHeader";
import ScrollingFloor from "@/components/elements/ScrollingFloor";
import ScrollingSky from "@/components/elements/ScrollingSky";

export default {
  components: { NavHeader, Footer, ScrollingFloor, ScrollingSky }
}
</script>
