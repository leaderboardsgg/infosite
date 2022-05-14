<template>
  <div>
    <h2>Some questions you may have:</h2>
    <div v-for="accordion in $options.accordionItems.accordItems" :key="accordion.heading">
      <BaseAccordion>
        <template #title>{{ accordion.heading }}</template>
        <template #content>
          <ul>
            <li v-for="(detail, d) in accordion.content" :key="d">{{ detail }}</li>
          </ul>
        </template>
      </BaseAccordion>
    </div>
  </div>
</template>

<script>
import ACCORDION_ITEMS from '../../assets/json/accordionInfo.json';
import BaseAccordion from "@/components/elements/BaseAccordion";


export default {
  name: 'InfoAccordion',
  components: { BaseAccordion },
  props: {},
  methods: {},
  accordionItems: ACCORDION_ITEMS
}
</script>

<style scoped lang="scss">
h2 {
  margin-bottom: 4rem;
  margin-top: 8rem;
  text-align: center;
}
ul {
  padding: 25px;
  max-width: 72rem;
  li {
    margin-bottom: 10px;
  }
}

</style>
