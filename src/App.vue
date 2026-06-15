<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div id="site">
    <NavBar />
    <RouterView />
    <SiteFooter />
  </div>
</template>

<style>
/* ── Global Reset & Variables ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --cream:    #F7F4EF;
  --warm:     #EDE8DF;
  --sand:     #8A7A68;
  --stone:    #5C4F42;
  --espresso: #3A2F25;
  --accent:   #7A4F2F;
  --white:    #FDFCFA;

  --serif: 'Cormorant Garamond', Georgia, serif;
  --sans:  'Jost', system-ui, sans-serif;

  --max-w: 1100px;
  --nav-h: 72px;
}

html { font-size: 16px; scroll-behavior: smooth; }

body {
  background: var(--cream);
  color: var(--espresso);
  font-family: var(--sans);
  font-weight: 300;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

a { color: inherit; text-decoration: none; }
img { display: block; max-width: 100%; }
</style>
