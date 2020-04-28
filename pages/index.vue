<template>
  <div class="text-center">
    <svg id="variable-logo" width="200" height="174" viewbox="0 0 100 88">
      <polygon fill="#464e80" points="0,0 32,0 16,28" />
      <polygon fill="#5b85bf" points="33,1 17,29 49,29" />
      <polygon fill="#464e80" points="17,30 49,30 33,58" />
      <polygon fill="#5b85bf" points="50,31 34,59 66,59" />
      <polygon fill="#464e80" points="34,60 66,60 50,88" />
      <polygon fill="#464e80" points="67,58 51,30 83,30" />
      <polygon fill="#5b85bf" points="67,1 51,29 83,29" />
      <polygon fill="#464e80" points="68,0 100,0 84,28" />
    </svg>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss">
  body {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    font-family: 'Quicksand', sans-serif;
  }

  #title {
    font-size: 70px;
    font-weight: 400;
    margin-top: 0;
  }

  svg#variable-logo {
    polygon {
      transform: rotateX(-180deg) rotateY(-180deg);
      animation-name: rotateTriangle;
      animation-duration: 0.5s;
      transform-style: preserve-3d;
      animation-fill-mode: forwards;
      opacity: 0;
      transition: fill 0.3s;
      &:hover {
        fill: #88b1ea;
      }
      &:nth-child(1) {
        transform: none;
        animation-name: none;
        opacity: 1;
      }
      &:nth-child(2) {
        transform-origin: 24.5px 14.5px;
      }
      &:nth-child(3) {
        animation-delay: 0.25s;
        transform-origin: 33px 29.5px;
      }
      &:nth-child(4) {
        animation-delay: 0.5s;
        transform-origin: 41.5px 44.5px;
      }
      &:nth-child(5) {
        animation-delay: 0.75s;
        transform-origin: 50px 59.5px;
      }
      &:nth-child(6) {
        animation-delay: 1s;
        transform-origin: 58.5px 44.5px;
      }
      &:nth-child(7) {
        animation-delay: 1.25s;
        transform-origin: 67px 29.5px;
      }
      &:nth-child(8) {
        animation-delay: 1.5s;
        transform-origin: 75.5px 14.5px;
      }
    }
  }

  @keyframes rotateTriangle {
    from { transform: rotateX(-180deg) rotateY(-180deg); opacity:1; }
    to { transform: none; opacity:1; }
  }

</style>
