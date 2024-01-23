import './Name.css'

import { useSpring, animated } from 'react-spring';

const TypingEffect = ({ text }) => {

  const props = useSpring({
    from: { width: '98%', opacity: 0 },
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
          fontSize: '40px',
          color: '#D1C15F',
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