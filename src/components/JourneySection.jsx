import { motion } from "framer-motion";

const journeySteps = [
  {
    year: "2011",
    number: "01",
    title: "THE BEGINNING",
    text:
      "MCC began its journey with approximately 500 labourers and a dedicated core team, focused on reliable manpower support for construction projects."
  },
  {
    year: "2015",
    number: "02",
    title: "WORKFORCE EXPANSION",
    text:
      "As client requirements increased, MCC expanded its workforce, trade capabilities and operational support for larger construction projects."
  },
  {
    year: "2020",
    number: "03",
    title: "WIDER UAE PRESENCE",
    text:
      "Our operations expanded across Sharjah, Dubai, Ajman and Abu Dhabi, supported by stronger administration, supervision and mobilization."
  },
  {
    year: "2026",
    number: "04",
    title: "MCC GROUP TODAY",
    text:
      "MCC Group has grown to more than 10,000 labourers, supported by over 40 staff members and operations across four Emirates."
  }
];

export default function JourneySection() {
  return (
    <section
      className="roadmap-section"
      id="our-journey"
    >

      {/* HEADING */}

      <motion.div
        className="roadmap-heading"
        initial={{
          opacity: 0,
          y: 50
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: false,
          amount: 0.3
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }}
      >

        <span>
          OUR JOURNEY
        </span>

        <h2>
          BUILT STEP BY STEP.
          <br />

          <strong>
            GROWING MILESTONE BY MILESTONE.
          </strong>
        </h2>

        <p>
          From a focused manpower operation
          to a workforce supporting major
          projects across the UAE.
        </p>

      </motion.div>


      {/* ROAD */}

      <div className="roadmap-wrap">

        <motion.div
          className="road-path"
          initial={{
            scaleY: 0
          }}
          whileInView={{
            scaleY: 1
          }}
          viewport={{
            once: false,
            amount: 0.08
          }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1]
          }}
        />


        {/* JOURNEY ITEMS */}

        {journeySteps.map(
          (step, index) => {

            const isLeft =
              index % 2 === 0;

            return (

              <motion.div
                key={step.number}

                className={
                  `road-stop ${
                    isLeft
                      ? "stop-left"
                      : "stop-right"
                  }`
                }

                initial={{
                  opacity: 0,
                  y: 90
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                viewport={{
                  once: false,
                  amount: 0.45,
                  margin:
                    "0px 0px -8% 0px"
                }}

                transition={{
                  duration: 0.75,
                  ease:
                    [0.22, 1, 0.36, 1]
                }}
              >

                {/* ROAD NUMBER */}

                <motion.div
                  className="road-dot"

                  initial={{
                    opacity: 0,
                    scale: 0,
                    rotate: -90
                  }}

                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0
                  }}

                  viewport={{
                    once: false,
                    amount: 0.5
                  }}

                  transition={{
                    duration: 0.6,
                    delay: 0.12,
                    type: "spring",
                    stiffness: 150,
                    damping: 14
                  }}
                >

                  {step.number}

                </motion.div>


                {/* CARD */}

                <motion.div
                  className="road-card"

                  initial={{
                    opacity: 0,

                    x:
                      isLeft
                        ? -120
                        : 120,

                    scale: 0.92,
                    filter: "blur(8px)"
                  }}

                  whileInView={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    filter: "blur(0px)"
                  }}

                  viewport={{
                    once: false,
                    amount: 0.5
                  }}

                  transition={{
                    duration: 0.85,
                    delay: 0.08,
                    ease:
                      [0.22, 1, 0.36, 1]
                  }}
                >

                  <span>
                    {step.year}
                  </span>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.text}
                  </p>

                </motion.div>

              </motion.div>

            );
          }
        )}

      </div>

    </section>
  );
}