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
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eos qui velit, sed quia non numquam eius modi tempora cidunt lboredolore magnam luptatem.",
    },
    {
      id: 2,
      name: "Devit m. kotlin",
      designation: "CEO & Founder",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eos qui velit, sed quia non numquam eius modi tempora cidunt lboredolore magnam luptatem.",
    },
    {
      id: 3,
      name: "John Doe",
      designation: "CTO",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eos qui velit, sed quia non numquam eius modi tempora cidunt lboredolore magnam luptatem.",
    },
    {
      id: 4,
      name: "Robert Alberto",
      designation: "Senior Developer",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eos qui velit, sed quia non numquam eius modi tempora cidunt lboredolore magnam luptatem.",
    },
    {
      id: 5,
      name: "Mike devid",
      designation: "HR",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eos qui velit, sed quia non numquam eius modi tempora cidunt lboredolore magnam luptatem.",
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
