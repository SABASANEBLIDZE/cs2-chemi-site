
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


document.addEventListener('DOMContentLoaded', () => {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');

  if (!localStorage.getItem('cookiesAccepted')) {
    cookieBanner.style.display = 'flex';
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.style.display = 'none';
  });
});


window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 20);
});


function togglePassword() {
  const pwd = document.getElementById('password');
  pwd.type = pwd.type === 'password' ? 'text' : 'password';
}


function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}


function fetchGameData() {
  fetch('https://jsonplaceholder.typicode.com/posts/1') 
    .then(response => response.json())
    .then(data => {
      console.log('Fetched API data:', data);

      
      const aboutSection = document.querySelector('#about p');
      if (aboutSection) {
        aboutSection.innerHTML += `<br><br><strong>Fetched title:</strong> ${data.title}`;
      }
    })
    .catch(error => {
      console.error('API Error:', error);
    });
}


window.addEventListener('load', fetchGameData);
