
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const skills = [
  "React", "Java", "Node.js", 
  "AWS", "ML/AI", "TypeScript"
];

const SkillCube = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, transition: { duration: 0.5 } }
      }}
      className="cube-container mx-auto my-12"
    >
      <motion.div
        className="cube"
        animate={{ 
          rotateX: [0, 360], 
          rotateY: [0, 360] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 20,
          ease: "linear"
        }}
      >
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="cube-face" 
            style={{
              transform: `rotateY(${index * 60}deg) translateZ(115px)`
            }}
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillCube;
