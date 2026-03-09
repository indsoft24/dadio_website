<template>
  <header class="header" :class="{ scrolled: scrolled }">
    <div class="header-inner">
      <router-link to="/" class="logo">
        <img src="/logo.png" alt="HeyyPal - the audio social network" class="logo-img" />
      </router-link>
      <button class="nav-toggle" aria-label="Menu" @click="open = !open">
        <span></span><span></span><span></span>
      </button>
      <nav class="nav" :class="{ open }">
        <router-link to="/" @click="open = false">Home</router-link>
        <router-link to="/about-us" @click="open = false">About us</router-link>
        <router-link to="/terms-of-use" @click="open = false">Terms of Use</router-link>
        <router-link to="/contact-us" @click="open = false">Contact us</router-link>
        <router-link to="/contact-us" @click="open = false" class="cta-nav">Register Now</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const scrolled = ref(false)
const open = ref(false)
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
  max-width: 1200px;
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
  height: 42px;
  width: auto;
  display: block;
  object-fit: contain;
}
.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.nav a {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
  transition: color 0.2s;
}
.nav a:hover,
.nav a.router-link-active {
  color: var(--accent-blue);
}
.cta-nav {
  padding: 0.6rem 1.25rem;
  background: var(--gradient-brand);
  border-radius: 12px;
  color: #fff !important;
  box-shadow: 0 4px 10px rgba(40, 55, 155, 0.15);
}
.cta-nav:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(40, 55, 155, 0.25);
}
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 4px;
}
.nav-toggle span {
  width: 24px;
  height: 2px;
  background: currentColor;
  border-radius: 1px;
}
@media (max-width: 768px) {
  .nav-toggle { display: flex; }
  .nav {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 280px;
    background: #fff;
    flex-direction: column;
    padding: 6rem 2rem 2rem;
    gap: 1.5rem;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: -15px 0 40px rgba(0,0,0,0.1);
  }
  .nav.open { transform: translateX(0); }
  .nav a { font-size: 1.2rem; }
}
</style>
