import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  ArrowDown, ArrowRight, Building2, CheckCircle2, ChevronRight, HardHat,
  Mail, MapPin, Menu, Phone, ShieldCheck, Users, Wrench, X, Zap,
  Hammer, Paintbrush, Cable, Pipette, Ruler, Layers3, Truck, Star, Sun, Moon
} from 'lucide-react';

// All website photos are stored locally in public/images.
// To change any picture, replace the matching file in that folder and keep the same filename.
const HERO_IMAGE = '/images/hero.png';
const SITE_IMAGE = '/images/about-site.jpg';
const TEAM_IMAGE = '/images/team.jpg';
const PROJECT_1 = '/images/project-01.jpg';
const PROJECT_2 = '/images/project-02.jpg';
const PROJECT_3 = '/images/project-03.jpg';
const WHY_US_IMAGE = '/images/why-us.jpg';

const gallery = [
  {
    image: "/images/gallery-01.jpg",
    name: "Munna Sah Hira",
    designation: "Managing Director",
  },
  {
    image: "/images/gallery-02.jpg",
    name: "Ramees Kabeer",
    designation: "General Manager",
  },
  {
    image: "/images/gallery-03.jpg",
    name: "Eidi Amin",
    designation: "Operations Manager",
  },
  // {
  //   image: "/images/gallery-04.jpg",
  //   name: "Abdul basit",
  //   designation: "Transport Manager",
  // },
  // {
  //   image: "/images/gallery-05.jpg",
  //   name: "Dhanjay",
  //   designation: "HR Manager",
  // },
  // {
  //   image: "/images/gallery-06.jpg",
  //   name: "Praveen Joseph",
  //   designation: "Billing Manager",
  // },
  // {
  //   image: "/images/gallery-07.jpeg",
  //   name: "Shajahan TK",
  //   designation: "IT Manager",
  // },
  //  {
  //   image: "/images/gallery-08.jpg",
  //   name: "Dilbar ",
  //   designation: "PRO",
  // },
  // {
  //   image: "/images/gallery-09.jpg",
  //   name: "Faisal ",
  //   designation: "Accounts Manager",
  // },
];

const services = [
  { title: 'Shuttering Carpenters', icon: Hammer, text: 'Experienced formwork and shuttering crews for concrete structures.' },
  { title: 'Steel Fixers', icon: Layers3, text: 'Reliable reinforcement teams for slabs, columns, beams and foundations.' },
  { title: 'Masons', icon: Building2, text: 'Blockwork, plastering and general masonry manpower for active sites.' },
  { title: 'General Helpers', icon: Users, text: 'Site-ready support workforce for material handling and daily operations.' },
  { title: 'Electricians', icon: Cable, text: 'Construction electricians and MEP support crews for project requirements.' },
  { title: 'Plumbers', icon: Pipette, text: 'Skilled plumbing manpower for installation and site coordination.' },
  { title: 'Painters', icon: Paintbrush, text: 'Interior and exterior painting teams for project finishing stages.' },
  { title: 'Scaffolders & Riggers', icon: Ruler, text: 'Safety-focused manpower for access, lifting support and structural works.' },
];

const projects = [
  { name: 'High-Rise Construction', place: 'Dubai', image: PROJECT_1, tag: 'MANPOWER SUPPLY' },
  { name: 'Residential Development', place: 'Sharjah', image: PROJECT_2, tag: 'CIVIL WORKFORCE' },
  { name: 'Commercial Fit-Out', place: 'Ajman', image: PROJECT_3, tag: 'SKILLED TRADES' },
];


const manpowerStats = [
  { value: 5000, suffix: '+', label: 'Group Workforce', note: 'Skilled, semi-skilled and support manpower', icon: Users },
  { value: 200, suffix: '+', label: 'Clients Served', note: 'Construction and project partners', icon: Building2 },
  { value: 300, suffix: '+', label: 'Projects Supported', note: 'Across multiple UAE sectors', icon: HardHat },
  { value: 8, suffix: '+', label: 'Core Trades', note: 'Civil, MEP and support categories', icon: Wrench },
  { value: 3, suffix: '', label: 'Key Emirates', note: 'Sharjah, Dubai and Ajman', icon: MapPin },
];

