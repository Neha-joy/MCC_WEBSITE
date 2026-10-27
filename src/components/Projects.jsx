import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { projects } from '../data/siteData';

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <SectionTitle eyebrow="PROJECT EXPERIENCE" title="BUILT AROUND REAL SITE DEMANDS." text="A visual project showcase. Replace these sample cards with your actual MCC projects, client names and site photographs." />
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article className={`project-card project-${index + 1}`} key={project.name} initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .25 }}>
            <img src={project.image} alt={project.name} />
            <div className="project-shade" />
            <div className="project-info"><span>{project.tag}</span><h3>{project.name}</h3><p><MapPin size={15} />{project.place}, UAE</p></div>
            <div className="project-index">0{index + 1}</div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
