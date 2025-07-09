// Cambiar foto semanalmente
document.addEventListener('DOMContentLoaded', () => {
  const weeklyPhoto = document.getElementById('weekly-photo');
  const weekNumber = Math.ceil(
    (new Date().getTime() - new Date(new Date().getFullYear(), 0, 1).getTime()) /
    (7 * 24 * 60 * 60 * 1000)
  );
  const photoIndex = (weekNumber - 1) % 5 + 1;
  weeklyPhoto.src = `img/foto${photoIndex}.jpg`;

  // Mostrar mensaje diario
  const today = new Date().getDate();
  const messageIndex = (today - 1) % mensajes.length;
  document.getElementById('message-card').innerText = mensajes[messageIndex];
});


//Esto es para el menú
document.addEventListener('DOMContentLoaded', () => {
  // Mostrar solo la sección de inicio al cargar
  document.querySelector('#inicio').classList.add('active');
  document.querySelector('.menu a[href="#inicio"]').classList.add('active');

  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);

      // Ocultar todas las secciones
      const sections = document.querySelectorAll('.content-section');
      if (sections.length) {
        sections.forEach(div => div.classList.remove('active'));
      }

      // Mostrar la sección correspondiente
      const targetDiv = document.getElementById(targetId);
      if (targetDiv) {
        targetDiv.classList.add('active');
      }

      // Actualizar la clase "active" en los ítems del menú
      document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');

      // Cerrar el menú si está abierto (para móviles)
      const navLinks = document.getElementById('nav-links');
      if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
      }
    });
  });

  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
});


//esto es para la música
document.addEventListener('click', () => {
  const music = document.getElementById('bg-music');
  if (music.paused) {
    music.play();
  }
}, { once: true });

document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bg-music');
  const toggleBtn = document.getElementById('toggle-music');

  toggleBtn.addEventListener('click', () => {
    if (music.paused) {
      music.play();
      toggleBtn.textContent = '🔈';
    } else {
      music.pause();
      toggleBtn.textContent = '🔇';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const enterBtn = document.getElementById('enter-site');
  const welcomeScreen = document.getElementById('welcome-screen');
  const music = document.getElementById('bg-music');

  enterBtn.addEventListener('click', () => {
    welcomeScreen.style.display = 'none'; // Oculta la pantalla de bienvenida
    document.getElementById('inicio').classList.add('active'); // Muestra la primera sección
    document.querySelector('.menu a[href="#inicio"]').classList.add('active');
    
    // Reproduce música si no está sonando
    if (music && music.paused) {
      music.play();
    }
  });
});

//FECHAS ESPECIALES //
document.addEventListener('DOMContentLoaded', () => {
  const timeline = document.querySelector('.timeline');
  const leftBtn = document.querySelector('.scroll-button.left');
  const rightBtn = document.querySelector('.scroll-button.right');

  leftBtn.addEventListener('click', () => {
    timeline.scrollBy({ left: -200, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    timeline.scrollBy({ left: 200, behavior: 'smooth' });
  });
});

//Imagenes de las fechas especiales//

document.addEventListener('DOMContentLoaded', () => {
  // ... (flechas del timeline si las tienes)

  // LIGHTBOX
  const events = document.querySelectorAll('.event');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.close');

  events.forEach(event => {
    event.addEventListener('click', () => {
      const imgSrc = event.getAttribute('data-img');
      if (imgSrc) {
        lightboxImg.src = imgSrc;
        lightbox.classList.remove('hidden');
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightboxImg.src = '';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add('hidden');
      lightboxImg.src = '';
    }
  });
});
