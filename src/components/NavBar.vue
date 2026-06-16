<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isScrolled = ref(false)
const menuOpen = ref(false)

function onScroll() { isScrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="nav" :class="{ scrolled: isScrolled }">
    <div class="nav__inner">
      <RouterLink to="/" class="nav__logo">Krysta Ray</RouterLink>

      <nav class="nav__links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/experience">Experience</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

      <button class="nav__burger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>

    <nav class="nav__mobile" :class="{ open: menuOpen }">
      <RouterLink to="/" @click="menuOpen = false">Home</RouterLink>
      <RouterLink to="/about" @click="menuOpen = false">About</RouterLink>
      <RouterLink to="/experience" @click="menuOpen = false">Experience</RouterLink>
      <RouterLink to="/projects" @click="menuOpen = false">Projects</RouterLink>
      <RouterLink to="/contact" @click="menuOpen = false">Contact</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  transition: background 0.3s, box-shadow 0.3s;
  background: var(--espresso);
}
.nav__inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 2rem;
  height: var(--nav-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav__logo {
  font-family: var(--serif);
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: var(--cream);
}
.nav__links {
  display: flex;
  gap: 2.5rem;
}
.nav__links a {
  font-size: 0.78rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cream);
  transition: color 0.2s;
}
.nav__links a:hover,
.nav__links a.router-link-active { 
  color: var(--sand); 
  text-decoration: underline;
}
.nav__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.nav__burger span {
  display: block;
  width: 22px; height: 1px;
  background: var(--cream);
}
.nav__mobile {
  display: none;
  flex-direction: column;
  background: var(--white);
  padding: 1rem 2rem 1.5rem;
  gap: 1rem;
}
.nav__mobile a {
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--stone);
}
.nav__mobile.open { display: flex; }

@media (max-width: 640px) {
  .nav__links { display: none; }
  .nav__burger { display: flex; }
}
</style>