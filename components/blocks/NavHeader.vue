<template>
  <nav>
    <ul ref="list">
      <li class="active"><a href="#" title="">Github</a></li>
      <li><a href="https://discord.leaderboards.gg" title="">Discord</a></li>
      <li><a href="#" title="">Info and FAQs</a></li>
      <li><a href="#" title="">Blog</a></li>
      <li><a href="#" title="">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default{
  name: 'NavHeader'
}
</script>

<style lang="scss" scoped>
nav ul{
  display: flex;
}
</style>
