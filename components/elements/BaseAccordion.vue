<template>
  <div class="accordion">
    <div class="accordion-item" v-bind:class="{ 'active': this.show }"  @click="toggleItem">
      <h2 class="accordion-item__heading">
        <slot name="title"></slot>
      </h2>
      <div v-show="show" class="accordion-item__content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components: {},
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleItem() {
      this.show = !this.show;
    },
  }
}
</script>

<style lang="scss">
.accordion {
  .accordion-item {
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    border-width: 1px 1px 1px 1px;
    border-color: skyblue;
    border-style: solid;
    .accordion-item__heading{
      padding: 25px;
    }
    .accordion-item__content{
      opacity: 0;
      padding: 25px;
      height: 0;
      a{
        border-width: 2px;
        border-color: plum;
        border-style: solid;
        padding: 1rem 5rem;
        text-transform: uppercase;
        font-size: 1.5rem;
        line-height: 1.5rem;
        letter-spacing: 1px;
        font-weight: 600;
        color: white;

        &:hover {
          background-color: rgba(103,232,249, 1);
          color: black;
        }
      }
    }
  }
  .accordion-item.active{
    .accordion-item__heading{
      background-color: rgba(34,211,238, 1);
      color: black;
    }
    .accordion-item__content{
      opacity: 1;
      height: 100%;
    }
  }
}


</style>
