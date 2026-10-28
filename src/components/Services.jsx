import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
// import { services } from '../data/siteData';

export default function Services() {
  const trades = [
  {
    number: "01",
    title: "CIVIL & STRUCTURAL",
    description:
      "Skilled manpower for structural, concrete, blockwork and general civil construction activities."
  },
  {
    number: "02",
    title: "MEP WORKFORCE",
    description:
      "Qualified manpower supporting electrical, plumbing and mechanical project requirements."
  },
  {
    number: "03",
    title: "FINISHING WORKS",
    description:
      "Experienced teams for painting, finishing, fit-out and final-stage construction works."
  },
  {
    number: "04",
    title: "SITE SUPPORT",
    description:
      "Reliable site support manpower for material handling, logistics and general project operations."
  },
  {
    number: "05",
    title: "ACCESS & HEIGHT WORKS",
    description:
      "Safety-focused manpower for scaffolding, access work and height-related site operations."
  },
  {
    number: "06",
    title: "SUPERVISION & COORDINATION",
    description:
      "Site supervisors and coordination staff supporting daily construction activities."
  }
];
  return (
    // <section className="section services" id="services">
    //   <SectionTitle eyebrow="OUR MANPOWER" title="THE CREWS YOUR PROJECT NEEDS." text="From core civil trades to MEP and support workers, we supply manpower built for active UAE construction sites." />
    //   <div className="service-grid">
    //     {services.map((service, index) => {
    //       const Icon = service.icon;
    //       return (
    //         <motion.article className="service-card" key={service.title} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * .05 }} viewport={{ once: true, amount: .2 }}>
    //           <div className="service-icon"><Icon size={25} /></div>
    //           <span className="service-num">0{index + 1}</span>
    //           <h3>{service.title}</h3>
    //           <p>{service.text}</p>
    //           <div className="service-line" />
    //         </motion.article>
    //       );
    //     })}
    //   </div>
    // </section>

    <section className="trades-modern" id="trades">

  <div className="trades-modern-head">

    <div>
      <div className="eyebrow">
        OUR MANPOWER CAPABILITIES
      </div>

      <h2>
        WORKFORCE FOR
        <br />
        <span>EVERY PROJECT STAGE.</span>
      </h2>
    </div>

    <p>
      From core construction activities to MEP, finishing and site
      support, MCC provides experienced manpower for projects across
      the UAE.
    </p>

  </div>


  <div className="trades-modern-list">

    {trades.map((trade) => (

      <div
        className="trade-modern-row"
        key={trade.number}
      >

        <span className="trade-modern-number">
          {trade.number}
        </span>

        <h3>
          {trade.title}
        </h3>

        <p>
          {trade.description}
        </p>

        <span className="trade-modern-arrow">
          ↗
        </span>

      </div>

    ))}

  </div>

</section>
  );
}
