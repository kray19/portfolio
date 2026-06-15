<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <p class="footer__name">Krysta Ray</p>
      <div class="footer__links">
        <a href="https://www.linkedin.com/in/krysta-ray" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://github.com/kray19" target="_blank" rel="noopener">Github</a>
        <a href="mailto:krysta.ray18@gmal.com">Email</a>
      </div>
      <p class="footer__copy">© {{ year }} Krysta Ray. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--espresso);
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 2.5rem 0;
}
.footer__inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}
.footer__name {
  font-family: var(--serif);
  font-size: 1.1rem;
  color: var(--cream);
}
.footer__links {
  display: flex;
  gap: 2rem;
}
.footer__links a {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--warm);
  transition: color 0.2s;
}
.footer__links a:hover { color: var(--white); }
.footer__copy {
  font-size: 0.75rem;
  color: var(--warm);
}
</style>