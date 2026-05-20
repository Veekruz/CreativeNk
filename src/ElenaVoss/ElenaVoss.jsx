// CREATIVENK.jsx
import React, { useState, useEffect, useRef } from 'react';
import './ElenaVoss.css';

// ── Inline SVG Icon Components ──

const IconWedding = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    <path d="M12 2v3" />
    <path d="M6 8h12" />
    <path d="M19 11v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9" />
    <circle cx="12" cy="8" r="1" />
    <path d="M9 14h6" />
    <path d="M10 17h4" />
  </svg>
);

const IconFashion = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l1.5 4.5L18 5l-2 4 4.5 1.5L17 13l2.5 4.5L15 17l-1.5 5L12 19l-1.5 3L9 17l-4.5.5L7 13l-3.5-2.5L8 9 6 5l4.5 1.5L12 2z" />
    <circle cx="12" cy="11" r="1.5" />
  </svg>
);

const IconEvent = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="M2 9h20" />
    <circle cx="6" cy="6" r="0.5" fill="currentColor" />
    <circle cx="10" cy="6" r="0.5" fill="currentColor" />
  </svg>
);

const IconPortrait = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
    <circle cx="12" cy="9" r="3" />
    <path d="M6 19c0-3.3 2.7-6 6-6s6 2.7 6 6" />
  </svg>
);

const IconProduct = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const IconCreative = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
    <line x1="12" y1="22" x2="12" y2="15.5" />
    <polyline points="22 8.5 12 15.5 2 8.5" />
    <polyline points="2 15.5 12 8.5 22 15.5" />
    <line x1="12" y1="2" x2="12" y2="8.5" />
  </svg>
);

const IconStar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconDiamond = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 2 12 12 22 22 12 12 2" />
  </svg>
);

const IconHeart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const IconCheck = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="16 10 11 15 8 12" />
  </svg>
);

const IconEmail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 4L12 13 2 4" />
  </svg>
);

const IconLocation = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconClock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconArrowUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

const IconChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const IconChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const IconArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconClose = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconZoom = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

const IconPinterest = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 20c2-5-1-8 2-12" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const IconBehance = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <path d="M7 10h2a1 1 0 0 1 0 2H7v-4h2a1 1 0 0 1 0 2z" />
    <path d="M14 10h3" />
    <path d="M14 13h3" />
  </svg>
);

const IconLinkedin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M8 11v5" />
    <circle cx="8" cy="9" r="1" fill="currentColor" />
    <path d="M13 11v5" />
    <path d="M12 11a2 2 0 0 1 4 0v5" />
  </svg>
);

const IconQuote = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
    <path d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.2-1.8 4-4 4v-2c1.1 0 2-.9 2-2v-2zm8 0h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.2-1.8 4-4 4v-2c1.1 0 2-.9 2-2v-2z" />
  </svg>
);

// ── Data ──

