<template>
  <header class="header" :class="{ scrolled: scrolled }">
    <div class="header-inner">
      <router-link to="/" class="logo">
        <img src="/images/logo.jpeg" alt="Dadio" class="logo-img" />
      </router-link>
      
      <!-- Desktop Navigation -->
      <nav class="desktop-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about-us">About Us</router-link>
        <router-link to="/contact-us">Contact</router-link>
        <a href="https://play.google.com/store/apps/details?id=com.dadio.app" target="_blank" rel="noopener" class="btn btn-sm btn-primary ml-4">
          Download App
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const scrolled = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 1.5rem;
  transition: background 0.3s, box-shadow 0.3s;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
}
.header.scrolled {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid var(--border-color);
}
.header-inner {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  display: block;
  line-height: 0;
}
.logo-img {
  height: 48px;
  width: auto;
  display: block;
  object-fit: contain;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.desktop-nav a {
  color: var(--text-primary);
  font-weight: 500;
  font-size: 1.05rem;
  transition: color 0.2s;
}

.desktop-nav a:hover,
.desktop-nav a.router-link-active {
  color: var(--primary-blue);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
  text-decoration: none;
}
.btn-sm { padding: 0.6rem 1.25rem; font-size: 0.95rem; }
.btn-primary {
  background: var(--gradient-brand);
  color: #fff !important;
  border: none;
  box-shadow: 0 4px 10px rgba(225, 29, 72, 0.2);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(225, 29, 72, 0.3);
}

@media (max-width: 768px) {
  .header {
    padding: 0.8rem 1rem;
  }
  .desktop-nav {
    display: none; /* Hidden on mobile since there is a bottom navigation bar */
  }
}
</style>
