"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

const Contact = () => {
  const pathname = usePathname();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef(null);
  const animationRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Kill any existing animations
    animationRefs.current.forEach(anim => anim?.kill());
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Reset elements to their initial state
    gsap.set([
      subtitleRef.current,
      headingRef.current,
      descriptionRef.current,
      cardsRef.current?.children
    ], {
      clearProps: "all",
      opacity: 0,
      y: 0
    });

    // Heading animation
    const subtitleTl = gsap.from(subtitleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      y: 20,
      opacity: 0,
      duration: 0.6
    });

    const headingTl = gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2
    });

    const descTl = gsap.from(descriptionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.4
    });

    // Cards animation
    const cardsTl = gsap.from(cardsRef.current.children, {
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    });

    // Add hover effect to contact cards
    const cards = cardsRef.current.children;
    const hoverAnimations = [];

    Array.from(cards).forEach(card => {
      const enterAnimation = gsap.to(card, {
        y: -10,
        scale: 1.02,
        duration: 0.3,
        paused: true,
        ease: "power2.out"
      });

      card.addEventListener("mouseenter", () => enterAnimation.play());
      card.addEventListener("mouseleave", () => enterAnimation.reverse());
      
      hoverAnimations.push(enterAnimation);
    });

    // Store all animations for cleanup
    animationRefs.current = [subtitleTl, headingTl, descTl, cardsTl, ...hoverAnimations];

    // Cleanup function
    return () => {
      animationRefs.current.forEach(anim => anim?.kill());
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [pathname]); // Re-run when pathname changes

  return (
    <section ref={sectionRef} id="contact" className="py-10 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 bg-white overflow-hidden border border-gray-100 rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 md:max-w-md mx-auto text-center">
              <span 
                ref={subtitleRef}
                className="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest"
              >
                Contact Me
              </span>
              <h2 
                ref={headingRef}
                className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight"
              >
                Get in touch
              </h2>
              <p 
                ref={descriptionRef}
                className="text-gray-500 font-bold"
              >
                I’d love to hear from you! You can reach me by email or phone.
                I’ll get back to you as soon as I can.
              </p>
            </div>
            <div ref={cardsRef} className="flex flex-wrap -m-4">
              <div className="w-full md:w-1/3 p-4">
                <div className="p-10 text-center h-full bg-gray-100 rounded-3xl">
                  <div className="flex items-center justify-center mb-6 w-12 h-12 mx-auto bg-white rounded-xl">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3144C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3146 13.9828 15.4995 13.9955 15.7925C13.9985 15.862 14 15.9314 14 16Z"
                        fill="#3B82F6"
                      />
                      <path
                        d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                        fill="#3B82F6"
                      />
                      <path
                        d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15V15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6875 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0977C20.9863 12.1818 22 13.9755 22 16Z"
                        fill="#3B82F6"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading mb-2 text-xl text-gray-900 font-black">
                    Send Email
                  </h3>
                  <p className="text-gray-500 font-bold">tokeralp@gmail.com</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="p-10 text-center h-full bg-gray-100 rounded-3xl">
                  <div className="flex items-center justify-center mb-6 w-12 h-12 mx-auto bg-white rounded-xl">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3144C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3146 13.9828 15.4995 13.9955 15.7925C13.9985 15.862 14 15.9314 14 16Z"
                        fill="#3B82F6"
                      />
                      <path
                        d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                        fill="#3B82F6"
                      />
                      <path
                        d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15V15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6875 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0977C20.9863 12.1818 22 13.9755 22 16Z"
                        fill="#3B82F6"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading mb-2 text-xl text-gray-900 font-black">
                    Call Me or Send a Message
                  </h3>
                  <p className="text-gray-500 font-bold">+90 544 656 67 61</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="p-10 text-center h-full bg-gray-100 rounded-3xl">
                  <div className="flex items-center justify-center mb-6 w-12 h-12 mx-auto bg-white rounded-xl">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3144C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3146 13.9828 15.4995 13.9955 15.7925C13.9985 15.862 14 15.9314 14 16Z"
                        fill="#3B82F6"
                      />
                      <path
                        d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                        fill="#3B82F6"
                      />
                      <path
                        d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15V15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6875 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0977C20.9863 12.1818 22 13.9755 22 16Z"
                        fill="#3B82F6"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading mb-2 text-xl text-gray-900 font-black">
                    Address
                  </h3>
                  <p className="text-gray-500 font-bold">Ankara, Türkiye</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
