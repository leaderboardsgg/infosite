<template>
  <div class="pageview">
    tv
    <TvScreen>test slot</TvScreen>
  </div>
</template>

<script>
import TvScreen from "~/components/TvScreen";

export default {
  name: 'IndexPage',
  components: {TvScreen},
}
</script>
