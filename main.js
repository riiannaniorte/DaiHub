
(() => {
  'use strict';
  const posts = [
    {
      category: 'Estrenos',
      title: 'Black Clover vuelve: lo que debes saber de la temporada 2',
      excerpt: 'Asta y los Caballeros Mágicos regresan en la temporada de otoño de 2026. Repasamos lo confirmado y qué conviene recordar.',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1000&q=80',
      link: 'articulos/black-clover-temporada-2.html'
    },
    {
      category: 'Noticias',
      title: 'Dragon Ball Super: Beerus ya tiene fecha de estreno',
      excerpt: 'La edición mejorada de la historia de Beerus llegó a la programación de otoño de 2026. Estos son los datos anunciados.',
      image: 'https://images.unsplash.com/photo-1614583225154-5fcfea8b87d0?auto=format&fit=crop&w=1000&q=80',
      link: 'articulos/dragon-ball-super-beerus.html'
    },
    {
      category: 'Comunidad',
      title: 'Jujutsu Kaisen anuncia una colaboración especial para noviembre',
      excerpt: 'La franquicia prepara una colaboración en Japón relacionada con Shibuya: fechas, lugares y lo que se ha anunciado.',
      image: 'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?auto=format&fit=crop&w=1000&q=80',
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
