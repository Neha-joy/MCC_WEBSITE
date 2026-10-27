import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function Counter({ end, suffix = '+' }) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: '-80px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!seen) return;
    const duration = 1400;
    const started = performance.now();

    const tick = (time) => {
      const progress = Math.min((time - started) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(end * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [seen, end]);

  return <span ref={ref}>{value}{suffix}</span>;
}
