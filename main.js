(() => {
  'use strict';

  const posts = [
    {
      category: 'Estreno',
      title: 'Nuevo tráiler de la temporada de primavera deja a la comunidad alucinada',
      excerpt: 'El último avance confirma nuevos personajes, combates épicos y una historia que promete revolucionar el género.',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
      link: '#featured'
    },
    {
      category: 'Review',
      title: 'Review: esta serie mezcla acción y drama con una dirección impecable',
      excerpt: 'Con una combinación de tensión emocional y secuencias dinámicas, esta serie se está convirtiendo en una de las favoritas del año.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      link: '#reviews'
    },
    {
      category: 'Noticias',
      title: 'La industria confirma más adaptaciones de manga para la próxima temporada',
      excerpt: 'Varias editoriales han anunciado nuevas adaptaciones con un enfoque más dark fantasy y romance contemporáneo.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
      link: '#news'
    },
    {
      category: 'Top 10',
      title: 'Top 10 animes del año para no perderte esta temporada',
      excerpt: 'Seleccionamos las joyas más destacadas por su animación, historia y calidad general.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
      link: '#news'
    }
  ];

  function renderPosts() {
    const container = document.getElementById('posts-container');
    if (!container) return;
    const fragment = document.createDocumentFragment();

    posts.forEach((post) => {
      const card = document.createElement('article');
      card.className = 'post-card';
      const img = document.createElement('img');
      img.src = post.image;
      img.alt = post.title;
      img.loading = 'lazy';
      img.decoding = 'async';

      const content = document.createElement('div');
      const category = document.createElement('span');
      category.className = 'post-meta';
      category.textContent = post.category;
      const heading = document.createElement('h3');
      const link = document.createElement('a');
      link.href = post.link;
      link.textContent = post.title;
      const excerpt = document.createElement('p');
      excerpt.textContent = post.excerpt;

      heading.appendChild(link);
      content.append(category, heading, excerpt);
      card.append(img, content);
      fragment.appendChild(card);
    });
    container.replaceChildren(fragment);
  }

  function loadAdsIfConsented() {
    // This only loads the AdSense library after the user has accepted.
    // Replace the placeholder ad slot in index.html with a real slot from AdSense.
    let consent = null;
    try { consent = localStorage.getItem('cookie-consent'); } catch (_) { return; }
    if (consent !== 'accepted') return;

    const client = 'ca-pub-9249457513441766';
    if (!document.querySelector('script[data-adsense-loader]')) {
      const script = document.createElement('script');
      script.async = true;
      script.dataset.adsenseLoader = 'true';
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        document.querySelectorAll('ins.adsbygoogle').forEach((ad) => {
          if (ad.dataset.initialized === 'true') return;
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            ad.dataset.initialized = 'true';
          } catch (error) {
            console.warn('No se pudo inicializar el anuncio de AdSense.', error);
          }
        });
      };
      document.head.appendChild(script);
    }
  }

  function setupCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    if (!banner || !acceptButton) return;

    let consent = null;
    try { consent = localStorage.getItem('cookie-consent'); } catch (_) { /* storage puede estar bloqueado */ }

    if (consent === 'accepted') {
      banner.classList.add('hidden');
      loadAdsIfConsented();
    } else {
      banner.classList.remove('hidden');
    }

    acceptButton.addEventListener('click', () => {
      try {
        localStorage.setItem('cookie-consent', 'accepted');
      } catch (_) {
        // La página sigue funcionando aunque el navegador bloquee localStorage.
      }
      banner.classList.add('hidden');
      loadAdsIfConsented();
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderPosts();
    setupCookieBanner();
  });
})();
