import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { services } from '../data/siteData';

export default function Services() {
  return (
    <section className="section services" id="services">
      <SectionTitle eyebrow="OUR MANPOWER" title="THE CREWS YOUR PROJECT NEEDS." text="From core civil trades to MEP and support workers, we supply manpower built for active UAE construction sites." />
      <div className="service-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article className="service-card" key={service.title} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * .05 }} viewport={{ once: true, amount: .2 }}>
              <div className="service-icon"><Icon size={25} /></div>
              <span className="service-num">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="service-line" />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
