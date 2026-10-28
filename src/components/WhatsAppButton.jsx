import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "9715XXXXXXXX";

  const message =
    "Hello MCC Group, I would like to enquire about manpower requirements.";

  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating"
      aria-label="Chat on WhatsApp"
    >
      <span className="whatsapp-ring" />

      <span className="whatsapp-icon-wrap">
        <FaWhatsapp />
      </span>
    </a>
  );
}