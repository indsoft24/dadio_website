<template>
  <div class="app">
    <AppHeader />
    <main class="main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
:root {
  --bg-page: #f8fafc; /* Clean gray/white */
  --bg-card: #ffffff;
  --primary-blue: #00AEEF; /* Dadio logo cyan */
  --accent-blue: #E11D48; /* Red for dating app elements */
  --text-primary: #1e293b;
  --text-muted: #64748b;
  --gradient-brand: linear-gradient(135deg, #E11D48 0%, #FF3B30 100%); /* Vibrant red gradient for CTA */
  --glow-accent: 0 10px 15px -3px rgba(225, 29, 72, 0.3);
  --border-color: #e2e8f0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
  width: 100%;
}

img {
  max-width: 100%;
  height: auto;
}

body {
  font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg-page);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
  width: 100%;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
