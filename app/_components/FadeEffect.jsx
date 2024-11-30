// RevealAnimation.js
'use client';
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const RevealAnimation = ({
  children,
  fromX = 0, // Initial position on the X-axis
  fromY = 80, // Initial position on the Y-axis
  delay = 0, // Delay before animation starts
  duration = 300, // Duration of animation in ms
  initialOpacity = 0,
  springEffect = false, // Initial opacity
}) => {
  // useInView will monitor when the element is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Triggers only once when the component first comes into view
    threshold: 0.5, // 20% of the element should be visible before triggering
  });

  // Set up the spring animation, dependent on `inView`
  const styles = useSpring({
    from: {
      opacity: initialOpacity,
      transform: `translate(${fromX}px, ${fromY}px)`,
    },
    to: {
      opacity: inView ? 1 : initialOpacity,
      transform: inView
        ? 'translate(0px, 0px)'
        : `translate(${fromX}px, ${fromY}px)`,
    },
    config: springEffect
      ? { tension: 170, friction: 26 } // Bouncy spring effect
      : { duration },
    delay,
  });

  return (
    <animated.div ref={ref} style={styles} className="flex-1">
      {children}
    </animated.div>
  );
};

export default RevealAnimation;
