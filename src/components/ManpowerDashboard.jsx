import { motion } from 'framer-motion';
import { ShieldCheck, Users } from 'lucide-react';
import Counter from './Counter';
import SectionTitle from './SectionTitle';
import { capabilityBars, manpowerStats } from '../data/siteData';

function CapabilityBar({ label, value, detail, index }) {
  return (
    <motion.div className="capability-row" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * .08 }} viewport={{ once: true, amount: .4 }}>
      <div className="capability-head"><div><strong>{label}</strong><span>{detail}</span></div><b>{value}%</b></div>
      <div className="capability-track"><motion.i initial={{ width: 0 }} whileInView={{ width: `${value}%` }} transition={{ duration: 1.1, delay: .12 + index * .08, ease: [.22, 1, .36, 1] }} viewport={{ once: true }} /></div>
    </motion.div>
  );
}

export default function ManpowerDashboard() {
  return (
    <section className="manpower-dashboard" id="manpower-strength">
      <div className="dashboard-grid-lines" aria-hidden="true" />
      <div className="dashboard-inner">
        <SectionTitle eyebrow="MANPOWER STRENGTH" title="NUMBERS THAT MOVE WITH THE PROJECT." text="A live-feel snapshot of MCC Group scale, trade coverage and operational reach. The counters and charts animate as visitors scroll into view." />
        <div className="stats-ribbon">
          {manpowerStats.map(({ value, suffix, label, note, icon: Icon }, index) => (
            <motion.div className="stat-tile" key={label} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * .06 }} viewport={{ once: true, amount: .4 }}>
              <div className="stat-icon"><Icon size={20} /></div>
              <strong><Counter end={value} suffix={suffix} /></strong><span>{label}</span><small>{note}</small>
            </motion.div>
          ))}
        </div>

        <div className="dashboard-panels">
          <motion.div className="workforce-orbit" initial={{ opacity: 0, scale: .92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .7 }}>
            <div className="orbit-glow" />
            <svg className="orbit-ring" viewBox="0 0 240 240" aria-hidden="true">
              <circle className="orbit-base" cx="120" cy="120" r="92" />
              <motion.circle className="orbit-progress" cx="120" cy="120" r="92" initial={{ pathLength: 0 }} whileInView={{ pathLength: .92 }} transition={{ duration: 1.5, ease: [.22, 1, .36, 1] }} viewport={{ once: true }} />
              <motion.circle className="orbit-progress orbit-second" cx="120" cy="120" r="75" initial={{ pathLength: 0 }} whileInView={{ pathLength: .74 }} transition={{ duration: 1.35, delay: .18 }} viewport={{ once: true }} />
            </svg>
            <div className="orbit-center"><Users /><strong><Counter end={10000} /></strong><span>GROUP WORKFORCE</span></div>
            <div className="orbit-tag tag-a"><b>8+</b><span>Core trades</span></div>
            <div className="orbit-tag tag-b"><b>4</b><span>Emirates</span></div>
            <div className="orbit-tag tag-c"><b>24/7</b><span>Ops focus</span></div>
          </motion.div>

          <div className="capability-panel">
            <div className="panel-head"><div><span>DEPLOYMENT CAPABILITY</span><h3>Trade coverage at a glance</h3></div><span className="live-pill"><i /> LIVE VISUAL</span></div>
            <p>Animated capability indicators show the breadth of trades we can coordinate for active construction requirements.</p>
            <div className="capability-list">{capabilityBars.map((item, index) => <CapabilityBar key={item.label} {...item} index={index} />)}</div>
            <div className="dashboard-note"><ShieldCheck size={18} /><span>Replace these capability percentages with your verified internal figures if you want them to represent measured availability.</span></div>
          </div>
        </div>

        <div className="pulse-strip">
          <div><span>WORKFORCE</span><strong><Counter end={10000} /></strong></div><i />
          <div><span>CLIENTS</span><strong><Counter end={200} /></strong></div><i />
          <div><span>PROJECTS</span><strong><Counter end={300} /></strong></div><i />
          <div><span>UAE COVERAGE</span><strong>SHJ · DXB · AJM · AUH</strong></div>
        </div>
      </div>
    </section>
  );
}
