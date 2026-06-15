<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const recipe = [
  { amount: '2 cups',    ingredient: 'Software Engineering' },
  { amount: '1 cup',     ingredient: 'Data Analytics & Machine Learning' },
  { amount: 'A handful', ingredient: 'CI/CD Automation & Backend Development' },
  { amount: 'A splash',  ingredient: 'Web Development & Design' },
  { amount: 'A pinch',   ingredient: 'Technical Documentation & Support' },
]

const timeline = [
  {
    year: '2025-2026',
    title: 'Software Engineer I',
    place: 'Rocket Software',
    description: "Collaborated on a 6-person agile team supporting an enterprise data management tool used by Fortune 500 companies. Used IBM mainframe technologies (z/OS, Zowe). Worked alongside international teams in Japan and India to deliver features, resolve customer-reported issues, and maintain CI/CD automation pipelines.",
  },
  {
    year: '2024-2025',
    title: 'Solution Developer Intern',
    place: 'Acxiom LLC',
    description: 'Provided production support on a client software team, troubleshooting issues, partnering with developers on timely software releases, and documenting root cause analyses to support system stability. Tracked and resolved tasks efficiently using Jira while communicating directly with stakeholders.',
  },
  {
    year: '2024',
    title: 'Data Scientist Intern',
    place: 'Acxiom LLC',
    description: 'Collaborated with a data science team to reconcile month-to-month financial services data. Conducted exploratory analysis, identified patterns, and performed cross-validation to diagnose numerical errors, coordinating with external stakeholders to hypothesize and implement solutions.',
  },
  {
    year: '2023-2024',
    title: 'Data Support',
    place: 'Arkansas Tech University Residence Life',
    description: 'Maintained sensitive records for 2,000+ residents with full FERPA compliance, processing housing assignments, billing adjustments, and room changes with zero errors. Managed daily student inquiries, trained new staff, and led departmental projects to improve operational workflows.',
  },
]

const education = [
  {
    year: '2025',
    degree: 'Bachelor of Science',
    school: 'Arkansas Tech University',
    field: 'Computer Science',
  },
  {
    year: '2025',
    degree: 'Associate of Science',
    school: 'Arkansas Tech University',
    field: ' Information Technology',
  },
]

const skillGroups = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'Java', 'C++', 'C# (.NET)', 'SQL'],
  },
  {
    category: 'Web & Frontend',
    items: ['HTML', 'CSS', 'Vue.js/Vuetify', 'Node.js', 'REST APIs', 'React (learning)'],
  },
  {
    category: 'Backend & Data',
    items: ['MySQL', 'IBM Db2', 'SQLite', 'JSON', 'YAML', 'CSV', 'XML', 'Data Pipelines', 'Relational Databases'],
  },
  {
    category: 'DevOps & Engineering',
    items: ['Git', 'Jenkins', 'CI/CD Pipelines', 'Agile/Scrum', 'Jira', 'Automated Testing', 'Code Review', 'AWS', 'Grafana', 'Amazon Athena', 'Amazon S3'],
  },
  {
    category: 'Data Science & ML',
    items: ['Pandas', 'Scikit-learn', 'Optuna', 'Matplotlib', 'Kaggle', 'Regression', 'Decision Trees', 'K-Nearest Neighbors', 'Clustering', 'Gradient Boosting', 'Ridge Regression', 'Hyperparameter Tuning', 'Data Preprocessing', 'EDA'],
  },
  {
    category: 'Software Practices & Soft Skills',
    items: ['Debugging & Root Cause Analysis', 'Technical Documentation', 'Stakeholder Communication', 'Cross-functional Collaboration', 'SDLC', 'Code Review', 'Agile/Scrum'],
  },
]
</script>

