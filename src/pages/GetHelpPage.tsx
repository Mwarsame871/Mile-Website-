import { Link, useNavigate } from 'react-router-dom'
import { ContentSection } from '../components/layout/ContentSection'
import { PageHeaderBlock } from '../components/layout/PageHeaderBlock'
import { ResponsiveGrid } from '../components/layout/ResponsiveGrid'
import { SectionWrapper } from '../components/layout/SectionWrapper'
import { Button } from '../components/ui/Button'
import { Callout } from '../components/ui/Callout'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'
import { TextArea, TextInput } from '../components/ui/TextField'
import { TextLink } from '../components/ui/TextLink'

export function GetHelpPage() {
  const navigate = useNavigate()

  const helpWays = [
    {
      title: 'Talk to a Counselor or Advisor',
      description:
        'School counselors and college advisors can help you make a clear plan.',
      href: '#',
    },
    {
      title: 'Contact a Financial Aid Office',
      description:
        'Ask direct questions about paying for college and aid requirements.',
      href: '#',
    },
    {
      title: 'Legal / Documentation Help',
      description:
        'Reach out for support with immigration or document-related concerns.',
      href: '#',
    },
    {
      title: 'Community Support',
      description:
        'Connect with local organizations like ISCV and trusted community members.',
      href: '#',
    },
  ]

  const quickNav = [
    {
      title: 'Start Here',
      description: 'Begin with a simple roadmap and checklist.',
      to: '/start-here',
      tone: 'default' as const,
    },
    {
      title: 'Financial Aid',
      description: 'Learn how college costs and aid options work.',
      to: '/financial-aid',
      tone: 'rose' as const,
    },
    {
      title: 'Documents & Legal',
      description: 'Review common documents and legal support paths.',
      to: '/documents-legal',
      tone: 'default' as const,
    },
    {
      title: 'Resources',
      description: 'Browse trusted tools, contacts, and guidance.',
      to: '/resources',
      tone: 'rose' as const,
    },
  ]

  return (
    <div className="space-y-4">
      <PageHeaderBlock
        title="Get Help"
        description="If this process feels confusing or overwhelming, you are not alone. There are people and resources that can support you."
        tone="almond"
      />

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading
            eyebrow="Support"
            title="You are not alone"
            description="It is normal to feel confused. Many students go through this process without clear guidance, and it is always okay to ask for help."
          />
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading
            eyebrow="Ways To Get Help"
            title="Choose the support that fits your need"
          />
          <ResponsiveGrid columns={2}>
            {helpWays.map((item, index) => (
              <Card key={item.title} tone={index % 2 ? 'rose' : 'default'} className="space-y-3">
                <h3 className="type-h3">{item.title}</h3>
                <p className="type-body">{item.description}</p>
                <TextLink href={item.href}>Contact or learn more</TextLink>
              </Card>
            ))}
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="default">
        <SectionWrapper tone="default">
          <SectionHeading
            eyebrow="Contact"
            title="Request help"
            description="You can use this simple form layout as a starting point for future support requests."
          />
          <Card tone="rose" className="space-y-4 p-5 md:p-6">
            <TextInput label="Name" placeholder="Your name" />
            <TextInput label="Email" type="email" placeholder="you@example.com" />
            <TextArea label="Message" placeholder="Tell us what kind of help you need..." />
            <div className="flex flex-wrap gap-2.5">
              <Button type="button">Send Request</Button>
              <Button variant="secondary" type="button">
                Save For Later
              </Button>
            </div>
            <p className="type-muted">
              Placeholder: a full contact system can be connected here later.
            </p>
          </Card>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading eyebrow="Safety" title="Safety and privacy reminder" />
          <Callout>
            <p className="text-sm font-semibold text-semantic-textPrimary">
              Share personal information only with trusted sources, and be careful with
              unknown links or contacts online.
            </p>
          </Callout>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading
            eyebrow="Quick Navigation"
            title="Go to the page you need right now"
            action={
              <div className="flex flex-wrap gap-2.5">
                <Button onClick={() => navigate('/start-here')}>Start Here</Button>
                <Button variant="secondary" onClick={() => navigate('/financial-aid')}>
                  Financial Aid
                </Button>
              </div>
            }
          />
          <ResponsiveGrid columns={4}>
            {quickNav.map((item) => (
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

      <ContentSection tone="default">
        <SectionWrapper tone="default">
          <SectionHeading
            eyebrow="Final Message"
            title="You do not have to figure this out alone."
            description="There are people who want to help you succeed."
          />
        </SectionWrapper>
      </ContentSection>
    </div>
  )
}
