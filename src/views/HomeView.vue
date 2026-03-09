<template>
  <div class="home">
    <section class="hero">
      <img :src="heroImageUrl" alt="HeyyPal - All the Experts You Need, All in One Place" class="hero-img" />
    </section>

    <section class="hero-info">
      <div class="container text-center">
        <div class="hero-cta">
          <router-link to="/contact-us" class="btn btn-primary">Join Waitlist</router-link>
          <a href="#how-it-works" class="btn btn-ghost">How it works</a>
        </div>
      </div>
    </section>

    <section class="intro">
      <div class="container text-center">
        <div class="hero-flow-wrap">
          <div class="hero-flow">
            <span class="flow-item"><span class="flow-icon">📱</span> App</span>
            <span class="flow-arrow">→</span>
            <span class="flow-item"><span class="flow-icon">📞</span> Connection</span>
            <span class="flow-arrow">→</span>
            <span class="flow-item"><span class="flow-icon">✓</span> Expert</span>
          </div>
        </div>
        <p class="intro-lead">HeyyPal is a next-generation platform designed to make expert guidance <strong>accessible</strong>, <strong>instant</strong>, and <strong>human</strong>.</p>
        <div class="intro-grid">
          <p class="intro-text">In a world where people often struggle to find the right advice at the right time, HeyyPal connects users directly with trusted professionals through seamless app-to-app calling.</p>
          <p class="intro-text">Whether you need medical guidance, legal advice, financial consultation, emotional support, or life mentorship, HeyyPal brings a wide network of verified experts onto a single platform.</p>
        </div>
        <p class="intro-mission">Our mission is simple: <em>to democratize access to expert knowledge and make meaningful conversations available to everyone, anytime and anywhere.</em></p>
        <p class="intro-cta">With HeyyPal, <strong>help is just a call away.</strong></p>
      </div>
    </section>

    <section class="experts" id="experts">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Meet Our Experts</h2>
          <p class="section-sub">One app, multiple experts. Connect with verified professionals across diverse fields.</p>
        </div>
        <div class="experts-grid">
          <div v-for="(expert, i) in expertImages" :key="i" class="expert-card">
            <div class="expert-img-wrap">
              <img :src="expertImageUrl(expert.file)" :alt="expert.name" loading="lazy" />
            </div>
            <h3 class="expert-name">{{ expert.name }}</h3>
            <p class="expert-tagline">{{ expert.tagline }}</p>
          </div>
        </div>
        <div class="text-center">
          <router-link to="/contact-us" class="btn btn-primary btn-large">Explore All Experts</router-link>
        </div>
      </div>
    </section>

    <section class="different" id="different">
      <div class="container">
        <h2 class="section-title text-center">What Makes HeyyPal Different</h2>
        <div class="different-grid">
          <div class="diff-card">
            <div class="diff-icon">📱</div>
            <h3>One App, Multiple Experts</h3>
            <p>Access professionals from diverse fields in one place.</p>
          </div>
          <div class="diff-card">
            <div class="diff-icon">⚡</div>
            <h3>Instant App-to-App Calling</h3>
            <p>Connect directly with experts in real time.</p>
          </div>
          <div class="diff-card">
            <div class="diff-icon">✓</div>
            <h3>Trusted & Verified Professionals</h3>
            <p>Speak with qualified experts you can rely on.</p>
          </div>
          <div class="diff-card">
            <div class="diff-icon">🔒</div>
            <h3>Private & Convenient</h3>
            <p>Get advice from the comfort of your phone.</p>
          </div>
        </div>
        <p class="different-belief">At HeyyPal, we believe that <strong>the right conversation at the right moment can change lives.</strong></p>
      </div>
    </section>

    <section class="how" id="how-it-works">
      <div class="container">
        <h2 class="section-title text-center">How It Works</h2>
        <div class="steps">
          <div class="step">
            <span class="step-num">1</span>
            <h3>Download HeyyPal</h3>
            <p>Get the app and create your profile.</p>
          </div>
          <div class="step">
            <span class="step-num">2</span>
            <h3>Choose an Expert</h3>
            <p>Browse doctors, lawyers, therapists, mentors and more.</p>
          </div>
          <div class="step">
            <span class="step-num">3</span>
            <h3>Connect Instantly</h3>
            <p>App-to-app audio call — no sharing your number.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2 class="cta-title">Get Access. All the Experts, Right Here.</h2>
        <p class="cta-sub">HeyyPal audio connections. Instant, expert calls. Via app-to-app.</p>
        <router-link to="/contact-us" class="btn btn-primary btn-large btn-glow">Join the Waitlist Now</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { expertImages, expertImageUrl, heroWallpaper } from '../data/experts'

const heroImageUrl = '/images/' + encodeURIComponent(heroWallpaper)
</script>

<style scoped>
.home { padding-top: 80px; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
.text-center { text-align: center; }

.hero {
  position: relative;
  width: 100%;
  aspect-ratio: 1900 / 600;
  max-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}
.hero-img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Shows full image without crop */
}

