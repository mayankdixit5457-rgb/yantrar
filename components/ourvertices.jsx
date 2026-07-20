"use client";

import { useRouter } from "next/navigation";

import "./ourvertices.css";

export default function OurVertices() {

  const router = useRouter();

  const items = [
    {
      title: "Agriculture",
      image: "/agriculture.webp",
      slug: "agriculture",
    },
    {
      title: "Survey & Mapping",
      image: "/survey.webp",
      slug: "survey-mapping",
    },
    {
      title: "Inspection",
      image: "/inspection.webp",
      slug: "inspection",
    },
    {
      title: "Surveillance",
      image: "/security.webp",
      slug: "surveillance",
    },
  ];

  return (
    <section className="verticals">

      <div className="verticals-container">

        {/* HEADER */}
        <div className="verticals-header">

          <span>OUR VERTICALS</span>

          <h2>
            Solutions Built for Every Mission
          </h2>

          <p>
            From agriculture to surveillance,
            our drone technology powers
            real-world applications with
            precision and reliability.
          </p>

        </div>

        {/* GRID */}
        <div className="verticals-grid">

          {items.map((item, i) => (

            <div
              key={i}
              className="vertical-card"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              onClick={() =>
                router.push(
                  `/services/${item.slug}`
                )
              }
            >

              <div className="vertical-overlay"></div>

              <div className="vertical-content">

                <h3>{item.title}</h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}