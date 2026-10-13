* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  color: #222;
}
.container {
  width: min(1100px, 90vw);
  margin: 0 auto;
}
.site-header {
  background: #111827;
  color: white;
  padding: 18px 0;
}
.nav-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.brand {
  font-size: 1.5rem;
  font-weight: bold;
}
.menu {
  display: flex;
  gap: 20px;
}
.menu a {
  color: white;
  text-decoration: none;
}
.page {
  padding: 40px 0 80px;
}
.hero {
  background: #ffffff;
  padding: 30px 24px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.05);
  margin-bottom: 30px;
}
.hero h1 {
  margin: 0 0 12px;
  font-size: clamp(2rem, 4vw, 3rem);
}
.posts {
  display: grid;
  gap: 20px;
}
.post-card {
  background: white;
  border-radius: 12px;
  padding: 20px 24px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.04);
}
.post-card h2 {
  margin-top: 0;
}
.post-card a {
  color: #111827;
  text-decoration: none;
}
.ad-block {
  margin: 40px 0;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.04);
}
.ad-label {
  margin: 0 0 12px;
  color: #666;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #111827;
  color: white;
  padding: 16px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  z-index: 999;
}
.cookie-banner.hidden {
  display: none;
}
.cookie-banner a {
  color: #90cdf4;
}
.cookie-banner button {
  background: #2563eb;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
}
.site-footer {
  background: #111827;
  color: #d1d5db;
  padding: 24px 0;
  text-align: center;
}
@media (max-width: 700px) {
  .nav-wrap {
    flex-direction: column;
    gap: 12px;
  }
  .menu {
    gap: 12px;
    flex-wrap: wrap;
  }
}
