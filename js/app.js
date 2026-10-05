(function () {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const PHOTOS = [
    {
      src: 'photos/01-comienzo.jpg',
      year: 'El comienzo',
      caption: 'Cuando el patio todavía era el mundo, y ustedes ya estaban juntos.',
      alt: 'Raúl y Rossio jóvenes con sus hijos en el patio'
    },
    {
      src: 'photos/02-lago.jpg',
      year: '2018',
      caption: 'El lago, el muelle y esa forma de posar siempre pegaditos.',
      alt: 'Raúl y Rossio en un muelle frente al lago'
    },
    {
      src: 'photos/12-lago.gif',
      year: '2018',
      caption: 'La misma foto, con un poquito de magia encima.',
      alt: 'Raúl y Rossio en el lago, animado'
    },
    {
      src: 'photos/03-noche.jpg',
      year: '2020',
      caption: 'De noche también. Bien juntitos.',
      alt: 'Selfie de noche de Raúl y Rossio'
    },
    {
      src: 'photos/04-fogata.jpg',
      year: '2020',
      caption: 'Fogata, abrazo y la casa de siempre.',
      alt: 'Raúl y Rossio abrazados junto a una fogata'
    },
    {
      src: 'photos/05-mariachi.jpg',
      year: '2021',
      caption: 'De gala, con mariachi y arroz en el piso.',
      alt: 'Raúl y Rossio vestidos de fiesta con mariachi'
    },
    {
      src: 'photos/06-totora.jpg',
      year: '2022',
      caption: 'Un paseo en totora que se quedó guardado.',
      alt: 'Raúl y Rossio sentados en una balsa de totora'
    },
    {
      src: 'photos/07-asado.jpg',
      year: '2023',
      caption: 'El asadito: pinza, tenedor y el almuerzo listo.',
      alt: 'Raúl y Rossio junto a la parrilla'
    },
    {
      src: 'photos/08-sombrillas.jpg',
      year: '2025',
      caption: 'Bajo las sombrillas, como si la calle se hubiera vestido para ustedes.',
      alt: 'Raúl y Rossio bajo sombrillas de colores'
    },
    {
      src: 'photos/09-torta.jpg',
      year: '2025 · 29 años',
      caption: 'La torta del 29. Una rosa, una velita y la perla esperando su turno.',
      alt: 'Raúl y Rossio con la torta del aniversario 29'
    },
    {
      src: 'photos/10-navidad.jpg',
      year: '2025',
      caption: 'Fin de año, sopa y familia. Lo sencillo, que es lo que más dura.',
      alt: 'Raúl y Rossio sentados a la mesa'
    },
    {
      src: 'photos/11-juntos.jpg',
      year: '2026',
      caption: 'Mismo equipo, mismo lado. Así se llegan a los 30.',
      alt: 'Raúl y Rossio abrazados con conjunto gris'
    }
  ];

  const letterText = `Hoy se cumplen 30 años de elegirse.

Tres décadas que se notan en las fotos: en el lago, en la fogata, en el asado del domingo y en esa torta del año 29, con una rosa y una velita. Las bodas de perla no aparecen de golpe. Se forman despacito, como una perla de verdad: con tiempo, con paciencia y con mucho cariño.

Raúl y Rossio, gracias por el hogar, por las risas y por enseñarnos lo que es quedarse. Que vengan muchos años más, con salud, música y la familia cerca.

Feliz aniversario, papitos.`;

  /* ───────── loader ───────── */
  document.body.style.overflow = 'hidden';

  window.addEventListener('load', () => {
    setTimeout(() => {
      $('#loading-screen').classList.add('hidden');
      document.body.style.overflow = '';
      initPearls();
      initSparkles();
    }, 1700);
  });

  /* ───────── floating pearls ───────── */
  function initPearls() {
    const layer = $('#pearl-layer');
    for (let i = 0; i < 16; i++) {
      const dot = document.createElement('span');
      dot.className = 'float-pearl';
      const size = 6 + Math.random() * 10;
      dot.style.width = size + 'px';
      dot.style.height = size + 'px';
      dot.style.left = Math.random() * 100 + '%';
      dot.style.animationDuration = 10 + Math.random() * 12 + 's';
      dot.style.animationDelay = Math.random() * 8 + 's';
      layer.appendChild(dot);
    }
  }

  function initSparkles() {
    const field = $('.sparkle-field');
    for (let i = 0; i < 24; i++) {
      const s = document.createElement('span');
      s.className = 'sparkle';
      s.style.left = Math.random() * 100 + '%';
      s.style.top = Math.random() * 100 + '%';
      s.style.animationDelay = Math.random() * 3 + 's';
      s.style.animationDuration = 1.6 + Math.random() * 2 + 's';
      field.appendChild(s);
    }
  }

  /* ───────── scroll progress ───────── */
  const progressBar = $('#scroll-progress');
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (total > 0) progressBar.style.width = (window.scrollY / total * 100) + '%';
  }, { passive: true });

  /* ───────── audio ───────── */
  const audioBtn = $('#audio-btn');
  const bgMusic = $('#bg-music');
  const audioLabel = audioBtn.querySelector('.audio-label');
  bgMusic.volume = 0.38;

  function playMusic() {
    return bgMusic.play().then(() => {
      audioBtn.classList.add('playing');
      audioLabel.textContent = 'Primer Amor';
    }).catch(() => {});
  }

  function pauseMusic() {
    bgMusic.pause();
    audioBtn.classList.remove('playing');
    audioLabel.textContent = 'Música';
  }

  audioBtn.addEventListener('click', () => {
    if (bgMusic.paused) playMusic();
    else pauseMusic();
  });

  /* ───────── envelope ───────── */
  const envelope = $('#envelope');
  const envelopeWrap = $('#envelope-wrap');
  let envelopeOpened = false;

  function openEnvelope() {
    if (envelopeOpened) return;
    envelopeOpened = true;
    envelope.classList.add('open');
    envelopeWrap.setAttribute('aria-expanded', 'true');
    $('.envelope-hint').style.opacity = '0';
    playMusic();
    setTimeout(() => {
      const next = $('#portada');
      next.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 1500);
  }

  envelopeWrap.addEventListener('click', openEnvelope);
  envelopeWrap.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openEnvelope();
    }
  });

  /* ───────── album + gallery + lightbox ───────── */
  let albumIndex = 0;
  const albumImg = $('#album-img');
  const albumYear = $('#album-year');
  const albumCaption = $('#album-caption');
  const albumCount = $('#album-count');
  const thumbs = $('#album-thumbs');
  const wall = $('#polaroid-wall');

  PHOTOS.forEach((photo, index) => {
    const thumb = document.createElement('button');
    thumb.type = 'button';
    thumb.className = 'album-thumb' + (index === 0 ? ' active' : '');
    thumb.setAttribute('aria-label', photo.year);
    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = '';
    thumb.appendChild(img);
    thumb.addEventListener('click', () => showPhoto(index));
    thumbs.appendChild(thumb);

    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'polaroid fade-in';
    card.style.setProperty('--tilt', ((index % 5) - 2) * 1.4 + 'deg');
    card.innerHTML = `<img src="${photo.src}" alt="${photo.alt}" loading="lazy"><span>${photo.year}</span>`;
    card.addEventListener('click', () => openLightbox(index));
    wall.appendChild(card);
  });

  function showPhoto(index) {
    albumIndex = (index + PHOTOS.length) % PHOTOS.length;
    const photo = PHOTOS[albumIndex];
    albumImg.classList.add('is-fading');
    window.setTimeout(() => {
      albumImg.src = photo.src;
      albumImg.alt = photo.alt;
      albumYear.textContent = photo.year;
      albumCaption.textContent = photo.caption;
      albumCount.textContent = (albumIndex + 1) + ' / ' + PHOTOS.length;
      albumImg.classList.remove('is-fading');
    }, 160);
    $$('.album-thumb').forEach((thumb, i) => {
      thumb.classList.toggle('active', i === albumIndex);
    });
    const activeThumb = $$('.album-thumb')[albumIndex];
    if (activeThumb) {
      thumbs.scrollTo({
        left: activeThumb.offsetLeft - thumbs.clientWidth / 2 + activeThumb.clientWidth / 2,
        behavior: 'smooth'
      });
    }
  }

  $('#album-prev').addEventListener('click', () => showPhoto(albumIndex - 1));
  $('#album-next').addEventListener('click', () => showPhoto(albumIndex + 1));

  const stage = $('#album-stage');
  let touchStartX = 0;
  stage.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  stage.addEventListener('touchend', (event) => {
    const delta = event.changedTouches[0].clientX - touchStartX;
    if (delta > 48) showPhoto(albumIndex - 1);
    if (delta < -48) showPhoto(albumIndex + 1);
  }, { passive: true });

  document.addEventListener('keydown', (event) => {
    const lightboxOpen = $('#lightbox').classList.contains('active');
    if (event.key === 'ArrowLeft') {
      if (lightboxOpen) openLightbox(lightboxIndex - 1);
      else if (isAlbumInView()) showPhoto(albumIndex - 1);
    }
    if (event.key === 'ArrowRight') {
      if (lightboxOpen) openLightbox(lightboxIndex + 1);
      else if (isAlbumInView()) showPhoto(albumIndex + 1);
    }
    if (event.key === 'Escape') closeLightbox();
  });

  function isAlbumInView() {
    const rect = $('#album').getBoundingClientRect();
    return rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.2;
  }

  showPhoto(0);

  const lightbox = $('#lightbox');
  const lightboxImg = $('#lightbox-img');
  const lightboxCaption = $('#lightbox-caption');
  let lightboxIndex = 0;

  function openLightbox(index) {
    lightboxIndex = (index + PHOTOS.length) % PHOTOS.length;
    const photo = PHOTOS[lightboxIndex];
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.alt;
    lightboxCaption.textContent = photo.year + ' · ' + photo.caption;
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox.classList.contains('active')) return;
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  $('.lightbox-close').addEventListener('click', closeLightbox);
  $('#lightbox-prev').addEventListener('click', () => openLightbox(lightboxIndex - 1));
  $('#lightbox-next').addEventListener('click', () => openLightbox(lightboxIndex + 1));
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  let lightboxStartX = 0;
  lightbox.addEventListener('touchstart', (event) => {
    lightboxStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener('touchend', (event) => {
    const delta = event.changedTouches[0].clientX - lightboxStartX;
    if (delta > 48) openLightbox(lightboxIndex - 1);
    if (delta < -48) openLightbox(lightboxIndex + 1);
  }, { passive: true });

  /* ───────── tappable pearls ───────── */
  const pearlMessage = $('#pearl-message');
  $$('.pearl').forEach((pearl) => {
    pearl.addEventListener('click', () => {
      $$('.pearl').forEach((item) => item.classList.remove('open'));
      pearl.classList.add('open');
      pearlMessage.textContent = pearl.dataset.msg;
      pearlMessage.classList.remove('show');
      void pearlMessage.offsetWidth;
      pearlMessage.classList.add('show');
    });
  });

  /* ───────── letter ───────── */
  let typewriterStarted = false;

  function startTypewriter() {
    if (typewriterStarted) return;
    typewriterStarted = true;
    const container = $('#typewriter-text');
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    container.appendChild(cursor);
    let i = 0;

    function type() {
      if (i >= letterText.length) {
        cursor.remove();
        $('#letter-signature').classList.add('visible');
        return;
      }
      const char = letterText[i];
      if (char === '\n') container.insertBefore(document.createElement('br'), cursor);
      else container.insertBefore(document.createTextNode(char), cursor);
      i += 1;
      const pause = char === '.' || char === '!' ? 280 : 18;
      setTimeout(type, pause);
    }

    type();
  }

  /* ───────── scroll animations ───────── */
  function revealAll() {
    $$('.fade-in').forEach((el) => el.classList.add('visible'));
  }

  if (typeof gsap === 'undefined') {
    revealAll();
    startTypewriter();
    $('#year-counter').textContent = '30';
  } else {
    gsap.registerPlugin(ScrollTrigger);

    $$('.fade-in').forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        onEnter: () => el.classList.add('visible')
      });
    });

    ScrollTrigger.create({
      trigger: '#carta',
      start: 'top 65%',
      once: true,
      onEnter: startTypewriter
    });

    const counterEl = $('#year-counter');
    ScrollTrigger.create({
      trigger: '#contador',
      start: 'top 70%',
      once: true,
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: 30,
          duration: 2.2,
          ease: 'power2.out',
          onUpdate() {
            counterEl.textContent = Math.floor(this.targets()[0].val);
          }
        });
      }
    });

    const line = $('#timeline-line');
    if (line) {
      gsap.set(line, { '--progress': 0 });
      ScrollTrigger.create({
        trigger: '#historia',
        start: 'top 75%',
        end: 'bottom 30%',
        scrub: true,
        onUpdate: (self) => line.style.setProperty('--progress', self.progress)
      });
    }

    let confettiPlayed = false;
    ScrollTrigger.create({
      trigger: '#cierre',
      start: 'top 30%',
      onEnter: () => {
        if (confettiPlayed || typeof confetti === 'undefined') return;
        confettiPlayed = true;
        const colors = ['#f7f1e8', '#e7cfc6', '#c6a46a', '#fffdfb', '#b76e79', '#d9c7b0'];
        confetti({ particleCount: 90, spread: 70, origin: { y: 0.65 }, colors });
        setTimeout(() => {
          confetti({ particleCount: 50, spread: 100, origin: { y: 0.55 }, colors, scalar: 0.8 });
        }, 500);
      }
    });
  }
})();
