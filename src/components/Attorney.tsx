import { Scale, BookOpen, Shield, Mail, Phone, MapPin } from 'lucide-react';
import imgImageAnthonyCurry from '../assets/Attorney_Anthony_Curry.png';

export function Attorney() {
  return (
    <section id="attorney" className="bg-[#f7f4ee] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[#000000]">
            Meet Anthony Curry
          </h2>
          <p className="text-xl text-[rgba(31,42,68,0.7)]">
            Founder & Managing Attorney
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Photo and Contact */}
          <div className="space-y-8">
            {/* Photo */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src= {imgImageAnthonyCurry} 
                alt="Anthony Curry" 
                className="w-full h-auto"
              />
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
              <div className="space-y-3">
                <div>
                  <p className="text-[rgba(31,42,68,0.6)] mb-1">Email</p>
                  <a 
                    href="mailto:anthony@charterschoollaw.com"
                    className="text-[#1f4e79] hover:text-[#2b9e8c] transition-colors"
                  >
                    anthony@charterschoollaw.com
                  </a>
                </div>
                <div>
                  <p className="text-[rgba(31,42,68,0.6)] mb-1">Phone</p>
                  <a 
                    href="tel:702-523-7531"
                    className="text-[#1f4e79] hover:text-[#2b9e8c] transition-colors"
                  >
                    702-523-7531
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quote and Bio */}
          <div className="space-y-8">
            

            {/* Bio Paragraphs */}
            <div className="space-y-6 text-lg text-[rgba(0,0,0)] leading-relaxed">
              <p> I founded Charter School Law Group to address a gap I saw firsthand in Nevada’s education system. 
              </p>
              <p>
              Charter schools were doing extraordinary work for students and families but often struggled to access legal support that truly understood their world. Too many schools were forced to rely on counsel and advice that was costly and didn’t appreciate the nuances of charter school law.              </p>
              <p>
              As an executive at an education nonprofit, I spent three years working in Nevada education policy, helping to pass multiple pieces of legislation designed to strengthen and expand quality educational options. I also spent countless hours studying Nevada’s charter school statutes and learning the pitfalls schools often encounter. That experience showed me how strong governance and compliance frameworks can unlock the full potential of charter schools.
              </p>
              <p>
              My work in policy and advocacy has allowed me to see up close the value that charter schools bring to students, families, and our state. Charter School Law Group was built to support schools in their mission to continue providing that value: by providing the legal infrastructure schools need to stay stable and compliant.
              </p>
            </div>

            {/* Inline Icon Features */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 pt-6">
              <div className="flex items-start gap-4 min-w-[240px] sm:max-w-[280px]">
                <div className="w-12 h-12 rounded-full bg-[rgba(43,158,140,0.1)] flex items-center justify-center flex-shrink-0">
                  <Scale size={24} color="#76b3e1" />
                </div>
                <div className="flex-grow">
                  <p className="text-[#1f2a44] font-medium mb-2">Admissions</p>
                  <p className="text-[rgba(31,42,68,0.6)] leading-relaxed">
                    Texas <br />
                    Washington <br />
                    Nevada - Pending
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-full bg-[rgba(43,158,140,0.1)] flex items-center justify-center flex-shrink-0">
                  <BookOpen size={24} color="#76b3e1" />
                </div>
                <div className="flex-grow">
                  <p className="text-[#1f2a44] font-medium mb-2">Education</p>
                  <p className="text-[rgba(31,42,68,0.6)] leading-relaxed">
                    J.D., 2021, magna cum laude,<br />
                    Texas Southern University,<br />
                    Thurgood Marshall School of Law<br />
                    <br />
                    B.S. Political Science, 2017,<br />
                    Arizona State University
                  </p>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