.hero-info {
  padding: 2rem 0 0.5rem;
  background: #fff;
}

@media (max-width: 768px) {
  .hero {
    aspect-ratio: auto;
    height: auto;
    min-height: 250px;
  }
}

.hero-cta {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  flex-wrap: wrap;
}
.btn {
  display: inline-block;
  padding: 0.9rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.05rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}
.btn-primary {
  background: var(--gradient-brand);
  color: #fff;
  border: none;
  box-shadow: 0 4px 15px rgba(40, 55, 155, 0.2);
}
.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(40, 55, 155, 0.3);
}
.btn-ghost {
  border: 2px solid var(--primary-blue);
  color: var(--primary-blue);
  background: transparent;
}
.btn-ghost:hover { 
  background: rgba(40, 55, 155, 0.05);
  transform: translateY(-3px);
}
.btn-large { padding: 1.1rem 2.5rem; font-size: 1.1rem; }

.hero-flow-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: 0.5rem;
  position: relative;
  z-index: 2;
}
.hero-flow {
  display: inline-flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0.9rem 1.75rem;
  background: var(--bg-page);
  border-radius: 999px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 10px rgba(0,0,0,0.03);
}
.flow-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
}
.flow-icon { font-size: 1.2rem; }
.flow-arrow { color: var(--accent-blue); font-weight: 800; }

.intro { padding: 3.5rem 0; background: #fff; }
.intro-lead { font-size: 1.35rem; margin-bottom: 2rem; color: var(--primary-blue); font-weight: 600; max-width: 850px; margin-inline: auto; }
.intro-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  text-align: left;
}
.intro-text { color: var(--text-muted); font-size: 1.05rem; line-height: 1.7; }
.intro-mission { font-size: 1.15rem; margin: 1.5rem 0; color: var(--accent-blue); font-weight: 500; }
.intro-cta { font-size: 1.25rem; color: var(--text-primary); }

.section-header { text-align: center; margin-bottom: 3rem; }
.section-title {
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--primary-blue);
}
.section-sub { color: var(--text-muted); font-size: 1rem; max-width: 600px; margin: 0 auto; }

.experts { padding: 4rem 0; }
.experts-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}
@media (max-width: 1024px) {
  .experts-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 768px) {
  .experts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .experts-grid {
    grid-template-columns: 1fr;
  }
}
.expert-card {
  text-align: center;
  padding: 1.5rem 1rem;
  border-radius: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.03);
}
.expert-card:hover {
  transform: translateY(-8px);
  border-color: var(--accent-blue);
  box-shadow: 0 15px 30px -5px rgba(0, 159, 227, 0.1);
}
.expert-img-wrap {
  width: 130px;
  height: 130px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #fff;
  box-shadow: 0 0 0 2px var(--border-color);
}
.expert-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.expert-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.35rem; color: var(--primary-blue); }
.expert-tagline { font-size: 0.9rem; color: var(--text-muted); font-weight: 500; }

.different { padding: 4rem 0; background: #fff; }
.different-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
}
.diff-card {
  padding: 2rem;
  border-radius: 24px;
  background: var(--bg-page);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}
.diff-card:hover {
  border-color: var(--accent-blue);
  background: #fff;
  box-shadow: var(--glow-accent);
}
.diff-icon { font-size: 2.25rem; margin-bottom: 1rem; }
.diff-card h3 { font-size: 1.2rem; margin-bottom: 0.5rem; color: var(--primary-blue); }
.diff-card p { font-size: 0.95rem; line-height: 1.6; color: var(--text-muted); }
.different-belief {
  text-align: center;
  font-size: 1.15rem;
  color: var(--text-primary);
  max-width: 650px;
  margin: 0 auto;
  font-weight: 500;
}

.how { padding: 4rem 0; }
.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}
.step {
  text-align: center;
  position: relative;
}
.step-num {
  display: inline-flex;
  width: 54px;
  height: 54px;
  align-items: center;
  justify-content: center;
  background: var(--gradient-brand);
  color: #fff;
  font-weight: 800;
  font-size: 1.35rem;
  border-radius: 16px;
  margin-bottom: 1.25rem;
  box-shadow: 0 4px 10px rgba(40, 55, 155, 0.15);
}
.step h3 { font-size: 1.25rem; margin-bottom: 0.75rem; color: var(--primary-blue); }
.step p { color: var(--text-muted); font-size: 1rem; line-height: 1.6; }

.cta-section {
  padding: 4rem 2rem;
  text-align: center;
  background: var(--primary-blue);
  color: #fff;
  border: none;
}
.cta-title {
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
}
.cta-sub { color: rgba(255,255,255,0.8); font-size: 1.15rem; margin-bottom: 2.5rem; }
.cta-section .btn-primary { background: #fff; color: var(--primary-blue); }
.cta-section .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(255,255,255,0.2); }
</style>

