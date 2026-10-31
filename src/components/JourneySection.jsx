import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Building2,
  MapPin,
  Award
} from "lucide-react";


/* =====================================================
   JOURNEY STEP
===================================================== */

function JourneyStep({
  index,
  activeIndex,
  year,
  title,
  text,
  onVisible
}) {

  const stepRef = useRef(null);

  useEffect(() => {

    const element = stepRef.current;

    if (!element) return;


    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          onVisible(index);
        }

      },
      {
        threshold: 0.55
      }
    );


    observer.observe(element);


    return () => {
      observer.disconnect();
    };

  }, [index, onVisible]);


  const active = activeIndex === index;


  return (

    <div
      ref={stepRef}
      className={`journey-scroll-step ${
        active ? "active" : ""
      }`}
    >

      <motion.div
        className="journey-scroll-card"

        animate={{
          opacity: active ? 1 : 0.08,

          x:
            active
              ? 0
              : index % 2 === 0
              ? -70
              : 70,

          scale:
            active
              ? 1
              : 0.94,

          filter:
            active
              ? "blur(0px)"
              : "blur(5px)"
        }}

        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }}
      >

        {/* YEAR */}

        <div className="journey-scroll-year">
          {year}
        </div>


        {/* DOT */}

        <div className="journey-scroll-dot" />


        {/* CONTENT */}

        <div className="journey-scroll-content">

          <span>
            STEP 0{index + 1}
          </span>


          <h3>
            {title}
          </h3>


          <p>
            {text}
          </p>

        </div>

      </motion.div>

    </div>

  );
}



/* =====================================================
   MAIN JOURNEY COMPONENT
===================================================== */

export default function JourneySection() {

  const [activeJourney, setActiveJourney] =
    useState(0);


  const journeySteps = [

    {
      year: "2011",

      title:
        "THE BEGINNING OF OUR JOURNEY",

      text:
        "MCC began its journey in 2011 with approximately 500 labourers and a dedicated team of just 5 staff members. From the beginning, our focus was to build a dependable workforce and provide reliable manpower support for construction projects."
    },


    {
      year: "GROWTH",

      title:
        "EXPANDING OUR WORKFORCE",

      text:
        "As client requirements increased, MCC steadily expanded its workforce, trade capabilities and operational team. Our growing experience enabled us to support larger and more demanding construction projects across the UAE."
    },


    {
      year: "EXPANSION",

      title:
        "GROWING ACROSS THE UAE",

      text:
        "Our operations expanded across Sharjah, Dubai, Ajman and Abu Dhabi. Along with manpower growth, we strengthened our administration, supervision, mobilization and project coordination capabilities."
    },


    {
      year: "2026",

      title:
        "MCC GROUP TODAY",

      text:
        "From approximately 500 labourers and 5 staff members in 2011, MCC Group has grown to more than 10,000 labourers supported by over 40 staff members. Today, we continue to support major projects and clients across the UAE."
    }

  ];


  return (

    <section
      className="journey-section"
      id="our-journey"
    >

      {/* =================================================
          HEADING
      ================================================= */}

      <div className="section-heading">

        <div className="eyebrow">
          OUR JOURNEY
        </div>


        <h2>
          FROM WHERE WE STARTED
          <br />

          <span>
            TO WHERE WE ARE TODAY.
          </span>
        </h2>


        <p className="journey-intro">
          A journey built through people,
          commitment, continuous growth and
          long-term partnerships across the UAE.
        </p>

      </div>



      {/* =================================================
          SCROLL STORY
      ================================================= */}

      <div className="journey-scroll-story">


        {/* LEFT PROGRESS */}

        <div className="journey-progress">


          <div className="journey-progress-line">

            <motion.div
              className="journey-progress-active"

              animate={{
                height:
                  `${
                    (
                      (activeJourney + 1) /
                      journeySteps.length
                    ) * 100
                  }%`
              }}

              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
            />

          </div>


          <span>
            0{activeJourney + 1}
          </span>


          <small>
            / 0{journeySteps.length}
          </small>

        </div>



        {/* JOURNEY STEPS */}

        <div className="journey-scroll-list">

          {journeySteps.map(
            (step, index) => (

              <JourneyStep
                key={`${step.year}-${index}`}

                index={index}

                activeIndex={
                  activeJourney
                }

                onVisible={
                  setActiveJourney
                }

                {...step}
              />

            )
          )}

        </div>

      </div>



      {/* =================================================
          GROWTH SUMMARY
      ================================================= */}

      {/* <div className="journey-growth-summary">


        <motion.div
          className="journey-summary-card"

          initial={{
            opacity: 0,
            y: 30
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: false,
            amount: 0.3
          }}
        >

          <Users />

          <span>
            WORKFORCE
          </span>

          <div className="summary-growth">

            <div>
              <small>
                2011
              </small>

              <strong>
                500
              </strong>
            </div>


            <b>
              →
            </b>


            <div>
              <small>
                2026
              </small>

              <strong>
                10,000+
              </strong>
            </div>

          </div>

        </motion.div>



        <motion.div
          className="journey-summary-card"

          initial={{
            opacity: 0,
            y: 30
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            delay: 0.1
          }}

          viewport={{
            once: false,
            amount: 0.3
          }}
        >

          <Award />

          <span>
            STAFF TEAM
          </span>

          <div className="summary-growth">

            <div>
              <small>
                2011
              </small>

              <strong>
                5
              </strong>
            </div>


            <b>
              →
            </b>


            <div>
              <small>
                2026
              </small>

              <strong>
                40+
              </strong>
            </div>

          </div>

        </motion.div>



        <motion.div
          className="journey-summary-card"

          initial={{
            opacity: 0,
            y: 30
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            delay: 0.2
          }}

          viewport={{
            once: false,
            amount: 0.3
          }}
        >

          <MapPin />

          <span>
            UAE PRESENCE
          </span>

          <strong className="summary-main">
            4
          </strong>

          <p>
            Emirates Covered
          </p>

        </motion.div>



        <motion.div
          className="journey-summary-card"

          initial={{
            opacity: 0,
            y: 30
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            delay: 0.3
          }}

          viewport={{
            once: false,
            amount: 0.3
          }}
        >

          <Building2 />

          <span>
            OUR GROWTH
          </span>

          <strong className="summary-main">
            2011
          </strong>

          <p>
            Growing Across The UAE
          </p>

        </motion.div>

      </div> */}

    </section>

  );
}