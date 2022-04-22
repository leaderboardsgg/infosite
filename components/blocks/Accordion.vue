<template>
  <div class="accordion">
    <div class="accordion__wrapper">
      <div :class="{ active: isActive }" class="accordion-item" @click="toggleItem">
        <div class="accordion-item__heading">
          heading stuff
        </div>
        <div class="accordion-item__content">
          content stuff
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Accordion',
  data() {
    return {
      isActive: true
    }
  },
  methods: {
    toggleItem() {
      this.isActive = !this.isActive;
    }
  }
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

