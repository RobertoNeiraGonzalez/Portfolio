import './Name.css'

import { useSpring, animated } from 'react-spring';

const TypingEffect = ({ text }) => {

  const props = useSpring({
    from: { width: '0%', opacity: 0 },
    to: async (next) => {
      await next({ width: '100%', opacity: 1 });
    },
    config: { duration: 2000 },
  });
  
  return (
    <div>
      <animated.div
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          ...props,
          fontSize: '50px',
          color: 'gold',
          fontFamily: 'Chakra Petch, sans-serif',
          fontWeight: '100',  
        }}
      >
        {text}
      </animated.div>
    </div>
  );
};

export default TypingEffect;