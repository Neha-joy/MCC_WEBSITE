import React from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

function Floor({ progress, start, end }) {
  const opacity = useTransform(
    progress,
    [start, end],
    [0, 1]
  );

  const y = useTransform(
    progress,
    [start, end],
    [60, 0]
  );

  return (
    <motion.div
      className="bg-building-floor"
      style={{ opacity, y }}
    >
      <div className="bg-columns">
        <i />
        <i />
        <i />
        <i />
      </div>

      <div className="bg-slab" />

      <div className="bg-windows">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </motion.div>
  );
}

export default function ScrollConstructionBackground() {
  const { scrollYProgress } = useScroll();

  const foundationScale = useTransform(
    scrollYProgress,
    [0.08, 0.18],
    [0, 1]
  );

  const craneX = useTransform(
    scrollYProgress,
    [0, 1],
    [100, -100]
  );

  const craneHook = useTransform(
    scrollYProgress,
    [0.15, 0.45, 0.7],
    [100, 280, 140]
  );

  const workersOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.18, 0.8, 0.95],
    [0, 1, 1, 0.3]
  );

  const finishedOpacity = useTransform(
    scrollYProgress,
    [0.72, 0.92],
    [0, 1]
  );

  return (
    <div className="scroll-construction-bg">

      <div className="bg-sky" />

      <div className="bg-city">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>

      {/* CRANE */}

      <motion.div
        className="bg-crane"
        style={{ x: craneX }}
      >
        <div className="bg-crane-mast" />

        <div className="bg-crane-arm" />

        <motion.div
          className="bg-crane-cable"
          style={{
            height: craneHook,
          }}
        />

        <div className="bg-crane-load" />
      </motion.div>

      {/* BUILDING */}

      <div className="bg-building">

        <motion.div
          className="bg-foundation"
          style={{
            scaleX: foundationScale,
          }}
        />

        <div className="bg-floors">

          <Floor
            progress={scrollYProgress}
            start={0.15}
            end={0.22}
          />

          <Floor
            progress={scrollYProgress}
            start={0.22}
            end={0.30}
          />

          <Floor
            progress={scrollYProgress}
            start={0.30}
            end={0.38}
          />

          <Floor
            progress={scrollYProgress}
            start={0.38}
            end={0.46}
          />

          <Floor
            progress={scrollYProgress}
            start={0.46}
            end={0.54}
          />

          <Floor
            progress={scrollYProgress}
            start={0.54}
            end={0.62}
          />

          <Floor
            progress={scrollYProgress}
            start={0.62}
            end={0.70}
          />

        </div>

        <motion.div
          className="bg-final-facade"
          style={{
            opacity: finishedOpacity,
          }}
        >
          {Array.from({ length: 35 }).map((_, i) => (
            <i key={i} />
          ))}
        </motion.div>

      </div>

      {/* WORKERS */}

      <motion.div
        className="bg-workers"
        style={{
          opacity: workersOpacity,
        }}
      >
        {[1, 2, 3].map((x) => (
          <div className="bg-worker" key={x}>
            <span className="bg-helmet" />
            <span className="bg-head" />
            <span className="bg-vest" />
            <span className="bg-legs" />
          </div>
        ))}
      </motion.div>

      <div className="bg-ground" />

      <motion.div
        className="bg-complete"
        style={{
          opacity: finishedOpacity,
        }}
      >
        BUILT BY PEOPLE · DELIVERED BY MCC
      </motion.div>

    </div>
  );
}