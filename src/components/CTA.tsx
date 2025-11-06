import { Calendar, ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section id="cta" className="relative bg-gradient-to-b from-[rgba(31,78,121,0.9)] to-[rgba(59,110,163,0.9)] py-24 lg:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        {/* Calendar Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
            <Calendar size={40} color="white" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-white mb-6">
          Ready to Strengthen Your Schools Legal Foundation?
        </h2>

        {/* Subheadline */}
        <p className="text-xl text-[rgba(255,255,255,0.9)] max-w-2xl mx-auto mb-10 leading-relaxed">
          Schedule a complimentary 30-minute consultation to discuss your school's needs and learn how we can help you stay compliant, reduce risk, and focus on student success.
        </p>

        {/* CTA Button */}
        <button className="bg-[#FFD166] text-[#1E6091] px-10 py-4 rounded-full hover:bg-[#d4a647] transition-all hover:shadow-2xl inline-flex items-center gap-3 group">
          Schedule a Consultation
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Trust Indicators */}
        <p className="text-[rgba(255,255,255,0.7)] mt-8">
          No obligation · Confidential · Easy scheduling
        </p>
      </div>
    </section>
  );
}
