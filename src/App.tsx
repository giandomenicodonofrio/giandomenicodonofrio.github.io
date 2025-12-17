import React from 'react';

const stats = [
  { value: '7', label: 'Public Repos' },
  { value: '2', label: 'Followers' },
  { value: '2018', label: 'Dev since' },
  { value: 'Rome, IT', label: 'Based in' }
];

const services = [
  {
    title: 'User-Centered Design',
    copy: 'Intuitive and engaging experiences tailored for your audience.'
  },
  {
    title: 'Brand Identity & Strategy',
    copy: 'Strong visual storytelling that makes your brand unforgettable.'
  },
  {
    title: 'Responsive & Modern UI',
    copy: 'Pixel-perfect designs optimized for all devices.'
  },
  {
    title: 'Seamless Prototyping',
    copy: 'Innovative mockups to bring ideas to life before development.'
  }
];

const logos = ['GitHub', 'React', 'TypeScript', 'Python', 'Tailwind', 'Next.js', 'Vite', 'Node.js'];

const githubProjects = [
  {
    title: 'Asclepius',
    desc: 'Machine learning pipeline and data analysis notebooks for healthcare scenarios.',
    tech: ['Python', 'Jupyter'],
    link: 'https://github.com/giandomenicodonofrio/asclepius'
  },
  {
    title: 'CodeGPT',
    desc: 'ChatGPT enhanced with custom code for developer assistance and automation.',
    tech: ['Python', 'AI'],
    link: 'https://github.com/giandomenicodonofrio/CodeGPT'
  },
  {
    title: 'ChatGPT Excel Filler',
    desc: 'CLI tool to populate Excel files via ChatGPT prompts and structured outputs.',
    tech: ['Python', 'Automation'],
    link: 'https://github.com/giandomenicodonofrio/ChatGPTExcelFiller'
  },
  {
    title: 'Custom React Video Player',
    desc: 'A customizable React video player with advanced controls and modern UI.',
    tech: ['React', 'JavaScript'],
    link: 'https://github.com/giandomenicodonofrio/custom-react-video-player'
  },
  {
    title: 'API Axios Singleton',
    desc: 'Pattern for centralized Axios configuration and request handling.',
    tech: ['JavaScript', 'API'],
    link: 'https://github.com/giandomenicodonofrio/api_axios_singleton'
  }
];

const portraitUrl = 'https://avatars.githubusercontent.com/u/45636384?v=4';
const portraitFallback =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 520" fill="none">
      <rect width="400" height="520" rx="200" fill="#d7d7d2"/>
      <circle cx="200" cy="150" r="90" fill="#c2c2bd"/>
      <rect x="95" y="250" width="210" height="200" rx="100" fill="#b5b5af"/>
      <text x="200" y="490" text-anchor="middle" fill="#8a8a84" font-family="Arial" font-size="20">Portrait</text>
    </svg>`
  );

const portfolioUrl =
  'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&w=1400&q=80';
const portfolioFallback =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" fill="none">
      <rect width="1200" height="700" rx="24" fill="#d7d7d2"/>
      <rect x="80" y="120" width="1040" height="460" rx="22" fill="#c2c2bd"/>
      <text x="600" y="370" text-anchor="middle" fill="#8a8a84" font-family="Arial" font-size="36">Portfolio Image</text>
    </svg>`
  );