const capabilityBars = [
  { label: 'Civil & Structural Trades', value: 96, detail: 'Carpenters · Steel Fixers · Masons' },
  { label: 'General Site Support', value: 92, detail: 'Helpers · Material Handling · Site Support' },
  { label: 'MEP Workforce', value: 84, detail: 'Electricians · Plumbers' },
  { label: 'Finishing & Access', value: 78, detail: 'Painters · Scaffolders · Riggers' },
];


function Counter({ end, suffix = '+' }) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: '-80px' });
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let start = 0;
    const duration = 1400;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      start = Math.floor(end * eased);
      setValue(start);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [seen, end]);
  return <span ref={ref}>{value}{suffix}</span>;
}

function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'About', 'Services', 'Projects', 'Team', 'Gallery', 'Contact'];
  return (
    <header className="nav-wrap">
      <a className="brand" href="#home" aria-label="Munnasah home">
        <img className="brand-logo" src="/assets/mcc-logo.png" alt="MCC Group logo" />
        <div><strong>MUNNASAH</strong><span>CONCRETE CARPENTER</span></div>
      </a>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Request Manpower <ArrowRight size={16} /></a>
      </nav>
      <div className="nav-actions">
        <button
          className={`theme-toggle ${theme === 'dark' ? 'is-dark' : 'is-light'}`}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          type="button"
        >
          <span className="toggle-icon sun-side" aria-hidden="true"><Sun size={16} /></span>
          <span className="toggle-icon moon-side" aria-hidden="true"><Moon size={16} /></span>
          <span className="toggle-knob" aria-hidden="true">
            {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
          </span>
        </button>
        <button className="menu-btn" onClick={() => setOpen(v => !v)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}

function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, .82], [1, 0]);
  return (
    <section className="hero" id="home" ref={heroRef}>
      <motion.div className="hero-bg" style={{ backgroundImage: `url(${HERO_IMAGE})`, y: bgY }} />
      <div className="hero-overlay" />
      <div className="hero-noise" />
      <div className="crane-scene" aria-hidden="true">
        <div className="crane-tower" /><div className="crane-arm" /><div className="crane-cable" /><div className="crane-load" />
      </div>
      <motion.div className="hero-content" style={{ y: contentY, opacity }}>
        <motion.div className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}>MCC GROUP OF COMPANIES · UAE</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .2 }}>
          BUILDING UAE<br /><span>WITH SKILLED MANPOWER.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45 }}>
          Munnasah Concrete Carpenter supplies dependable construction manpower across Sharjah, Dubai and Ajman — ready for demanding projects and daily site operations.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65 }}>
          <a className="btn primary" href="#contact">Request Manpower <ArrowRight size={18} /></a>
          <a className="btn ghost" href="#projects">Explore Projects</a>
        </motion.div>
        <div className="hero-stats">
          <div><strong><Counter end={5000} /></strong><span>Group Workforce</span></div>
          <div><strong><Counter end={200} /></strong><span>Clients Served</span></div>
          <div><strong><Counter end={300} /></strong><span>Projects</span></div>
        </div>
      </motion.div>
      <a href="#about" className="scroll-cue"><span>SCROLL TO BUILD</span><ArrowDown size={17} /></a>
    </section>
  );
}

