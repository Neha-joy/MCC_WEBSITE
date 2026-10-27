// src/components/MajorClients.jsx

import React from "react";

const clients = [
  {
    name: "Client 01",
    logo: "/images/clients/client-01.webp",
  },
  {
    name: "Client 02",
    logo: "/images/clients/client-02.jpg",
  },
  {
    name: "Client 03",
    logo: "/images/clients/client-03.jpg",
  },
  {
    name: "Client 04",
    logo: "/images/clients/client-04.jpg",
  },
  {
    name: "Client 05",
    logo: "/images/clients/client-05.png",
  },
  {
    name: "Client 06",
    logo: "/images/clients/client-06.png",
  },
];

export default function MajorClients() {
  const repeatedClients = [...clients, ...clients];

  return (
    <section className="major-clients">
      <div className="major-clients-inner">

        <div className="clients-heading">
          <span>TRUSTED BY INDUSTRY</span>

          <h2>OUR MAJOR CLIENTS</h2>

          <p>
            Supporting leading construction and contracting companies with
            reliable manpower across the UAE.
          </p>
        </div>

        <div className="clients-marquee">
          <div className="clients-track">

            {repeatedClients.map((client, index) => (
              <div className="client-logo-card" key={`${client.name}-${index}`}>

                <img
                  src={client.logo}
                  alt={client.name}
                />

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}