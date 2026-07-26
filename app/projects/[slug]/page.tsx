import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ScrollToTop } from '@/components/scroll-to-top'
import { ProjectDetail } from '@/components/project-detail'
import { getProjectBySlug, projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Project Not Found' }

  const { name, category } = project.content.en
  return {
    title: name,
    description: `${name} — ${category} project delivered by Lavin Group in Iraq.`,
    openGraph: {
      title: `${name} | Lavin Group`,
      description: `${name} — ${category} project delivered by Lavin Group.`,
      images: [{ url: project.cover, width: 1200, height: 630, alt: name }],
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <>
      <Navbar />
      <main>
        <ProjectDetail project={project} />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  )
}
