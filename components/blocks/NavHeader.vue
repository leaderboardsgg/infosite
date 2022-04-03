<template>
  <div ref="nav-header" class="nav-header">
    <div class="nav-container">
      <div ref="nav-overlay" class="nav-overlay open"></div>
      <nav ref="nav-fullscreen" class="nav-fullscreen open">
        <ul>
          <li><a href="https://discord.leaderboards.gg">Discord</a></li>
          <li><a href="https://github.com/leaderboardsgg">Github</a></li>
        </ul>
      </nav>
      <a ref="nav-toggle" class="nav-toggle open" href=""><span></span><span></span><span></span></a>
    </div>
  </div>
</template>

<script>
export default{
  name: 'NavHeader',
}
</script>

<style scoped lang="scss">
.nav-header {
  outline: 1px solid palevioletred;
  display: flex;
  padding: 16px;
  overflow: hidden;
  color: white;

  .nav-container {
    margin-left: auto;
    position: relative;

    .nav-toggle {
      display: block;
      cursor: pointer;
      transform: rotate(0deg);

      span {
        background-color: black;
        width: 100%;
        display: block;
        position: absolute;
        left: 0;
        content: '';
        transform-origin: left center;
        // transition time and time function
        transition: .5s ease-in-out;
      }

      &.open {
        span {
          &:nth-child(1) {
            transform: rotate(45deg);
          }

          &:nth-child(2) {
            width: 0;
            opacity: 0;
          }

          &:nth-child(3) {
            transform: rotate(-45deg);
          }
        }
      }
    }
    .nav-overlay {
      position: absolute;
      z-index: -1;
      background: rgba(0, 0, 0, 0.8);
      border-radius: 50%;
      transition: 1s;
      transform: scale3d(0, 0, 0);
      &.open {
        transform: scale3d(1, 1, 1);
      }
    }
    .nav-fullscreen {
      width: 100%;
      position: fixed;
      left: 0;
      top: 0;

      transition: ease-in-out 0.25s;
      transition-delay: 0s;

      visibility: hidden;
      opacity: 0;

      ul {
        list-style: none;
      }

      a {
        color: white;
        text-decoration: none;
      }
      &.open{
        visibility: visible;
        opacity: 1;
        transition: ease-in-out 0.5s;
        transition-delay: 0.25s;
      }
    }
    .nav-overlay{
      background: linear-gradient(180deg, #FF512F 10%, #FF512F 50%, #DD2476 90%);
    }
    .nav-toggle span {
      background-color: white;
    }
    .nav-fullscreen {
      display: flex;
      align-items: center;
      justify-content: center;

      color: white;
      font-family: sans-serif;
      font-size: 10vh;

      li:hover {
        list-style: disc;
      }
    }
  }
}

</style>
