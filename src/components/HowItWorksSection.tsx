export function HowItWorksSection() {
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-[#FFFFFF] text-3xl lg:text-4xl font-bold">How It Works</h2>
          <p className="text-xl text-[rgba(31,42,68,0.7)]">
            Charter schools need more than general business law expertise. They need specialized legal support that evolves with them at each stage.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* Traditional Column */}
          <div className="space-y-8 p-8 rounded-2xl bg-[#f7f4ee] transform hover:scale-[1.02] transition-transform duration-300 ease-in-out animate-slide-in-left">
            <h3 className="text-[#1E6091] text-2xl text-center mb-8 font-semibold">
              Traditional Law Firms
            </h3>
            <p className="text-[rgba(31,42,68,0.7)] text-lg leading-relaxed">
              Most Nevada charter schools currently turn to general business law firms for legal support. While these firms bring broad expertise, they often lack a deep understanding of the charter school environment—its authorizing requirements, state-specific compliance rules, and governance structures. The result is uneven service: some schools receive excellent but costly advice, while others receive lower-quality counsel that misses critical education-sector nuances.
            </p>
          </div>

          {/* Specialized Column */}
          <div className="space-y-8 p-8 rounded-2xl bg-[#1E6091] text-white transform hover:scale-[1.02] hover:bg-[#2471a8] hover:shadow-[0_0_30px_rgba(30,96,145,0.3)] transition-all duration-300 ease-in-out animate-slide-in-right">
            <h3 className="text-[#FFD166] text-2xl text-center mb-8 font-semibold">
              Charter School Law Group
            </h3>
            <p className="text-white text-lg leading-relaxed">
              Charter School Law Group is changing that model. By tailoring service packages to each stage of a school's life cycle—from pre-launch to sustainable growth—we make specialized legal expertise accessible and predictable. Our subscription approach allows schools to pool resources and standardize common legal needs like policies, contracts, and governance systems. Each package includes a predetermined number of attorney hours and access to ready-made legal tools, giving schools consistent, high-quality support without unpredictable bills.
            </p>
          </div>
        </div>

        {/* Summary Statement */}
        <div className="text-center mt-12 text-lg text-[rgba(31,42,68,0.7)] max-w-3xl mx-auto animate-fade-in-up">
          <p>The result is a smarter, more sustainable way for Nevada's charter schools to meet their legal and compliance obligations.</p>
        </div>
      </div>
    </section>
  );
}
