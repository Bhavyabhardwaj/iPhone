import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { rightImg, watchImg } from '../utils';

import VideoCarousel from './VideoCarousel';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useEffect(() => {
    // Ensure ScrollTrigger activates animations
    ScrollTrigger.defaults({ 
      toggleActions: 'restart pause resume pause' 
    });

    // Define GSAP animations
    const highlightAnimation = gsap.to('#highlight', {
      opacity: 1,
      scrollTrigger: {
        trigger: '#highlight',
        start: 'top bottom',
        toggleActions: 'restart none none none' // Adjust toggleActions as needed
      }
    });

    const titleAnimation = gsap.to('#title', {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '#title',
        start: 'top bottom',
        toggleActions: 'restart none none none' // Adjust toggleActions as needed
      }
    });

    const linkAnimation = gsap.to('.link', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: '.link',
        start: 'top bottom',
        toggleActions: 'restart none none none' // Adjust toggleActions as needed
      }
    });

    // Clean up animations when component unmounts
    return () => {
      highlightAnimation.kill();
      titleAnimation.kill();
      linkAnimation.kill();
    };
  }, []);

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width" id="highlight">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">Get the highlights.</h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