function BuildSequence() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const floors = [0, 1, 2, 3, 4, 5];
  return (
    <section className="build-section" ref={ref}>
      <div className="build-copy">
        <div className="eyebrow">FROM PEOPLE TO PROGRESS</div>
        <h2>SKILLED PEOPLE.<br /><span>STRONG PROJECTS.</span><br />BUILT FOR THE UAE.</h2>
        <p>As you scroll, the structure rises — representing the workforce behind every successful project.</p>
      </div>
      <div className="build-visual" aria-hidden="true">
        <div className="sun-glow" />
        <div className="mini-crane"><div className="m-tower" /><div className="m-arm" /><div className="m-hook" /></div>
        <div className="building-stack">
          {floors.map((i) => {
            const start = .08 + i * .11;
            const opacity = useTransform(scrollYProgress, [start, start + .11], [0, 1]);
            const y = useTransform(scrollYProgress, [start, start + .11], [55, 0]);
            return <motion.div className="floor" key={i} style={{ opacity, y }}><i /><i /><i /><i /></motion.div>;
          })}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return <div className="section-title"><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="about-grid">
        <motion.div className="about-image" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }}>
          <img src={SITE_IMAGE} alt="Construction site" />
          <div className="image-badge"><HardHat /><div><strong>UAE SITE READY</strong><span>Construction manpower support</span></div></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }}>
          <SectionTitle eyebrow="ABOUT MUNNASAH" title="MANPOWER THAT KEEPS PROJECTS MOVING." />
          <p className="lead">Munnasah Concrete Carpenter is part of MCC Group of Companies, supporting construction projects with skilled, semi-skilled and general manpower across the UAE.</p>
          <div className="checks">
            {['Experienced construction workforce', 'Flexible manpower deployment', 'Sharjah, Dubai & Ajman coverage', 'Site-focused coordination and support'].map(x => <div key={x}><CheckCircle2 size={19} />{x}</div>)}
          </div>
          <a href="#services" className="text-link">Explore our manpower <ChevronRight size={18} /></a>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services" id="services">
      <SectionTitle eyebrow="OUR MANPOWER" title="THE CREWS YOUR PROJECT NEEDS." text="From core civil trades to MEP and support workers, we supply manpower built for active UAE construction sites." />
      <div className="service-grid">
        {services.map((s, i) => {
          const Icon = s.icon;
          return <motion.article className="service-card" key={s.title} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * .05 }} viewport={{ once: true, amount: .2 }}>
            <div className="service-icon"><Icon size={25} /></div><span className="service-num">0{i + 1}</span><h3>{s.title}</h3><p>{s.text}</p><div className="service-line" />
          </motion.article>
        })}
      </div>
    </section>
  );
}


function CapabilityBar({ label, value, detail, index }) {
  return (
    <motion.div className="capability-row" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * .08 }} viewport={{ once: true, amount: .4 }}>
      <div className="capability-head"><div><strong>{label}</strong><span>{detail}</span></div><b>{value}%</b></div>
      <div className="capability-track"><motion.i initial={{ width: 0 }} whileInView={{ width: `${value}%` }} transition={{ duration: 1.1, delay: .12 + index * .08, ease: [.22, 1, .36, 1] }} viewport={{ once: true }} /></div>
    </motion.div>
  );
}

