import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { ExecutionModel } from '@/components/execution-model'
import { Services } from '@/components/services'
import { Sectors } from '@/components/sectors'
import { Projects } from '@/components/projects'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Strength } from '@/components/strength'
import { Gallery } from '@/components/gallery'
import { Clients } from '@/components/clients'
import { Contact } from '@/components/contact'
import { MapSection } from '@/components/map-section'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExecutionModel />
        <Services />
        <Sectors />
        <Projects />
        <WhyChooseUs />
        <Strength />
        <Gallery />
        <Clients />
        <Contact />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  )
}
