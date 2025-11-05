import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Attorney } from './components/Attorney';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { LifecycleSection } from './components/LifecycleSection';
import { HowItWorksSection } from './components/HowItWorksSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorksSection />
      <LifecycleSection />
      <Attorney />
      <CTA />
      <Footer />
    </div>
  );
}
