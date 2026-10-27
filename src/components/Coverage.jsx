import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Coverage() {
  const cities = ['SHARJAH', 'DUBAI', 'AJMAN', 'ABU DHABI'];

  return (
    <section className="coverage">
      <div className="coverage-map">
        <div className="route route-1" /><div className="route route-2" /><div className="route route-3" />
        {cities.map((city, index) => (
          <motion.div className={`city city-${index + 1}`} key={city} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: .15 + index * .2, type: 'spring' }} viewport={{ once: true }}>
            <i /><strong>{city}</strong><span>UAE</span>
          </motion.div>
        ))}
      </div>
      <div className="coverage-copy">
        <div className="eyebrow">OUR COVERAGE</div>
        <h2>READY ACROSS<br />THE UAE.</h2>
        <p>Strategic coverage across Sharjah, Dubai, Ajman and Abu Dhabi helps us support projects with practical workforce movement and coordination.</p>
        <a className="btn primary" href="#contact">Discuss Your Requirement <ArrowRight size={18} /></a>
      </div>
    </section>
  );
}
