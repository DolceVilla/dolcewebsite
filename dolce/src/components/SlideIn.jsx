

import React, { useRef, useState, useEffect } from 'react';

const SlideIn = ({ children, direction = 'left', className = '' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return; // guard

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.5 } // 50% visible
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const baseClasses = `transition-transform duration-1000 ease-out opacity-0`;
  const visibleClasses = visible ? 'opacity-100 translate-x-0' : '';
  const hiddenClasses = !visible
    ? direction === 'left'
      ? '-translate-x-40'
      : 'translate-x-40'
    : '';

  return (
    <div ref={ref} className={`${baseClasses} ${hiddenClasses} ${visibleClasses} ${className}`}>
      {children}
    </div>
  );
};

export default SlideIn;

