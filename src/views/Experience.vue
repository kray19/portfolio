<script setup>
import rocketInterns from '../assets/rocket_interns.png'
import rocketTeam from '../assets/rocket_team.png'
import acxiomInterns from '../assets/acxiom_interns.png'
import atuMoveIn from '../assets/ATU_2025.png'
import rocketSoftwareLogo from '../assets/rocket_software_logo.jfif'
import acxiomLogo from '../assets/acxiom_logo.jfif'
import atuLogo from '../assets/arkansas_tech_university_logo.jfif'

// ── Experience entries ───────────────────────────────────────
const experience = [
  {
    id: 1,
    title: 'Software Engineer I',
    company: 'Rocket Software',
    location: 'Rogers, AR',
    dates: 'Jun 2025 — Jan 2026',
    overview: 'Collaborated on a 6-person agile team delivering features and resolving support tickets for Unified Management Server (UMS), an enterprise data management tool used by Fortune 500 companies. Worked closely with international teams in Japan and India and partnered daily with IBM to diagnose and reproduce customer defects using z/OS and Zowe.',
    bullets: [
      'Delivered 10+ features and bug fixes across the product lifecycle using best practices, design patterns, and peer code review.',
      'Investigated and resolved 15+ customer-reported support tickets, providing fixes, documentation updates, and technical guidance to improve product reliability and satisfaction.',
      'Contributed enhancements to CI/CD automation pipelines supporting automated regression test execution.',
      'Contributed to a documentation revival initiative, rewriting and modernizing outdated customer-facing content to improve clarity, accuracy, and usability.',
      'Represented the engineering team by presenting product functionality and day-to-day development work to an intern class.',   
    ],
    logo: rocketSoftwareLogo, 
    photos: [rocketTeam, rocketInterns]
  },
  {
    id: 2,
    title: 'Solution Developer Intern',
    company: 'Acxiom LLC',
    location: 'Conway, AR',
    dates: 'Dec 2024 — May 2025',
    overview: 'Supported a production support team maintaining client-facing software built for Walmart, where service downtime directly impacted customer access and revenue. Assisted in rapid incident response efforts alongside mentors, helping coordinate communication and resolution across technical and business stakeholders.',
    bullets: [
      'Authored a Root Cause Analysis (RCA) report for a production incident, conducting a thorough investigation and presenting findings through a formal approval chain including senior management.',
      'Supported mentor in managing and resolving support tickets, gaining hands-on exposure to enterprise production environments and incident management workflows.',
      'Utilized Jira for recording, tracking, and swiftly resolving issues and tasks.',
    ],
    logo: acxiomLogo,
    photos: [acxiomInterns],
  },
  {
    id: 3,
    title: 'Data Scientist Intern',
    company: 'Acxiom LLC',
    location: 'Conway, AR',
    dates: 'May 2024 — Dec 2024',
    overview: 'Worked hands-on alongside data scientists to reconcile month-to-month financial services data using Python, Pandas, and PL/SQL for a client-facing financial software platform built for Walmart. Independently developed a data pipeline script while collaborating with mentors on broader analysis and stakeholder coordination.',
    bullets: [
      'Independently automated monthly financial data reconciliation pipeline using Python and Pandas, reducing manual labor by 15% and improving process consistency across large structured dataset.',
      'Identified data anomalies and potential fraud indicators through cross-validation and pattern analysis on financial services records, delivering findings directly to client stakeholders.',
      'Coordinated with external stakeholders to investigate data discrepancies, hypothesize root causes, and recommend corrective actions.',
      'Worked with CSV, Excel, and Visual Basic workflows within a collaborative, mentor-guided team environment.'
    ],
    logo: acxiomLogo,
  },
  {
    id: 4,
    title: 'Data Support',
    company: 'Arkansas Tech University Residence Life',
    location: 'Russellville, AR',
    dates: 'Jan 2023 — Dec 2024',
    overview: 'Served as first point of contact for 2,000+ residents, managing sensitive student and housing records within the university database system with a high level of accuracy and full FERPA compliance.',
    bullets: [
      'Processed housing assignments, billing adjustments, and room changes with zero errors across semester housing transitions for a 2,000+ resident population.',
      'Managed 20+ daily inquiries across front desk, phone, and email channels, providing timely and accurate information regarding housing services and policies.',
      'Trained new staff members on university systems, administrative workflows, and customer service procedures.',
      'Led departmental projects aimed at improving team processes and operational efficiency.',
    ],
    logo: atuLogo,
    photos: [atuMoveIn],
  },
]

</script>

