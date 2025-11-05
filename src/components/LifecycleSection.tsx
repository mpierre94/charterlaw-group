import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { Rocket, Users, TrendingUp } from 'lucide-react';

const phases = [
  {
    icon: Rocket,
    title: 'PreLaunch Readiness',
    description: 'Legal guidance from concept to approval. Our pre-launch services ensure schools open on time, fully compliant, and built on a strong governance foundation.',
  },
  {
    icon: Users,
    title: 'Early Phase Support',
    description: 'Build sound policies and efficient compliance practices. Our early-phase support allows schools to become stable and focus on academic success as they grow.',
  },  

  {
    icon: TrendingUp,
    title: 'Sustainability Growth',
    description: 'Maintain long-term legal and operational compliance. Our sustainable growth services help schools stay stable and ready to expand their impact with confidence.',
  },
];

export function LifecycleSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-24 md:py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lifecycle-title text-4xl md:text-5xl lg:text-6xl mb-6 text-center"
        >
          The Charter School Lifecycle
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl text-[rgba(31,42,68,0.7)] text-center mb-20 max-w-2xl mx-auto"
          style={{ fontFamily: 'Franklin Gothic ATF, sans-serif', fontWeight: '400' }}
        >
          We support charter schools at every stage of their journey.
        </motion.p>

        {/* Horizontal Step-by-Step Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-[3px] bg-[#E8EEF2]">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="h-full bg-[#FFD166] origin-left"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  {/* Icon Container */}
                  <div className="flex flex-col items-center mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: 0.5 + index * 0.15,
                        ease: [0.34, 1.56, 0.64, 1], // Bouncy easing
                      }}
                      className="relative"
                    >
                      {/* Main Icon Circle */}
                      <div className="w-32 h-32 rounded-full bg-[#1E6091] flex items-center justify-center relative z-10 shadow-lg">
                        <Icon className="w-14 h-14 text-[#FFD166]" strokeWidth={1.5} />
                      </div>
                      
                      {/* Glow Effect */}
                      <div className="absolute inset-0 w-32 h-32 rounded-full bg-[#1E6091]/20 blur-xl" />
                    </motion.div>

                    {/* Step Number */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: 0.7 + index * 0.15,
                      }}
                      className="mt-4 px-3 py-1.5 bg-[#EDEDED] rounded-full"
                    >
                      <span 
                        className="text-sm text-[#000000]/60"
                        style={{ fontFamily: 'Franklin Gothic ATF, sans-serif', fontWeight: '500', letterSpacing: '0.05em' }}
                      >
                        STEP {index + 1}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h3 className="lifecycle-step-title">
                      {phase.title}
                    </h3>
                    <p className="lifecycle-description text-[rgba(31,42,68,0.7)] text-lg leading-relaxed max-w-xs mx-auto font-franklin-gothic">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}