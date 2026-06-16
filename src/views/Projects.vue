<script setup>
import ASSDataPres from 'src/assets/ASSDataPres.jpg'
import collegeMarket from 'src/assets/college_market_group.png'
import housingModel from 'src/assets/heat_map_housing.png'
const projects = [ 
  {
    id: 1,
    title: 'Leveraging Machine Learning to Analyze Socioeconomic Disparities in U.S Cancer Clinical Trials',
    description: 'Conducted independent machine learning research under faculty supervision, earning a research grant and presenting findings at four formal conferences including the Arkansas Academy of Science (2024 & 2025) and IEEE ICHORA 2025 in Turkey. Built and optimized a regression model using Python, Pandas, and Optuna hyperparameter tuning, improving predictive performance by 1 point across large structured datasets.',
    link: 'https://ieeexplore.ieee.org/document/11017141', 
    linkLabel: 'Read the Paper →',
    bg: '#D5C8CE',
    image: ASSDataPres,
  },
  {
    id: 2,
    title: 'College Market',
    description: 'Served as Team Lead and collaborated on a 4-person team to design and build a full-stack marketplace app from scratch, targeting college students and staff to reduce end-of-semester waste from abandoned furniture and electronics. Contributed Vue.js frontend pages and skeletons, developed REST APIs for backend communication, and designed SQLite database tables using C#.',
    link: 'https://orc.library.atu.edu/atu_rs/2025/2025/35/',
    linkLabel: 'View Presentation →',
    bg: '#DDD5C8',
    image: collegeMarket,
  },
  {
    id: 3,
    title: 'Housing Price Prediction Melbourne',
    description: 'Personal data science project exploring house price prediction using Melbourne real estate data. Performed data cleaning, preprocessing, one-hot encoding, and visualization before training and comparing three models - Random Forest, Gradient Boosting, and Ridge Regression - to evaluate predictive performance. Final R2 score of 0.821',
    link: 'https://github.com/kray19/Melboune_Housing_Price',
    linkLabel: 'View Project →',
    bg: '#C8D0D5',
    image: housingModel,
  },
]
</script>

<template>
  <main class="work">

    <!-- HERO -->
    <section class="work-hero">
      <div class="section-inner">
        <p class="eyebrow">My work</p>
        <h1 class="work-hero__heading">Selected <em>Projects</em></h1>
        <p class="work-hero__sub">
          A collection of projects I've worked on — from design to research.
        </p>
      </div>
    </section>

    <!-- PROJECTS -->
    <section class="projects">
      <div class="section-inner">
        <div class="projects__list">
          <article
            v-for="project in projects"
            :key="project.id"
            class="project-card"
          >
            <!-- Text side -->
            <div class="project-card__text">
              <div class="project-card__accent"></div>
              <div class="project-card__body">
                <h2 class="project-card__title">{{ project.title }}</h2>
                <p class="project-card__desc">{{ project.description }}</p>
                <a
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  rel="noopener"
                  class="project-card__link"
                >
                  {{ project.linkLabel }}
                </a>
              </div>
            </div>

            <!-- Image side -->
            <div class="project-card__img" :style="{ background: project.bg }">
              <img v-if="project.image" :src="project.image" :alt="project.title" />
              <span v-else class="project-card__placeholder">{{ project.title[0] }}</span>
            </div>
          </article>
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
.eyebrow {
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--sand);
  margin-bottom: 1rem;
}

/* HERO */
.work-hero {
  background: var(--espresso);
  padding: 10rem 0 6rem;
}
.work-hero__heading {
  font-family: var(--serif);
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 300;
  line-height: 1.05;
  color: var(--cream);
  margin-bottom: 1.5rem;
}
.work-hero__heading em {
  font-style: italic;
  color: var(--accent);
}
.work-hero__sub {
  max-width: 520px;
  color: var(--sand);
  font-size: 1rem;
  line-height: 1.8;
}

/* PROJECTS */
.projects {
  background: var(--cream);
  padding: 7rem 0;
}
.projects__list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* PROJECT CARD */
.project-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 340px;
  background: var(--white);
  overflow: hidden;
  transition: transform 0.25s;
}
.project-card:hover {
  transform: translateY(-4px);
}

/* Text side */
.project-card__text {
  display: flex;
  gap: 0;
}
.project-card__accent {
  width: 5px;
  flex-shrink: 0;
  background: var(--accent);
}
.project-card__body {
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}
.project-card__title {
  font-family: var(--serif);
  font-size: clamp(1.4rem, 2.5vw, 1.9rem);
  font-weight: 400;
  color: var(--espresso);
  line-height: 1.2;
}
.project-card__desc {
  font-size: 0.92rem;
  color: var(--stone);
  line-height: 1.85;
}
.project-card__link {
  display: inline-block;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  transition: opacity 0.2s;
  margin-top: 0.5rem;
}
.project-card__link:hover { opacity: 0.7; }

/* Image side */
.project-card__img {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.project-card__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.project-card__placeholder {
  font-family: var(--serif);
  font-size: 6rem;
  color: rgba(255, 255, 255, 0.35);
  user-select: none;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .project-card {
    grid-template-columns: 1fr;
  }
  .project-card__img {
    min-height: 220px;
  }
}
</style>