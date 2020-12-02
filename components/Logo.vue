<template>
  <svg class="logo" width="200" height="174" viewbox="0 0 100 88">
    <polygon fill="#000627" points="0,0 32,0 16,28" />
    <polygon fill="#0a1f3d" points="33,1 17,29 49,29" />
    <polygon fill="#243454" points="17,30 49,30 33,58" />
    <polygon fill="#3c4a6c" points="50,31 34,59 66,59" />
    <polygon fill="#556286" points="34,60 66,60 50,88" />
    <polygon fill="#6e7ba0" points="67,58 51,30 83,30" />
    <polygon fill="#8895bb" points="67,1 51,29 83,29" />
    <polygon fill="#a2afd7" points="68,0 100,0 84,28" />
  </svg>
</template>

<style lang="scss" scoped>
  svg.logo {
    polygon {
      transform: rotateX(-180deg) rotateY(-180deg);
      animation-name: rotateTriangle;
      animation-duration: 0.5s;
      transform-style: preserve-3d;
      animation-fill-mode: forwards;
      opacity: 0;
      transition: fill 0.3s;

      &:hover {
        fill: var(--v-accent-base) !important;
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
    &.logo-primary {
      polygon {
        &:nth-child(1) {
          fill: var(--v-primary-darken2);
        }
        &:nth-child(2) {
          fill: var(--v-primary-darken1);
        }
        &:nth-child(3) {
          fill: var(--v-primary-base);
        }
        &:nth-child(4) {
          fill: var(--v-primary-lighten1);
        }
        &:nth-child(5) {
          fill: var(--v-primary-lighten2);
        }
        &:nth-child(6) {
          fill: var(--v-primary-lighten3);
        }
        &:nth-child(7) {
          fill: var(--v-primary-lighten4);
        }
        &:nth-child(8) {
          fill: var(--v-primary-lighten5);
        }
      }
    }
    &.logo-secondary {
      polygon {
        &:nth-child(1) {
          fill: var(--v-secondary-darken3);
        }
        &:nth-child(2) {
          fill: var(--v-secondary-darken2);
        }
        &:nth-child(3) {
          fill: var(--v-secondary-darken1);
        }
        &:nth-child(4) {
          fill: var(--v-secondary-base);
        }
        &:nth-child(5) {
          fill: var(--v-secondary-lighten1);
        }
        &:nth-child(6) {
          fill: var(--v-secondary-lighten2);
        }
        &:nth-child(7) {
          fill: var(--v-secondary-lighten3);
        }
        &:nth-child(8) {
          fill: var(--v-secondary-lighten4);
        }
      }
    }
    &.logo-accent {
      polygon {
        &:nth-child(1) {
          fill: var(--v-accent-darken4);
        }
        &:nth-child(2) {
          fill: var(--v-accent-darken3);
        }
        &:nth-child(3) {
          fill: var(--v-accent-darken2);
        }
        &:nth-child(4) {
          fill: var(--v-accent-darken1);
        }
        &:nth-child(5) {
          fill: var(--v-accent-base);
        }
        &:nth-child(6) {
          fill: var(--v-accent-lighten1);
        }
        &:nth-child(7) {
          fill: var(--v-accent-lighten2);
        }
        &:nth-child(8) {
          fill: var(--v-accent-lighten3);
        }
      }
    }
  }

  @keyframes rotateTriangle {
    from { transform: rotateX(-180deg) rotateY(-180deg); opacity:1; }
    to { transform: none; opacity:1; }
  }
</style>
