import { ChevronDown } from 'lucide-react';
import imgHeroNew from "figma:asset/f62c519fb12c975f43c02b626fcf1ea03e3aa0bd.png";

export function Hero() {
  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(31,78,121,0.40)] to-[rgba(59,110,163,0.35)] z-10"></div>
        <img 
          src={imgHeroNew} 
          alt="Nevada charter school classroom" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Tagline Badge */}
        {/* <div className="inline-block">
            <span 
              className="
                bg-[rgba(227,181,74,0.85)] text-white uppercase
                w-[88vw] max-w-[340px] px-5 py-3 rounded-[14px] tracking-[0.4px] shadow-md
                md:w-auto md:px-6 md:py-2 md:rounded-full md:shadow-lg
                inline-block text-center leading-[1.55]
              " 
              style={{ 
                fontSize: 'clamp(12px, 3.5vw, 14px)',
                textShadow: '0 1px 3px rgba(0,0,0,0.3)' 
              }}
            >
              <span className="[@media(min-width:360px)]:inline hidden cera-black" >Built for Schools. <br /> Focused on Students.</span>
            </span>
          </div> */}

          {/* Main Headline */}
          <h1 className="text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
             Legal Services for Charter Schools — Smarter, Simpler, Built With Schools in Mind

          </h1>

          {/* Subheadline */}
          <p className="text-xl text-white max-w-2xl mx-auto" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
            Innovative legal services tailored for schools from launch to sustainability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button 
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#FFD166] text-[#1E6091] px-8 py-3 rounded-full hover:bg-[#d4a647] transition-all hover:shadow-2xl"
            >
              Schedule a Consultation
            </button>
            <button 
              onClick={scrollToHowItWorks}
              className="bg-white text-[#1E6091] border-2 border-[#1E6091] px-8 py-3 rounded-full hover:bg-[#1E6091] hover:text-white transition-all"
            >
              Learn More
            </button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToHowItWorks}
            className="flex items-center gap-2 text-[rgba(255,255,255,0.8)] hover:text-white transition-colors mx-auto pt-8 group"
          >
            <span className="uppercase tracking-wide">Scroll to Learn More</span>
            <ChevronDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
