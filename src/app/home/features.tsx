"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface HostingFeature {
  _id: string;
  sectionData: {
    hostingfeature: {
      image: string;
      title: string;
      description: string;
      tags: string[];
      showinhomepage?: boolean;
    };
  };
}

const Features = () => {
  const [features, setFeatures] = useState<HostingFeature[]>([]);
  const [loading, setLoading] = useState(true);

  const section = {
    smallTitle: "Our offer",
    mainTitle: "Hosting features",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis",
  };

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await fetch('/api/hosting-features');
        const data = await response.json();
        
        if (data.success) {
          const filteredFeatures = data.data.filter((feature: HostingFeature) =>
            feature.sectionData.hostingfeature.showinhomepage === true
          );
          setFeatures(filteredFeatures);
        }
      } catch (error) {
        console.error('Error fetching features:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="feature-section bg-off-white-gradient pt-40 pb-70">
      <div className="container">
        {/* Section Title */}
        <div className="section-title section-title-two">
          <small>{section.smallTitle}</small>
          <h2>{section.mainTitle}</h2>
          <p>{section.description}</p>
        </div>

        {/* Features List */}
        <div className="row">
          {features.map((feature) => (
            <div key={feature._id} className="col-sm-12 col-lg-6">
              <div className="feature-item fluid-height">
                <div className="feature-item-inner full-height bg-white">
                  <div className="feature-item-thumb feature-item-thumb-round bg-off-hard-gradient">
                    {feature.sectionData.hostingfeature.image ? (
                      <img
                        src={feature.sectionData.hostingfeature.image}
                        alt={feature.sectionData.hostingfeature.title}
                        width={60}
                        height={60}
                      />
                    ) : (
                      <div style={{ width: 60, height: 60, backgroundColor: '#f0f0f0' }}></div>
                    )}
                  </div>

                  <div className="feature-item-content">
                    <h3>{feature.sectionData.hostingfeature.title}</h3>
                    <p>{feature.sectionData.hostingfeature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