<template>
  <main class="about">

    <!-- HERO STRIP -->
    <section class="about-hero">
      <div class="section-inner">
        <p class="eyebrow">About me</p>
        <h1 class="about-hero__heading">Developer. Problem solver.<br /><em>Creative thinker.</em></h1>
      </div>
    </section>

    <!-- BIO -->
    <section class="bio">
      <div class="bio__inner">
        <div class="bio__photo">
          <div class="bio__photo-frame">
            <img src="../assets/krysta_grad.jpg" alt="Krysta" />
          </div>
        </div>
        <div class="bio__text">
          <h2 class="section-title">Hi, I'm Krysta</h2>
          <p>
          Building reliable software, automating workflows, and turning data into actionable insights — 
          that's what drives me. I'm a software engineer with a foundation in enterprise development 
          and a growing passion for data analytics and machine learning. I've contributed to agile 
          teams supporting Fortune 500 systems, worked on backend development, CI/CD automation, 
          and technical documentation, and conducted independent ML research using Python and SQL. 
          </p>
          <p>
          I'm looking for a role in software engineering or data analytics where I can bridge both worlds 
          — whether that's building robust systems, surfacing insights from data, or somewhere in between.
          </p>
        </div>
      </div>
    </section>

    <!-- RECIPE CARD -->
    <section class="recipe-section">
      <div class="section-inner">
        <div class="recipe-card">
          <div class="recipe-card__header">
            <h2 class="recipe-card__title">Recipe for a Well-Rounded Engineer</h2>
            <p class="recipe-card__eyebrow">Serves: Any great team</p>
            <p class="recipe-card__subtitle">Prep time: several years. Worth it.</p>
          </div>

          <div class="recipe-card__divider"></div>

          <ul class="recipe-card__list">
            <li v-for="item in recipe" :key="item.ingredient" class="recipe-card__item">
              <span class="recipe-card__amount">{{ item.amount }}</span>
              <span class="recipe-card__ingredient">{{ item.ingredient }}</span>
            </li>
          </ul>

          <div class="recipe-card__divider"></div>

          <p class="recipe-card__note">
            * The web development & design ingredient is fresher than it looks —
            <em>you're currently tasting it.</em>
          </p>
        </div>
      </div>
    </section>

    <!-- EDUCATION -->
    <section class="education">
      <div class="section-inner">
        <h2 class="section-title">Education</h2>
        <div class="education__grid">
          <div
            v-for="item in education"
            :key="item.degree"
            class="edu-card"
          >
            <span class="edu-card__year">{{ item.year }}</span>
            <h3 class="edu-card__degree">{{ item.degree }}</h3>
            <p class="edu-card__school">{{ item.school }}</p>
            <p class="edu-card__field">{{ item.field }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TIMELINE -->
    <section class="timeline-section">
      <div class="section-inner">
        <h2 class="section-title">Experience</h2>
        <div class="timeline">
          <div
            v-for="item in timeline"
            :key="item.year + item.title"
            class="timeline__item"
            @click="router.push('/experience')"
          >
            <div class="timeline__year">{{ item.year }}</div>
            <div class="timeline__dot"></div>
            <div class="timeline__content">
              <h3 class="timeline__title">{{ item.title }}</h3>
              <p class="timeline__place">{{ item.place }}</p>
              <p class="timeline__desc">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="timeline__footer">
        <RouterLink to="/experience" class="btn">View Full Experience</RouterLink>
      </div>
    </section>


    <!-- SKILLS -->
    <section class="skills-section">
      <div class="section-inner">
        <h2 class="section-title">Skills</h2>
        <div class="skills__groups">
          <div
            v-for="group in skillGroups"
            :key="group.category"
            class="skill-group"
          >
            <h3 class="skill-group__title">{{ group.category }}</h3>
            <div class="skill-group__items">
              <span
                v-for="item in group.items"
                :key="item"
                class="skill-tag"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
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
  margin-bottom: 2rem;
}
.section-title.centered { text-align: center; }
.eyebrow {
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--stone);
  margin-bottom: 1rem;
}

/* HERO STRIP */
.about-hero {
  background: var(--espresso);
  padding: 10rem 0 6rem;
}
.about-hero__heading {
  font-family: var(--serif);
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 300;
  line-height: 1.1;
  color: var(--cream);
}
.about-hero__heading em {
  font-style: italic;
  color: var(--accent);
}
.about-hero .eyebrow { color: var(--sand); }

/* BIO */
.bio {
  background: var(--cream);
  padding: 6rem 0;
}
.bio__inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 5rem;
  align-items: center;
}
.bio__photo-frame {
  width: 100%;
  padding-bottom: 125%;
  background: var(--warm);
  position: relative;
  overflow: hidden;
}
.bio__photo-frame img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}
.placeholder-text {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--sand);
}
.bio__text p {
  color: var(--stone);
  line-height: 1.9;
  margin-bottom: 1.2rem;
}