function ManpowerDashboard() {
  return (
    <section className="manpower-dashboard" id="manpower-strength">
      <div className="dashboard-grid-lines" aria-hidden="true" />
      <div className="dashboard-inner">
        <SectionTitle eyebrow="MANPOWER STRENGTH" title="NUMBERS THAT MOVE WITH THE PROJECT." text="A live-feel snapshot of MCC Group scale, trade coverage and operational reach. The counters and charts animate as visitors scroll into view." />
        <div className="stats-ribbon">
          {manpowerStats.map(({ value, suffix, label, note, icon: Icon }, i) => <motion.div className="stat-tile" key={label} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * .06 }} viewport={{ once: true, amount: .4 }}>
            <div className="stat-icon"><Icon size={20} /></div>
            <strong><Counter end={value} suffix={suffix} /></strong><span>{label}</span><small>{note}</small>
          </motion.div>)}
        </div>

        <div className="dashboard-panels">
          <motion.div className="workforce-orbit" initial={{ opacity: 0, scale: .92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .7 }}>
            <div className="orbit-glow" />
            <svg className="orbit-ring" viewBox="0 0 240 240" aria-hidden="true">
              <circle className="orbit-base" cx="120" cy="120" r="92" />
              <motion.circle className="orbit-progress" cx="120" cy="120" r="92" initial={{ pathLength: 0 }} whileInView={{ pathLength: .92 }} transition={{ duration: 1.5, ease: [.22, 1, .36, 1] }} viewport={{ once: true }} />
              <motion.circle className="orbit-progress orbit-second" cx="120" cy="120" r="75" initial={{ pathLength: 0 }} whileInView={{ pathLength: .74 }} transition={{ duration: 1.35, delay: .18 }} viewport={{ once: true }} />
            </svg>
            <div className="orbit-center"><Users /><strong><Counter end={5000} /></strong><span>GROUP WORKFORCE</span></div>
            <div className="orbit-tag tag-a"><b>8+</b><span>Core trades</span></div>
            <div className="orbit-tag tag-b"><b>3</b><span>Emirates</span></div>
            <div className="orbit-tag tag-c"><b>24/7</b><span>Ops focus</span></div>
          </motion.div>

          <div className="capability-panel">
            <div className="panel-head"><div><span>DEPLOYMENT CAPABILITY</span><h3>Trade coverage at a glance</h3></div><span className="live-pill"><i /> LIVE VISUAL</span></div>
            <p>Animated capability indicators show the breadth of trades we can coordinate for active construction requirements.</p>
            <div className="capability-list">{capabilityBars.map((x, i) => <CapabilityBar key={x.label} {...x} index={i} />)}</div>
            <div className="dashboard-note"><ShieldCheck size={18} /><span>Replace these capability percentages with your verified internal figures if you want them to represent measured availability.</span></div>
          </div>
        </div>

        <div className="pulse-strip">
          <div><span>WORKFORCE</span><strong><Counter end={5000} /></strong></div>
          <i />
          <div><span>CLIENTS</span><strong><Counter end={200} /></strong></div>
          <i />
          <div><span>PROJECTS</span><strong><Counter end={300} /></strong></div>
          <i />
          <div><span>UAE COVERAGE</span><strong>SHJ · DXB · AJM</strong></div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects" id="projects">
      <SectionTitle eyebrow="PROJECT EXPERIENCE" title="BUILT AROUND REAL SITE DEMANDS." text="A visual project showcase. Replace these sample cards with your actual MCC projects, client names and site photographs." />
      <div className="project-grid">
        {projects.map((p, i) => <motion.article className={`project-card project-${i + 1}`} key={p.name} initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .25 }}>
          <img src={p.image} alt={p.name} /><div className="project-shade" /><div className="project-info"><span>{p.tag}</span><h3>{p.name}</h3><p><MapPin size={15} />{p.place}, UAE</p></div><div className="project-index">0{i + 1}</div>
        </motion.article>)}
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    [ShieldCheck, 'Safety Mindset', 'Site readiness and disciplined workforce coordination.'],
    [Zap, 'Responsive Mobilization', 'Fast operational response for changing manpower requirements.'],
    [Truck, 'UAE Coverage', 'Workforce support across Sharjah, Dubai, Ajman and nearby projects.'],
    [Star, 'Project Reliability', 'A manpower partner focused on continuity, attendance and delivery.']
  ];
  return <section className="why">
    <div className="why-bg" style={{ backgroundImage: `url(${WHY_US_IMAGE})` }} /><div className="why-overlay" />
    <div className="why-inner"><SectionTitle eyebrow="WHY MCC" title="A WORKFORCE PARTNER, NOT JUST A SUPPLIER." />
      <div className="why-grid">{points.map(([Icon, t, d], i) => <motion.div className="why-card" key={t} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * .08 }} viewport={{ once: true }}><Icon /><h3>{t}</h3><p>{d}</p></motion.div>)}</div>
    </div>
  </section>
}

function Team() {
  const team = [
    ['Operations Leadership', 'Project coordination, deployment and client support'],
    ['Site Coordination', 'Attendance, mobilization and workforce movement'],
    ['Administration & HR', 'Documentation, compliance and workforce records']
  ];
  return <section className="section team" id="team">
    <div className="team-grid"><div><SectionTitle eyebrow="OUR TEAM" title="PEOPLE BEHIND THE PEOPLE." text="Our operations, HR and site coordination teams work together to keep manpower deployment smooth and responsive." />
      <div className="team-list">{team.map(([t, d], i) => <motion.div key={t} initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * .08 }} viewport={{ once: true }}><span>0{i + 1}</span><div><h3>{t}</h3><p>{d}</p></div></motion.div>)}</div>
    </div><motion.div className="team-photo" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }}><img src={TEAM_IMAGE} alt="Team collaboration" /><div className="team-caption">MCC GROUP · UNITED BY DELIVERY</div></motion.div></div>
  </section>
}

