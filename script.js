/* ================================================================
   SWEET SIXTEEN BIRTHDAY LETTER — script.js (CINEMATIC EDITION)
   ================================================================ */

const CONFIG = {
  person: {
    name: 'Lakeisha Derly Surayuda',
    born: '12 July 2010',
    birthday: '12 July 2026',
  },
  photos: {
    main: 'assets/images/derly.jpg',
    final: 'assets/images/final-photo.jpg',
    memoryCount: 12,
    memoryFolder: 'assets/images/memory/',
  },
  music: {
    main: 'assets/music/main-theme.mp3',
    final: 'assets/music/final-letter.mp3',
  },
  letters: {
    main: `On the day you turned sixteen, I wanted you to have something that felt like more than just a message — a little world made just for you.

Sixteen years ago, you arrived and quietly made everyone around you a little softer, a little happier. Since then you've grown into someone warm, funny, a little bit chaotic in the best way, and endlessly kind to the people lucky enough to know you.

This page is a small keepsake of that — a letter, some secrets from the people who love you, and one more thing waiting at the very end. Take your time. Open each envelope slowly.

You deserve every bit of this day, and every birthday after it.

With all my love, today and always.`,

    final: `If you've made it this far, that means you opened every secret and read every wish — and now it's just the two of us.

Watching you grow into sixteen has been one of my favourite things. I've seen you laugh until you cried, cry until you laughed again, chase ridiculous ideas, and somehow make every room you walk into feel a little warmer.

Sixteen is the beginning of a chapter where you get to decide more and more of who you become — and I already know it's going to be someone wonderful, because you already are.

So happy sweet sixteen, Derly. May this year give you everything your sixteen-year-old heart is hoping for, and a few things you didn't even know to wish for.

I'm so endlessly proud of you. Always in your corner.`,
  },

  friends: [
    { name: 'Friend Name 1',  photo: 'assets/images/friends/friend1.jpg',  togetherPhoto: null, music: 'assets/music/friends/friend1.mp3',  message: 'Happy sweet sixteen! I still can\'t believe how long we\'ve been friends — here\'s to many more years of inside jokes and late-night calls. I love you so much, Derly.' },
    { name: 'Friend Name 2',  photo: 'assets/images/friends/friend2.jpg',  togetherPhoto: null, music: 'assets/music/friends/friend2.mp3',  message: 'You have no idea how much brighter everything is with you around. Happy birthday to the kindest person I know — sixteen looks amazing on you already.' },
    { name: 'Friend Name 3',  photo: 'assets/images/friends/friend3.jpg',  togetherPhoto: null, music: 'assets/music/friends/friend3.mp3',  message: 'Happy birthday! Thank you for always being the friend who shows up, who listens, and who somehow always knows what to say. Sixteen is so lucky to have you.' },
    { name: 'Friend Name 4',  photo: 'assets/images/friends/friend4.jpg',  togetherPhoto: null, music: 'assets/music/friends/friend4.mp3',  message: 'Every memory with you is one of my favourites. Happy sweet sixteen — may this year be as wonderful and funny and warm as you are.' },
    { name: 'Friend Name 5',  photo: 'assets/images/friends/friend5.jpg',  togetherPhoto: null, music: 'assets/music/friends/friend5.mp3',  message: 'Happy birthday to my favourite person to overthink everything with. Sixteen years of you being amazing — let\'s make this year even better.' },
    { name: 'Friend Name 6',  photo: 'assets/images/friends/friend6.jpg',  togetherPhoto: null, music: 'assets/music/friends/friend6.mp3',  message: 'I hope today reminds you of how loved you are, because you really, really are. Happy sweet sixteen, Derly — you deserve the whole world.' },
    { name: 'Friend Name 7',  photo: 'assets/images/friends/friend7.jpg',  togetherPhoto: null, music: 'assets/music/friends/friend7.mp3',  message: 'Sixteen suits you so well already. Thank you for every laugh, every secret kept, and every memory made — happy birthday to one of the best people I know.' },
    { name: 'Friend Name 8',  photo: 'assets/images/friends/friend8.jpg',  togetherPhoto: null, music: 'assets/music/friends/friend8.mp3',  message: 'Happy birthday! You make even the most ordinary days feel a little special. Here\'s to sixteen and everything wonderful it\'s about to bring you.' },
    { name: 'Friend Name 9',  photo: 'assets/images/friends/friend9.jpg',  togetherPhoto: null, music: 'assets/music/friends/friend9.mp3',  message: 'I\'m so grateful this year gave me you. Happy sweet sixteen — may you laugh as much as you make the rest of us laugh.' },
    { name: 'Friend Name 10', photo: 'assets/images/friends/friend10.jpg', togetherPhoto: null, music: 'assets/music/friends/friend10.mp3', message: 'Happy birthday to someone who feels like home. Sixteen years of you in this world has made it so much better — I can\'t wait to see what this year brings you.' },
  ],

  timeline: [
    { year: '2010', text: 'Born and brought happiness to the world.' },
    { year: '2013', text: 'Learning and growing every day.' },
    { year: '2016', text: 'A cheerful little adventurer.' },
    { year: '2020', text: 'Creating memories and friendships.' },
    { year: '2023', text: 'Growing stronger and wiser.' },
    { year: '2026', text: 'Sweet Sixteen.' },
  ],
};

/* ================================================================
   STATE
   ================================================================ */
const state = {
  hasOpenedLetter: false,
  openedFriends: loadOpenedFriends(),
  currentAudioKey: null,
  isMuted: false,
  volume: 0.6,
  activeFriendIndex: null,
  finalCelebrationActive: false,
};

/* ================================================================
   DOM REFS
   ================================================================ */
