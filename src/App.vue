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
  --bg-page: #fdf2f8; /* Soft pink background */
  --bg-card: #ffffff;
  --primary-blue: #E11D48; /* Rose red */
  --accent-blue: #F43F5E; /* Rose pink */
  --text-primary: #1e1b4b; /* Dark indigo for high contrast text */
  --text-muted: #64748b;
  --gradient-brand: linear-gradient(135deg, #E11D48 0%, #F43F5E 100%);
  --glow-accent: 0 10px 15px -3px rgba(225, 29, 72, 0.2);
  --border-color: #fbcfe8; /* Light pink border */
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
