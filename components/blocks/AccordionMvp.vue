<template>
  <div class="accordion">
    <div class="accordion__wrapper">
      <div :class="{active: isActive}" class="accordion-item" @click="toggleItem">
        <div class="accordion-item__heading">
          You
        </div>
        <div class="accordion-item__content">
          <ul>
            <li>
              <p>(MVP) The site should present multiple options for account creation and authentication.</p>
              <ul>
                <li>Why? Allowing users to choose from a variety of options reduces friction in the account creation process.</li>
                <li>Options should include a normal email + username + password, Oauth via Discord, Twitch, Twitter, etc..</li>
                <li>https://trello.com/c/1wwCguoC</li>
              </ul>
            </li>
            <li>
              <p>(MVP) Users should be able to, in their account settings, have a field for giving their pronouns if they wish. This should ideally be an arbitrary text field, rather than being limited to a list of options.</p>
              <ul>
                <li>Why? Allowing users to state their pronouns is important to respectful communication with and about other users.</li>
                <li>Providing an arbitrary textfield is most inclusive towards those who prefer less common sets of pronouns and neopronouns.</li>
                <li>- A valid concern with arbitrary text is abuse from malicious users. Of course, this comes with literally any kind of text, from usernames to run descriptions. The pronoun field would need to be moderated similarly. Those who abuse it would be restricted from using it or banned site-wide, depending on severity.</li>
                <li>https://trello.com/c/2QCccraT</li>
              </ul>
            </li>
            <li>
              <p>(MVP or V1) Provide users with the option to switch between multiple “themes” / color schemes for the site.</p>
              <ul>
                <li>Why? While many users prefer a “dark” theme, and it would be a good default, some users may prefer other color schemes for various reasons, such as having a difficult time reading/discerning certain colors.</li>
                <li>Ideally, users would be able to customize their scheme, in addition to having pre-set options.</li>
                <li>https://trello.com/c/oS8PFgKm</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div :class="{active: isActive}" class="accordion-item" @click="toggleItem">
        <div class="accordion-item__heading">
          Runners
        </div>
        <div class="accordion-item__content">
          - (MVP or V1) Allow users to submit files with their runs/submissions.
          - Why? In many communities, certain files associated with a submission are necessary for verification. This can include movie/demo files, world files, config files, etc.
          - Currently, communities that require these kinds of files for submissions are forced to rely on external hosting services. Building this feature into lbgg would not only streamline the submission process, but make leaderboards more robust to loss of information when these hosting services change policy or go offline.
          - https://trello.com/c/VkFLBlv6
        </div>
      </div>
      <div :class="{active: isActive}" class="accordion-item" @click="toggleItem">
        <div class="accordion-item__heading">
          Site Mods
        </div>
        <div class="accordion-item__content">
          - (MVP) Some users should be selected as sitewide moderators to resolve issues that cannot be handled within a single community.
          - Why? In cases where ownership/representation of a community is disputed, or an issue affects multiple communities, an impartial authority is needed to hear arguments and make fair decisions. When disputes aren’t handled appropriately, communities often end up fracturing and shrinking.
          - Sitewide moderators would have a lot of power and thus require a commensurate level of accountability.
          - https://trello.com/c/95Dpytt3
        </div>
      </div>
      <div :class="{active: isActive}" class="accordion-item" @click="toggleItem">
        <div class="accordion-item__heading">
          Leaderboard Owners
        </div>
        <div class="accordion-item__content">
          - Leaderboard Owners
          - (MVP) Leaderboard owners must be able to set a category to be sorted by score, or other criteria besides time
          - Why? One major goal of lbgg has been to include both the high-score community and the speedrunning community. Thus, score should be a first-class criterion, alongside time.
          - Ideally, board owners should be able to include and sort-by whatever columns they like in a leaderboard.
          - Sorting ascending or descending should be possible.
          - It should be possible to sort by multiple columns at once, with a defined priority. For example, a low% leaderboard may want to sort by an “Item count” or “Completion Percentage” column as first priority, and then sort by time when multiple runs are tied. A max% board would be the same, except with completion sorted descending instead of ascending.
          - This should be able to be defined both as a default for an entire board, and individually on a per-category basis.
          - https://trello.com/c/ZQcTWh7t
          - (MVP) Leaderboard owners wishing to move to lbgg should be provided tools to import/migrate entire boards/games from other leaderboard sites. This should include both current and obsolete submissions.
          - Why? If the first step of moving to lbgg is painstakingly re-submitting dozens, hundreds, or even thousands of runs, few would go through the effort. The migration process must be as streamlined as possible.
          - This is especially important for importing runs from speedrun.com. Ideally, this should be as easy as a few clicks, with the rest being handled automatically via API.
          - Custom sites (e.g. haloruns.com) could be handled by defining a standard text format for accepting full leaderboard data, which leaderboard owners could then scrape their own site into.
          - https://trello.com/c/Kz30XCNM
          - https://trello.com/c/V3SKkcYx
          - (MVP OR V1) Allow leaderboard owners to organize categories onto separate pages/groups. Instead of predefined Individual Level and Category Extensions boards, board owners would be able to create such pages as needed.
          - Why? The existing board types are restrictive given the massive variety among communities, and don’t cover a lot of use cases. With this feature, boards could start with a “Main Categories” page, and then allow lb owners to add e.g. ILs, Minigames, Memes, Time Trials, Championships, Archived, etc.
          - https://trello.com/c/7klAXLKk
          - Allow leaderboard owners to lock/archive individual categories, blocking further submissions.
          - Why? In some cases, a category may become outdated (e.g. due to a change in timing, patching, rules changes, etc.). If a user doesn’t realize that a category is defunct, they may submit to it. Mods would then have to reject the run, wasting everybody’s time. Locking a category/board would prevent this
          - https://trello.com/c/6KXo1t4n
          - Variables and sub-categories should be able to be assigned to arbitrary sets of categories.
          - Why? On sr.c, currently, variables are assigned to either all categories or just one category. This is needlessly clunky. We can avoid this, making it easier for board owners to configure things.
          - https://trello.com/c/mEUeaaMO
          - Board owners should be able to easily reorder categories/levels via drag-and-drop
          - Why? The order of categories is important to how users navigate a board. Board owners may want to change things for various reasons, such as to highlight more popular categories, which can change over time.
          - https://trello.com/c/WdlbvTKi
        </div>
      </div>
      <div :class="{active: isActive}" class="accordion-item" @click="toggleItem">
        <div class="accordion-item__heading">
          Developers
        </div>
        <div class="accordion-item__content">
          - Developers
          - The site must provide a robust, well-documented API for developers to use when creating software to interact with the site.
          - Why? It’s common for passionate community members to develop all sorts of software to interact with content sites. This may include things like Discord bots to track leaderboard updates, auto-moderator bots, scripts to gather data and provide statistical info, etc.. Good documentation is necessary to encourage this.
        </div>
      </div>
      <div :class="{active: isActive}" class="accordion-item" @click="toggleItem">
        <div class="accordion-item__heading">
          Our Contributors
        </div>
        <div class="accordion-item__content">
          - There should be a “Thanks” section of the site dedicated to thanking contributors to the project.
          - Why? As an open-source project, lbgg owes its existence to contributors. Publicly crediting them is the least we can offer in return.
          - This should include developers, donors, and those who’ve provided feedback and ideas to the site.
          - https://trello.com/c/Pd0NRioC
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionMvp',
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