const $ = (sel, root = document) => root.querySelector(sel);
const $all = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const loadingScreen   = $('#loading-screen');
const loadingBarFill  = $('#loading-bar-fill');
const siteEl          = $('#site');
const particleLayer   = $('#particle-layer');

const heroEnvelopeBtn = $('#open-letter-btn');
const heroCtaBtn      = $('#open-letter-cta');

const friendsGrid     = $('#friends-grid');
const progressCountEl = $('#progress-count');
const progressBarFill = $('#progress-bar-fill');

const finalTeaser      = $('#final-teaser');
const finalEnvelopeBtn = $('#final-envelope-btn');

const memoryGrid      = $('#memory-grid');
const timelineTrack   = $('#timeline-track');

const friendModal        = $('#friend-modal');
const friendModalBackdrop= $('#friend-modal-backdrop');
const friendModalClose   = $('#friend-modal-close');
const modalEnvelope      = $('#modal-envelope');
const modalContent       = $('#modal-content');
const modalFriendPhoto   = $('#modal-friend-photo');
const modalTogetherWrap  = $('#modal-together-wrap');
const modalTogetherPhoto = $('#modal-together-photo');
const modalFriendName    = $('#modal-friend-name');
const modalFriendText    = $('#modal-friend-text');

const finalModal         = $('#final-modal');
const finalModalBackdrop = $('#final-modal-backdrop');
const finalModalClose    = $('#final-modal-close');
const finalPhotoEl       = $('#final-photo');
const finalLetterTextEl  = $('#final-letter-text');

const audioMain   = $('#audio-main');
const audioFriend = $('#audio-friend');
const audioFinal  = $('#audio-final');

const musicPlayer     = $('#music-player');
const musicToggleBtn  = $('#music-toggle');
const musicPlayPause  = $('#music-play-pause');
const musicMuteBtn    = $('#music-mute');
const musicVolume     = $('#music-volume');
const musicTrackName  = $('#music-track-name');

const mainLetterTextEl = $('#main-letter-text');

/* ================================================================
   INIT
   ================================================================ */
document.addEventListener('DOMContentLoaded', init);

function init() {
  applyConfigText();
  renderFriendCards();
  renderMemoryWall();
  renderTimeline();
  restoreProgressUI();
  setupRevealObserver();
  setupAmbientParticles();
  setupMusicPlayerUI();
  setupEventListeners();
  runLoadingSequence();
}

function applyConfigText() {
  mainLetterTextEl.dataset.fullText = CONFIG.letters.main;
  finalLetterTextEl.dataset.fullText = CONFIG.letters.final;
  finalPhotoEl.src = CONFIG.photos.final;
  attachImageFallback(finalPhotoEl, 'final-photo.jpg');

  const derlyPhoto = $('#derly-photo');
  derlyPhoto.src = CONFIG.photos.main;
  attachImageFallback(derlyPhoto, 'derly.jpg');
}

/* ================================================================
   LOADING SCREEN — smooth cinematic reveal
   ================================================================ */
function runLoadingSequence() {
  let progress = 0;
  const duration = 2600;
  const start = performance.now();

  function tick(now) {
    const raw = (now - start) / duration;
    // Ease out cubic for natural deceleration
    progress = Math.min(1, 1 - Math.pow(1 - raw, 3));
    loadingBarFill.style.width = `${progress * 100}%`;
    if (raw < 1) {
      requestAnimationFrame(tick);
    } else {
      setTimeout(finishLoading, 300);
    }
  }
  requestAnimationFrame(tick);
}

function finishLoading() {
  loadingScreen.classList.add('is-hidden');
  siteEl.removeAttribute('aria-hidden');
  // Stagger the site reveal with a slight delay for cinematic feel
  setTimeout(() => {
    siteEl.classList.add('is-visible');
  }, 80);
  setTimeout(() => loadingScreen.remove(), 1200);
}

/* ================================================================
   SCROLL REVEAL — staggered, layered entrance animations
   ================================================================ */
