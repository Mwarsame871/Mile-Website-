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

export function GetHelpPage() {
  const navigate = useNavigate()

  const helpWays = [
    {
      title: 'UVA Support',
      description:
        'Use UVA advising and student support offices for college process questions.',
      href: 'https://studentaffairs.virginia.edu/staff',
    },
    {
      title: 'College Guidance Programs',
      description:
        'Find counselors, advisors, and college access programs that guide students.',
      href: 'https://www.advisevirginia.org/',
    },
    {
      title: 'Legal Help',
      description:
        'Use immigration and documentation support resources for status questions.',
      href: 'https://www.justice4all.org/',
    },
    {
      title: 'Community Support',
      description:
        'Find local organizations like ISCV and trusted community support networks.',
      href: 'https://charlottesvillemasjid.com/',
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
        description="If the process feels confusing or overwhelming, you are not alone. This page helps you find trusted organizations, advisors, and programs that may be able to support you."
        tone="almond"
      />

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading
            eyebrow="Support"
            title="You are not alone"
            description="It is normal to feel confused. Many students go through this process without clear guidance, and it is always okay to ask for help."
          />
          <Callout>
            <p className="text-sm font-semibold text-semantic-textPrimary">
              You do not have to figure this out alone. Below are trusted organizations,
              advisors, and programs that may be able to support you.
            </p>
          </Callout>
          <Callout tone="subtle">
            <p className="text-sm font-semibold text-semantic-textPrimary">Student story</p>
            <p className="type-body max-w-prose">
              When asked about the most difficult part of her journey, Abi doesn’t point to academics—she points to navigating the system. “It’s hard when you don’t know what’s going on,” she says. Without people around her who had gone through the same process, much of it felt like trial and error. She credits the guidance she eventually found at her community college as a turning point, especially when it came to financial aid paperwork and understanding her options. “You really have to reach out,” she adds. “Getting help makes a big difference.”
            </p>
          </Callout>
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
                <TextLink href={item.href}>View organization details</TextLink>
              </Card>
            ))}
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="default">
        <SectionWrapper tone="default">
          <SectionHeading
            eyebrow="How To Use This Directory"
            title="Choose support based on your current need"
            description="Start with one category, check official sources, and follow the resource instructions directly."
          />
          <Card tone="rose" className="space-y-3 p-5 md:p-6">
            <p className="text-sm font-semibold text-semantic-textPrimary">Directory guidance</p>
            <p className="type-body">
              Look for the category that matches your question, then use the listed
              organization, office, or program website for the most accurate steps.
            </p>
            <p className="type-muted">
              This page is a self-serve guide to trusted external support resources.
            </p>
          </Card>
          <div className="space-y-3">
            <Card className="space-y-2 p-5 md:p-6">
              <p className="text-sm font-semibold text-semantic-textPrimary">Where to start first</p>
              <p className="type-body">
                1) Begin with Start Here for checklist planning, 2) review Documents & Legal
                for required records, and 3) use Financial Aid to prepare forms and scholarship searches.
              </p>
            </Card>
          </div>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading eyebrow="Safety" title="Safety and privacy reminder" />
          <Callout>
            <p className="text-sm font-semibold text-semantic-textPrimary">
              Share personal information only with trusted sources, and be careful with
              unknown links online.
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
            description="Use trusted organizations, advisors, and programs to take your next step with confidence."
          />
          <Callout tone="subtle">
            <p className="text-sm font-semibold text-semantic-textPrimary">
              Always check official websites or contact these organizations directly, as
              policies and requirements may change.
            </p>
          </Callout>
        </SectionWrapper>
      </ContentSection>
    </div>
  )
}
