import { Mail, Phone, MapPin } from 'lucide-react';
import imgImageCharterSchoolLawGroup1 from "figma:asset/214c4b1e3b9c22b1a88e456a587692ec11a3225e.png";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#f7f4ee] border-t border-[rgba(31,42,68,0.1)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Column 1 - Logo and Tagline */}
          <div>
            <img 
              src={imgImageCharterSchoolLawGroup1} 
              alt="Charter School Law Group" 
              className="h-12 w-auto mb-6"
            />
            <p className="text-[rgba(31,42,68,0.7)]">
              Proactive, affordable, and education-focused legal services for Nevada charter schools.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-[#000000] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-[rgba(31,42,68,0.7)] hover:text-[#d4a647] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-[rgba(31,42,68,0.7)] hover:text-[#d4a647] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('attorney')}
                  className="text-[rgba(31,42,68,0.7)] hover:text-[#d4a647] transition-colors"
                >
                  Meet the Attorney
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-[rgba(31,42,68,0.7)] hover:text-[#d4a647] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-[#000000] mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} color="#1f4e79" className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[rgba(31,42,68,0.6)]">Phone</p>
                  <a 
                    href="tel:702-523-7531"
                    className="text-[#1E6091] hover:text-[#d4a647] transition-colors"
                  >
                    702-523-7531
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} color="#1f4e79" className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[rgba(31,42,68,0.6)]">Email</p>
                  <a 
                    href="mailto:anthony@charterschoollaw.com"
                    className="text-[#1E6091] hover:text-[#d4a647] transition-colors break-words"
                  >
                    anthony@charterschoollaw.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} color="#1f4e79" className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[rgba(31,42,68,0.6)] mb-1">Address</p>
                  <address className="text-[#1E6091] not-italic">
                    1930 Village Center Cir.<br />
                    Suite 3-253<br />
                    Las Vegas, NV 89134
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(31,42,68,0.1)] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[rgba(31,42,68,0.6)]">
            <p>
              © 2025 Charter School Law Group. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="hover:text-[#2b9e8c] transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-[#2b9e8c] transition-colors">
                Terms of Service
              </button>
              <button className="hover:text-[#2b9e8c] transition-colors">
                Disclaimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
