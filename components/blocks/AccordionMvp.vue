<template>
  <div class="accordion">
    <div class="accordion__wrapper">
      <div v-bind:class="{ 'active': this.activeId }" v-for="(item, i) in $options.accordionItems.accordItems" class="accordion-item" :key="i" @click="toggleActive(i)">
        <div v-if="item.content.length" class="accordion-item__heading">{{ item.heading }}</div>
        <ul v-if="item.content.length" class="accordion-item__content">
          <li v-for="(req,r) in item.content" :key="r">
            <h4>{{ req.title }}</h4>
            <ul>
              <li v-for="(detail,d) in req.detail" :key="d">{{ detail }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ACCORDION_ITEMS from '../../assets/json/accordionMVP.json'
console.log(ACCORDION_ITEMS);

export default {
  name: 'AccordionMvp',
  props: {
    multipleOpen: {
      type: Boolean,
      default: true,
    },
  },
  data() {},
  methods: {
    toggleActive(id) {
      if (this.multipleOpen) {
        if (this.activeIds.has(id)) {
          this.activeIds.delete(id)
        } else {
          this.activeIds.add(id)
        }
        this.activeIds = new Set(this.activeIds)
      } else if (this.activeId === id) {
        this.activeId = null
      } else {
        this.activeId = id
      }
    },
  },
  accordionItems: ACCORDION_ITEMS
}
</script>

<style lang="scss">
.accordion {
  .accordion-item {
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    border-width: 1px 1px 0 1px;
    border-color: #ffffff;
    border-style: solid;
    .accordion-item__heading{
      border-bottom: 1px solid white;
      padding: 25px;
    }
    .accordion-item__content{
      opacity: 0;
      height: 0;
    }
  }
  .accordion-item.active{
    .accordion-item__content{
      opacity: 1;
      height: 100%;
      padding: 25px;
    }
  }
}


</style>
