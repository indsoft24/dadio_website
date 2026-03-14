<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <router-link to="/" class="footer-logo">
          <img src="/images/logo.jpeg" alt="Dadio" class="footer-logo-img" />
        </router-link>
        <p class="tagline">Connect with people, instantly.</p>
      </div>
      <div class="footer-nav-section">
        <!-- Desktop Nav (Visible in footer on desktop) -->
        <nav class="footer-nav-desktop">
          <router-link to="/">Home</router-link>
          <router-link to="/about-us">About us</router-link>
          <router-link to="/terms-of-use">Terms of Use</router-link>
          <router-link to="/contact-us">Contact us</router-link>
          <a href="https://play.google.com/store/apps/details?id=com.dadio.app" target="_blank" rel="noopener" class="cta-footer">Download App</a>
        </nav>
      </div>

      <!-- Mobile Bottom Navigation (Professional App View) - Always accessible on mobile -->
      <nav class="mobile-bottom-nav">
        <router-link to="/" class="nav-item">
          <span class="nav-icon">🏠</span>
          <span class="nav-label">Home</span>
        </router-link>
        <router-link to="/about-us" class="nav-item">
          <span class="nav-icon">ℹ️</span>
          <span class="nav-label">About</span>
        </router-link>
        <a href="https://play.google.com/store/apps/details?id=com.dadio.app" target="_blank" rel="noopener" class="nav-item">
          <span class="nav-icon">📲</span>
          <span class="nav-label">Download</span>
        </a>
        <router-link to="/terms-of-use" class="nav-item">
          <span class="nav-icon">📜</span>
          <span class="nav-label">Terms</span>
        </router-link>
      </nav>
    </div>
    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} DTW Squad Pvt. Ltd.</p>
      <div class="social">
        <a href="https://www.facebook.com/dadioapp/" target="_blank" rel="noopener" aria-label="Facebook">Facebook</a>
        <a href="https://twitter.com/dadio" target="_blank" rel="noopener" aria-label="X">X</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: #fff;
  border-top: 1px solid var(--border-color);
  padding: 3.5rem 1.5rem 2rem;
  margin-top: auto;
}
.footer-inner {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
}
.footer-nav-desktop {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}
.footer-nav-desktop a {
  color: var(--text-muted);
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s;
}
.footer-nav-desktop a:hover {
  color: var(--accent-blue);
}
.cta-footer {
  padding: 0.75rem 1.5rem;
  background: var(--gradient-brand);
  color: #fff !important;
  border-radius: 12px;
  font-weight: 600;
  box-shadow: var(--glow-accent);
}

.footer-bottom {
  max-width: 1400px;
  margin: 2.5rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.footer-bottom p { color: var(--text-muted); font-size: 0.95rem; font-weight: 500; }
.social { display: flex; gap: 1.25rem; }
.social a {
  color: var(--text-muted);
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s;
}
.social a:hover { color: var(--accent-blue); }

/* Mobile Bottom Nav Styles */
.mobile-bottom-nav {
  display: none;
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 1.5rem 6.5rem; /* Space for the bottom nav */
  }
  .footer-inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.5rem;
  }
  .footer-nav-desktop {
    display: none;
  }
  .mobile-bottom-nav {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    padding: 0.75rem 0.5rem;
    justify-content: space-around;
    align-items: center;
    z-index: 1000;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.05);
  }
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #64748b;
    gap: 4px;
    flex: 1;
    transition: all 0.2s;
  }
  .nav-item.router-link-active {
    color: var(--accent-blue);
  }
  .nav-icon {
    font-size: 1.5rem;
  }
  .nav-label {
    font-size: 0.75rem;
    font-weight: 600;
  }
  .footer-bottom { 
    flex-direction: column; 
    text-align: center;
  }
}

.footer-logo-img {
  max-width: 150px;
  height: auto;
  object-fit: contain;
}
</style>