function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <SectionTitle
        eyebrow="STAFF GALLERY"
        title="WORK. PEOPLE. PROGRESS."
        text="The People Powering Our Success"
      />

      <div className="gallery-grid">
        {gallery.map((person, i) => (
          <motion.figure
            key={person.name}
            className={`g-${i + 1}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (i % 3) * 0.06 }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <img
              src={person.image}
              alt={`${person.name} - ${person.designation}`}
            />

            <figcaption>
              <strong>{person.name}</strong>
              <span>{person.designation}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

function Coverage() {
  return <section className="coverage"><div className="coverage-map">
    <div className="route route-1" />
    <div className="route route-2" />
    <div className="route route-3" />
    {['SHARJAH', 'DUBAI', 'AJMAN', 'ABU DHABI'].map((c, i) => <motion.div className={`city city-${i + 1}`} key={c} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: .15 + i * .2, type: 'spring' }} viewport={{ once: true }}><i /><strong>{c}</strong><span>UAE</span></motion.div>)}
  </div><div className="coverage-copy"><div className="eyebrow">OUR COVERAGE</div><h2>READY ACROSS THE UAE.</h2><p>Strategic coverage across Sharjah, Dubai and Ajman Abudhabi helps us support projects with practical workforce movement and coordination.</p><a className="btn primary" href="#contact">Discuss Your Requirement <ArrowRight size={18} /></a></div></section>
}

function Contact() {
  return <section className="contact" id="contact"><div className="contact-inner"><div className="contact-copy"><div className="eyebrow">LET'S WORK TOGETHER</div><h2>NEED MANPOWER<br /><span>FOR YOUR NEXT PROJECT?</span></h2><p>Send your trade, quantity, project location and expected start date. Our team can review your requirement and coordinate the next steps.</p>
    <div className="contact-details"><a href="tel:+97165307879"><Phone />+971 6 530 7879</a><a href="mailto:info@mccgroupuae.ae"><Mail />info@mccgroupuae.ae</a><div><MapPin />Sharjah · Dubai · Ajman, Abudhabi UAE</div></div>
  </div><form className="contact-form" onSubmit={(e) => e.preventDefault()}><div className="form-row"><input required placeholder="Your name" /><input placeholder="Company name" /></div><div className="form-row"><input type="email" required placeholder="Email address" /><input placeholder="Phone number" /></div><input placeholder="Project location" /><textarea rows="5" placeholder="Tell us the trades, quantity and expected mobilization date..." /><button className="btn primary" type="submit">Send Requirement <ArrowRight size={18} /></button><small>Demo form: connect this to your email/API before publishing.</small></form></div></section>
}

function Footer() {
  return <footer><div className="footer-top"><div className="brand footer-brand"><img className="brand-logo footer-logo" src="/assets/mcc-logo.png" alt="MCC Group logo" /><div><strong>MUNNASAH</strong><span>CONCRETE CARPENTER</span></div></div><p>Construction manpower solutions from MCC Group of Companies.</p><a href="#home" className="back-top">BACK TO TOP ↑</a></div><div className="footer-bottom"><span>© 2026 Munnasah Concrete Carpenter · MCC Group of Companies</span><span>Sharjah · Dubai · Ajman · UAE</span></div></footer>
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('mcc-theme') || 'dark');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('mcc-theme', theme);
  }, [theme]);
  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  return <><Navbar theme={theme} toggleTheme={toggleTheme} /><Hero /><BuildSequence /><About /><Services /><ManpowerDashboard /><Projects /><WhyUs /><Team /><Gallery /><Coverage /><Contact /><Footer /></>;
}
