<script setup>
const stats = [
  { value: '3+',  label: 'Years experience' },
  { value: '50+', label: 'Clients Supported' },
  { value: '15+', label: 'Dev Projects Completed' },
]

const skills = [
  {
    title: 'Software Engineering',
    description: 'Full stack development experience spanning enterprise systems, REST APIs, CI/CD pipelines, and agile team collaboration — building software that is reliable, scalable, and maintainable.',
  },
  {
    title: 'Data Analytics & Machine Learning',
    description: 'Hands-on experience with data preprocessing, visualization, and predictive modeling using Python, Pandas, and SQL — turning messy data into clear, actionable insights.',
  },
  {
    title: 'Problem Solving & Technical Communication',
    description: 'Skilled at diagnosing complex issues, documenting findings, and communicating technical concepts clearly — whether writing an RCA, presenting research, or collaborating across teams.',
  },
]

const projects = [
  {
    title: 'Leveraging Machine Learning to Analyze Socioeconomic Disparities in U.S Cancer Clinical Trials',
    category: 'Academic Research',
    description: 'ML research meets social impact — exploring inequity in cancer clinical trials through data.',
    bg: '#DDD5C8',
  },
  {
    title: 'College Market',
    category: 'Full Stack Development',
    description: 'A full-stack marketplace built to solve a real campus problem, from idea to working app.',
    bg: '#C8D0D5',
  },
  {
    title: 'Housing Price Prediction Melbourne',
    category: 'Machine Learning',
    description: 'A personal deep dive into predictive modeling — three models, one dataset, lots of insight.',
    bg: '#D5C8CE',
  },
]
</script>

<template>
  <main class="home">

    <!-- HERO -->
    <section class="hero">
      <div class="hero__content">
        <p class="hero__eyebrow">Software Engineering &amp; Data</p>
        <h1 class="hero__name">Krysta<br /><em>Ray</em></h1>
        <p class="hero__tagline">
          Software Engineer | Data Analytics & <br />
          Machine Learning
        </p>
        <RouterLink to="/projects" class="btn">View My Work</RouterLink>
      </div>

      <div class="hero__portrait">
        <div class="hero__portrait-frame">
          <div class="hero__portrait-img">
            <img src="../assets/Krysta_headshot.png" alt="Krysta" />
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="about-strip">
      <div class="about-strip__inner">
        <div class="about-strip__text">
          <h2 class="section-title">A little about me</h2>
          <p>
            Building reliable software, automating workflows, and turning data into actionable insights — 
            that's what drives me. I'm a software engineer based in Arkansas with over 3 years experience in
            software development, solving complex problems, and reporting actionable insights.
            I'm passionate about creating solutions that are both 
            technically effective and meaningful to the people using them.
          </p>
          <RouterLink to="/about" class="link-arrow">Read more →</RouterLink>
        </div>
        <div class="about-strip__stats">
          <div v-for="stat in stats" :key="stat.label" class="stat-card">
            <span class="stat-card__num">{{ stat.value }}</span>
            <span class="stat-card__label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="skills">
      <div class="section-inner">
        <h2 class="section-title centered">What I do</h2>
        <div class="skills__grid">
          <div v-for="skill in skills" :key="skill.title" class="skill-card">
            <h3 class="skill-card__title">{{ skill.title }}</h3>
            <p class="skill-card__desc">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- WORK -->
    <section class="work">
      <div class="section-inner">
        <div class="section-header">
          <h2 class="section-title">Selected work</h2>
          <RouterLink to="/projects" class="link-arrow">All projects →</RouterLink>
        </div>
        <div class="work__grid">
          <article v-for="project in projects" :key="project.title" class="project-card">
            <div class="project-card__img" :style="{ background: project.bg }">
              <span class="project-card__placeholder">{{ project.title[0] }}</span>
            </div>
            <div class="project-card__body">
              <span class="project-card__tag">{{ project.category }}</span>
              <h3 class="project-card__title">{{ project.title }}</h3>
              <p class="project-card__desc">{{ project.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- TESTIMONIAL -->
    <section class="testimonial">
      <div class="section-inner">
        <blockquote class="quote">
          <p class="quote__text">
            "I had the pleasure of working with Krysta at Rocket Software. She is a skilled Java programmer with good fundamentals, attention to detail, and coding practices.
             I watched her quickly grasp new subjects and tackle interesting problems. She had direct interaction with customers via technical working sessions and has shown great communication 
             and excellent problem solving skills. She will be an asset to any team and I highly recommend her."
          </p>
          <footer class="quote__author">
            <strong>Jordan Filteau</strong> — Software Engineer, Rocket Software
          </footer>
        </blockquote>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="cta__inner">
        <h2 class="cta__heading">Let's work together!</h2>
        <RouterLink to="/contact" class="btn btn--outline">Get in touch</RouterLink>
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
.section-title {
  font-family: var(--serif);
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 400;
  line-height: 1.15;
  color: var(--espresso);
  margin-bottom: 1.5rem;
}
.section-title.centered { text-align: center; }
.section-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.link-arrow {
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  transition: opacity 0.2s;
}
.link-arrow:hover { opacity: 0.7; }
.btn {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 2.2rem;
  font-size: 0.78rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: var(--espresso);
  color: var(--cream);
  border: 1px solid var(--espresso);
  transition: background 0.25s, color 0.25s;
}
.btn:hover { background: transparent; color: var(--espresso); }
.btn--outline {
  background: transparent;
  color: var(--white);
  border-color: var(--white);
}
.btn--outline:hover { background: var(--white); color: var(--espresso); }

/* HERO */
.hero {
  min-height: 100vh;
  padding-top: var(--nav-h);
  max-width: var(--max-w);
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
}
.hero__eyebrow {
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--stone);
  margin-bottom: 1.2rem;
}
.hero__name {
  font-family: var(--serif);
  font-size: clamp(4rem, 9vw, 7.5rem);
  font-weight: 300;
  line-height: 0.95;
  color: var(--espresso);
}
.hero__name em {
  font-style: italic;
  color: var(--accent);
}
.hero__tagline {
  margin-top: 1.8rem;
  font-size: 1rem;
  color: var(--stone);
  line-height: 1.8;
}
.hero__portrait-frame {
  width: 100%;
  padding-bottom: 120%;
  background: var(--warm);
  position: relative;
  overflow: hidden;
}
.hero__portrait-frame img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}
.hero__portrait-img {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.portrait-placeholder {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--sand);
}

