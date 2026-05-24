import { HeroSection } from '@/components/sections/HeroSection'
import { IdentificationSection } from '@/components/sections/IdentificationSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { PsychoanalysisSection } from '@/components/sections/PsychoanalysisSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IdentificationSection />
      <PsychoanalysisSection />
      <ServicesSection />
      <AboutSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
