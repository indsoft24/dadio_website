<template>
  <header class="header" :class="{ scrolled: scrolled }">
    <div class="header-inner">
      <router-link to="/" class="logo">
        <img src="/logo.png" alt="HeyyPal" class="logo-img" />
      </router-link>
      <button class="nav-toggle" aria-label="Menu" @click="open = !open" :class="{ active: open }">
        <span></span><span></span><span></span>
      </button>
      <div class="nav-overlay" :class="{ active: open }" @click="open = false"></div>
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
  transition: transform 0.3s, opacity 0.3s;
}
.nav-toggle.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-toggle.active span:nth-child(2) { opacity: 0; }
.nav-toggle.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(8px);
  z-index: 90;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.nav-overlay.active {
  opacity: 1;
  pointer-events: auto;
}
@media (max-width: 768px) {
  .nav-toggle { display: flex; z-index: 102; }
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.88);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    gap: 2rem;
    opacity: 0;
    visibility: hidden;
    transform: scale(1.1);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 101;
  }
  .nav.open { 
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }
  .nav a { 
    font-size: 1.5rem;
    color: var(--text-primary);
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s;
    text-align: center;
    padding: 0.5rem 0;
    width: auto;
    border-bottom: none;
  }
  .nav a:hover {
    color: var(--accent-blue);
    transform: scale(1.1);
  }
  .nav .cta-nav { 
    margin-top: 1rem;
    padding: 1rem 2.5rem !important;
    border-radius: 50px;
    font-size: 1.25rem;
    width: auto;
    background: var(--gradient-brand);
    color: #fff !important;
    box-shadow: 0 10px 20px rgba(40, 55, 155, 0.2);
    text-align: center;
  }
}
</style>