/* ABOUT */
.about-strip {
  background: var(--white);
  padding: 6rem 0;
}
.about-strip__inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 5rem;
  align-items: center;
}
.about-strip__text p {
  color: var(--stone);
  margin-bottom: 1.5rem;
  line-height: 1.9;
}
.about-strip__stats {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.stat-card {
  border-left: 1px solid var(--sand);
  padding-left: 1.5rem;
}
.stat-card__num {
  display: block;
  font-family: var(--serif);
  font-size: 2.8rem;
  font-weight: 300;
  color: var(--accent);
  line-height: 1;
}
.stat-card__label {
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--stone);
}

/* SKILLS */
.skills {
  padding: 6rem 0;
  background: var(--cream);
}
.skills__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}
.skill-card {
  background: var(--white);
  padding: 2.5rem 2rem;
  border: 1px solid var(--warm);
  transition: border-color 0.2s, transform 0.2s;
}
.skill-card:hover {
  border-color: var(--sand);
  transform: translateY(-3px);
}
.skill-card__title {
  font-family: var(--serif);
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--espresso);
  margin-bottom: 0.75rem;
}
.skill-card__desc {
  font-size: 0.9rem;
  color: var(--stone);
  line-height: 1.75;
}

/* WORK */
.work {
  padding: 6rem 0;
  background: var(--white);
}
.work__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.project-card { cursor: pointer; }
.project-card__img {
  width: 100%;
  padding-bottom: 70%;
  position: relative;
  overflow: hidden;
  transition: opacity 0.2s;
}
.project-card:hover .project-card__img { opacity: 0.85; }
.project-card__placeholder {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--serif);
  font-size: 4rem;
  color: rgba(255,255,255,0.4);
  user-select: none;
}
.project-card__body { padding: 1.2rem 0 0; }
.project-card__tag {
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
}
.project-card__title {
  font-family: var(--serif);
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--espresso);
  margin: 0.4rem 0 0.5rem;
}
.project-card__desc {
  font-size: 0.87rem;
  color: var(--stone);
  line-height: 1.7;
}

/* TESTIMONIAL */
.testimonial {
  padding: 6rem 0;
  background: var(--warm);
}
.quote {
  max-width: 740px;
  margin: 0 auto;
  text-align: center;
}
.quote__text {
  font-family: var(--serif);
  font-size: clamp(1.3rem, 3vw, 1.9rem);
  font-weight: 300;
  font-style: italic;
  color: var(--espresso);
  line-height: 1.55;
  margin-bottom: 1.5rem;
}
.quote__author {
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  color: var(--stone);
  text-transform: uppercase;
}
.quote__author strong {
  font-weight: 500;
  color: var(--espresso);
}

/* CTA */
.cta {
  background: var(--espresso);
  padding: 7rem 0;
  text-align: center;
}
.cta__inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 2rem;
}
.cta__heading {
  font-family: var(--serif);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 300;
  color: var(--cream);
  margin-bottom: 1rem;
}
.cta__sub {
  color: var(--sand);
  margin-bottom: 1.5rem;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-top: calc(var(--nav-h) + 2rem);
  }
  .hero__portrait { max-width: 360px; margin: 0 auto; }
  .hero__content { text-align: center; }
  .about-strip__inner { grid-template-columns: 1fr; gap: 3rem; }
  .skills__grid, .work__grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .skills__grid, .work__grid { grid-template-columns: 1fr; }
}
</style>