function setupRevealObserver() {
  const sectionGroups = [
    { selector: '.photo-reveal', delay: 0 },
    { selector: '.birthday-title', delay: 120 },
    { selector: '.main-letter', delay: 200 },
    { selector: '.friends-section .section-eyebrow', delay: 0 },
    { selector: '.friends-section .section-title', delay: 80 },
    { selector: '.progress-tracker', delay: 140 },
    { selector: '.friend-card', delay: 60, stagger: true },
    { selector: '.memory-wall .section-eyebrow', delay: 0 },
    { selector: '.memory-wall .section-title', delay: 80 },
    { selector: '.memory-tile', delay: 0, stagger: true, staggerBase: 40 },
    { selector: '.timeline-section .section-eyebrow', delay: 0 },
    { selector: '.timeline-section .section-title', delay: 80 },
    { selector: '.timeline-item', delay: 0, stagger: true, staggerBase: 100 },
    { selector: '.footer__text', delay: 0 },
  ];

  const allTargets = new Set();

  sectionGroups.forEach(group => {
    const els = $all(group.selector);
    els.forEach((el, i) => {
      if (allTargets.has(el)) return;
      allTargets.add(el);
      el.classList.add('reveal');
      const delay = group.stagger
        ? group.delay + i * (group.staggerBase || 70)
        : group.delay;
      el.style.transitionDelay = `${delay}ms`;
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        if (entry.target.classList.contains('main-letter')) {
          startTypewriterOnce(mainLetterTextEl);
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  allTargets.forEach(el => observer.observe(el));
}

/* ================================================================
   AMBIENT PARTICLE SYSTEM — natural, varied motion
   ================================================================ */
const AMBIENT_SYMBOLS = [
  { char: '✦', cls: 'particle--sparkle', sizeRange: [10, 18] },
  { char: '✧', cls: 'particle--sparkle', sizeRange: [8, 14] },
  { char: '✶', cls: 'particle--sparkle', sizeRange: [9, 16] },
  { char: '🌸', cls: 'particle--flower', sizeRange: [14, 22] },
  { char: '🌷', cls: 'particle--flower', sizeRange: [14, 20] },
  { char: '💕', cls: 'particle--heart', sizeRange: [12, 18] },
  { char: '💙', cls: 'particle--heart', sizeRange: [10, 16] },
  { char: '🎈', cls: 'particle--balloon', sizeRange: [18, 28] },
  { char: '⭐', cls: 'particle--sparkle', sizeRange: [10, 16] },
  { char: '🦋', cls: 'particle--flower', sizeRange: [14, 22] },
];

let ambientInterval = null;
let particlesActive = true;

function setupAmbientParticles() {
  ambientInterval = setInterval(spawnAmbientParticle, 700);
}

function spawnAmbientParticle() {
  if (document.hidden || !particlesActive) return;
  const pick = AMBIENT_SYMBOLS[Math.floor(Math.random() * AMBIENT_SYMBOLS.length)];
  const el = document.createElement('span');
  el.className = `particle ${pick.cls}`;
  el.textContent = pick.char;
  el.style.left = `${Math.random() * 100}%`;

  // Varied size
  const size = pick.sizeRange[0] + Math.random() * (pick.sizeRange[1] - pick.sizeRange[0]);
  el.style.fontSize = `${size}px`;

  // Varied drift and spin
  el.style.setProperty('--drift', `${(Math.random() - 0.5) * 160}px`);
  el.style.setProperty('--spin-end', `${(Math.random() - 0.5) * 540}deg`);

  // Varied speed and opacity
  const duration = 10 + Math.random() * 9;
  const delay = Math.random() * 1.5;
  el.style.animationDuration = `${duration}s`;
  el.style.animationDelay = `${delay}s`;
  el.style.opacity = String(0.5 + Math.random() * 0.5);

  particleLayer.appendChild(el);
  setTimeout(() => el.remove(), (duration + delay) * 1000 + 400);
}

function fadeParticlesOut() {
  particlesActive = false;
  particleLayer.style.transition = 'opacity 3s ease';
  particleLayer.style.opacity = '0';
}

function fadeParticlesIn() {
  particlesActive = true;
  particleLayer.style.transition = 'opacity 3s ease';
  particleLayer.style.opacity = '1';
}

/* ================================================================
   CONFETTI SYSTEM — physics-based, high-density
   ================================================================ */
const CONFETTI_COLORS = [
  '#d9eeff', '#ffe3ec', '#ffffff', '#c0d8f0',
  '#ffb6c1', '#e8c172', '#b8d4f0', '#f0c4d4',
  '#afd6f5', '#f5c6dc', '#d4e8ff', '#ffe0ea'
];
const CONFETTI_SHAPES = ['circle', 'rect', 'square', 'star', 'heart'];

function createConfettiCanvas() {
  let canvas = document.getElementById('confetti-canvas');
  if (canvas) return canvas;
  canvas = document.createElement('canvas');
  canvas.id = 'confetti-canvas';
  canvas.style.cssText = `
    position: fixed; inset: 0; width: 100%; height: 100%;
    z-index: 9999; pointer-events: none;
    will-change: transform;
  `;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  return canvas;
}

function launchConfettiExplosion({ count = 300, duration = 8000, origins = null } = {}) {
  const canvas = createConfettiCanvas();
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const defaultOrigins = [
    { x: 0.2, y: 0.3 }, { x: 0.5, y: 0 }, { x: 0.8, y: 0.3 },
    { x: 0, y: 0.5 }, { x: 1, y: 0.5 },
    { x: 0.35, y: 0 }, { x: 0.65, y: 0 },
  ];
  const spawnOrigins = origins || defaultOrigins;

  for (let i = 0; i < count; i++) {
    const origin = spawnOrigins[Math.floor(Math.random() * spawnOrigins.length)];
    const angle = (Math.random() * Math.PI * 2);
    const speed = 3 + Math.random() * 8;
    const shape = CONFETTI_SHAPES[Math.floor(Math.random() * CONFETTI_SHAPES.length)];
    const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    const size = 5 + Math.random() * 12;

    particles.push({
      x: origin.x * canvas.width,
      y: origin.y * canvas.height,
      vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 4,
      vy: Math.sin(angle) * speed - Math.random() * 6,
      gravity: 0.12 + Math.random() * 0.08,
      airResistance: 0.985 + Math.random() * 0.01,
      spin: (Math.random() - 0.5) * 0.3,
      rotation: Math.random() * Math.PI * 2,
      color,
      shape,
      size,
      w: size * (shape === 'rect' ? 0.4 : 1),
      h: size * (shape === 'rect' ? 1.8 : 1),
      opacity: 1,
      fadeDelay: duration * 0.55 + Math.random() * (duration * 0.25),
      life: 0,
    });
  }

  const startTime = performance.now();
  let raf;

  function draw(now) {
    const elapsed = now - startTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let alive = 0;
    particles.forEach(p => {
      p.life = elapsed;
      // Fade out near the end
      if (p.life > p.fadeDelay) {
        p.opacity = Math.max(0, 1 - (p.life - p.fadeDelay) / (duration * 0.3));
      }
      if (p.opacity <= 0) return;
      alive++;

      p.vx *= p.airResistance;
      p.vy = p.vy * p.airResistance + p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.spin;

      if (p.y > canvas.height + 40) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
        p.vy = Math.random() * 2 + 1;
      }

      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;

      if (p.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === 'rect') {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      } else if (p.shape === 'square') {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      } else if (p.shape === 'star') {
        drawStar(ctx, 0, 0, 4, p.size / 2, p.size / 4);
      } else if (p.shape === 'heart') {
        drawHeart(ctx, 0, 0, p.size * 0.7);
      }
      ctx.restore();
    });

    if (elapsed < duration && alive > 0) {
      raf = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Keep canvas for potential reuse
    }
  }

  raf = requestAnimationFrame(draw);
  return () => cancelAnimationFrame(raf);
}

function drawStar(ctx, cx, cy, spikes, outerR, innerR) {
  let rot = (Math.PI / 2) * 3;
  const step = Math.PI / spikes;
  ctx.beginPath();
  ctx.moveTo(cx, cy - outerR);
  for (let i = 0; i < spikes; i++) {
    ctx.lineTo(cx + Math.cos(rot) * outerR, cy + Math.sin(rot) * outerR);
    rot += step;
    ctx.lineTo(cx + Math.cos(rot) * innerR, cy + Math.sin(rot) * innerR);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerR);
  ctx.closePath();
  ctx.fill();
}

function drawHeart(ctx, cx, cy, size) {
  const s = size * 0.5;
  ctx.beginPath();
  ctx.moveTo(cx, cy + s * 0.4);
  ctx.bezierCurveTo(cx, cy, cx - s, cy, cx - s, cy - s * 0.4);
  ctx.bezierCurveTo(cx - s, cy - s, cx, cy - s, cx, cy - s * 0.4);
  ctx.bezierCurveTo(cx, cy - s, cx + s, cy - s, cx + s, cy - s * 0.4);
  ctx.bezierCurveTo(cx + s, cy, cx, cy, cx, cy + s * 0.4);
  ctx.closePath();
  ctx.fill();
}

/* ================================================================
   BURST EFFECT — enhanced radial explosion
   ================================================================ */
function spawnBurst(originX, originY, { count = 34, symbols = ['🎉', '🎊', '✨', '💖', '🌸', '🎈'] } = {}) {
  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'burst';
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    const angle = Math.random() * Math.PI * 2;
    const distance = 60 + Math.random() * 280;
    const bx = Math.cos(angle) * distance;
    const by = Math.sin(angle) * distance - 80;
    el.style.left = `${originX}px`;
    el.style.top = `${originY}px`;
    el.style.fontSize = `${12 + Math.random() * 18}px`;
    el.style.setProperty('--bx', `${bx}px`);
    el.style.setProperty('--by', `${by}px`);
    el.style.setProperty('--br', `${(Math.random() - 0.5) * 600}deg`);
    el.style.animationDelay = `${Math.random() * 180}ms`;
    el.style.animationDuration = `${1.2 + Math.random() * 0.6}s`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2200);
  }
}

function burstFromElement(el, opts) {
  const rect = el.getBoundingClientRect();
  spawnBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, opts);
}

/* ================================================================
   FIREWORKS — background fireworks for final letter
   ================================================================ */
function launchFireworks(duration = 12000) {
  const canvas = document.getElementById('confetti-canvas') || createConfettiCanvas();
  const ctx = canvas.getContext('2d');
  const rockets = [];
  const startTime = performance.now();
  let raf;

  function createRocket() {
    const x = canvas.width * (0.2 + Math.random() * 0.6);
    const y = canvas.height;
    const targetY = canvas.height * (0.1 + Math.random() * 0.45);
    const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    return { x, y, targetY, vx: (Math.random() - 0.5) * 1.5, vy: -8 - Math.random() * 5, color, exploded: false, sparks: [], trail: [] };
  }

  function explodeRocket(r) {
    r.exploded = true;
    for (let i = 0; i < 60; i++) {
      const angle = (i / 60) * Math.PI * 2;
      const speed = 1.5 + Math.random() * 3.5;
      const c = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
      r.sparks.push({ x: r.x, y: r.y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, opacity: 1, color: c, size: 2 + Math.random() * 3 });
    }
  }

  let lastRocket = 0;
  function tick(now) {
    const elapsed = now - startTime;
    ctx.fillStyle = 'rgba(0,0,0,0)';

    if (now - lastRocket > 1400 + Math.random() * 800 && elapsed < duration - 3000) {
      rockets.push(createRocket());
      lastRocket = now;
    }

    rockets.forEach(r => {
      if (!r.exploded) {
        r.x += r.vx;
        r.y += r.vy;
        r.trail.push({ x: r.x, y: r.y, opacity: 0.7 });
        if (r.trail.length > 8) r.trail.shift();
        r.trail.forEach((t, i) => {
          ctx.beginPath();
          ctx.arc(t.x, t.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,200,${t.opacity * (i / r.trail.length) * 0.6})`;
          ctx.fill();
        });
        if (r.y <= r.targetY) explodeRocket(r);
      } else {
        r.sparks.forEach(s => {
          s.x += s.vx;
          s.y += s.vy;
          s.vy += 0.06;
          s.vx *= 0.98;
          s.opacity -= 0.018;
          if (s.opacity > 0) {
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.size * s.opacity, 0, Math.PI * 2);
            ctx.fillStyle = s.color;
            ctx.globalAlpha = s.opacity;
            ctx.fill();
            ctx.globalAlpha = 1;
          }
        });
        r.sparks = r.sparks.filter(s => s.opacity > 0);
      }
    });

    rockets.splice(0, rockets.length, ...rockets.filter(r => !r.exploded || r.sparks.length > 0));

    if (elapsed < duration) {
      raf = requestAnimationFrame(tick);
    }
  }
  raf = requestAnimationFrame(tick);
}

/* ================================================================
   SHOOTING STARS
   ================================================================ */
function launchShootingStars(count = 12, duration = 10000) {
  const container = particleLayer;
  let launched = 0;

  function shootOne() {
    if (launched >= count) return;
    launched++;
    const el = document.createElement('div');
    el.className = 'shooting-star';
    el.style.top = `${5 + Math.random() * 40}%`;
    el.style.left = `${Math.random() * 60}%`;
    el.style.animationDuration = `${0.8 + Math.random() * 0.6}s`;
    el.style.animationDelay = `${Math.random() * 0.3}s`;
    container.appendChild(el);
    setTimeout(() => el.remove(), 2000);
    setTimeout(shootOne, 600 + Math.random() * 1200);
  }

  for (let i = 0; i < 3; i++) {
    setTimeout(shootOne, i * 800);
  }
}

/* ================================================================
   AURORA EFFECT
   ================================================================ */
function showAurora() {
  let aurora = document.getElementById('aurora-overlay');
  if (!aurora) {
    aurora = document.createElement('div');
    aurora.id = 'aurora-overlay';
    aurora.style.cssText = `
      position: fixed; inset: 0; z-index: 0; pointer-events: none;
      background: radial-gradient(ellipse at 20% 30%, rgba(111,168,220,0.18) 0%, transparent 50%),
                  radial-gradient(ellipse at 80% 20%, rgba(232,118,155,0.14) 0%, transparent 50%),
                  radial-gradient(ellipse at 50% 80%, rgba(111,168,220,0.12) 0%, transparent 50%);
      opacity: 0;
      transition: opacity 4s ease;
      animation: aurora-shift 12s ease-in-out infinite;
    `;
    document.body.appendChild(aurora);
  }
  setTimeout(() => { aurora.style.opacity = '1'; }, 100);
}

function hideAurora() {
  const aurora = document.getElementById('aurora-overlay');
  if (aurora) {
    aurora.style.opacity = '0';
    setTimeout(() => aurora.remove(), 4000);
  }
}

/* ================================================================
   TYPEWRITER — emotional slow version for final letter
   ================================================================ */
function startTypewriterOnce(el) {
  if (el.dataset.typed === 'true' || el.dataset.typing === 'true') return;
  const isFinal = el.id === 'final-letter-text';
  typewrite(el, el.dataset.fullText || '', isFinal ? 32 : 16);
}

function typewrite(el, fullText, speed = 16) {
  el.dataset.typing = 'true';
  el.textContent = '';

  const paragraphs = fullText.split(/\n\s*\n/);
  el.innerHTML = paragraphs.map(() => '<p></p>').join('');
  const pEls = $all('p', el);

  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';

  let pIndex = 0;
  let cIndex = 0;
  let cancelled = false;

  function finishInstantly() {
    cancelled = true;
    pEls.forEach((p, i) => { p.textContent = paragraphs[i]; });
    cursor.remove();
    el.dataset.typing = 'false';
    el.dataset.typed = 'true';
  }

  el.addEventListener('click', finishInstantly, { once: true });

  function step() {
    if (cancelled) return;
    const currentParagraph = paragraphs[pIndex] || '';
    if (cIndex <= currentParagraph.length) {
      pEls[pIndex].textContent = currentParagraph.slice(0, cIndex);
      pEls[pIndex].appendChild(cursor);
      cIndex++;
      // Slight random variation in typing speed for realism
      const variation = speed + (Math.random() - 0.5) * (speed * 0.4);
      setTimeout(step, variation);
    } else if (pIndex < paragraphs.length - 1) {
      pIndex++;
      cIndex = 0;
      setTimeout(step, speed * 8);
    } else {
      cursor.remove();
      el.dataset.typing = 'false';
      el.dataset.typed = 'true';
    }
  }
  step();
}

/* ================================================================
   IMAGE FALLBACKS
   ================================================================ */
function attachImageFallback(imgEl, label) {
  imgEl.addEventListener('error', () => {
    const wrap = document.createElement('div');
    wrap.className = 'img-fallback';
    wrap.innerHTML = `<span class="icon">🖼️</span><span>Add photo:<br>${label}</span>`;
    imgEl.replaceWith(wrap);
  }, { once: true });
}

/* ================================================================
   HERO: ENVELOPE OPENING — cinematic
   ================================================================ */
function setupEventListeners() {
  heroEnvelopeBtn.addEventListener('click', handleOpenLetter);
  heroCtaBtn.addEventListener('click', handleOpenLetter);

  // Enhanced hover effect for hero envelope
  heroEnvelopeBtn.addEventListener('mouseenter', () => {
    if (!state.hasOpenedLetter) {
      heroEnvelopeBtn.style.transform = 'translateY(-8px) scale(1.04)';
    }
  });
  heroEnvelopeBtn.addEventListener('mouseleave', () => {
    if (!state.hasOpenedLetter) {
      heroEnvelopeBtn.style.transform = '';
    }
  });

  friendModalClose.addEventListener('click', closeFriendModal);
  friendModalBackdrop.addEventListener('click', closeFriendModal);

  finalEnvelopeBtn.addEventListener('click', openFinalLetterCinematic);
  finalModalClose.addEventListener('click', closeFinalModal);
  finalModalBackdrop.addEventListener('click', closeFinalModal);

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (friendModal.classList.contains('is-active')) closeFriendModal();
    if (finalModal.classList.contains('is-active')) closeFinalModal();
  });
}

function handleOpenLetter() {
  if (state.hasOpenedLetter) return;
  state.hasOpenedLetter = true;

  // Cinematic camera zoom effect on hero section
  const hero = $('#hero');
  hero.style.transition = 'transform 1.4s cubic-bezier(0.22, 1, 0.36, 1), filter 1.4s ease';
  hero.style.transform = 'scale(1.06)';
  hero.style.filter = 'blur(2px)';

  heroEnvelopeBtn.classList.add('is-open');
  heroCtaBtn.disabled = true;
  heroCtaBtn.style.transition = 'opacity 0.5s ease';
  heroCtaBtn.style.opacity = '0.5';
  heroCtaBtn.textContent = 'Opening...';

  burstFromElement(heroEnvelopeBtn, { count: 40, symbols: ['🎉', '🎊', '✨', '💖', '🌸', '🎈', '💫', '⭐'] });

  playMain();

  setTimeout(() => {
    hero.style.transform = '';
    hero.style.filter = '';
  }, 1200);

  setTimeout(() => {
    $('#reveal-stage').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 750);
}

/* ================================================================
   FRIEND CARDS + PROGRESS
   ================================================================ */
function renderFriendCards() {
  CONFIG.friends.forEach((friend, index) => {
    const isOpen = state.openedFriends.has(index);
    const card = document.createElement('button');
    card.className = `friend-card${isOpen ? ' is-opened' : ''}`;
    card.dataset.index = String(index);
    card.innerHTML = `
      <span class="friend-card__icon">${isOpen ? '💙' : '🔒'}</span>
      <span class="friend-card__label">${isOpen ? friend.name : `Secret Letter #${index + 1}`}</span>
      <span class="friend-card__status">${isOpen ? 'Opened' : 'Locked'}</span>
    `;
    card.addEventListener('click', () => openFriendModal(index));
    friendsGrid.appendChild(card);
  });
}

function updateFriendCard(index) {
  const card = friendsGrid.querySelector(`[data-index="${index}"]`);
  if (!card) return;
  card.classList.add('is-opened');
  card.querySelector('.friend-card__icon').textContent = '💙';
  card.querySelector('.friend-card__label').textContent = CONFIG.friends[index].name;
  card.querySelector('.friend-card__status').textContent = 'Opened';
}

function restoreProgressUI() {
  const count = state.openedFriends.size;
  progressCountEl.textContent = String(count);
  progressBarFill.style.width = `${(count / CONFIG.friends.length) * 100}%`;
  if (count >= CONFIG.friends.length) {
    finalTeaser.hidden = false;
  }
}

function markFriendOpened(index) {
  if (state.openedFriends.has(index)) return;
  state.openedFriends.add(index);
  saveOpenedFriends(state.openedFriends);
  updateFriendCard(index);

  const count = state.openedFriends.size;
  progressCountEl.textContent = String(count);
  progressBarFill.style.width = `${(count / CONFIG.friends.length) * 100}%`;

  if (count === CONFIG.friends.length) {
    revealFinalTeaser();
  }
}

function revealFinalTeaser() {
  // Gradually calm everything before revealing final teaser
  fadeParticlesOut();

  setTimeout(() => {
    finalTeaser.hidden = false;
    finalTeaser.style.opacity = '0';
    finalTeaser.style.transform = 'translateY(30px)';

    setTimeout(() => {
      finalTeaser.style.transition = 'opacity 1.4s cubic-bezier(0.22,1,0.36,1), transform 1.4s cubic-bezier(0.22,1,0.36,1)';
      finalTeaser.style.opacity = '1';
      finalTeaser.style.transform = 'translateY(0)';

      setTimeout(() => {
        finalTeaser.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Gentle sparkle burst around the final envelope
        burstFromElement(finalEnvelopeBtn, { count: 24, symbols: ['✨', '💙', '🤍', '⭐', '✦'] });
      }, 800);
    }, 100);

    // Slowly bring particles back but softer
    setTimeout(fadeParticlesIn, 3000);
  }, 2500);
}

function loadOpenedFriends() {
  try {
    const raw = localStorage.getItem('derly16-opened-friends');
    return new Set(raw ? JSON.parse(raw) : []);
  } catch (e) { return new Set(); }
}
function saveOpenedFriends(set) {
  try {
    localStorage.setItem('derly16-opened-friends', JSON.stringify(Array.from(set)));
  } catch (e) {}
}

/* ================================================================
   FRIEND LETTER MODAL — cinematic envelope opening
   ================================================================ */
function openFriendModal(index) {
  state.activeFriendIndex = index;
  const friend = CONFIG.friends[index];

  modalEnvelope.classList.remove('is-open');
  modalEnvelope.hidden = false;
  modalEnvelope.style.opacity = '1';
  modalContent.hidden = true;
  modalFriendText.dataset.typed = 'false';
  modalFriendText.dataset.typing = 'false';

  document.body.classList.add('modal-open');
  friendModal.classList.add('is-active');
  friendModal.setAttribute('aria-hidden', 'false');

  fadeOut(audioMain, 2200).then(() => playFriendAudio(friend));

  // Slight delay, then animate flap
  setTimeout(() => {
    modalEnvelope.classList.add('is-open');
    burstFromElement(modalEnvelope, { count: 20, symbols: ['✨', '💌', '💖', '🌸'] });
  }, 520);

  // Fade envelope out, content in
  setTimeout(() => {
    modalEnvelope.style.transition = 'opacity 0.5s ease';
    modalEnvelope.style.opacity = '0';
    setTimeout(() => {
      modalEnvelope.hidden = true;
      modalContent.hidden = false;
      modalContent.style.opacity = '0';
      modalContent.style.transform = 'translateY(16px) scale(0.97)';

      modalFriendPhoto.src = friend.photo;
      modalFriendPhoto.alt = friend.name;
      attachImageFallback(modalFriendPhoto, friend.photo.split('/').pop());

      if (friend.togetherPhoto) {
        modalTogetherWrap.hidden = false;
        modalTogetherPhoto.src = friend.togetherPhoto;
        modalTogetherPhoto.alt = `${friend.name} and Derly`;
        attachImageFallback(modalTogetherPhoto, friend.togetherPhoto.split('/').pop());
      } else {
        modalTogetherWrap.hidden = true;
      }

      modalFriendName.textContent = friend.name;
      modalFriendText.dataset.fullText = friend.message;

      requestAnimationFrame(() => {
        modalContent.style.transition = 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)';
        modalContent.style.opacity = '1';
        modalContent.style.transform = 'translateY(0) scale(1)';
      });

      setTimeout(() => typewrite(modalFriendText, friend.message), 300);
      markFriendOpened(index);
    }, 500);
  }, 1400);
}

function closeFriendModal() {
  if (!friendModal.classList.contains('is-active')) return;

  const stage = friendModal.querySelector('.modal__stage');
  stage.style.transition = 'transform 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.5s ease';
  stage.style.transform = 'scale(0.92) translateY(12px)';
  stage.style.opacity = '0';

  setTimeout(() => {
    friendModal.classList.remove('is-active');
    friendModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    stage.style.transform = '';
    stage.style.opacity = '';
  }, 450);

  fadeOut(audioFriend, 2000).then(() => {
    if (state.hasOpenedLetter) playMain();
  });
}

/* ================================================================
   FINAL LETTER — CINEMATIC OPENING SEQUENCE
   ================================================================ */
function openFinalLetterCinematic() {
  if (state.finalCelebrationActive) return;
  state.finalCelebrationActive = true;

  // Step 1: Fade all audio, dim particles
  fadeOut(audioMain, 2500);
  fadeOut(audioFriend, 2000);
  fadeParticlesOut();

  // Step 2: Camera zoom into envelope
  const envWrap = finalEnvelopeBtn.closest('section') || finalTeaser;
  envWrap.style.transition = 'transform 1.8s cubic-bezier(0.22,1,0.36,1)';
  envWrap.style.transformOrigin = 'center center';
  envWrap.style.transform = 'scale(1.08)';

  // Step 3: Envelope trembles
  finalEnvelopeBtn.classList.add('envelope-tremble');

  // Step 4: Seal burst
  setTimeout(() => {
    burstFromElement(finalEnvelopeBtn, {
      count: 60,
      symbols: ['💙', '🤍', '✨', '⭐', '✦', '✧', '💫', '🌸', '💕']
    });
    finalEnvelopeBtn.classList.remove('envelope-tremble');
  }, 800);

  // Step 5: Background blur + aurora
  document.body.classList.add('final-cinematic-blur');
  showAurora();

  // Step 6: Silence moment
  setTimeout(() => {
    // Brief pause — emotional silence
  }, 1500);

  // Step 7: Open the modal with animation
  setTimeout(() => {
    envWrap.style.transform = '';
    document.body.classList.remove('final-cinematic-blur');

    document.body.classList.add('modal-open');
    finalModal.classList.add('is-active');
    finalModal.setAttribute('aria-hidden', 'false');

    finalLetterTextEl.dataset.typed = 'false';
    finalLetterTextEl.dataset.typing = 'false';

    // Step 8: Scale modal in with a dramatic bounce
    const stage = finalModal.querySelector('.modal__stage--final');
    stage.style.transform = 'scale(0.82) translateY(28px)';
    stage.style.opacity = '0';
    stage.style.transition = 'none';
    requestAnimationFrame(() => {
      stage.style.transition = 'transform 1.1s cubic-bezier(0.22,1,0.36,1), opacity 0.8s ease';
      stage.style.transform = 'scale(1) translateY(0)';
      stage.style.opacity = '1';
    });

    // Step 9: Play final music with slow fade in
    playFinalAudio();

    // Step 10: MASSIVE confetti explosion
    setTimeout(() => {
      launchConfettiExplosion({
        count: 1200,
        duration: 14000,
        origins: [
          { x: 0, y: 0 }, { x: 0.25, y: 0 }, { x: 0.5, y: 0 },
          { x: 0.75, y: 0 }, { x: 1, y: 0 },
          { x: 0, y: 0.3 }, { x: 1, y: 0.3 },
          { x: 0.5, y: 0.5 },
        ]
      });

      // Emoji bursts from multiple points
      const burstPoints = [
        { x: window.innerWidth * 0.15, y: window.innerHeight * 0.2 },
        { x: window.innerWidth * 0.85, y: window.innerHeight * 0.2 },
        { x: window.innerWidth * 0.5, y: window.innerHeight * 0.3 },
        { x: window.innerWidth * 0.3, y: window.innerHeight * 0.5 },
        { x: window.innerWidth * 0.7, y: window.innerHeight * 0.5 },
      ];
      burstPoints.forEach((p, i) => {
        setTimeout(() => {
          spawnBurst(p.x, p.y, {
            count: 28,
            symbols: ['💙', '🤍', '✨', '🌸', '💕', '⭐', '🎉', '🎊', '💫', '🦋', '🎈']
          });
        }, i * 250);
      });

      // Fireworks in background
      launchFireworks(12000);

      // Shooting stars
      launchShootingStars(15, 12000);
    }, 600);

    // Step 11: Show photo then typewriter — slow & emotional
    setTimeout(() => {
      const photoEl = finalModal.querySelector('.polaroid--final');
      if (photoEl) {
        photoEl.style.opacity = '0';
        photoEl.style.transform = 'scale(0.88) translateY(14px)';
        photoEl.style.transition = 'opacity 1.2s ease, transform 1.2s cubic-bezier(0.22,1,0.36,1)';
        requestAnimationFrame(() => {
          photoEl.style.opacity = '1';
          photoEl.style.transform = 'scale(1) translateY(0)';
        });
      }
    }, 900);

    setTimeout(() => {
      typewrite(finalLetterTextEl, CONFIG.letters.final, 32);
    }, 1400);

  }, 2400);
}

function closeFinalModal() {
  state.finalCelebrationActive = false;
  hideAurora();

  const stage = finalModal.querySelector('.modal__stage--final');
  if (stage) {
    stage.style.transition = 'transform 0.6s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease';
    stage.style.transform = 'scale(0.9) translateY(16px)';
    stage.style.opacity = '0';
  }

  setTimeout(() => {
    finalModal.classList.remove('is-active');
    finalModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (stage) {
      stage.style.transform = '';
      stage.style.opacity = '';
    }
  }, 560);

  // Clear confetti canvas
  const canvas = document.getElementById('confetti-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  fadeOut(audioFinal, 3000).then(() => {
    if (state.hasOpenedLetter) playMain();
    fadeParticlesIn();
  });
}

/* ================================================================
   MEMORY WALL
   ================================================================ */
function renderMemoryWall() {
  for (let i = 1; i <= CONFIG.photos.memoryCount; i++) {
    const tile = document.createElement('div');
    tile.className = 'memory-tile';
    const img = document.createElement('img');
    img.src = `${CONFIG.photos.memoryFolder}memory${i}.jpg`;
    img.alt = `Memory ${i}`;
    img.loading = 'lazy';
    attachImageFallback(img, `memory${i}.jpg`);
    tile.appendChild(img);
    memoryGrid.appendChild(tile);
  }
}

/* ================================================================
   TIMELINE
   ================================================================ */
function renderTimeline() {
  CONFIG.timeline.forEach((item) => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.innerHTML = `
      <p class="timeline-item__year">${item.year}</p>
      <p class="timeline-item__text">${item.text}</p>
    `;
    timelineTrack.appendChild(el);
  });
}

/* ================================================================
   MUSIC SYSTEM — smooth cinematic transitions
   ================================================================ */
function setVolumeImmediate(audioEl, vol) {
  audioEl.volume = Math.max(0, Math.min(1, vol));
}

function fadeIn(audioEl, target = state.volume, duration = 4000) {
  return new Promise((resolve) => {
    audioEl.volume = 0;
    audioEl.muted = state.isMuted;
    const playPromise = audioEl.play();
    if (playPromise && playPromise.catch) {
      playPromise.catch(() => {});
    }
    const steps = 40;
    const stepTime = duration / steps;
    let i = 0;
    const id = setInterval(() => {
      i++;
      // Ease in curve for smooth swell
      const progress = i / steps;
      const eased = 1 - Math.pow(1 - progress, 2);
      audioEl.volume = Math.min(target, target * eased);
      if (i >= steps) { clearInterval(id); resolve(); }
    }, stepTime);
  });
}

function fadeOut(audioEl, duration = 2500) {
  return new Promise((resolve) => {
    if (audioEl.paused || audioEl.volume === 0) { resolve(); return; }
    const startVol = audioEl.volume;
    const steps = 30;
    const stepTime = duration / steps;
    let i = 0;
    const id = setInterval(() => {
      i++;
      // Ease out for natural fade
      const progress = i / steps;
      const eased = Math.pow(1 - progress, 2);
      audioEl.volume = Math.max(0, startVol * eased);
      if (i >= steps) {
        clearInterval(id);
        audioEl.pause();
        resolve();
      }
    }, stepTime);
  });
}

function playMain() {
  if (audioMain.getAttribute('src') !== CONFIG.music.main) {
    audioMain.src = CONFIG.music.main;
  }
  audioMain.loop = true;
  state.currentAudioKey = 'main';
  musicTrackName.textContent = 'Main Theme';
  fadeIn(audioMain, state.volume, 4000);
  bindAudioErrorNote(audioMain, CONFIG.music.main);
}

function playFriendAudio(friend) {
  audioFriend.src = friend.music;
  audioFriend.loop = false;
  state.currentAudioKey = 'friend';
  musicTrackName.textContent = `${friend.name}'s Song`;
  fadeIn(audioFriend, state.volume, 3000);
  bindAudioErrorNote(audioFriend, friend.music);
}

function playFinalAudio() {
  audioFinal.src = CONFIG.music.final;
  audioFinal.loop = true;
  state.currentAudioKey = 'final';
  musicTrackName.textContent = '💙 Final Letter';
  // Extra slow fade in for emotional impact
  fadeIn(audioFinal, state.volume, 5000);
  bindAudioErrorNote(audioFinal, CONFIG.music.final);
}

function bindAudioErrorNote(audioEl, path) {
  audioEl.addEventListener('error', () => {
    musicTrackName.textContent = `Add music: ${path.split('/').pop()}`;
  }, { once: true });
}

function getCurrentAudio() {
  if (state.currentAudioKey === 'main') return audioMain;
  if (state.currentAudioKey === 'friend') return audioFriend;
  if (state.currentAudioKey === 'final') return audioFinal;
  return null;
}

/* ================================================================
   FLOATING MUSIC PLAYER UI
   ================================================================ */
function setupMusicPlayerUI() {
  musicVolume.value = String(state.volume);

  musicToggleBtn.addEventListener('click', () => {
    musicPlayer.classList.toggle('is-open');
  });

  musicPlayPause.addEventListener('click', () => {
    const audio = getCurrentAudio();
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
      musicPlayPause.textContent = '⏸';
    } else {
      audio.pause();
      musicPlayPause.textContent = '▶';
    }
  });

  musicMuteBtn.addEventListener('click', () => {
    state.isMuted = !state.isMuted;
    [audioMain, audioFriend, audioFinal].forEach((a) => { a.muted = state.isMuted; });
    musicMuteBtn.textContent = state.isMuted ? '🔈' : '🔊';
  });

  musicVolume.addEventListener('input', (e) => {
    state.volume = parseFloat(e.target.value);
    const audio = getCurrentAudio();
    if (audio) setVolumeImmediate(audio, state.volume);
  });

  [audioMain, audioFriend, audioFinal].forEach((audio) => {
    audio.addEventListener('play', () => { musicPlayPause.textContent = '⏸'; });
    audio.addEventListener('pause', () => { musicPlayPause.textContent = '▶'; });
  });
}   