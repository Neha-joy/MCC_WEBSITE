import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, HardHat } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { images } from '../data/siteData';

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about-grid">
        <motion.div className="about-image" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }}>
          <img src={images.about} alt="Construction site" />
          <div className="image-badge"><HardHat /><div><strong>UAE SITE READY</strong><span>Construction manpower support</span></div></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }}>
          <SectionTitle eyebrow="ABOUT MUNNASAH" title="MANPOWER THAT KEEPS PROJECTS MOVING." />
          <p className="lead">Munnasah Concrete Carpenter is part of MCC Group of Companies, supporting construction projects with skilled, semi-skilled and general manpower across the UAE.</p>
          <div className="checks">
            {['Experienced construction workforce', 'Flexible manpower deployment', 'Sharjah, Dubai, Ajman & Abu Dhabi coverage', 'Site-focused coordination and support'].map((item) => (
              <div key={item}><CheckCircle2 size={19} />{item}</div>
            ))}
          </div>
          <a href="#services" className="text-link">Explore our manpower <ChevronRight size={18} /></a>
        </motion.div>
      </div>
    </section>
  );
}
