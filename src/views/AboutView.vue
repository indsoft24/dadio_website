<template>
  <div class="page about-page">
    <div class="container">
      <h1 class="page-title">About Dadio</h1>
      <div class="content">
        <p>Dadio is a next-generation platform designed to make dating and finding friends <strong>fun</strong>, <strong>instant</strong>, and <strong>human</strong>. In a world where people often struggle to find genuine connections, Dadio brings users directly together through seamless app-to-app calling so you can vibe before you meet.</p>
        <p>Whether you are looking for romance, trying to make new friends, finding a sidekick, or just wanting people to hang out with, Dadio brings an extensive network of verified members onto a single platform.</p>
        <p>From casual daters, serious relationship seekers, to just individuals looking to make friends across the globe — Dadio makes it easy to connect, talk, and build relationships without the hassle of endless swiping and silent messaging.</p>
        <p class="mission">Our mission is simple: <em>to break barriers in socializing and make meaningful conversations available to everyone, anytime and anywhere.</em></p>
        <p>With Dadio, <strong>your next great connection is just a call away.</strong></p>

        <h2>What Makes Dadio Different</h2>
        <ul class="diff-list">
          <li><strong>Discover Matches</strong> – Find people who share your vibe and interests easily.</li>
          <li><strong>Instant Face & Audio Calling</strong> – Connect directly with your matches in real time.</li>
          <li><strong>Safe & Secure</strong> – Engage with authentic profiles you can trust.</li>
          <li><strong>More Than Dating</strong> – Looking for a buddy? Make friends across the globe effortlessly.</li>
        </ul>
        <p class="belief">At Dadio, we believe that the right conversation at the right moment can spark something beautiful.</p>

        <div class="cta-block">
          <a href="https://play.google.com/store/apps/details?id=com.dadio.app" target="_blank" rel="noopener" class="btn-primary">Download Dadio App</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about-page { padding: 7rem 0 3rem; }
.container { max-width: 900px; margin: 0 auto; padding: 0 1.5rem; }
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
  box-shadow: var(--glow-accent);
}
.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(225, 29, 72, 0.3);
}
</style>
