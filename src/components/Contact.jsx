import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-copy">
          <div className="eyebrow">LET'S WORK TOGETHER</div>
          <h2>NEED MANPOWER<br /><span>FOR YOUR NEXT PROJECT?</span></h2>
          <p>Send your trade, quantity, project location and expected start date. Our team can review your requirement and coordinate the next steps.</p>
          <div className="contact-details">
            <a href="tel:+97165307879"><Phone />+971 6 530 7879</a>
            <a href="mailto:info@mccgroupuae.ae"><Mail />info@mccgroupuae.ae</a>
            <div><MapPin />Sharjah · Dubai · Ajman · Abu Dhabi, UAE</div>
          </div>
        </div>
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <div className="form-row"><input required placeholder="Your name" /><input placeholder="Company name" /></div>
          <div className="form-row"><input type="email" required placeholder="Email address" /><input placeholder="Phone number" /></div>
          <input placeholder="Project location" />
          <textarea rows="5" placeholder="Tell us the trades, quantity and expected mobilization date..." />
          <button className="btn primary" type="submit">Send Requirement <ArrowRight size={18} /></button>
          <small>Demo form: connect this to your email/API before publishing.</small>
        </form>
      </div>
    </section>
  );
}
