import { Link, useNavigate } from 'react-router-dom'
import { ContentSection } from '../components/layout/ContentSection'
import { PageHeaderBlock } from '../components/layout/PageHeaderBlock'
import { ResponsiveGrid } from '../components/layout/ResponsiveGrid'
import { SectionWrapper } from '../components/layout/SectionWrapper'
import { Button } from '../components/ui/Button'
import { Callout } from '../components/ui/Callout'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'
import { TextLink } from '../components/ui/TextLink'

export function FinancialAidPage() {
  const navigate = useNavigate()

  const aidTypes = [
    {
      title: 'Grants',
      description: 'Need-based funding that usually does not need to be paid back.',
    },
    {
      title: 'Scholarships',
      description: 'Support from schools or organizations based on need or achievement.',
    },
    {
      title: 'Work-study and campus jobs',
      description: 'Part-time work options that can help with college costs.',
    },
  ]

  const documents = [
    {
      name: 'I-94 record',
      description: 'Shows your arrival and status information used for aid review.',
    },
    {
      name: 'Approved status documents',
      description: 'Help colleges understand which aid options may apply to you.',
    },
    {
      name: 'Identity and school records',
      description: 'Basic records help verify your application and avoid delays.',
    },
  ]

  const scholarships = [
    {
      name: 'QuestBridge',
      description: 'A pathway connecting high-achieving students with top colleges.',
      href: '#',
    },
    {
      name: 'Dell Scholars',
      description: 'Scholarship support focused on persistence and college success.',
      href: '#',
    },
    {
      name: 'Other scholarships',
      description: 'Local, state, and community scholarship opportunities to explore.',
      href: '#',
    },
  ]

  const faqs = [
    {
      question: 'Do I need to be a citizen to get financial aid?',
      answer:
        'Not always. Some non-citizen statuses may qualify for aid, and schools may have other options.',
    },
    {
      question: 'What if my documents are still pending?',
      answer:
        'You can still ask schools what steps to take now and what you can submit first.',
    },
    {
      question: 'What if I do not understand the process?',
      answer:
        'That is common. Use this guide and reach out for one-on-one help when needed.',
    },
  ]

  const nextSteps = [
    {
      title: 'Documents & Legal',
      description: 'Review paperwork basics and status-related guidance.',
      to: '/documents-legal',
      tone: 'rose' as const,
    },
    {
      title: 'Start Here',
      description: 'Return to the beginner roadmap and checklist.',
      to: '/start-here',
      tone: 'default' as const,
    },
    {
      title: 'Get Help',
      description: 'Connect with direct support if you want guidance.',
      to: '/get-help',
      tone: 'rose' as const,
    },
  ]

  return (
    <div className="space-y-4">
      <PageHeaderBlock
        title="Financial Aid"
        description="This page helps you understand how to pay for college and what aid options may be available to you."
        tone="rose"
      />

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading
            eyebrow="Financial Aid Basics"
            title="What is financial aid?"
            description="Financial aid is support that helps make college more affordable. Many students do not pay full price."
          />
          <ResponsiveGrid columns={3}>
            {aidTypes.map((item, index) => (
              <Card key={item.title} tone={index % 2 ? 'rose' : 'default'} className="space-y-2">
                <h3 className="type-h3">{item.title}</h3>
                <p className="type-body">{item.description}</p>
              </Card>
            ))}
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading
            eyebrow="Eligibility"
            title="Can I get financial aid?"
            description="Aid eligibility can depend on your legal status and documents. Refugee or asylee status may qualify for federal aid, and options can differ by student."
          />
          <Callout>
            <p className="text-sm font-semibold text-semantic-textPrimary">
              Every situation is different. Always confirm details with official sources.
            </p>
          </Callout>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="default">
        <SectionWrapper tone="default">
          <SectionHeading
            eyebrow="Documents"
            title="Important documents"
            description="These documents help schools understand which aid options may apply."
          />
          <ResponsiveGrid columns={3}>
            {documents.map((doc) => (
              <Card key={doc.name} className="space-y-2">
                <h3 className="type-h3">{doc.name}</h3>
                <p className="type-body">{doc.description}</p>
              </Card>
            ))}
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading
            eyebrow="School Support Example"
            title="A note about schools like UVA"
            description="Some schools, including UVA, aim to meet 100% of demonstrated financial need. In simple terms, they may provide enough support to cover the gap your family cannot pay."
          />
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading
            eyebrow="Scholarships"
            title="Scholarship options to explore"
            description="Start with these examples and keep building your list."
          />
          <ResponsiveGrid columns={3}>
            {scholarships.map((item, index) => (
              <Card key={item.name} tone={index % 2 ? 'default' : 'rose'} className="space-y-3">
                <h3 className="type-h3">{item.name}</h3>
                <p className="type-body">{item.description}</p>
                <TextLink href={item.href}>Learn more</TextLink>
              </Card>
            ))}
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="default">
        <SectionWrapper tone="default">
          <SectionHeading
            eyebrow="Common Questions"
            title="If you feel unsure, start here"
          />
          <div className="space-y-3">
            {faqs.map((item, index) => (
              <Card key={item.question} tone={index % 2 ? 'rose' : 'default'} className="space-y-2 p-5 md:p-6">
                <p className="text-sm font-semibold text-semantic-textPrimary">{item.question}</p>
                <p className="type-body">{item.answer}</p>
              </Card>
            ))}
          </div>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading
            eyebrow="Next Steps"
            title="Continue where you need support"
            action={
              <div className="flex flex-wrap gap-2.5">
                <Button onClick={() => navigate('/documents-legal')}>Documents & Legal</Button>
                <Button variant="secondary" onClick={() => navigate('/get-help')}>
                  Get Help
                </Button>
              </div>
            }
          />
          <ResponsiveGrid columns={3}>
            {nextSteps.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group rounded-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-focus focus-visible:ring-offset-2 focus-visible:ring-offset-semantic-canvas"
              >
                <Card
                  tone={item.tone}
                  className="h-full space-y-3 transition-colors group-hover:border-semantic-borderStrong/70"
                >
                  <h3 className="type-h3">{item.title}</h3>
                  <p className="type-body">{item.description}</p>
                  <p className="type-muted">Open section</p>
                </Card>
              </Link>
            ))}
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>
    </div>
  )
}
