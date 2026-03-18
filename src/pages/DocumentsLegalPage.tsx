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

export function DocumentsLegalPage() {
  const navigate = useNavigate()

  const commonDocuments = [
    {
      name: 'I-94 record',
      explanation:
        'This is your arrival/departure record and can help schools understand your situation.',
      whyItMatters:
        'It may be used when reviewing aid eligibility and required documentation.',
    },
    {
      name: 'Proof of status',
      explanation:
        'This can include documents showing refugee, asylee, or related status.',
      whyItMatters:
        'Status information can affect what support and aid options are available.',
    },
    {
      name: 'Identification documents',
      explanation:
        'Basic identity documents help verify who you are during applications.',
      whyItMatters:
        'Schools use these records to process applications correctly and safely.',
    },
    {
      name: 'School records (transcripts)',
      explanation:
        'Transcripts show your classes and grades from previous schools.',
      whyItMatters:
        'Colleges use them to review academic history and admissions readiness.',
    },
  ]

  const helpResources = [
    {
      title: 'School counselors / advisors',
      description: 'Ask for help understanding required forms and school deadlines.',
      href: '#',
    },
    {
      title: 'Financial aid offices',
      description: 'Confirm aid forms and document requirements for your situation.',
      href: '#',
    },
    {
      title: 'Immigration lawyers / legal help',
      description: 'Get reliable legal guidance when status questions are complex.',
      href: '#',
    },
    {
      title: 'Community organizations (like ISCV)',
      description: 'Find local support for families navigating college systems.',
      href: '#',
    },
  ]

  const faqs = [
    {
      question: 'What if I do not have all my documents yet?',
      answer:
        'You can still begin. Ask schools what to submit now and what can be sent later.',
    },
    {
      question: 'What if my status is still pending?',
      answer:
        'That is okay. Contact financial aid and trusted advisors early to plan your next steps.',
    },
    {
      question: 'Who can I talk to about my situation?',
      answer:
        'Start with a counselor, advisor, or trusted legal support organization.',
    },
  ]

  const nextSteps = [
    {
      title: 'Financial Aid',
      description: 'Learn how aid works and what documents may affect eligibility.',
      to: '/financial-aid',
      tone: 'rose' as const,
    },
    {
      title: 'Start Here',
      description: 'Return to the beginner roadmap and core checklist.',
      to: '/start-here',
      tone: 'default' as const,
    },
    {
      title: 'Get Help',
      description: 'Reach out for direct support if you feel unsure or stuck.',
      to: '/get-help',
      tone: 'rose' as const,
    },
  ]

  return (
    <div className="space-y-4">
      <PageHeaderBlock
        title="Documents & Legal"
        description="This page helps you understand which documents may be needed and where to get help if you are unsure."
        tone="almond"
      />

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading
            eyebrow="Why This Matters"
            title="Why documents matter"
            description="Colleges and financial aid offices often require documents to review applications and eligibility. It is okay if you do not understand every detail yet."
          />
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading
            eyebrow="Common Documents"
            title="Documents you may be asked for"
            description="These are common examples. Your exact list may be different."
          />
          <ResponsiveGrid columns={2}>
            {commonDocuments.map((item, index) => (
              <Card key={item.name} tone={index % 2 ? 'rose' : 'default'} className="space-y-3">
                <h3 className="type-h3">{item.name}</h3>
                <p className="type-body">{item.explanation}</p>
                <p className="type-muted">Why it matters: {item.whyItMatters}</p>
              </Card>
            ))}
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="default">
        <SectionWrapper tone="default">
          <SectionHeading
            eyebrow="Status Basics"
            title="Understanding status (simple overview)"
            description="Your legal/status situation can affect financial aid and applications. Status can differ from person to person, and it is normal to be unsure."
          />
          <Callout>
            <p className="text-sm font-semibold text-semantic-textPrimary">
              If you are unsure about your status, talk to a trusted advisor or legal professional.
            </p>
          </Callout>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading eyebrow="Important Note" title="Always verify details" />
          <Callout>
            <p className="text-sm font-semibold text-semantic-textPrimary">
              Policies and requirements can change, and every situation is different. Always confirm with official sources.
            </p>
          </Callout>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading
            eyebrow="Where To Get Help"
            title="Trusted places to ask questions"
            description="You do not need to solve everything on your own."
          />
          <ResponsiveGrid columns={2}>
            {helpResources.map((resource, index) => (
              <Card key={resource.title} tone={index % 2 ? 'default' : 'rose'} className="space-y-3">
                <h3 className="type-h3">{resource.title}</h3>
                <p className="type-body">{resource.description}</p>
                <TextLink href={resource.href}>Contact or learn more</TextLink>
              </Card>
            ))}
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="default">
        <SectionWrapper tone="default">
          <SectionHeading eyebrow="Common Questions" title="If you feel uncertain" />
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

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading
            eyebrow="Next Steps"
            title="Continue with the support you need"
            action={
              <div className="flex flex-wrap gap-2.5">
                <Button onClick={() => navigate('/financial-aid')}>Financial Aid</Button>
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
