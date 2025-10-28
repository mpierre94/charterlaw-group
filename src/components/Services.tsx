import { Rocket, GraduationCap, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'pre-launch',
    icon: Rocket,
    tag: 'Before Authorization',
    title: 'Pre-Launch Readiness',
    description: 'Navigate the charter application process and build compliant foundational policies, bylaws, and governance structures before you open your doors.',
    features: [
      'Charter application support',
      'Board governance setup',
      'Policy development',
      'Compliance roadmap'
    ],
    color: '#76b3e1'
  },
  {
    id: 'early-phase',
    icon: GraduationCap,
    tag: 'Years 1–4',
    title: 'Early-Phase Support',
    description: 'Establish sustainable systems during your critical first years. From hiring to special education compliance, we help you build the right way.',
    features: [
      'Employment contracts & handbooks',
      'IEP and Section 504 support',
      'Board training & meeting compliance',
      'Vendor contract review'
    ],
    color: '#1E6091'
  },
  {
    id: 'sustainability',
    icon: Shield,
    tag: 'Year 4+',
    title: 'Sustainability Services',
    description: 'Ongoing legal partnership to support growth, risk management, and strategic planning as your school scales and matures.',
    features: [
      'Annual compliance audits',
      'Policy updates & training',
      'Expansion & facilities counsel',
      'Risk mitigation strategies'
    ],
    color: '#76b3e1'
  }
];

export function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <h2 className="text-[#1E6091]">
            Legal Services Tailored to Your School's Stage
          </h2>
          <p className="text-xl text-[rgba(31,42,68,0.7)]">
            Charter schools have different needs at different stages. We offer three service packages designed to match where you are in your journey.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white border-2 border-[rgba(31,42,68,0.1)] rounded-2xl p-6 hover:shadow-xl hover:border-[#76b3e1] transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(43,158,140,0.08)' }}
              >
                <service.icon size={32} color={service.color} />
              </div>

              {/* Tag */}
              <div className="mb-4">
                <span className="text-[#76b3e1] uppercase tracking-wide">
                  {service.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[#1E6091] mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[rgba(31,42,68,0.7)] mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[rgba(43,158,140,0.1)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#76b3e1]"></div>
                    </div>
                    <span className="text-[rgba(31,42,68,0.7)]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <button className="text-[#76b3e1] hover:text-[#5a9cd1] flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-[rgba(31,42,68,0.7)] mb-4">
            Not sure which package fits your needs?
          </p>
          <button 
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-[#76b3e1] hover:text-[#5a9cd1] transition-colors"
          >
            Let's talk about a custom solution
          </button>
        </div>
      </div>
    </section>
  );
}
