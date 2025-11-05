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
            {/* Pull Quote */}
            <div className="bg-white rounded-2xl shadow-lg p-8 relative">
              <div className="absolute top-6 left-6 text-[#76b3e1] opacity-40">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M26.6667 5C25.7826 5 24.9348 5.35119 24.3096 5.97631C23.6845 6.60143 23.3333 7.44928 23.3333 8.33333V18.3333C23.3333 19.2174 23.6845 20.0652 24.3096 20.6904C24.9348 21.3155 25.7826 21.6667 26.6667 21.6667C27.1087 21.6667 27.5326 21.8423 27.8452 22.1548C28.1577 22.4674 28.3333 22.8913 28.3333 23.3333V25C28.3333 25.8841 27.9821 26.7319 27.357 27.357C26.7319 27.9821 25.8841 28.3333 25 28.3333C24.558 28.3333 24.1341 28.5089 23.8215 28.8215C23.5089 29.134 23.3333 29.558 23.3333 30V33.3333C23.3333 33.7754 23.5089 34.1993 23.8215 34.5118C24.1341 34.8244 24.558 35 25 35C27.6522 35 30.1957 33.9464 32.0711 32.0711C33.9464 30.1957 35 27.6522 35 25V8.33333C35 7.44928 34.6488 6.60143 34.0237 5.97631C33.3986 5.35119 32.5507 5 31.6667 5H26.6667Z" stroke="currentColor" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.33333 5C7.44928 5 6.60143 5.35119 5.97631 5.97631C5.35119 6.60143 5 7.44928 5 8.33333V18.3333C5 19.2174 5.35119 20.0652 5.97631 20.6904C6.60143 21.3155 7.44928 21.6667 8.33333 21.6667C8.77536 21.6667 9.19928 21.8423 9.51184 22.1548C9.82441 22.4674 10 22.8913 10 23.3333V25C10 25.8841 9.64881 26.7319 9.02369 27.357C8.39857 27.9821 7.55072 28.3333 6.66667 28.3333C6.22464 28.3333 5.80072 28.5089 5.48816 28.8215C5.17559 29.134 5 29.558 5 30V33.3333C5 33.7754 5.17559 34.1993 5.48816 34.5118C5.80072 34.8244 6.22464 35 6.66667 35C9.31883 35 11.8624 33.9464 13.7377 32.0711C15.6131 30.1957 16.6667 27.6522 16.6667 25V8.33333C16.6667 7.44928 16.3155 6.60143 15.6904 5.97631C15.0652 5.35119 14.2174 5 13.3333 5H8.33333Z" stroke="currentColor" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <blockquote className="relative pl-8">
                <p className="text-2xl italic text-[#1E6091] leading-relaxed">
                I founded Charter School Law Group to address a gap I saw firsthand in Nevada’s education system. 
                </p>
              </blockquote>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-6 text-lg text-[rgba(0,0,0)] leading-relaxed">
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
