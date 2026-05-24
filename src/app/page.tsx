import { HeroSection } from '@/components/sections/HeroSection'
import { IdentificationSection } from '@/components/sections/IdentificationSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { PsychoanalysisSection } from '@/components/sections/PsychoanalysisSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'
import { getPayload } from 'payload'
import config from '../payload.config'

export default async function HomePage() {
  const payload = await getPayload({ config })
  
  let testimonials: any[] = []
  try {
    const { docs } = await payload.find({
      collection: 'testimonials',
      where: {
        active: { equals: true },
      },
      sort: 'order',
    })
    testimonials = docs
  } catch (error) {
    console.error('Erro ao buscar depoimentos:', error)
  }

  return (
    <>
      <HeroSection />
      <IdentificationSection />
      <ServicesSection />
      <PsychoanalysisSection />
      <AboutSection />
      <HowItWorksSection />
      <TestimonialsSection testimonials={testimonials.length > 0 ? testimonials : undefined} />
      <CTASection />
    </>
  )
}
