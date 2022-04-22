<template>
  <div class="page">
    <div>
      <h1>{{ page.title }}</h1>
      <p>{{ page.description }}</p>
      <nuxt-content :document="page"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  layout: 'Synthwave'
}
</script>
