import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Award,
  Users,
  Building2,
  MapPin
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-intro">

        <div className="about-intro-left">

          <span className="about-intro-number">
            01
          </span>

          <div className="eyebrow">
            ABOUT MCC GROUP
          </div>

          <h1>
            A WORKFORCE PARTNER
            <span>BUILT AROUND TRUST.</span>
          </h1>

        </div>


        <div className="about-intro-right">

          <p className="about-intro-lead">
            MCC Group supports construction, fit-out, facility management
            and maintenance operations with dependable manpower solutions
            across the UAE.
          </p>

          <p>
            Our strength comes from our people, operational coordination
            and our ability to respond to the changing requirements of
            active projects.
          </p>

          <div className="about-intro-line">
            <span>MCC GROUP</span>
            <i />
            <span>UAE</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          MD MESSAGE
      ===================================================== */}

      <section className="md-message-section">

        <div className="md-message-wrap">

          <motion.div
            className="md-message-photo"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/gallery-01.jpg"
              alt="Managing Director - MCC Group"
            />

            <div className="md-photo-info">
              <strong>Managing Director</strong>
              <span>MCC Group of Companies</span>
            </div>
          </motion.div>


          <motion.div
            className="md-letter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <span className="md-letter-label">
              MESSAGE FROM OUR MANAGING DIRECTOR
            </span>

            <div className="md-quote-mark">
              “
            </div>

            <h2>
              Building trust through people,
              commitment and performance.
            </h2>

            <div className="md-letter-text">

              <p>
                Dear Clients and Partners,
              </p>

              <p>
                At MCC Group, we believe that our people are the true strength
                behind every successful project. From the beginning of our journey,
                our focus has always been to provide reliable manpower solutions
                while maintaining professionalism, discipline and commitment.
              </p>

              <p>
                Our continued growth reflects the confidence placed in us by our
                clients and the dedication of our workforce. We continuously work
                to strengthen our operations, develop our capabilities and improve
                the quality of support we provide across the UAE.
              </p>

              <p>
                As we move forward, our commitment remains the same — to build
                lasting partnerships and contribute positively to every project
                we are trusted to support.
              </p>

            </div>

            <div className="md-letter-sign">

              <div>
                <strong>Managing Director</strong>
                <span>MCC Group of Companies</span>
              </div>

              <span className="md-signature-line">
                With regards
              </span>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          MISSION & VISION
      ===================================================== */}

      <section className="mission-vision-section">

        <div className="section-heading">
          <div className="eyebrow">
            OUR PURPOSE
          </div>

          <h2>
            MISSION & VISION
          </h2>
        </div>


        <div className="mission-vision-grid">

          <motion.div
            className="mission-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <Target />

            <span>OUR MISSION</span>

            <h3>
              RELIABLE WORKFORCE.
              <br />
              RESPONSIBLE DELIVERY.
            </h3>

            <p>
              To provide skilled, dependable and project-ready manpower
              solutions that help our clients maintain productivity,
              quality and operational continuity.
            </p>

          </motion.div>


          <motion.div
            className="mission-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .1 }}
            viewport={{ once: true }}
          >

            <Eye />

            <span>OUR VISION</span>

            <h3>
              TO BE A TRUSTED
              <br />
              UAE WORKFORCE PARTNER.
            </h3>

            <p>
              To become one of the most dependable manpower and workforce
              solution providers in the UAE through professionalism,
              compliance and long-term client partnerships.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          JOURNEY
      ===================================================== */}
      <div className="journey-timeline">

        <motion.div
          className="journey-item"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <div className="journey-year">
            2011
          </div>

          <div className="journey-content">
            <h3>THE BEGINNING OF OUR JOURNEY</h3>

            <p>
              MCC began its journey in 2011 with approximately 500 labourers
              and a dedicated team of just 5 staff members.
            </p>
          </div>
        </motion.div>


        <motion.div
          className="journey-item"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <div className="journey-year">
            GROWTH
          </div>

          <div className="journey-content">
            <h3>EXPANDING OUR WORKFORCE</h3>

            <p>
              As client requirements increased, MCC steadily expanded its
              workforce and operational capabilities.
            </p>
          </div>
        </motion.div>


        <motion.div
          className="journey-item"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <div className="journey-year">
            EXPANSION
          </div>

          <div className="journey-content">
            <h3>GROWING ACROSS THE UAE</h3>

            <p>
              Our operations continued to grow across Sharjah, Dubai,
              Ajman and Abu Dhabi.
            </p>
          </div>
        </motion.div>


        <motion.div
          className="journey-item"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <div className="journey-year">
            2026
          </div>

          <div className="journey-content">
            <h3>MCC GROUP TODAY</h3>

            <p>
              From around 500 labourers and 5 staff members in 2011,
              MCC Group has grown to more than 10,000 labourers
              supported by over 40 staff members.
            </p>
          </div>
        </motion.div>

      </div>

      {/* =====================================================
          TEAM
      ===================================================== */}

      <section className="about-team-section">

        <div className="section-heading">

          <div className="eyebrow">
            OUR LEADERSHIP
          </div>

          <h2>
            THE TEAM BEHIND
            <br />
            <span>MCC GROUP.</span>
          </h2>

        </div>


        <div className="about-team-grid">

          <motion.article
            className="about-team-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <div className="about-team-image">
              <img
                src="/images/taked 5.jpg"
                alt="Managing Director"
              />
            </div>

            <div className="about-team-info">
              <span>MANAGING DIRECTOR</span>
              <h3>Managing Director Name</h3>
            </div>

          </motion.article>


          <motion.article
            className="about-team-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .1 }}
            viewport={{ once: true }}
          >

            <div className="about-team-image">
              <img
                src="/images/taked 5.jpg"
                alt="General Manager"
              />
            </div>

            <div className="about-team-info">
              <span>GENERAL MANAGER</span>
              <h3>General Manager Name</h3>
            </div>

          </motion.article>


          <motion.article
            className="about-team-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            viewport={{ once: true }}
          >

            <div className="about-team-image">
              <img
                src="/images/taked 5.jpg"
                alt="Operations Manager"
              />
            </div>

            <div className="about-team-info">
              <span>OPERATIONS</span>
              <h3>Operations Manager Name</h3>
            </div>

          </motion.article>

        </div>

      </section>


      {/* =====================================================
          FINAL COMPANY STRENGTH
      ===================================================== */}

      <section className="about-strength-section">

        <div>
          <div className="eyebrow">
            MCC GROUP
          </div>

          <h2>
            PEOPLE. PROJECTS.
            <br />
            PERFORMANCE.
          </h2>
        </div>

        <p><i>
          Our growth continues to be built around workforce strength,
          reliable operations, client trust and the ability to respond
          to changing project requirements across the UAE.
        </i></p>

      </section>

    </main>
  );
}