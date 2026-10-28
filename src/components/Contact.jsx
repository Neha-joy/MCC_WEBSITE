import { useState } from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = async (event) => {
    event.preventDefault();

    setSending(true);
    setMessage('');

    const form = event.target;

    try {

      await emailjs.sendForm(
        'service_hgqx3pa',
        'template_6pme42k',
        form,
        {
          publicKey: 'muylOfX78tEnlL53a',
        }
      );

      setMessage('Requirement sent successfully.');
      form.reset();

    } catch (error) {

      console.error('EmailJS Error:', error);

      setMessage('Failed to send. Please try again.');

    } finally {

      setSending(false);

    }
  };


  return (
    <section className="contact" id="contact">

      <div className="contact-inner">

        <div className="contact-copy">

          <div className="eyebrow">
            LET'S WORK TOGETHER
          </div>

          <h2>
            NEED MANPOWER
            <br />
            <span>FOR YOUR NEXT PROJECT?</span>
          </h2>

          <p>
            Send your trade, quantity, project location and expected start date.
            Our team can review your requirement and coordinate the next steps.
          </p>


          <div className="contact-details">

            <a href="tel:+97165307879">
              <Phone />
              +971 6 530 7879
            </a>

            <a href="mailto:info@mccgroupuae.ae">
              <Mail />
              info@mccgroupuae.ae
            </a>

            <div>
              <MapPin />
              Sharjah · Dubai · Ajman · Abu Dhabi, UAE
            </div>

          </div>

        </div>


        <form
          className="contact-form"
          onSubmit={sendEmail}
        >

          <div className="form-row">

            <input
              required
              name="from_name"
              placeholder="Your name"
            />

            <input
              name="company"
              placeholder="Company name"
            />

          </div>


          <div className="form-row">

            <input
              type="email"
              required
              name="from_email"
              placeholder="Email address"
            />

            <input
              name="phone"
              placeholder="Phone number"
            />

          </div>


          <input
            name="project_location"
            placeholder="Project location"
          />


          <textarea
            rows="5"
            name="requirement"
            placeholder="Tell us the trades, quantity and expected mobilization date..."
          />


          <button
            className="btn primary"
            type="submit"
            disabled={sending}
          >

            {sending ? 'Sending...' : 'Send Requirement'}

            {!sending && <ArrowRight size={18} />}

          </button>


          {message && (
            <small>
              {message}
            </small>
          )}

        </form>

      </div>

    </section>
  );
}