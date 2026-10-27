import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { images } from '../data/siteData';

export default function Team() {
  const teams = [
    ['Operations Leadership', 'Project coordination, deployment and client support'],
    ['Site Coordination', 'Attendance, mobilization and workforce movement'],
    ['Administration & HR', 'Documentation, compliance and workforce records'],
  ];

  return (
    <section className="section team" id="team">
      <div className="team-grid">
        <div>
          <SectionTitle eyebrow="OUR TEAM" title="PEOPLE BEHIND THE PEOPLE." text="Our operations, HR and site coordination teams work together to keep manpower deployment smooth and responsive." />
          <div className="team-list">
            {teams.map(([title, description], index) => (
              <motion.div key={title} initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * .08 }} viewport={{ once: true }}>
                <span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div className="team-photo" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }}>
          <img src={images.team} alt="Team collaboration" /><div className="team-caption">MCC GROUP · UNITED BY DELIVERY</div>
        </motion.div>
      </div>
    </section>
  );
}
