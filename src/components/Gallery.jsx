import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Images,
  CalendarDays
} from "lucide-react";

import "../gallery.css";


const galleryEvents = [

  {
    id: "onam",

    title: "ONAM CELEBRATION",

    year: "2026",

    cover:
      "/images/gallery/onam/cover.jpeg",

    description:
      "MCC Group Onam celebration with our team.",

    photos: [
      "/images/gallery/onam/cover.jpeg",
      "/images/gallery/onam/onam-2.jpeg",
      "/images/gallery/onam/onam-3.jpeg",
      "/images/gallery/onam/onam-4.jpeg",
      "/images/gallery/onam/onam-5.jpeg",
      "/images/gallery/onam/onam-6.jpeg",
      "/images/gallery/onam/onam-7.jpeg",
      "/images/gallery/onam/onam-8.jpeg",
      "/images/gallery/onam/onam-9.jpeg",
      "/images/gallery/onam/onam-1.jpeg",
    ]
  },


  {
    id: "eid",

    title: "EID CELEBRATION",

    year: "2026",

    cover:
      "/images/gallery/eid/cover.jpg",

    description:
      "Eid celebration with the MCC Group family.",

    photos: [
      "/images/gallery/eid/eid-1.jpg",
      "/images/gallery/eid/eid-2.jpg",
      "/images/gallery/eid/eid-3.jpg",
      "/images/gallery/eid/eid-4.jpg",
      "/images/gallery/eid/eid-5.jpg",
      "/images/gallery/eid/eid-6.jpg",
      "/images/gallery/eid/eid-7.jpg",
      "/images/gallery/eid/eid-8.jpg",
      "/images/gallery/eid/eid-9.jpg",
      "/images/gallery/eid/eid-10.jpg",
    ]
  },


  {
    id: "holi",

    title: "HOLI CELEBRATION",

    year: "2026",

    cover:
      "/images/gallery/holi/cover.jpg",

    description:
      "Colours, teamwork and celebration at MCC Group.",

    photos: [
      "/images/gallery/holi/holi-1.jpg",
      "/images/gallery/holi/holi-2.jpg",
      "/images/gallery/holi/holi-3.jpg",
      "/images/gallery/holi/holi-4.jpg",
      "/images/gallery/holi/holi-5.jpg"
    ]
  },


  {
    id: "House warming",

    title: "House warming",

    year: "2026",

    cover:
      "/images/gallery/house/cover.jpg",

    description:
      "Celebrating the spirit and unity of the House warming.",

    photos: [
      "/images/gallery/house/house-1.jpg",
      "/images/gallery/house/house-2.jpg",
      "/images/gallery/house/house-3.jpg",
      "/images/gallery/house/house-4.jpg",
      "/images/gallery/house/house-5.jpg",
      "/images/gallery/house/house-6.jpg"
    ]
  }

];


