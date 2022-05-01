<template>
  <div class="cta-links">
    <div class="link">
      <h3>The best place to find and talk to us.</h3>
      <a class="button" href="https://discord.leaderboards.gg">Discord</a>
    </div>
    <div class="link">
      <h3>Our code.</h3>
      <a class="button button--secondary" href="https://github.com/leaderboardsgg">Github</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CtaLinks'
}
</script>

<style lang="scss" scoped>
.cta-links {
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  .link{
    h3{
      width: 170px;
      text-align: center;
    }
    margin-top: 1rem;
    margin-left: 15px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    height: 80px;
    & .button {
      display: inline-flex;
      padding: 2rem 10rem;
      margin-top: 2rem;
      transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
      transition-duration: 500ms;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      color: #ffffff;
      font-size: 1.5rem;
      line-height: 1.5rem;
      letter-spacing: 1px;
      font-weight: 600;
      text-transform: uppercase;
      align-items: center;
      border-width: 1px;
      border-color: #ffffff;
      border-style: solid;


      @media (min-width: 768px) {
        margin-bottom: 0.5rem;

      }
      @media (min-width: 1024px) {
        margin-bottom: 0;
      }
    }
  }
}


</style>
