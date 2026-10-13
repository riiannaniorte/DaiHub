const posts = [
  {
    category: 'Estreno',
    title: 'Nuevo trailer de la temporada de primavera deja a la comunidad alucinada',
    excerpt: 'El último avance confirma nuevos personajes, combates épicos y una historia que promete revolucionar el género.',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
    link: '#'
  },
  {
    category: 'Review',
    title: 'Review: esta serie mezcla acción y drama con una dirección impecable',
    excerpt: 'Con una combinación de tensión emocional y secuencias dinámicas, esta serie se está convirtiendo en una de las favoritas del año.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    link: '#'
  },
  {
    category: 'Noticias',
    title: 'La industria confirma más adaptaciones de manga para la próxima temporada',
    excerpt: 'Varias editoriales han anunciado nuevas adaptaciones con un enfoque más dark fantasy y romance contemporáneo.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    link: '#'
  },
  {
    category: 'Top 10',
    title: 'Top 10 animes del año para no perderte esta temporada',
    excerpt: 'Seleccionamos las joyas más destacadas por su animación, historia y calidad general.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    link: '#'
  }
];

const postsContainer = document.getElementById('posts-container');
if (postsContainer) {
  posts.forEach((post) => {
    const card = document.createElement('article');
    card.className = 'post-card';
    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}" loading="lazy" />
      <div>
        <span class="post-meta">${post.category}</span>
        <h3><a href="${post.link}">${post.title}</a></h3>
        <p>${post.excerpt}</p>
      </div>
    `;
    postsContainer.appendChild(card);
  });
}

const cookieBanner = document.getElementById('cookie-banner');
const acceptCookiesButton = document.getElementById('accept-cookies');

if (cookieBanner && acceptCookiesButton) {
  const consent = localStorage.getItem('cookie-consent');
  if (!consent) {
    cookieBanner.classList.remove('hidden');
  }

  acceptCookiesButton.addEventListener('click', () => {
    localStorage.setItem('cookie-consent', 'accepted');
    cookieBanner.classList.add('hidden');
    if (window.adsbygoogle) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  });
}
