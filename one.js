// Smooth scrolling for nav links
const navLinks = document.querySelectorAll('.navbar ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');

    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: 'smooth'
    });
  });
});
// Login Modal Script
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.modal .close');
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

// Open modal
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loginModal.style.display = 'block';
});

// Close modal
closeBtn.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Close if clicking outside modal
window.addEventListener('click', (e) => {
  if(e.target == loginModal){
    loginModal.style.display = 'none';
  }
});

// Handle login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple demo authentication
  if(username === 'admin' && password === 'admin123'){
    loginMessage.style.color = 'green';
    loginMessage.textContent = 'Login successful!';
    setTimeout(() => { loginModal.style.display = 'none'; loginMessage.textContent=''; }, 1000);
  } else {
    loginMessage.style.color = 'red';
    loginMessage.textContent = 'Invalid username or password';
  }
});
