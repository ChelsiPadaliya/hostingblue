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
      "High-performance hosting with strong security and guaranteed uptime for your website.",
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
    return (
      <section className="feature-section bg-off-white-gradient pt-40 pb-70">
        <div className="container">
          <div className="section-title section-title-two">
            <div className="h-4 bg-gray-200 rounded w-24 mx-auto mb-4 animate-pulse"></div>
            <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="row">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="col-sm-12 col-lg-6">
                <div className="feature-item fluid-height">
                  <div className="feature-item-inner full-height bg-white">
                    <div className="h-16 w-16 bg-gray-200 rounded-full mb-4 animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
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