const photos = [
  { src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80', title: 'Autumn Solitude', loc: 'Paris, France', cat: 'portrait', h: 'tall' },
  { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80', title: 'Noir Runway', loc: 'Milan, Italy', cat: 'fashion', h: 'medium' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', title: 'Golden Vows', loc: 'Tuscany, Italy', cat: 'wedding', h: 'tall' },
  { src: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=600&q=80', title: 'Urban Drift', loc: 'Tokyo, Japan', cat: 'street', h: 'short' },
  { src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&q=80', title: 'Ivory Dreams', loc: 'Santorini, Greece', cat: 'wedding', h: 'medium' },
  { src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80', title: 'Haute Couture', loc: 'Paris, France', cat: 'fashion', h: 'tall' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80', title: 'Electric Nights', loc: 'New York, USA', cat: 'events', h: 'short' },
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80', title: 'The Quiet Man', loc: 'London, UK', cat: 'portrait', h: 'medium' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', title: 'Morning Ritual', loc: 'Copenhagen, DK', cat: 'lifestyle', h: 'tall' },
  { src: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&q=80', title: 'Shadow Play', loc: 'Barcelona, Spain', cat: 'portrait', h: 'medium' },
  { src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80', title: 'Editorial Silence', loc: 'Paris, France', cat: 'fashion', h: 'short' },
  { src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80', title: 'Light & Linen', loc: 'Amsterdam, NL', cat: 'lifestyle', h: 'tall' },
];

const testimonialsData = [
  {
    text: "CREATIVENK has an extraordinary gift for capturing the unspoken. Our wedding photographs don't just document — they breathe. Every frame tells a story we had forgotten we were living.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    name: 'Sophie Laurent',
    role: 'Wedding Client · Paris, France',
  },
  {
    text: "Working with CREATIVENK on our Autumn campaign was a revelation. They don't just photograph fashion — they understand it at a cellular level. The images exceeded every expectation.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    name: 'Marcus Chen',
    role: 'Creative Director · Maison Élara',
  },
  {
    text: "I've worked with many photographers, but CREATIVENK's ability to make you feel completely at ease while crafting something extraordinary around you is unparalleled. The portraits are stunning.",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    name: 'Amara Osei',
    role: 'Portrait Client · New York, USA',
  },
  {
    text: "Our brand launch event was immortalised in the most sophisticated way. CREATIVENK's editorial sensibility elevated every image into something truly editorial. We'll be working together for years to come.",
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    name: 'James Whitmore',
    role: 'CEO · Noir Collective · London',
  },
];

const categories = ['all', 'portrait', 'fashion', 'wedding', 'street', 'events', 'lifestyle'];

// ── Main Component ──

const ElenaVoss = () => {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredPhotos, setFilteredPhotos] = useState(photos);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [testiPos, setTestiPos] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formName, setFormName] = useState('');
  const [formData, setFormData] = useState({
    fname: '', femail: '', fphone: '', ftype: '', fdate: '', fmsg: '',
  });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const [showStickySocial, setShowStickySocial] = useState(false);

  const cursorRef = useRef(null);
  const cursorRingRef = useRef(null);
  const heroBgRef = useRef(null);
  const testiTrackRef = useRef(null);
  const lightboxRef = useRef(null);
  const loadingTimerRef = useRef(null);

  // Loader
  useEffect(() => {
    loadingTimerRef.current = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(loadingTimerRef.current);
  }, []);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 60);
      setShowBackTop(scrollY > 400);
      setShowStickySocial(scrollY > 300);
      if (heroBgRef.current && scrollY < window.innerHeight) {
        heroBgRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth ring follow
  useEffect(() => {
    let animationId;
    const animateRing = () => {
      setRingPos((prev) => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.12,
        y: prev.y + (cursorPos.y - prev.y) * 0.12,
      }));
      animationId = requestAnimationFrame(animateRing);
    };
    animationId = requestAnimationFrame(animateRing);
    return () => cancelAnimationFrame(animationId);
  }, [cursorPos]);

  // Filter photos
  useEffect(() => {
    setFilteredPhotos(activeFilter === 'all' ? photos : photos.filter((p) => p.cat === activeFilter));
  }, [activeFilter]);

  // Lightbox keyboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, lightboxIndex, filteredPhotos]);

  // Testimonials autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setTestiPos((prev) => {
        const max = Math.max(0, testimonialsData.length - 2);
        return prev >= max ? 0 : prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const counter = entry.target.querySelector('.counter');
            if (counter && !counter.dataset.animated) {
              counter.dataset.animated = 'true';
              animateCounter(counter);
            }
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));
    document.querySelectorAll('.counter').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target);
    let count = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = count + (target > 100 ? '+' : target > 20 ? '+' : '');
      if (count >= target) clearInterval(interval);
    }, 30);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };
  const prevLightbox = () => setLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  const nextLightbox = () => setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);

  const moveTesti = (dir) => {
    setTestiPos((prev) => {
      const max = Math.max(0, testimonialsData.length - 2);
      return Math.max(0, Math.min(max, prev + dir));
    });
  };

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fname.trim() || !formData.femail.trim()) {
      const inputs = document.querySelectorAll('#bookingForm input[required], #bookingForm select[required]');
      inputs.forEach((i) => {
        i.style.borderColor = '#c94a4a';
        setTimeout(() => (i.style.borderColor = ''), 2000);
      });
      return;
    }
    setFormName(formData.fname);
    setFormSubmitted(true);
  };

  const handleCursorEnter = () => setCursorHover(true);
  const handleCursorLeave = () => setCursorHover(false);

  // Helper: compute testimonial slide width for translateX
  const getTestiSlideWidth = () => {
    if (testiTrackRef.current) {
      const card = testiTrackRef.current.querySelector('.testi-card');
      return card ? card.offsetWidth + 32 : 0;
    }
    return 0;
  };

  return (
    <>
      {/* Loader */}
      {loading && (
        <div id="loader">
          <div className="loader-name">CREATIVENK</div>
          <div className="loader-bar-wrap"><div className="loader-bar" /></div>
          <div className="loader-num">Loading Experience</div>
        </div>
      )}

      {/* Custom Cursor */}
      <div ref={cursorRef} id="cursor" style={{ left: cursorPos.x, top: cursorPos.y, width: cursorHover ? '6px' : '12px', height: cursorHover ? '6px' : '12px' }} />
      <div ref={cursorRingRef} id="cursor-ring" style={{ left: ringPos.x, top: ringPos.y, width: cursorHover ? '60px' : '40px', height: cursorHover ? '60px' : '40px', borderColor: cursorHover ? 'rgba(201,169,110,0.8)' : 'rgba(201,169,110,0.5)' }} />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {['Home','Portfolio','About','Services','Testimonials','Pricing','Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)}>{item}</a>
        ))}
      </div>

      {/* Navbar */}
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo">CREATIVENK</a>
        <ul className="nav-links">
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
        <div className="nav-cta"><a href="#booking" className="btn-nav">Book a Session</a></div>
        <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span /><span /><span />
        </div>
      </nav>

      {/* Hero */}
      <section id="hero">
        <div className="hero-bg" ref={heroBgRef} />
        <div className="hero-socials">
          <a href="#"><IconInstagram /> <span>Instagram</span></a>
          <a href="#"><IconPinterest /> <span>Pinterest</span></a>
          <a href="#"><IconBehance /> <span>Behance</span></a>
        </div>
        <div className="hero-content">
          <div className="hero-label">Award-winning Photography</div>
          <h1 className="hero-title">Capturing <em>Stories</em><br />Beyond The Lens</h1>
          <p className="hero-sub">Fashion &nbsp;·&nbsp; Weddings &nbsp;·&nbsp; Portraits &nbsp;·&nbsp; Editorial</p>
          <div className="hero-ctas">
            <a href="#portfolio" className="btn-primary">View Portfolio</a>
            <a href="#booking" className="btn-ghost">Book a Session</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Selected Work</div>
            <h2 className="section-title">The <em>Portfolio</em></h2>
          </div>
          <div className="filter-tabs reveal delay-1">
            {categories.map((cat) => (
              <button key={cat} className={`filter-btn ${activeFilter === cat ? 'active' : ''}`} onClick={() => setActiveFilter(cat)} onMouseEnter={handleCursorEnter} onMouseLeave={handleCursorLeave}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          <div className="masonry reveal delay-2">
            {filteredPhotos.map((photo, index) => (
              <div key={index} className="masonry-item" onClick={() => openLightbox(index)} onMouseEnter={handleCursorEnter} onMouseLeave={handleCursorLeave}>
                <img src={photo.src} alt={photo.title} loading="lazy" />
                <div className="masonry-overlay">
                  <div className="masonry-title">{photo.title}</div>
                  <div className="masonry-loc">{photo.loc}</div>
                </div>
                <div className="masonry-zoom"><IconZoom /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <div ref={lightboxRef} id="lightbox" className={lightboxOpen ? 'open' : ''} onClick={(e) => { if (e.target === lightboxRef.current) closeLightbox(); }}>
        <div id="lightbox-close" onClick={closeLightbox}><IconClose /></div>
        <div id="lightbox-prev" onClick={prevLightbox}><IconChevronLeft /></div>
        <img src={filteredPhotos[lightboxIndex]?.src || ''} alt="" id="lightbox-img" />
        <div id="lightbox-next" onClick={nextLightbox}><IconChevronRight /></div>
      </div>

      {/* About */}
      <section id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrap reveal-left">
              <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80" alt="CREATIVENK — Photographer" />
              <div className="about-year-badge"><span>12</span><span>Years</span></div>
            </div>
            <div className="about-text reveal-right">
              <div className="section-label">The Artist</div>
              <h2 className="section-title">A Vision<br />Rooted in <em>Truth</em></h2>
              <p className="about-bio">"Photography is not about the camera. It's about the invisible thread between two souls in a single fraction of time."</p>
              <p className="about-body">Based between Paris and New York, CREATIVENK has spent over a decade translating raw human emotion into timeless visual narratives. Their work has graced the covers of Vogue, Harper's Bazaar, and been exhibited across four continents.</p>
              <p className="about-body">With an eye for cinematic light and a deep reverence for authenticity, CREATIVENK approaches every session as a collaboration — a dialogue between subject and photographer that transcends the ordinary.</p>
              <div className="about-stats">
                <div className="stat-item"><div className="stat-num counter" data-target="12">0</div><div className="stat-label">Years Active</div></div>
                <div className="stat-item"><div className="stat-num counter" data-target="840">0</div><div className="stat-label">Sessions Done</div></div>
                <div className="stat-item"><div className="stat-num counter" data-target="38">0</div><div className="stat-label">Awards Won</div></div>
              </div>
              <div className="brands-row">
                <span className="brand-name">Vogue</span><span className="brand-name">Chanel</span><span className="brand-name">Dior</span><span className="brand-name">Hermès</span><span className="brand-name">Bazaar</span>
              </div>
              <div className="signature">CREATIVENK</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services">
        <div className="container">
          <div style={{ textAlign: 'center' }} className="reveal">
            <div className="section-label" style={{ justifyContent: 'center' }}>What We Offer</div>
            <h2 className="section-title">Premium <em>Services</em></h2>
          </div>
          <div className="services-grid">
            {[
              { Icon: IconWedding, name: 'Wedding Photography', desc: 'Your love story deserves to be told with the depth and artistry it deserves. Full-day coverage with a cinematic editorial approach.', price: 'Starting from $3,500' },
              { Icon: IconFashion, name: 'Fashion Photography', desc: 'Editorial and commercial fashion work crafted with precision — from runway lookbooks to high-fashion campaigns.', price: 'Starting from $1,800' },
              { Icon: IconEvent, name: 'Event Coverage', desc: 'Galas, launches, and brand activations captured with the same editorial eye that defines every piece of work.', price: 'Starting from $2,200' },
              { Icon: IconPortrait, name: 'Studio Portraits', desc: 'Intimate, powerful portraits in a controlled studio environment. Perfect for personal branding, actors, and executives.', price: 'Starting from $800' },
              { Icon: IconProduct, name: 'Product Photography', desc: 'Luxury product photography for fashion, beauty, and lifestyle brands that demand visual perfection.', price: 'Starting from $1,200' },
              { Icon: IconCreative, name: 'Creative Direction', desc: 'Full creative direction for editorials, campaigns, and brand identity shoots — concept through final delivery.', price: 'Starting from $4,000' },
            ].map((service, index) => (
              <div key={index} className={`service-card reveal delay-${(index % 3) + 1}`}>
                <span className="service-icon"><service.Icon /></span>
                <div className="service-name">{service.name}</div>
                <p className="service-desc">{service.desc}</p>
                <div className="service-price">{service.price}</div>
                <a href="#booking" className="btn-link">Enquire Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <div className="container">
          <div className="testi-header">
            <div className="reveal">
              <div className="section-label">Kind Words</div>
              <h2 className="section-title">Client <em>Stories</em></h2>
            </div>
            <div className="testi-nav reveal">
              <button className="testi-btn" onClick={() => moveTesti(-1)} onMouseEnter={handleCursorEnter} onMouseLeave={handleCursorLeave}><IconChevronLeft /></button>
              <button className="testi-btn" onClick={() => moveTesti(1)} onMouseEnter={handleCursorEnter} onMouseLeave={handleCursorLeave}><IconChevronRight /></button>
            </div>
          </div>
          <div className="testi-track-wrap">
            <div className="testi-track" ref={testiTrackRef} style={{ transform: `translateX(-${testiPos * getTestiSlideWidth()}px)` }}>
              {testimonialsData.map((testi, index) => (
                <div key={index} className="testi-card">
                  <div className="testi-card-icon"><IconQuote /></div>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => <IconStar key={i} />)}
                  </div>
                  <p className="testi-text">{testi.text}</p>
                  <div className="testi-author">
                    <img src={testi.avatar} alt={testi.name} className="testi-avatar" />
                    <div>
                      <div className="testi-name">{testi.name}</div>
                      <div className="testi-role">{testi.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing">
        <div className="container">
          <div style={{ textAlign: 'center' }} className="reveal">
            <div className="section-label" style={{ justifyContent: 'center' }}>Investment</div>
            <h2 className="section-title">Choose Your <em>Experience</em></h2>
          </div>
          <div className="pricing-grid">
            {[
              { name: 'Essentials', price: '850', period: 'per session', features: ['2-hour photoshoot','30 edited photographs','1 location included','Online gallery delivery','7-day turnaround','Print release included'], featured: false },
              { name: 'Signature', price: '1,800', period: 'per session', features: ['Full-day photoshoot (6hrs)','80 edited photographs','3 locations included','Wardrobe consultation','Premium online gallery','5-day turnaround','5 fine-art prints'], featured: true },
              { name: 'Prestige', price: '3,500', period: 'per session', features: ['2-day photoshoot','Unlimited edited images','Multiple locations','Full creative direction','Hair & makeup coordination','3-day priority turnaround','Custom photobook','Dedicated retouching'], featured: false },
            ].map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.featured ? 'featured' : ''} reveal delay-${index + 1}`}>
                {plan.featured && <div className="popular-badge">Most Popular</div>}
                <div className="plan-name">{plan.name}</div>
                <div className="plan-price"><span>$</span>{plan.price}</div>
                <div className="plan-period">{plan.period}</div>
                <ul className="plan-features">{plan.features.map((feat, i) => <li key={i}>{feat}</li>)}</ul>
                <a href="#booking" className="btn-book">Book Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking">
        <div className="container">
          <div className="booking-grid">
            <div className="reveal-left">
              <div className="section-label">Get In Touch</div>
              <h2 className="section-title">Start Your <em>Story</em></h2>
              <p style={{ fontSize:'0.85rem', color:'var(--grey)', lineHeight:'1.9', margin:'2rem 0' }}>Every great photograph begins with a conversation. Share your vision, and together we'll create images that endure beyond the moment.</p>
              <div className="contact-item"><span className="contact-icon"><IconEmail /></span><div className="contact-text"><strong>Email</strong>hello@creativenk.com</div></div>
              <div className="contact-item"><span className="contact-icon"><IconLocation /></span><div className="contact-text"><strong>Studio</strong>12 Rue du Faubourg, Paris &amp; 340 W Broadway, New York</div></div>
              <div className="contact-item"><span className="contact-icon"><IconClock /></span><div className="contact-text"><strong>Availability</strong>Booking 3–6 months in advance. Limited sessions per month.</div></div>
            </div>
            <div className="reveal-right">
              {!formSubmitted ? (
                <form className="booking-form" id="bookingForm" onSubmit={handleFormSubmit}>
                  <div className="form-row">
                    <div className="form-group"><label>Full Name</label><input type="text" id="fname" placeholder="Your name" value={formData.fname} onChange={handleFormChange} required /></div>
                    <div className="form-group"><label>Email Address</label><input type="email" id="femail" placeholder="your@email.com" value={formData.femail} onChange={handleFormChange} required /></div>
                  </div>
                  <div className="form-row">
                    <div className="form-group"><label>Phone Number</label><input type="tel" id="fphone" placeholder="+1 (000) 000-0000" value={formData.fphone} onChange={handleFormChange} /></div>
                    <div className="form-group"><label>Session Type</label><select id="ftype" value={formData.ftype} onChange={handleFormChange}><option value="">Select type</option><option>Wedding Photography</option><option>Fashion / Editorial</option><option>Portrait Session</option><option>Event Coverage</option><option>Product Photography</option><option>Creative Direction</option></select></div>
                  </div>
                  <div className="form-group"><label>Preferred Date</label><input type="date" id="fdate" value={formData.fdate} onChange={handleFormChange} /></div>
                  <div className="form-group"><label>Tell Us Your Vision</label><textarea id="fmsg" placeholder="Describe your project, location ideas, inspiration, and any special requests..." value={formData.fmsg} onChange={handleFormChange} /></div>
                  <button type="submit" className="btn-primary" style={{ border:'none', cursor:'pointer', fontFamily:'Jost, sans-serif' }}>Send Enquiry <IconArrowRight /></button>
                </form>
              ) : (
                <div className="form-success" style={{ display:'block' }}>
                  <div className="check"><IconCheck /></div>
                  <h3>Thank You, <span>{formName || 'Beautiful Soul'}</span></h3>
                  <p>Your enquiry has been received. CREATIVENK will be in touch within 24 hours to begin crafting your story.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Grid */}
      <section id="social">
        <div className="container">
          <div className="insta-header reveal">
            <div>
              <div className="section-label">Follow Along</div>
              <div className="insta-handle">@creativenk.photo</div>
            </div>
            <div className="insta-stats">
              {[{ strong:'184K', span:'Followers' },{ strong:'2.1K', span:'Posts' },{ strong:'98%', span:'Engagement' }].map((stat, i) => (
                <div key={i} className={`insta-stat reveal delay-${i + 1}`}><strong>{stat.strong}</strong><span>{stat.span}</span></div>
              ))}
            </div>
          </div>
          <div className="insta-grid reveal">
            {[
              'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80',
              'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80',
              'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80',
              'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80',
              'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80',
              'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
            ].map((src, i) => (
              <div key={i} className="insta-item" onMouseEnter={handleCursorEnter} onMouseLeave={handleCursorLeave}>
                <img src={src} alt="Instagram" />
                <div className="insta-item-overlay"><IconHeart /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">CREATIVENK</div>
              <p>Photography &amp; visual storytelling studio based between Paris and New York. Capturing truth in a single frame.</p>
              <div className="footer-social-row">
                <a href="#" className="footer-social-link" aria-label="Instagram"><IconInstagram /></a>
                <a href="#" className="footer-social-link" aria-label="Pinterest"><IconPinterest /></a>
                <a href="#" className="footer-social-link" aria-label="Behance"><IconBehance /></a>
                <a href="#" className="footer-social-link" aria-label="LinkedIn"><IconLinkedin /></a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Navigate</h4>
              <ul className="footer-links">
                <li><a href="#portfolio">Portfolio</a></li><li><a href="#about">About</a></li><li><a href="#services">Services</a></li><li><a href="#pricing">Pricing</a></li><li><a href="#booking">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#">Wedding</a></li><li><a href="#">Fashion</a></li><li><a href="#">Portrait</a></li><li><a href="#">Events</a></li><li><a href="#">Product</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Stay Inspired</h4>
              <p style={{ fontSize:'0.78rem', color:'var(--grey)', lineHeight:'1.7', marginBottom:'1rem' }}>Subscribe for behind-the-scenes, new work, and occasional thoughts on light.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="your@email.com" />
                <button type="submit" aria-label="Subscribe"><IconArrowRight /></button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© 2025 CREATIVENK Photography. All rights reserved.</div>
            <div className="footer-copy" style={{ letterSpacing:'0.05em' }}>Paris · New York · Available Worldwide</div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <a href="#hero" id="back-top" title="Back to top" className={showBackTop ? 'visible' : ''}><IconArrowUp /></a>

      {/* Sticky Social */}
      <div className={`sticky-social ${showStickySocial ? 'show' : ''}`}>
        <a href="#" title="Instagram" aria-label="Instagram"><IconInstagram /></a>
        <a href="#" title="Pinterest" aria-label="Pinterest"><IconPinterest /></a>
        <a href="#" title="Behance" aria-label="Behance"><IconBehance /></a>
      </div>
    </>
  );
};

export default ElenaVoss;