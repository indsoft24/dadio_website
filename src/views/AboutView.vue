<template>
  <div class="page about-page">
    <div class="container">
      <h1 class="page-title">About HeyyPal</h1>
      <div class="content">
        <p>HeyyPal is a next-generation platform designed to make expert guidance <strong>accessible</strong>, <strong>instant</strong>, and <strong>human</strong>. In a world where people often struggle to find the right advice at the right time, HeyyPal connects users directly with trusted professionals through seamless app-to-app calling.</p>
        <p>Whether you need medical guidance, legal advice, financial consultation, emotional support, or life mentorship, HeyyPal brings a wide network of verified experts onto a single platform.</p>
        <p>From doctors, lawyers, chartered accountants, astrologers, and nutritionists to clinical psychologists, therapists, and mentors — HeyyPal makes it easy to connect, talk, and get the guidance you need without the hassle of searching, scheduling long appointments, or visiting multiple platforms.</p>
        <p class="mission">Our mission is simple: <em>to democratize access to expert knowledge and make meaningful conversations available to everyone, anytime and anywhere.</em></p>
        <p>With HeyyPal, <strong>help is just a call away.</strong></p>

        <h2>What Makes HeyyPal Different</h2>
        <ul class="diff-list">
          <li><strong>One App, Multiple Experts</strong> – Access professionals from diverse fields in one place.</li>
          <li><strong>Instant App-to-App Calling</strong> – Connect directly with experts in real time.</li>
          <li><strong>Trusted & Verified Professionals</strong> – Speak with qualified experts you can rely on.</li>
          <li><strong>Private & Convenient</strong> – Get advice from the comfort of your phone.</li>
        </ul>
        <p class="belief">At HeyyPal, we believe that the right conversation at the right moment can change lives.</p>

        <div class="cta-block">
          <router-link to="/contact-us" class="btn-primary">Join Waitlist</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about-page { padding: 7rem 0 3rem; }
.container { max-width: 800px; margin: 0 auto; padding: 0 1.5rem; }
.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: var(--primary-blue);
}
.content p { margin-bottom: 1.5rem; color: var(--text-muted); line-height: 1.8; font-size: 1.1rem; }
.content .mission { color: var(--accent-blue); font-size: 1.25rem; font-weight: 500; }
.content h2 {
  font-size: 1.75rem;
  margin: 3rem 0 1.5rem;
  color: var(--primary-blue);
  font-weight: 700;
}
.diff-list {
  list-style: none;
  margin-bottom: 2rem;
}
.diff-list li {
  padding: 0.75rem 0;
  padding-left: 2rem;
  position: relative;
  color: var(--text-muted);
  font-size: 1.1rem;
}
.diff-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-blue);
  font-weight: 900;
}
.belief { font-style: italic; color: var(--text-primary); font-size: 1.2rem; font-weight: 500; text-align: center; margin-top: 3rem; }
.cta-block { margin-top: 3rem; text-align: center; }
.btn-primary {
  display: inline-block;
  padding: 1rem 2rem;
  background: var(--gradient-brand);
  color: #fff;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(40, 55, 155, 0.15);
}
.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(40, 55, 155, 0.25);
}
</style>
