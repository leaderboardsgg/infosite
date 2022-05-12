<template>
  <div class="page">
    <HeroBanner color="red"><h1><span>How You Can Help</span></h1></HeroBanner>
    <h3 class="intro">Contributor Guidelines</h3>
    <div>
      <h2>Thank you for your interest in contributing to LeaderboardsGG. We're glad you found your way here, and we're always in need of new contributors.</h2>

      <h2>General Information</h2>
      <p>We currently have three repositories set up. Below are the links to each one along with some basic information regarding their respective technology stacks. Make sure to read the contributing guidelines for the repository you wish to contribute to. This will ensure a smooth experience for all involved.</p>

      <h2>Our Repositories</h2>

      <h3>Front End</h3>
      <ul>
        <li>
          Technologies: Vue.js, Nuxt.js, Jest, TailwindCSS
        </li>
        <li>
          <a href="https://github.com/leaderboardsgg/leaderboard-site">Github Repo</a>
        </li>
        <li>
          <a href="https://github.com/leaderboardsgg/leaderboard-site/blob/main/CONTRIBUTING.md">Contributing Guidelines</a>
        </li>
        <li>
          <a href="https://github.com/leaderboardsgg/leaderboard-site/issues">Issues</a>
        </li>
      </ul>

      <h3>Back End</h3>
      <ul>
        <li>
          Technologies: C#, ASP.NET, PostgreSQL
        </li>
        <li>
          <a href="https://github.com/leaderboardsgg/leaderboard-backend">Github Repo</a>
        </li>
        <li>
          <a href="https://github.com/leaderboardsgg/leaderboard-backend/blob/main/CONTRIBUTING.md">Contributing Guidelines</a>
        </li>
        <li>
          <a href="https://github.com/leaderboardsgg/leaderboard-backend">Issues</a>
        </li>
      </ul>

      <h3>Info Site</h3>
      <ul>
        <li>
          Technologies: Vue.js, Nuxt.js, SCSS
        </li>
        <li>
          <a href="https://github.com/leaderboardsgg/poc-infosite">Github Repo</a>
        </li>
        <li>
          <a href="https://github.com/leaderboardsgg/poc-infosite/blob/main/CONTRIBUTING.md">Contributing Guidelines</a>
        </li>
        <li>
          <a href="https://github.com/leaderboardsgg/poc-infosite/issues">Issues</a>
        </li>
      </ul>

      <h3>Acknowledgements</h3>
      <p>Special Thanks to all of our contributors &hearts;</p>
    </div>
  </div>
</template>

<script>
import HeroBanner from "@/components/blocks/HeroBanner";
export default {
  components: { HeroBanner },
  layout: 'Synthwave',
}
</script>

<style scoped>
h2{
  margin-bottom: 25px;
}
</style>

