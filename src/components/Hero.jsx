import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import Counter from './Counter';
import { images } from '../data/siteData';

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, .82], [1, 0]);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <motion.div className="hero-bg" style={{ backgroundImage: `url(${images.hero})`, y: bgY }} />
      <div className="hero-overlay" />
      <div className="hero-noise" />
      <div className="crane-scene" aria-hidden="true">
        <div className="crane-tower" /><div className="crane-arm" /><div className="crane-cable" /><div className="crane-load" />
      </div>
      <motion.div className="hero-content" style={{ y: contentY, opacity }}>
        <motion.div className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}>
          MCC GROUP OF COMPANIES · UAE
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .2 }}>
          CONSTRUCTION MANPOWER SUPPLY<br /><span>IN UAE</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45 }}>
          Munnasah Concrete Carpenter provides skilled construction manpower,
          civil workforce, MEP manpower and project support across Sharjah,
          Dubai, Ajman and Abu Dhabi for demanding construction projects
          and daily site operations.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65 }}>
          <a className="btn primary" href="#contact">Request Manpower <ArrowRight size={18} /></a>
          <a className="btn ghost" href="#projects">Explore Projects</a>
        </motion.div>
        <div className="hero-stats">
          <div><strong><Counter end={10000} /></strong><span>Group Workforce</span></div>
          <div><strong><Counter end={200} /></strong><span>Clients Served</span></div>
          <div><strong><Counter end={300} /></strong><span>Projects</span></div>
        </div>
      </motion.div>
      <a href="#about" className="scroll-cue"><span>SCROLL TO BUILD</span><ArrowDown size={17} /></a>
    </section>
  );
}
