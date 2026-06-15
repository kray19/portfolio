<script setup>
const email = 'krysta.ray18@gmail.com'
const linkedin = 'https://www.linkedin.com/in/krysta-ray'
</script>

<template>
  <main class="contact">

    <!-- HERO -->
    <section class="contact-hero">
      <div class="section-inner">
        <p class="eyebrow">Get in touch</p>
        <h1 class="contact-hero__heading">Let's <em>Chat!</em></h1>
        <p class="contact-hero__sub">
          Whether you have a project in mind, a question, or just want to say hello —
          my inbox is always open.
        </p>
      </div>
    </section>

    <!-- CONTACT DETAILS -->
    <section class="details">
      <div class="section-inner">
        <div class="details__grid">

          <div class="detail-card">
            <div class="detail-card__icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="7" width="20" height="14" rx="2" stroke="#9B6B4A" stroke-width="1.5"/>
                <path d="M4 10l10 7 10-7" stroke="#9B6B4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h2 class="detail-card__label">Email</h2>
            <a :href="`mailto:${email}`" class="detail-card__value">{{ email }}</a>
            <p class="detail-card__note">I typically respond within 1–2 business days.</p>
          </div>

          <div class="detail-card">
            <div class="detail-card__icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="22" height="22" rx="4" stroke="#9B6B4A" stroke-width="1.5"/>
                <line x1="9" y1="12" x2="9" y2="20" stroke="#9B6B4A" stroke-width="1.5" stroke-linecap="round"/>
                <circle cx="9" cy="9" r="1.2" fill="#9B6B4A"/>
                <path d="M13 20v-4.5a2.5 2.5 0 0 1 5 0V20" stroke="#9B6B4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="13" y1="12" x2="13" y2="20" stroke="#9B6B4A" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <h2 class="detail-card__label">LinkedIn</h2>
            <a :href="linkedin" target="_blank" rel="noopener" class="detail-card__value">Connect with me</a>
            <p class="detail-card__note">Let's connect and stay in touch professionally.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- CLOSING NOTE -->
    <section class="closing">
      <div class="section-inner">
        <p class="closing__text">
          Looking forward to hearing from you. <em>Let's make something great together.</em>
        </p>
      </div>
    </section>

  </main>
</template>

<style scoped>
.section-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 2rem;
}
.eyebrow {
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--sand);
  margin-bottom: 1rem;
}

/* HERO */
.contact-hero {
  background: var(--espresso);
  padding: 10rem 0 6rem;
}
.contact-hero__heading {
  font-family: var(--serif);
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 300;
  line-height: 1.05;
  color: var(--cream);
  margin-bottom: 1.5rem;
}
.contact-hero__heading em {
  font-style: italic;
  color: var(--accent);
}
.contact-hero__sub {
  max-width: 520px;
  color: var(--sand);
  font-size: 1rem;
  line-height: 1.8;
}

/* DETAILS */
.details {
  background: var(--white);
  padding: 7rem 0;
}
.details__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
.detail-card {
  border: 1px solid var(--warm);
  padding: 3rem 2.5rem;
  transition: border-color 0.2s, transform 0.2s;
}
.detail-card:hover {
  border-color: var(--sand);
  transform: translateY(-3px);
}
.detail-card__icon {
  margin-bottom: 1.5rem;
}
.detail-card__label {
  font-family: var(--serif);
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--espresso);
  margin-bottom: 0.75rem;
}
.detail-card__value {
  display: block;
  font-size: 0.95rem;
  color: var(--accent);
  letter-spacing: 0.03em;
  margin-bottom: 0.75rem;
  transition: opacity 0.2s;
}
.detail-card__value:hover { opacity: 0.7; }
.detail-card__note {
  font-size: 0.82rem;
  color: var(--stone);
  line-height: 1.7;
}

/* CLOSING */
.closing {
  background: var(--cream);
  padding: 7rem 0;
  text-align: center;
}
.closing__text {
  font-family: var(--serif);
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  font-weight: 300;
  color: var(--espresso);
  line-height: 1.5;
}
.closing__text em {
  font-style: italic;
  color: var(--accent);
}

/* RESPONSIVE */
@media (max-width: 600px) {
  .contact-hero { padding: 8rem 0 4rem; }
  .detail-card { padding: 2rem 1.5rem; }
}
</style>