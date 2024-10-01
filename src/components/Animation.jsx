import { useEffect } from "react";

const AnimationOnScroll = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animateOnScroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    elements.forEach((element) => {
      observer.observe(element);
    });
    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  return null;
};

export default AnimationOnScroll;
