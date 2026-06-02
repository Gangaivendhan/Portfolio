<script setup>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'
import { personal } from '@/data/portfolio.js'

const SERVICE_ID  = 'service_esxubam'
const TEMPLATE_ID = 'template_l2zjx4f'
const PUBLIC_KEY  = 'NKL1b_00c4LC1ap0x'

const form = reactive({ name: '', email: '', subject: '', message: '' })
const sending   = ref(false)
const submitted = ref(false)
const error     = ref('')

function validateEmail(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
}

async function submit() {
  error.value = ''
  if (!form.name || !form.email || !form.message) {
    error.value = 'Please fill in all required fields.'
    return
  }
  if (!validateEmail(form.email)) {
    error.value = 'Please enter a valid email address.'
    return
  }

  sending.value = true
  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name:  form.name,
        from_email: form.email,
        subject:    form.subject || '(No subject)',
        message:    form.message,
      },
      PUBLIC_KEY
    )
    submitted.value = true
  } catch (err) {
    error.value = 'Something went wrong. Please try again or email me directly.'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section id="contact" class="section contact-section">
    <div class="container">

      <!-- CTA heading (matches design) -->
      <div class="contact-cta fade-up">
        <p class="section-label">Get In Touch</p>
        <h2 class="section-title">
          Do you have a question, an idea, or a project you need help with?
          <span class="accent-text"> contact us ↗</span>
        </h2>
      </div>

      <div class="contact-grid">

        <!-- Info -->
        <div class="contact-info fade-up">
          <p class="contact-intro muted-text">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
            Drop a message and I'll get back to you as soon as possible.
          </p>

          <ul class="contact-list">
            <li>
              <div class="contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <span class="contact-key">Email</span>
                <a :href="`mailto:${personal.email}`" class="contact-val">{{ personal.email }}</a>
              </div>
            </li>
            <li>
              <div class="contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 12 19.79 19.79 0 01.46 3.29 2 2 0 012.42 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.46a16 16 0 006.63 6.63l1.21-1.21a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <div>
                <span class="contact-key">Phone</span>
                <a :href="`tel:${personal.phone}`" class="contact-val">{{ personal.phone }}</a>
              </div>
            </li>
            <li>
              <div class="contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <span class="contact-key">Location</span>
                <span class="contact-val">{{ personal.location }}</span>
              </div>
            </li>
          </ul>

          <div class="social-links">
            <a :href="personal.github" target="_blank" rel="noopener" class="social-btn" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a :href="personal.linkedin" target="_blank" rel="noopener" class="social-btn" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>

        <!-- Form -->
        <div class="contact-form-wrap fade-up" style="transition-delay:0.15s">
          <div class="form-card card-glass">
            <Transition name="fade" mode="out-in">
              <!-- Success state -->
              <div v-if="submitted" key="success" class="success-state">
                <div class="success-icon">✅</div>
                <h3>Message Sent!</h3>
                <p class="muted-text">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </div>

              <!-- Form state -->
              <form v-else key="form" @submit.prevent="submit" novalidate>
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label">Name <span class="required">*</span></label>
                    <input v-model="form.name" type="text" class="form-input" placeholder="Your name" required />
                  </div>
                  <div class="form-group">
                    <label class="form-label">Email <span class="required">*</span></label>
                    <input v-model="form.email" type="email" class="form-input" placeholder="your@email.com" required />
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label">Subject</label>
                  <input v-model="form.subject" type="text" class="form-input" placeholder="Project inquiry..." />
                </div>
                <div class="form-group">
                  <label class="form-label">Message <span class="required">*</span></label>
                  <textarea v-model="form.message" class="form-input form-textarea" placeholder="Tell me about your project..." required rows="5" />
                </div>
                <p v-if="error" class="form-error">{{ error }}</p>
                <button type="submit" class="btn-accent submit-btn" :disabled="sending">
                  <span v-if="sending">Sending…</span>
                  <span v-else style="display:inline-flex;align-items:center;gap:0.5rem;">
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </span>
                </button>
              </form>
            </Transition>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact-section { background: var(--bg-secondary); }

.contact-cta {
  text-align: center;
  margin-bottom: 3.5rem;

  .section-title {
    margin-top: 0.5rem;
    max-width: 700px;
    margin-inline: auto;
    line-height: 1.25;
  }
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 860px) { grid-template-columns: 1fr; }
}

.contact-intro {
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.contact-list {
  list-style: none;
  margin: 0 0 2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }
}

.contact-icon {
  width: 40px;
  height: 40px;
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.2);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-light);
  flex-shrink: 0;
}

.contact-key {
  display: block;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  font-weight: 600;
  margin-bottom: 2px;
}
.contact-val {
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--transition);
  &:hover { color: var(--accent-light); }
}

.social-links {
  display: flex;
  gap: 0.75rem;
}
.social-btn {
  width: 44px;
  height: 44px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all var(--transition);

  &:hover {
    border-color: var(--accent-light);
    color: var(--accent-light);
    background: rgba(124, 58, 237, 0.1);
    transform: translateY(-2px);
  }
}

// Form
.form-card { padding: 2rem; }

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 520px) { grid-template-columns: 1fr; }
}

.form-group { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 1rem; }

.form-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.required { color: var(--accent-light); }

.form-input {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.65rem 0.9rem;
  color: var(--text-primary);
  font-size: 0.9rem;
  outline: none;
  transition: border-color var(--transition), box-shadow var(--transition);
  width: 100%;
  font-family: inherit;

  &::placeholder { color: var(--text-muted); }

  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-glow);
  }
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-error {
  color: #f87171;
  font-size: 0.82rem;
  margin-bottom: 0.75rem;
}

.submit-btn {
  width: 100%;
  justify-content: center;
  padding: 0.8rem;
  font-size: 0.95rem;

  &:disabled { opacity: 0.6; cursor: not-allowed; transform: none !important; }
}

// Success
.success-state {
  text-align: center;
  padding: 2rem 1rem;
}
.success-icon { font-size: 3rem; margin-bottom: 1rem; }
h3 { font-size: 1.3rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
