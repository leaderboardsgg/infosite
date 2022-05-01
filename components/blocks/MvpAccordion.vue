<template>
  <div>
    <h2>Here's what we have planned for:</h2>
    <div v-for="accordion in $options.accordionItems.accordItems" :key="accordion.heading">
      <BaseAccordion>
        <template #title>{{ accordion.heading }}</template>
        <template #content>
          <div v-for="mvpItem in accordion.content" :key="mvpItem.title" class="mvpItem">
            <h3>{{ mvpItem.title }}</h3>
            <p v-for="detail in mvpItem.detail" :key="detail">{{ detail }}</p>
            <a v-if="mvpItem.link" :href="mvpItem.link">Trello Card</a>
          </div>
        </template>
      </BaseAccordion>
    </div>
  </div>
</template>

<script>
import ACCORDION_ITEMS from '../../assets/json/accordionMVP.json';
import BaseAccordion from "@/components/elements/BaseAccordion";


export default {
  name: 'AccordionMvp',
  components: { BaseAccordion },
  props: {},
  methods: {},
  accordionItems: ACCORDION_ITEMS
}
</script>

<style scoped lang="scss">
h2{
  margin-bottom: 4rem;
}
.mvpItem {
  padding: 25px;
  h3{
    margin-bottom: 1rem;
  }
  p{
    margin-bottom: 1rem;
  }
  a {
    margin-bottom: 2rem;
    display: inline-block;
  }
}

</style>
