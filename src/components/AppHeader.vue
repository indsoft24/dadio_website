<template>
  <header class="header" :class="{ scrolled: scrolled }">
    <div class="header-inner">
      <router-link to="/" class="logo">
        <img src="/logo.png" alt="HeyyPal" class="logo-img" />
      </router-link>
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
  justify-content: flex-start; /* Keep logo to the left, as it was alone now */
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

@media (max-width: 768px) {
  .header {
    padding: 0.8rem 1rem;
    text-align: left; /* Center logo on mobile if it's the only thing? No, user just said header logo only. I'll keep it left and simple. */
  }
}
</style>
