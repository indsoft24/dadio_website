<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <router-link to="/" class="footer-logo">
          <img src="/logo.png" alt="HeyyPal" class="footer-logo-img" />
        </router-link>
        <p class="tagline">The audio social network. Connect with experts, instantly.</p>
      </div>
      <div class="footer-links">
        <div class="col">
          <h4>Company</h4>
          <router-link to="/about-us">About us</router-link>
          <router-link to="/contact-us">Contact us</router-link>
        </div>
        <div class="col">
          <h4>Legal</h4>
          <router-link to="/terms-of-use">Terms of Use</router-link>
          <router-link to="/contact-us">Privacy & contact</router-link>
        </div>
      </div>
      <div class="footer-cta">
        <router-link to="/contact-us" class="btn-join">Join Waitlist</router-link>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} DTW Squad Pvt. Ltd.</p>
      <div class="social">
        <a href="https://facebook.com/heyypal" target="_blank" rel="noopener" aria-label="Facebook">Facebook</a>
        <a href="https://twitter.com/heyypal" target="_blank" rel="noopener" aria-label="X">X</a>
        <a href="https://instagram.com/heyypal" target="_blank" rel="noopener" aria-label="Instagram">Instagram</a>
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
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 4rem;
  align-items: start;
}
.footer-logo {
  display: block;
  line-height: 0;
}
.footer-logo-img {
  height: 48px;
  width: auto;
  object-fit: contain;
}
.tagline {
  color: var(--text-muted);
  font-size: 1rem;
  margin-top: 1rem;
  max-width: 320px;
  font-weight: 500;
}
.footer-links { display: flex; gap: 4rem; }
.footer-links h4 {
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--primary-blue);
  margin-bottom: 1.25rem;
}
.footer-links .col {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.footer-links a {
  color: var(--text-muted);
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s;
}
.footer-links a:hover { color: var(--accent-blue); }
.btn-join {
  display: inline-block;
  padding: 0.85rem 1.75rem;
  background: var(--gradient-brand);
  color: #fff;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(40, 55, 155, 0.15);
}
.btn-join:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(40, 55, 155, 0.25);
}
.footer-bottom {
  max-width: 1200px;
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
@media (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
  .footer-brand { display: flex; flex-direction: column; align-items: center; }
  .tagline { max-width: none; }
  .footer-links { justify-content: center; gap: 3rem; }
  .footer-bottom { flex-direction: column; text-align: center; }
}
</style>
