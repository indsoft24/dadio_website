<template>
  <div class="page contact-page">
    <div class="container">
      <h1 class="page-title">Contact Us</h1>
      <div class="content grid-layout">
        <!-- Form Section -->
        <div class="form-section">
          <p class="section-desc">Have a question or want to get in touch? Send us a message below.</p>
          
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" v-model="formData.name" placeholder="John Doe" required />
            </div>
            
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="formData.email" placeholder="john@example.com" required />
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <select id="subject" v-model="formData.subject" required>
                <option value="" disabled selected>Select an option</option>
                <option value="Waitlist">Join Waitlist</option>
                <option value="Partnership">Partnership</option>
                <option value="General">General Inquiry</option>
                <option value="Support">Support</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="formData.message" rows="5" placeholder="How can we help you?" required></textarea>
            </div>
            
            <button type="submit" class="btn-primary" :disabled="isSubmitting">
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else>Sending...</span>
            </button>
            
            <div v-if="statusMessage" :class="['status-msg', statusType]">
              {{ statusMessage }}
            </div>
          </form>
        </div>

        <!-- Info Section -->
        <div class="info-section">
          <div class="info-card">
            <h3>Our Office</h3>
            <p><strong>DTW Squad Pvt. Ltd.</strong></p>
            <p>Connect with us for partnerships and corporate inquiries.</p>
            
            <div class="info-links">
              <a href="mailto:dtwspvtltd@gmail.com" class="info-link">
                <span class="icon">✉️</span> dtwspvtltd@gmail.com
              </a>
            </div>
          </div>
          
          <div class="info-card secondary">
            <h3>Quick Links</h3>
            <div class="vertical-links">
              <router-link to="/about-us">About Dadio</router-link>
              <router-link to="/terms-of-use">Terms of Use</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const statusMessage = ref('')
const statusType = ref('info')

const handleSubmit = async () => {
  isSubmitting.value = true
  statusMessage.value = ''
  
  try {
    // API Call to Laravel Backend (Production)
    const response = await fetch('https://heyypal.com/api-backend/public/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      statusMessage.value = 'Thank you! Your message has been sent.'
      statusType.value = 'success'
      // Reset form
      Object.keys(formData).forEach(key => formData[key] = '')
    } else {
      statusMessage.value = 'Failed to send. Please try again later.'
      statusType.value = 'error'
    }
  } catch (error) {
    statusMessage.value = 'Connecting to server... (Make sure backend is running)'
    statusType.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-page { padding: 6rem 0 3rem; background: var(--bg-page); }
.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 3rem;
  color: var(--primary-blue);
  text-align: center;
}

.grid-layout {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  align-items: start;
}

@media (max-width: 768px) {
  .grid-layout { grid-template-columns: 1fr; }
}

.section-desc { margin-bottom: 2rem; color: var(--text-muted); font-size: 1.1rem; }

/* Form Styles */
.contact-form {
  background: #fff;
  padding: 2.5rem;
  border-radius: 24px;
  border: 1px solid var(--border-color);
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
}

.form-group { margin-bottom: 1.5rem; }

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--primary-blue);
  font-size: 0.95rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.85rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: var(--bg-page);
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.2s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-blue);
  box-shadow: 0 0 0 3px rgba(0, 159, 227, 0.1);
  background: #fff;
}

.btn-primary {
  width: 100%;
  padding: 1rem;
  background: var(--gradient-brand);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(40, 55, 155, 0.2);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Status Messages */
.status-msg {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
  font-size: 0.95rem;
}
.status-msg.success { background: #e6fffa; color: #2c7a7b; border: 1px solid #b2f5ea; }
.status-msg.error { background: #fff5f5; color: #c53030; border: 1px solid #fed7d7; }

/* Info Cards */
.info-section { display: flex; flex-direction: column; gap: 2rem; }

.info-card {
  padding: 2rem;
  background: #fff;
  border-radius: 24px;
  border: 1px solid var(--border-color);
}

.info-card h3 { font-size: 1.25rem; margin-bottom: 1rem; color: var(--primary-blue); }
.info-card p { color: var(--text-muted); margin-bottom: 0.5rem; line-height: 1.6; }

.info-links { margin-top: 1.5rem; }
.info-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--accent-blue);
  font-weight: 600;
  text-decoration: none;
}
.info-link:hover { text-decoration: underline; }

.vertical-links { display: flex; flex-direction: column; gap: 0.8rem; }
.vertical-links a {
  color: var(--text-muted);
  font-weight: 500;
  transition: color 0.2s;
}
.vertical-links a:hover { color: var(--accent-blue); }
</style>
