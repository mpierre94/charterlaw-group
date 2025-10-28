import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import imgImageCharterSchoolLawGroup from "figma:asset/6e5c20423e92cfd172854e65ffa814134e060e3c.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1E6091] shadow-lg' : 'bg-[#000000]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={imgImageCharterSchoolLawGroup} 
              alt="Charter School Law Group" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-[#d4a647] transition-colors relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4a647] transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-[#d4a647] transition-colors relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4a647] transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('attorney')}
              className="text-white hover:text-[#d4a647] transition-colors relative group"
            >
              Attorney
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4a647] transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-[#d4a647] transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4a647] transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="bg-[#FFD166] text-[#1E6091] px-6 py-2.5 rounded-full hover:bg-[#d4a647] transition-all hover:shadow-lg"
            >
              Schedule a Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#1E6091] pb-6 px-4">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-[#2b9e8c] transition-colors text-left py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-[#2b9e8c] transition-colors text-left py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('attorney')}
                className="text-white hover:text-[#2b9e8c] transition-colors text-left py-2"
              >
                Attorney
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-[#2b9e8c] transition-colors text-left py-2"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('cta')}
                className="bg-[#FFD166] text-[#1E6091] px-6 py-3 rounded-full hover:bg-[#d4a647] transition-all text-center"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
