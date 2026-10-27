import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { staffGallery } from '../data/siteData';

export default function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <SectionTitle eyebrow="STAFF GALLERY" title="WORK. PEOPLE. PROGRESS." text="The People Powering Our Success" />
      <div className="gallery-grid">
        {staffGallery.map((person, index) => (
          <motion.figure key={person.name} className={`g-${index + 1}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: (index % 3) * .06 }} viewport={{ once: true, amount: .15 }}>
            <img src={person.image} alt={`${person.name} - ${person.designation}`} />
            <figcaption><strong>{person.name}</strong><span>{person.designation}</span></figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