export default function Gallery() {

  const [selectedEvent, setSelectedEvent] =
    useState(null);


  return (

    <section className="event-gallery-page">


      <div className="event-gallery-inner">


        <AnimatePresence mode="wait">


          {!selectedEvent ? (


            /* =====================================
               EVENT FOLDERS
            ===================================== */

            <motion.div
              key="events"

              initial={{
                opacity: 0
              }}

              animate={{
                opacity: 1
              }}

              exit={{
                opacity: 0
              }}

              transition={{
                duration: .35
              }}
            >


              <div className="event-gallery-heading">

                <span>
                  MCC GROUP GALLERY
                </span>

                <h1>
                  MOMENTS THAT
                  <br />

                  <strong>
                    BRING US TOGETHER.
                  </strong>
                </h1>

                <p>
                  Explore celebrations, company events
                  and memorable moments from MCC Group.
                </p>

              </div>



              <div className="event-folder-grid">


                {galleryEvents.map(
                  (event, index) => (

                    <motion.button

                      key={event.id}

                      className="event-folder-card"

                      type="button"

                      onClick={() => {
                        setSelectedEvent(event);

                        window.scrollTo({
                          top: 0,
                          behavior: "auto"
                        });
                      }}

                      initial={{
                        opacity: 0,
                        y: 70
                      }}

                      whileInView={{
                        opacity: 1,
                        y: 0
                      }}

                      viewport={{
                        once: true,
                        amount: 0.15
                      }}

                      transition={{
                        duration: .7,
                        delay:
                          index * .08,
                        ease: [
                          .22,
                          1,
                          .36,
                          1
                        ]
                      }}
                    >


                      <img
                        src={event.cover}
                        alt={event.title}
                      />


                      <div
                        className="event-folder-overlay"
                      />


                      <div
                        className="event-folder-top"
                      >

                        <span>
                          <CalendarDays
                            size={14}
                          />

                          {event.year}
                        </span>

                      </div>


                      <div
                        className="event-folder-content"
                      >

                        <span
                          className="event-folder-count"
                        >
                          <Images
                            size={15}
                          />

                          {
                            event.photos
                              .length
                          }{" "}
                          PHOTOS
                        </span>


                        <h2>
                          {event.title}
                        </h2>


                        <p>
                          {event.description}
                        </p>


                        <div
                          className="event-open-text"
                        >
                          VIEW EVENT
                          <span>→</span>
                        </div>

                      </div>


                    </motion.button>

                  )
                )}


              </div>


            </motion.div>


          ) : (


            /* =====================================
               SELECTED EVENT PHOTOS
            ===================================== */

            <motion.div

              key={selectedEvent.id}

              className="selected-event-gallery"

              initial={{
                opacity: 0,
                y: 30
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              exit={{
                opacity: 0
              }}

              transition={{
                duration: .45
              }}
            >


              <div
                className="selected-event-header"
              >


                <button

                  type="button"

                  className="gallery-back-button"

                  onClick={() => {

                    setSelectedEvent(null);

                    window.scrollTo({
                      top: 0,
                      behavior: "auto"
                    });

                  }}
                >

                  <ArrowLeft
                    size={18}
                  />

                  BACK TO EVENTS

                </button>



                <div>

                  <span>
                    MCC GROUP ·{" "}
                    {selectedEvent.year}
                  </span>

                  <h1>
                    {
                      selectedEvent.title
                    }
                  </h1>

                  <p>
                    {
                      selectedEvent.description
                    }
                  </p>

                </div>


              </div>



              <div className="event-photo-collage">


                {selectedEvent.photos.map(
                  (photo, index) => {

                    const direction =
                      index % 3 === 0
                        ? -80
                        : index % 3 === 2
                          ? 80
                          : 0;


                    return (

                      <motion.figure
                        key={photo}
                        className={`event-photo event-photo-${index + 1}`}
                        initial={{
                          opacity: 0,
                          x: direction,
                          y: direction === 0 ? 70 : 20,
                          scale: 0.94
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                          y: 0,
                          scale: 1
                        }}
                        viewport={{
                          once: false,
                          amount: 0.2
                        }}
                        transition={{
                          duration: 0.75,
                          delay: (index % 4) * 0.06,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      >
                        <img
                          src={photo}
                          alt={`${selectedEvent.title} ${index + 1}`}
                          onLoad={(e) => {
                            const img = e.currentTarget;
                            const figure = img.closest(".event-photo");

                            if (!figure) return;

                            const isLandscape =
                              img.naturalWidth > img.naturalHeight;

                            const isPortrait =
                              img.naturalHeight > img.naturalWidth;

                            const isSquare =
                              img.naturalWidth === img.naturalHeight;

                            figure.classList.remove(
                              "landscape",
                              "portrait",
                              "square"
                            );

                            if (isLandscape) {
                              figure.classList.add("landscape");
                            } else if (isPortrait) {
                              figure.classList.add("portrait");
                            } else if (isSquare) {
                              figure.classList.add("square");
                            }
                          }}
                        />

                        <div className="event-photo-shade" />

                        <span>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </motion.figure>
                    );

                  }
                )}


              </div>


            </motion.div>


          )}


        </AnimatePresence>


      </div>


    </section>

  );
}