<template>
  <main class="experience">

    <!-- PAGE TITLE -->
    <section class="exp-hero">
      <div class="section-inner">
        <p class="eyebrow">My journey</p>
        <h1 class="exp-hero__heading">Work <em>Experience</em></h1>
      </div>
    </section>

    <!-- EXPERIENCE ENTRIES -->
    <section class="entries">
      <div class="section-inner">
        <article
          v-for="job in experience"
          :key="job.id"
          class="entry"
        >
          <div class="entry__header">
            <div class="entry__meta">
              <h2 class="entry__title">{{ job.title }}</h2>
              <p class="entry__company">{{ job.company }} &mdash; {{ job.location }}</p>
              <p class="entry__dates">{{ job.dates }}</p>
            </div>
            <div class="entry__photo">
              <img
                v-if="job.logo"
                :src="job.logo"
                :alt="job.company"
              />
              <div v-else class="entry__photo-placeholder">
                {{ job.company[0] }}
              </div>
            </div>
          </div>

          <p class="entry__overview">{{ job.overview }}</p>

          <ul class="entry__bullets">
            <li v-for="bullet in job.bullets" :key="bullet">
              {{ bullet }}
            </li>
          </ul>
          <div v-if="job.photos && job.photos.length" class="entry__photos">
            <div
              v-for="(photo, index) in job.photos"
              :key="index"
              class="entry__photo-item"
            >
              <img :src="photo" :alt="`${job.company} photo ${index + 1}`" />
            </div>
          </div>
          <div class="entry__divider"></div>
        </article>
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
  color: var(--stone);
  margin-bottom: 1rem;
}

/* CAROUSEL */
.carousel {
  position: relative;
  width: 100%;
  height: 480px;
  overflow: hidden;
  background: var(--espresso);
}
.carousel__track {
  position: relative;
  width: 100%;
  height: 100%;
}
.carousel__slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.7s ease;
}
.carousel__slide.active { opacity: 1; }
.carousel__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}
.carousel__placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--warm);
}
.carousel__placeholder span {
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--sand);
}
.carousel__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(58, 47, 37, 0.5);
  color: var(--cream);
  border: none;
  padding: 0.75rem 1.1rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
  z-index: 2;
}
.carousel__arrow:hover { background: rgba(58, 47, 37, 0.85); }
.carousel__arrow--prev { left: 1.5rem; }
.carousel__arrow--next { right: 1.5rem; }
.carousel__dots {
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
}
.carousel__dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.4);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.carousel__dot.active {
  background: var(--cream);
  transform: scale(1.3);
}

/* PAGE TITLE */
.exp-hero {
  background: var(--espresso);
  padding: 5rem 0 4rem;
}
.exp-hero__heading {
  font-family: var(--serif);
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 300;
  line-height: 1.1;
  color: var(--cream);
}
.exp-hero__heading em {
  font-style: italic;
  color: var(--accent);
}
.exp-hero .eyebrow { color: var(--sand); }

/* ENTRIES */
.entries {
  background: var(--white);
  padding: 6rem 0;
}
.entry {
  margin-bottom: 4rem;
}
.entry__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 1.5rem;
}
.entry__title {
  font-family: var(--serif);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 400;
  color: var(--espresso);
  margin-bottom: 0.4rem;
}
.entry__company {
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.25rem;
}
.entry__dates {
  font-size: 0.82rem;
  color: var(--stone);
  letter-spacing: 0.05em;
}
.entry__photo {
  flex-shrink: 0;
  width: 80px; height: 80px;
  border-radius: 8px;
  overflow: hidden;
}
.entry__photo img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.3s ease;
}
.entry__photo-placeholder {
  width: 100%; height: 100%;
  background: var(--warm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--serif);
  font-size: 2rem;
  color: var(--sand);
}
.entry__photos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}
.entry__photo-item {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.entry__photo-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}
.entry__photo-item:hover img {
  transform: scale(1.03);
}
.entry__overview {
  color: var(--stone);
  line-height: 1.9;
  margin-bottom: 1.25rem;
  max-width: 740px;
}
.entry__bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-width: 740px;
}
.entry__bullets li {
  font-size: 0.92rem;
  color: var(--stone);
  line-height: 1.7;
  padding-left: 1.25rem;
  position: relative;
}
.entry__bullets li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--accent);
}
.entry__divider {
  margin-top: 3rem;
  height: 1px;
  background: var(--warm);
}
.entry:last-child .entry__divider { display: none; }

/* RESPONSIVE */
@media (max-width: 600px) {
  .carousel { height: 280px; }
  .entry__header { flex-direction: column; }
  .entry__photo { width: 60px; height: 60px; }
}
@media (max-width: 640px) {
  .entry__photo {
    display: none;
  }
}
</style>