<template>
  <RouterLink to="/">
    Home
  </RouterLink>
  <RouterLink to="/about-us">
    AboutUs
  </RouterLink>
  <RouterView />
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  transition: filter 300ms;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