export default function App() {
  return (
    <div className="page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; }
        body { margin: 0; font-family: 'Inter', sans-serif; background: #05070f; color: #e5e7eb; }
        a { color: inherit; text-decoration: none; }

        .page { padding: 0; background: #05070f; min-height: 100vh; }
        .card { width: 100%; margin: 0 auto; background: radial-gradient(140% 120% at 20% 20%, rgba(74,222,128,0.08), transparent 40%), radial-gradient(120% 120% at 80% 0%, rgba(56,189,248,0.09), transparent 45%), #0b1224; box-shadow: inset 0 1px 0 rgba(255,255,255,0.03); border-radius: 0; overflow: hidden; }

        .top-bar { display: flex; align-items: center; justify-content: space-between; padding: 30px 48px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; font-size: 13px; color: #a5b4fc; }
        .brand { display: flex; align-items: center; gap: 10px; }
        .dot { width: 10px; height: 10px; background: #22d3ee; border-radius: 50%; box-shadow: 0 0 12px rgba(34,211,238,0.8); }
        .menu-btn { width: 48px; height: 48px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.03); color: #e5e7eb; display: grid; place-items: center; cursor: pointer; transition: border-color 180ms, transform 180ms; }
        .menu-btn:hover { border-color: rgba(34,211,238,0.5); transform: translateY(-1px); }
        .menu-lines { width: 22px; height: 14px; display: flex; flex-direction: column; justify-content: space-between; }
        .menu-lines span { display: block; height: 2px; background: currentColor; border-radius: 999px; }

        .hero { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 32px; padding: 24px 64px 48px; }
        .hero-text { padding-top: 8px; }
        .eyebrow { font-weight: 600; letter-spacing: 0.08em; font-size: 12px; margin-bottom: 18px; display: inline-flex; align-items: center; gap: 10px; color: #67e8f9; text-transform: uppercase; }
        .eyebrow .line { width: 36px; height: 1px; background: linear-gradient(90deg, #22d3ee, transparent); }
        .hero h1 { font-family: 'Space Grotesk', sans-serif; font-size: 56px; line-height: 1.05; margin: 0 0 12px; color: #f8fafc; letter-spacing: -0.5px; }
        .hero h2 { font-family: 'Space Grotesk', sans-serif; font-size: 44px; line-height: 1.08; margin: 0 0 16px; font-weight: 700; color: #cbd5f5; letter-spacing: -0.4px; }
        .hero h2 .amp { font-family: 'Space Grotesk', sans-serif; font-style: italic; font-weight: 600; color: #67e8f9; }
        .hero p { margin: 0 0 26px; color: #cbd5e1; font-size: 16px; line-height: 1.65; max-width: 520px; }
        .cta { padding: 14px 22px; background: linear-gradient(120deg, #22d3ee, #4ade80); color: #0b1224; border-radius: 12px; font-weight: 700; border: 1px solid rgba(255,255,255,0.08); display: inline-flex; align-items: center; gap: 10px; cursor: pointer; transition: transform 180ms ease, box-shadow 180ms ease, filter 180ms ease; }
        .cta:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(34,211,238,0.35); filter: saturate(1.05); }

        .hero-visual { position: relative; display: flex; justify-content: center; }
        .photo-wrap { position: relative; width: 100%; max-width: 420px; aspect-ratio: 3 / 4; }
        .shape { position: absolute; inset: -18px 18px; background: linear-gradient(180deg, rgba(34,211,238,0.16), rgba(74,222,128,0.12)); border-radius: 260px; height: 100%; filter: blur(0px); }
        .photo { position: relative; border-radius: 260px; overflow: hidden; background: #0f172a; height: 100%; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 20px 60px rgba(0,0,0,0.35); }
        .photo img { width: 100%; height: 100%; display: block; object-fit: cover; }

        .stats { position: absolute; right: clamp(8px, 2vw, 32px); top: 12px; display: grid; gap: 14px; text-align: left; }
        .stat { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 14px 16px; border-radius: 12px; min-width: 150px; box-shadow: 0 10px 30px rgba(0,0,0,0.35); backdrop-filter: blur(8px); }
        .stat .value { font-weight: 800; font-size: 20px; margin-bottom: 6px; color: #f8fafc; }
        .stat .label { color: #94a3b8; font-size: 12px; line-height: 1.4; letter-spacing: 0.01em; }

        .services { padding: 36px 64px 64px; display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 24px; border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06); }
        .service { font-size: 14px; color: #cbd5e1; line-height: 1.6; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 14px; padding: 18px 16px; box-shadow: 0 12px 30px rgba(0,0,0,0.18); }
        .service h3 { margin: 0 0 10px; font-size: 15px; text-transform: uppercase; letter-spacing: 0.06em; color: #67e8f9; }

        .trusted { padding: 44px 64px 54px; }
        .trusted h4 { margin: 0 0 10px; font-size: 15px; letter-spacing: 0.06em; color: #cbd5f5; text-transform: uppercase; }
        .trusted p { margin: 0 0 22px; color: #94a3b8; font-size: 14px; }
        .logo-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; }
        .logo-pill { border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; background: rgba(255,255,255,0.02); padding: 14px 16px; display: flex; align-items: center; gap: 10px; font-weight: 600; font-size: 14px; color: #e2e8f0; box-shadow: 0 10px 30px rgba(0,0,0,0.18); }
        .logo-pill .mark { width: 26px; height: 26px; border: 1px solid rgba(103,232,249,0.6); border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; background: rgba(34,211,238,0.12); color: #67e8f9; }

        .about { padding: 46px 64px 76px; display: grid; grid-template-columns: 1fr 1.05fr; gap: 42px; border-top: 1px solid rgba(255,255,255,0.06); }
        .about h2 { margin: 0 0 22px; font-family: 'Space Grotesk', sans-serif; font-size: 32px; line-height: 1.12; text-transform: uppercase; letter-spacing: 0.04em; color: #f8fafc; }
        .about p { margin: 0 0 14px; color: #cbd5e1; font-size: 16px; line-height: 1.7; }

        .portfolio { padding: 0 64px 68px; }
        .portfolio h3 { margin: 0 0 18px; font-size: 22px; text-transform: uppercase; letter-spacing: 0.08em; color: #cbd5f5; }
        .portfolio p { margin: 0 0 24px; color: #94a3b8; font-size: 14px; }
        .portfolio-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 14px; overflow: hidden; box-shadow: 0 20px 45px rgba(0,0,0,0.25); }
        .portfolio-card img { width: 100%; display: block; }
        .portfolio-meta { display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; background: rgba(255,255,255,0.02); font-size: 13px; color: #cbd5e1; border-top: 1px solid rgba(255,255,255,0.04); }
        .pill { padding: 6px 12px; background: linear-gradient(120deg, #22d3ee, #4ade80); color: #0b1224; border-radius: 999px; font-weight: 700; font-size: 12px; letter-spacing: 0.05em; }

        .contact-section { padding: 80px 64px; background: #0d1428; border-top: 1px solid rgba(255,255,255,0.06); }
        .contact-container { max-width: 960px; margin: 0 auto; text-align: center; }
        .contact-title { font-family: 'Space Grotesk', sans-serif; font-size: 32px; line-height: 1.2; font-weight: 700; color: #f8fafc; margin-bottom: 16px; }
        .contact-description { color: #cbd5e1; font-size: 16px; margin-bottom: 28px; }
        .contact-buttons { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 26px; }
        .contact-buttons .primary-button { background: linear-gradient(135deg, #0ea5e9, #06b6d4); color: white; padding: 0.9rem 1.8rem; border-radius: 12px; font-weight: 700; border: none; box-shadow: 0 12px 32px rgba(14, 165, 233, 0.35); }
        .contact-buttons .secondary-button { border: 1px solid rgba(255,255,255,0.12); color: #e2e8f0; padding: 0.9rem 1.8rem; border-radius: 12px; font-weight: 700; background: rgba(255,255,255,0.04); }
        .social-links { display: flex; justify-content: center; gap: 14px; }
        .social-link { font-size: 20px; color: #e2e8f0; padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; transition: transform 0.2s, border-color 0.2s; }
        .social-link:hover { transform: translateY(-2px); border-color: rgba(34,211,238,0.6); }

        @media (max-width: 1180px) {
          .hero { grid-template-columns: 1fr; }
          .hero-visual { justify-content: flex-start; }
          .stats { position: static; display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); }
        }

        @media (max-width: 880px) {
          .card { width: calc(100% - 16px); }
          .services { grid-template-columns: repeat(2, minmax(0,1fr)); padding: 26px 28px 40px; }
          .hero { padding: 12px 28px 30px; }
          .trusted, .about, .portfolio { padding: 30px 28px 40px; }
          .about { grid-template-columns: 1fr; }
          .top-bar { padding: 20px 24px; }
        }

        @media (max-width: 600px) {
          .services { grid-template-columns: 1fr; }
          .logo-grid { grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); }
          .hero h1 { font-size: 42px; }
          .hero h2 { font-size: 34px; }
          .stats { right: 0; left: 0; }
        }
      `}</style>

      <div className="card">
        <header className="top-bar">
          <div className="brand">
            <span className="dot" />
            <span>Dominic</span>
          </div>
          <button className="menu-btn" aria-label="Open menu">
            <span className="menu-lines">
              <span />
              <span />
              <span />
            </span>
          </button>
        </header>

        <section className="hero">
          <div className="hero-text">
            <div className="eyebrow"><span className="line" /> Hey, I am Giandomenico</div>
            <h1>Full-Stack</h1>
            <h2>
              Developer <span className="amp">& Designer</span>
            </h2>
            <p>
              Full-Stack Developer from Rome crafting performant products, thoughtful UX, and reliable front-to-back solutions.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a className="cta" href="https://github.com/giandomenicodonofrio" target="_blank" rel="noreferrer">
                View GitHub →
              </a>
              <a className="cta" href="https://www.linkedin.com/in/giandomenicodonofrio/" target="_blank" rel="noreferrer" style={{ background: '#f0f0eb', color: '#111' }}>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-wrap">
              <div className="shape" />
              <div className="photo">
                <img
                  src={portraitUrl}
                  alt="Portrait of Dominic"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = portraitFallback;
                  }}
                />
              </div>
            </div>
            <div className="stats">
              {stats.map((item) => (
                <div className="stat" key={item.label}>
                  <div className="value">{item.value}</div>
                  <div className="label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services">
          {services.map((item) => (
            <div className="service" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          ))}
        </section>

        <section className="trusted">
          <h4>Toolkit & ecosystem</h4>
          <p>Lavoro con tecnologie moderne per shipping rapido e manutenzione semplice.</p>
          <div className="logo-grid">
            {logos.map((logo, index) => (
              <div className="logo-pill" key={`${logo}-${index}`}>
                <span className="mark">★</span>
                <span>{logo}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about">
          <div>
            <h2>Crafting meaningful brands & intuitive experiences</h2>
          </div>
          <div>
            <p>
              Hey, I am Giandomenico, a full-stack developer passionate about creating visually compelling and
              user-friendly digital experiences.
            </p>
            <p>
              Con un forte focus su UX e affidabilità, progetto e sviluppo applicazioni end-to-end: dal design system
              e component library, a API performanti e integrazioni cloud. Unisco strategia, creatività e codice per
              trasformare idee in prodotti pronti all'uso.
            </p>
          </div>
        </section>

        <section className="portfolio">
          <h3>GitHub Projects</h3>
          <p>Una selezione di repository dal mio profilo GitHub.</p>
          <div className="logo-grid" style={{ gap: '16px' }}>
            {githubProjects.map((project) => (
              <a className="logo-pill" key={project.title} href={project.link} target="_blank" rel="noreferrer" style={{ alignItems: 'flex-start', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontWeight: 700 }}>{project.title}</span>
                  <span className="mark">↗</span>
                </div>
                <span style={{ color: '#4e4e4a', fontSize: '13px', lineHeight: 1.5 }}>{project.desc}</span>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.tech.map((t) => (
                    <span key={t} className="pill" style={{ background: '#111', color: '#f6f6f3' }}>{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="cta" className="contact-section" style={{ background: '#0b1224', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="contact-container">
            <h2 className="contact-title">
              Pronto per il <span className="gradient-text">prossimo progetto?</span>
            </h2>
            <p className="contact-description">Raccontami la tua idea: una call veloce e capiamo come costruirla insieme.</p>
            <div className="contact-buttons">
              <a href="mailto:giandomenico1998@gmail.com" className="primary-button">
                📧 Scrivimi ora
              </a>
              <a href="https://linkedin.com/in/giandomenicodonofrio" target="_blank" rel="noreferrer" className="secondary-button">
                💼 LinkedIn
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/giandomenicodonofrio" target="_blank" rel="noreferrer" className="social-link">🐙</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📷</a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
