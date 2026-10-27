import { motion } from 'framer-motion';
import { ShieldCheck, Star, Truck, Zap } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { images } from '../data/siteData';

export default function WhyUs() {
  const points = [
    [ShieldCheck, 'Safety Mindset', 'Site readiness and disciplined workforce coordination.'],
    [Zap, 'Responsive Mobilization', 'Fast operational response for changing manpower requirements.'],
    [Truck, 'UAE Coverage', 'Workforce support across Sharjah, Dubai, Ajman, Abu Dhabi and nearby projects.'],
    [Star, 'Project Reliability', 'A manpower partner focused on continuity, attendance and delivery.'],
  ];

  return (
    <section className="why">
      <div className="why-bg" style={{ backgroundImage: `url(${images.whyUs})` }} /><div className="why-overlay" />
      <div className="why-inner">
        <SectionTitle eyebrow="WHY MCC" title="A WORKFORCE PARTNER, NOT JUST A SUPPLIER." />
        <div className="why-grid">
          {points.map(([Icon, title, description], index) => (
            <motion.div className="why-card" key={title} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * .08 }} viewport={{ once: true }}>
              <Icon /><h3>{title}</h3><p>{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
