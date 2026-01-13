import React from "react";
import Image from "next/image";

const Testimonial = () => {
  const section = {
    smallTitle: "Testimonials",
    mainTitle: "What clients are saying",
  };

  const clientImages = [
    {
      id: 1,
      image: "/assets/images/client-thumb-1.png",
      alt: "client",
    },
    {
      id: 2,
      image: "/assets/images/client-thumb-2.png",
      alt: "client",
    },
    {
      id: 3,
      image: "/assets/images/client-thumb-3.png",
      alt: "client",
    },
    {
      id: 4,
      image: "/assets/images/client-thumb-4.png",
      alt: "client",
    },
    {
      id: 5,
      image: "/assets/images/client-thumb-5.png",
      alt: "client",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Alexa Jesmin",
      designation: "Marketing Manager",
      message:
        "The hosting service has been reliable and fast, helping our campaigns run smoothly without downtime. The support team is responsive, knowledgeable, and always ready to assist whenever we need help.",
    },
    {
      id: 2,
      name: "Devit m. kotlin",
      designation: "CEO & Founder",
      message:
        "This hosting platform has exceeded our expectations with its performance, security, and scalability. It has allowed our business to grow confidently while maintaining stability and excellent uptime.",
    },
    {
      id: 3,
      name: "John Doe",
      designation: "CTO",
      message:
        "The infrastructure delivers excellent speed, security, and scalability. From deployment to daily operations, everything runs smoothly, making it a reliable choice for managing critical applications.",
    },
    {
      id: 4,
      name: "Robert Alberto",
      designation: "Senior Developer",
      message:
        "The hosting environment is fast, stable, and easy to work with. Deployment is smooth, server controls are intuitive, and performance remains consistent even under heavy workloads.",
    },
    {
      id: 5,
      name: "Mike devid",
      designation: "HR",
      message:
        "The service has been dependable and easy to coordinate with. Clear communication, quick support responses, and reliable performance make it a trusted solution for our organization.",
    },
  ];

  return (
    <>
      {/* testimonial-section */}
      <div className="testimonial-section-two pt-30">
        <div className="container">
          <div className="client-carousel-2-area">
            <div className="row align-items-center">
              {/* Left Images Carousel */}
              <div className="col-sm-12 col-lg-5 pb-30">
                <div className="client-thumb-carousel owl-carousel">
                  {clientImages.map((item) => (
                    <div className="item" key={item.id}>
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={300}
                        height={300}
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content Carousel */}
              <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1 pb-30">
                <div className="client-content-2">
                  <div className="section-title section-title-two section-title-left">
                    <small>{section.smallTitle}</small>
                    <h2>{section.mainTitle}</h2>
                  </div>

                  <div className="client-content-carousel owl-carousel owl-theme">
                    {testimonials.map((item) => (
                      <div className="item" key={item.id}>
                        <div className="client-carousel-details text-center text-lg-start">
                          <p className="client-carousel-para">{item.message}</p>
                          <h3 className="client-carousel-name">{item.name}</h3>
                          <h4 className="client-carousel-designation">
                            {item.designation}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end testimonial-section */}
    </>
  );
};

export default Testimonial;
