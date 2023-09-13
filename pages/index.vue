<template>
  <div class="page">
    <HeroBanner></HeroBanner>
    <h3 class="intro">
      <p>A (WIP) site to host leaderboards for games.</p>
      <p>Open Source. Community Built. Community Kept.</p>
    </h3>
    <div class="container">
      <CtaLinks />
      <h2 id="about">About</h2>

      <h3 id="what-is-leaderboards-gg-">What is Leaderboards.gg?</h3>
      <p>
        Leaderboards.gg is a site that hosts video game leaderboards. It has
        support for speedruns (fastest completion of a certain goal), high
        scores, and more.
      </p>

      <h3 id="what-kinds-of-gameplay-are-on-leaderboards-gg-">
        What Kinds of Gameplay are on Leaderboards.gg?
      </h3>
      <p>
        The runs on our site are organized into different categories of
        competition in single player or coop videogames. This includes any way
        of playing a game with a clear way of comparing and ranking runs, e.g.
        playing a full game start to finish as fast as possible, trying to
        obtain a highscore, surviving for as many rounds as possible on a
        holdout game mode. Each category has the following elements:
      </p>
      <ul>
        <li>
          a startpoint and an endpoint
          <ul>
            <li>
              <em>&quot;the run starts upon selecting a new file&quot;</em>
            </li>
            <li>
              <em
                >&quot;the run ends when you press x to defeat the final
                boss&quot;</em
              >
            </li>
            <li><em>&quot;the run ends when you game over&quot;</em></li>
          </ul>
        </li>
        <li>
          a set of goals - tasks or conditions that must be completed
          <ul>
            <li><em>&quot;collect 100% of items&quot;</em></li>
          </ul>
        </li>
        <li>
          a set of metrics - a way of measuring player performance used to
          compare runs
          <ul>
            <li>
              <em>&quot;total run time, ranked shortest to longest&quot;</em>
            </li>
          </ul>
        </li>
        <li>
          a set of restrictions - an aspect of gameplay that is either required
          or prohibited
          <ul>
            <li><em>&quot;use Luigi&quot;</em></li>
            <li><em>&quot;do not use invincibility glitch&quot;</em></li>
          </ul>
        </li>
      </ul>
      <h3 id="motivation">Motivation</h3>
      <p>
        Leaderboards.gg was born from a need for a website that values the user
        experience. The lack of an existing solution that incorporates changes
        based on user feedback, identifies and fixes bugs in a timely fashion,
        and delivers superior performance by leveraging modern web technology
        prompted us to create a website that would be proactive in providing
        these critical components of a user-focused website.
      </p>
      <h3 id="our-promise">Our Promise</h3>
      <p>
        In order to best serve our users, Leaderboards.gg will remain free and
        open source, ad-free, and without paid features. This means that all the
        features of the website will be available to all users free of charge,
        and we will never put features behind a paywall. As a registered <a href="https://opencollective.com/leaderboardsgg">Open Collective</a>, Leaderboards.gg is funded entirely by donations, all of
        which go directly towards site hosting and related costs. This funding
        model allows us to remain ad-free. Users will never see advertisements
        while browsing the website, and will not be bombarded with messages
        asking to disable ad-block. All expenses are listed publicly on our Open
        Collective profile so that supporters can see what the money that
        they&#39;ve contributed is being used for.
      </p>
      <p>
        Operating in such a way the people in change of the website do not
        receive compensation ensures that they cannot enact policies that
        benefit them monetarily, reducing the potential for conflicts of
        interest.
      </p>
      <p>
        Our commitment to open source comes with many benefits. By making the
        tools powering the website available to all, users are able to build
        their own apps or websites for any competitively ranked activity,
        videogame-related or otherwise. One of our goals is to make it as easy
        as possible for anyone to host leaderboards using our software.
      </p>
      <p>
        Additionally, Leaderboards.gg is committed to equal treatment in terms
        of both content and users. All games on the site will be treated as
        equal when it comes to presence and discoverability on the website, and
        we will not restrict access to or promote any games arbitrarily. We
        provide a clear and transparent set of rules governing content and
        conduct on the website that all moderator actions must adhere to.
      </p>
      <h2 id="site-features">Site Features</h2>
      <h3 id="ranking-systems">Ranking Systems</h3>
      <p>
        On our site you won&#39;t just be restricted to runs based on fastest
        time or highest score. Runs can be ranked any number of metrics in any
        order. For example, you can easily configure board for lowest completion
        percent first with ties broken by fastest time.
      </p>

      <h3>Run Categorization System</h3>
      <p>
        You can compete in your favorite games in
        multiple different ways. Leaderboards.gg has support for categorizing
        attempts by campaign, goal, restrictions, etc. For example, a game might
        have separate categories for beating the whole game with no
        restrictions, getting every item, new game+, and so on.
      </p>
      <p>
        Each run in a category can have additional variables for factors like
        platform, difficulty, region, or game version. A category can be
        filtered by these variables. For example, if you only want to see who
        has the highest score on PS2, hard difficulty, NTSC, version 1.1,
        it&#39;s easy to do so with just a few clicks.
      </p>
      <p>
        Categories don&#39;t just have to be divided into &quot;Full Game
        Runs&quot; and &quot;Individual Level Runs.&quot; Leaderboards.gg will
        support customizable groupings of run categories. In order to support
        games with multiple modes of play, we will have a intuitive method of
        grouping logical categories. This can be used to separate runs by
        gamemode for a game like Kirby Super Star, by expansion for a game like
        GTAIV, or by scope (full game, chapter, level).
      </p>

      <h3 id="public-api">Public API</h3>
      <p>
        All website content will be available from a robust public API. This
        lets devs and community members create tools/apps/sites/etc. that extend
        the base functionality. You could build a twitch bio element that
        displays a user&#39;s top times across several games, a bot that posts
        updates when new runs are submitted, or even a custom automod.
      </p>
    </div>
  </div>
</template>

<script>
import HeroBanner from '@/components/blocks/HeroBanner'
import CtaLinks from '@/components/blocks/CtaLinks'

export default {
  name: 'IndexPage',
  components: { HeroBanner, CtaLinks },

  layout: 'Synthwave',
}
</script>

<style scoped lang="scss">
.page {
  backdrop-filter: blur(10px);
}
.container {
  display: flex;
  flex-direction: column;
}
h2 {
  margin-top: 25px;
  margin-bottom: 25px;
}
h3,p {
  margin-bottom: 15px;
}
ul {
  margin-bottom: 10px;
  list-style: circle;
  li {
    margin-left: 15px;
  }
}
</style>
