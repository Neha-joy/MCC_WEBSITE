import {
  Building2, HardHat, Users, Wrench, MapPin, Hammer, Layers3,
  Cable, Pipette, Paintbrush, Ruler
} from 'lucide-react';

export const images = {
  hero: '/images/hero.png',
  about: '/images/about-site.png',
  team: '/images/team.png',
  whyUs: '/images/why-us.png',
};

export const services = [
  { title: 'Shuttering Carpenters', icon: Hammer, text: 'Experienced formwork and shuttering crews for concrete structures.' },
  { title: 'Steel Fixers', icon: Layers3, text: 'Reliable reinforcement teams for slabs, columns, beams and foundations.' },
  { title: 'Masons', icon: Building2, text: 'Blockwork, plastering and general masonry manpower for active sites.' },
  { title: 'General Helpers', icon: Users, text: 'Site-ready support workforce for material handling and daily operations.' },
  { title: 'Electricians', icon: Cable, text: 'Construction electricians and MEP support crews for project requirements.' },
  { title: 'Plumbers', icon: Pipette, text: 'Skilled plumbing manpower for installation and site coordination.' },
  { title: 'Painters', icon: Paintbrush, text: 'Interior and exterior painting teams for project finishing stages.' },
  { title: 'Scaffolders & Riggers', icon: Ruler, text: 'Safety-focused manpower for access, lifting support and structural works.' },
];

export const projects = [
  { name: 'High-Rise Construction', place: 'Dubai', image: '/images/project-01.png', tag: 'MANPOWER SUPPLY' },
  { name: 'Residential Development', place: 'Sharjah', image: '/images/project-02.png', tag: 'CIVIL WORKFORCE' },
  { name: 'Commercial Fit-Out', place: 'Ajman', image: '/images/project-03.png', tag: 'SKILLED TRADES' },
];

export const staffGallery = [
  { image: '/images/gallery-01.jpg', name: 'Munna Sah Hira', designation: 'Managing Director' },
  { image: '/images/gallery-02.jpg', name: 'Ramees Kabeer', designation: 'General Manager' },
  { image: '/images/gallery-03.jpg', name: 'Eidi Amin', designation: 'Operations Manager' },
  { image: '/images/gallery-04.jpg', name: 'Abdul Basit', designation: 'Transport Manager' },
  { image: '/images/gallery-05.jpg', name: 'Dhanjay', designation: 'HR Manager' },
  { image: '/images/gallery-06.jpg', name: 'Praveen Joseph', designation: 'Billing Manager' },
  { image: '/images/gallery-07.jpg', name: 'Shajahan TK', designation: 'IT Manager' },
  { image: '/images/gallery-08.jpg', name: 'Dilbar', designation: 'PRO' },
  { image: '/images/gallery-09.jpg', name: 'Faisal', designation: 'Accounts Manager' },
];

export const manpowerStats = [
  { value: 9000, suffix: '+', label: 'Group Workforce', note: 'Skilled, semi-skilled and support manpower', icon: Users },
  { value: 200, suffix: '+', label: 'Clients Served', note: 'Construction and project partners', icon: Building2 },
  { value: 300, suffix: '+', label: 'Projects Supported', note: 'Across multiple UAE sectors', icon: HardHat },
  { value: 8, suffix: '+', label: 'Core Trades', note: 'Civil, MEP and support categories', icon: Wrench },
  { value: 4, suffix: '', label: 'Key Emirates', note: 'Sharjah, Dubai, Ajman and Abu Dhabi', icon: MapPin },
];

export const capabilityBars = [
  { label: 'Civil & Structural Trades', value: 96, detail: 'Carpenters · Steel Fixers · Masons' },
  { label: 'General Site Support', value: 92, detail: 'Helpers · Material Handling · Site Support' },
  { label: 'MEP Workforce', value: 84, detail: 'Electricians · Plumbers' },
  { label: 'Finishing & Access', value: 78, detail: 'Painters · Scaffolders · Riggers' },
];
