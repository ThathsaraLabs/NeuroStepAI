/* NeuroStep AI - Contact & Demo Request Form Handler */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById('neurostep-contact-form');
  const successBox = document.getElementById('contact-success-state');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple Form Validation
    const name = document.getElementById('input-name');
    const email = document.getElementById('input-email');
    const message = document.getElementById('input-message');

    let isValid = true;

    if (!name || !name.value.trim()) {
      highlightError(name);
      isValid = false;
    } else {
      clearError(name);
    }

    if (!email || !email.value.trim() || !validateEmail(email.value)) {
      highlightError(email);
      isValid = false;
    } else {
      clearError(email);
    }

    if (!message || !message.value.trim()) {
      highlightError(message);
      isValid = false;
    } else {
      clearError(message);
    }

    if (isValid) {
      // Simulate submission without full page reload
      form.classList.add('hidden');
      if (successBox) {
        successBox.classList.remove('hidden');
        successBox.classList.add('flex', 'flex-col', 'items-center');
      }
    }
  });
}

function highlightError(el) {
  if (!el) return;
  el.classList.add('border-red-500', 'bg-red-50');
  el.classList.remove('border-slate-200');
}

function clearError(el) {
  if (!el) return;
  el.classList.remove('border-red-500', 'bg-red-50');
  el.classList.add('border-slate-200');
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
