
(() => {
  'use strict';
  const posts = [
    {
      category: 'Estrenos',
      title: 'Black Clover vuelve: lo que debes saber de la temporada 2',
      excerpt: 'Asta y los Caballeros Mágicos regresan en la temporada de otoño de 2026. Repasamos lo confirmado y qué conviene recordar.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Cymj7TtS2QjfaD7S8DTDkzLBoqccFfjm9CjoMWw8kQ&s=10',
      link: 'articulos/black-clover-temporada-2.html'
    },
    {
      category: 'Estrenos',
      title: 'Tokyo Revengers – Temporada 4 (War of the Three Titans Arc)',
      excerpt: 'Aunque Takemichi logra un futuro feliz donde Hina y sus amigos están a salvo, descubre que Mikey ha desaparecido para liderar Bonten, la organización criminal más peligrosa de Japón..',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4eAGERSywR8ldsv6HMOKynIPfEKpbQ8fmdhePKqd9WQ&s=10',
      link: 'articulos/Tokyo-Revengers-temporada-4.html'
    },
     {
      category: 'Estrenos',
      title: 'Chainsaw Man – Temporada 2',
      excerpt: 'El secreto de Denji sale a la luz y asesinos de elite de todo el mundo viajan a Japón para reclamar el corazón del Demonio Motosierra.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHPGxOM4ZcFEO3vgSZwyDiwFrxLzNdmmQI1lveftIkJQ&s=10',
      link: 'articulos/Chainsaw-Man–Temporada-2.html'
    },
    {
      category: 'Noticias',
      title: 'Dragon Ball Super: Beerus ya tiene fecha de estreno',
      excerpt: 'La edición mejorada de la historia de Beerus llegó a la programación de otoño de 2026. Estos son los datos anunciados.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CyavOc42sPCG7YBMMlHnJayGnvDXDa-fMfHIjAyH7A&s=10',
      link: 'articulos/dragon-ball-super-beerus.html'
    },
    {
      category: 'Noticias',
      title: 'Naruto: Shadow Rising, el nuevo manga ilustrado por Masashi Kishimoto',
      excerpt: 'Sigue el camino de Naruto hacia el puesto de Séptimo Hokage y las primeras misiones del Equipo 7 como adultos..',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YdzWyWTJUxVMFXAeLPR1eiizfE0kME1uSBAHUcE47A&s=10',
      link: 'articulos/Naruto-Shadow-Rising.html'
    },
    {
      category: 'Noticias',
      title: 'My Hero Academia: The Final Legacy',
      excerpt: 'Película epílogo ambientada años después de la gran guerra final, mostrando a Deku y la Clase 1-A como héroes profesionales adultos',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadiAbQ0DCK_wLgyleuseaoOzGodXFEGyunNLehLtz9Q&s=10',
      link: 'articulos/my-hero-academy.html'
    },
    {
      category: 'Comunidad',
      title: 'Jujutsu Kaisen anuncia una colaboración especial para noviembre',
      excerpt: 'La franquicia prepara una colaboración en Japón relacionada con Shibuya: fechas, lugares y lo que se ha anunciado.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5MVJnQ38quoUqdAQPzWjDZcLP9CoyiqX_lpASap9UJQ&s=10',
      link: 'articulos/jujutsu-kaisen-colaboracion.html'
    }
  ];

  function renderPosts() {
    const container = document.getElementById('posts-container');
    if (!container) return;
    const fragment = document.createDocumentFragment();
    posts.forEach(post => {
      const card = document.createElement('article');
      card.className = 'post-card';
      const image = document.createElement('img');
      image.src = post.image; image.alt = post.title; image.loading = 'lazy'; image.decoding = 'async';
      const body = document.createElement('div'); body.className = 'post-body';
      const tag = document.createElement('span'); tag.className = 'tag'; tag.textContent = post.category;
      const heading = document.createElement('h3');
      const link = document.createElement('a'); link.href = post.link; link.textContent = post.title;
      heading.appendChild(link);
      const excerpt = document.createElement('p'); excerpt.textContent = post.excerpt;
      const more = document.createElement('a'); more.className = 'read-more'; more.href = post.link; more.textContent = 'Leer artículo →';
      body.append(tag, heading, excerpt, more); card.append(image, body); fragment.appendChild(card);
    });
    container.replaceChildren(fragment);
  }

  function setupCookies() {
    const banner = document.getElementById('cookie-banner');
    const button = document.getElementById('accept-cookies');
    if (!banner || !button) return;
    let consent = null;
    try { consent = localStorage.getItem('cookie-consent'); } catch (_) {}
    if (consent === 'accepted') banner.classList.add('hidden');
    else banner.classList.remove('hidden');
    button.addEventListener('click', () => {
      try { localStorage.setItem('cookie-consent', 'accepted'); } catch (_) {}
      banner.classList.add('hidden');
    });
  }
  document.addEventListener('DOMContentLoaded', () => { renderPosts(); setupCookies(); });
})();