/* RECIPE CARD */
.recipe-section {
  background: var(--white);
  padding: 3rem 0;
}
.recipe-card {
  max-width: 750px;
  margin: 0 auto;
  background: var(--cream);
  border: 1px solid var(--sand);
  padding: 2.5rem;
  position: relative;
  font-family: 'Caveat', cursive;
}
.recipe-card::before {
  content: '';
  position: absolute;
  inset: 6px;
  border: 1px dashed var(--sand);
  pointer-events: none;
}
.recipe-card__eyebrow {
  font-size: 1rem;
  color: var(--stone);
  margin-bottom: 0.5rem;
}
.recipe-card__title {
  font-family: 'Caveat', cursive;
  font-size: 2rem;
  font-weight: 600;
  color: var(--espresso);
  line-height: 1.2;
  margin-bottom: 0.5rem;
}
.recipe-card__subtitle {
  font-size: 1rem;
  color: var(--stone);
  font-style: italic;
}
.recipe-card__divider {
  height: 1px;
  background: var(--sand);
  margin: 1.5rem 0;
}
.recipe-card__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}
.recipe-card__item {
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: 1rem;
  align-items: baseline;
}
.recipe-card__amount {
  font-size: 1.05rem;
  color: var(--accent);
  font-weight: 600;
}
.recipe-card__ingredient {
  font-size: 1.15rem;
  color: var(--espresso);
}
.recipe-card__note {
  font-size: 1rem;
  color: var(--stone);
  line-height: 1.7;
}
.recipe-card__note em {
  color: var(--accent);
}

/* EDUCATION */
.education {
  background: var(--cream);
  padding: 6rem 0;
}
.education__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}
.edu-card {
  border: 1px solid var(--stone);
  padding: 2rem;
  transition: border-color 0.2s, transform 0.2s;
}
.edu-card:hover {
  border-color: var(--sand);
  transform: translateY(-3px);
}
.edu-card__year {
  display: block;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.75rem;
}
.edu-card__degree {
  font-family: var(--serif);
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--espresso);
  margin-bottom: 0.3rem;
}
.edu-card__school {
  font-size: 0.9rem;
  color: var(--stone);
  margin-bottom: 0.2rem;
}
.edu-card__field {
  font-size: 0.8rem;
  color: var(--sand);
  letter-spacing: 0.06em;
}

/* TIMELINE */
.timeline-section {
  background: var(--white);
  padding: 6rem 0;
}
.timeline {
  position: relative;
  padding-left: 2rem;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 7rem;
  top: 0; bottom: 0;
  width: 1px;
  background: var(--sand);
}
.timeline__item {
  display: grid;
  grid-template-columns: 4rem 1.5rem 1fr;
  gap: 0 1.5rem;
  margin-bottom: 3rem;
  align-items: start;
  cursor: pointer;
}
.timeline__item:hover .timeline__title {
  color: var(--accent);
  transition: color 0.2s;
}
.timeline__footer {
  margin-top: 3rem;
  text-align: center;
}
.btn {
  display: inline-block;
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
.timeline__year {
  font-family: var(--serif);
  font-size: 1rem;
  color: var(--accent);
  padding-top: 0.2rem;
  text-align: right;
}
.timeline__dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--cream);
  outline: 1px solid var(--accent);
  margin-top: 0.35rem;
  justify-self: center;
}
.timeline__title {
  font-family: var(--serif);
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--espresso);
  margin-bottom: 0.2rem;
}
.timeline__place {
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.5rem;
}
.timeline__desc {
  font-size: 0.9rem;
  color: var(--stone);
  line-height: 1.75;
}


/* SKILLS */
.skills-section {
  background: var(--cream);
  padding: 6rem 0;
}
.skills__groups {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-top: 2.5rem;
}
.skill-group {
  background: var(--white);
  border: 1px solid var(--warm);
  padding: 2rem;
  transition: border-color 0.2s;
}
.skill-group:hover {
  border-color: var(--sand);
}
.skill-group__title {
  font-family: var(--serif);
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--espresso);
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--warm);
}
.skill-group__items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.skill-tag {
  display: inline-block;
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
  background: var(--cream);
  border: 1px solid var(--sand);
  font-size: 0.78rem;
  color: var(--stone);
  letter-spacing: 0.04em;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .bio__inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .bio__photo { max-width: 360px; margin: 0 auto; }
}
@media (max-width: 600px) {
  .timeline::before { left: 4.5rem; }
}
@media (max-width: 768px) {
  .skills__groups { grid-template-columns: 1fr; }
}
</style>