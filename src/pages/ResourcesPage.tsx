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

export function ResourcesPage() {
  const navigate = useNavigate()

  const applicationSupport = [
    {
      name: 'School counselors / advisors',
      description: 'Get help with application planning, deadlines, and next steps.',
      href: 'https://www.charlottesvilleschools.org/chs',
    },
    {
      name: 'College access programs',
      description: 'Programs that guide students through admissions and preparation.',
      href: 'https://www.advisevirginia.org/',
    },
    {
      name: 'High school & community guidance',
      description: 'Local school and community organizations with college support.',
      href: 'https://www.charlottesvilleschools.org/',
    },
  ]

  const financialAidResources = [
    {
      name: 'FAFSA / federal aid',
      description: 'Official starting point for many federal financial aid options.',
      href: 'https://studentaid.gov/understand-aid/eligibility/requirements',
    },
    {
      name: 'QuestBridge',
      description: 'A college access and scholarship pathway for eligible students.',
      href: 'https://www.questbridge.org/',
    },
    {
      name: 'Dell Scholars',
      description: 'Scholarship support for students with strong college potential.',
      href: 'https://www.dellscholars.org/',
    },
    {
      name: 'Other scholarship programs',
      description: 'Search local, state, and community scholarship opportunities.',
      href: 'https://opportunities.unhcr.org/',
    },
  ]

  const legalResources = [
    {
      name: 'Immigration lawyers',
      description: 'Professional legal guidance for complex status questions.',
      href: 'https://www.tcruzlaw.com/',
    },
    {
      name: 'Legal aid organizations',
      description: 'Low-cost or free legal support services in many communities.',
      href: 'https://www.justice4all.org/',
    },
    {
      name: 'Community legal clinics',
      description: 'Local clinics that may provide document and legal process help.',
      href: 'https://www.law.virginia.edu/immigration-law-clinic',
    },
  ]

  const communityResources = [
    {
      name: 'ISCV and mosque/community partners',
      description: 'Trusted community support with culturally grounded guidance.',
      href: 'https://charlottesvillemasjid.com/',
    },
    {
      name: 'Local organizations',
      description: 'Community programs that support youth and family success.',
      href: 'https://www.rescue.org/united-states/charlottesville-va',
    },
    {
      name: 'Student groups and peer support programs',
      description: 'Peer support and shared college experience from trusted communities.',
      href: 'https://atuva.student.virginia.edu/organizations',
    },
  ]

  const featuredResources = [
    {
      name: 'QuestBridge',
      description: 'Explore a pathway to strong college matches and scholarship support.',
      href: 'https://www.questbridge.org/',
    },
    {
      name: 'School counselor support',
      description: 'A direct and practical place to ask your first questions.',
      href: 'https://www.charlottesvilleschools.org/chs',
    },
    {
      name: 'Community legal help',
      description: 'Useful when you need support with documents or status concerns.',
      href: 'https://www.justice4all.org/',
    },
  ]

  const quickActions = [
    {
      title: 'Start Here',
      description: 'Follow a step-by-step beginner roadmap.',
      to: '/start-here',
      tone: 'default' as const,
    },
    {
      title: 'Financial Aid',
      description: 'Learn how to pay for college and what may apply to you.',
      to: '/financial-aid',
      tone: 'rose' as const,
    },
    {
      title: 'Documents & Legal',
      description: 'Review document basics and legal support pathways.',
      to: '/documents-legal',
      tone: 'default' as const,
    },
    {
      title: 'Get Help',
      description: 'Connect with support when you feel stuck.',
      to: '/get-help',
      tone: 'rose' as const,
    },
  ]

  return (
    <div className="space-y-4">
      <PageHeaderBlock
        title="Resources"
        description="This page includes helpful links, organizations, and tools to support you through college applications, aid, documents, and next steps."
        tone="rose"
      />

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading
            eyebrow="Start Here"
            title="How to use this page"
            description="Resources are grouped by category. Explore the section that matches what you need right now."
          />
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="default">
        <SectionWrapper tone="default">
          <SectionHeading
            eyebrow="Category A"
            title="College application support"
          />
          <ResponsiveGrid columns={3}>
            {applicationSupport.map((item, index) => (
              <Card key={item.name} tone={index % 2 ? 'rose' : 'default'} className="space-y-3">
                <h3 className="type-h3">{item.name}</h3>
                <p className="type-body">{item.description}</p>
                <TextLink href={item.href}>Open resource</TextLink>
              </Card>
            ))}
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading
            eyebrow="Category B"
            title="Financial aid & scholarships"
          />
          <ResponsiveGrid columns={2}>
            {financialAidResources.map((item, index) => (
              <Card key={item.name} tone={index % 2 ? 'default' : 'rose'} className="space-y-3">
                <h3 className="type-h3">{item.name}</h3>
                <p className="type-body">{item.description}</p>
                <TextLink href={item.href}>Open resource</TextLink>
              </Card>
            ))}
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading
            eyebrow="Category C"
            title="Legal & documentation help"
          />
          <ResponsiveGrid columns={3}>
            {legalResources.map((item, index) => (
              <Card key={item.name} tone={index % 2 ? 'rose' : 'default'} className="space-y-3">
                <h3 className="type-h3">{item.name}</h3>
                <p className="type-body">{item.description}</p>
                <TextLink href={item.href}>Open resource</TextLink>
              </Card>
            ))}
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="default">
        <SectionWrapper tone="default">
          <SectionHeading
            eyebrow="Category D"
            title="Community & support networks"
            description="These resources are here to help you feel supported, connected, and not alone."
          />
          <ResponsiveGrid columns={3}>
            {communityResources.map((item, index) => (
              <Card key={item.name} tone={index % 2 ? 'default' : 'rose'} className="space-y-3">
                <h3 className="type-h3">{item.name}</h3>
                <p className="type-body">{item.description}</p>
                <TextLink href={item.href}>Open resource</TextLink>
              </Card>
            ))}
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading
            eyebrow="Featured"
            title="Important resources to check first"
          />
          <ResponsiveGrid columns={3}>
            {featuredResources.map((item) => (
              <Card key={item.name} tone="rose" className="space-y-3">
                <h3 className="type-h3">{item.name}</h3>
                <p className="type-body">{item.description}</p>
                <TextLink href={item.href}>Open resource</TextLink>
              </Card>
            ))}
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading
            eyebrow="Quick Actions"
            title="Go directly to the page you need"
            action={
              <div className="flex flex-wrap gap-2.5">
                <Button onClick={() => navigate('/start-here')}>Start Here</Button>
                <Button variant="secondary" onClick={() => navigate('/get-help')}>
                  Get Help
                </Button>
              </div>
            }
          />
          <ResponsiveGrid columns={4}>
            {quickActions.map((item) => (
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
          <SectionHeading eyebrow="Final Note" title="Always verify important details" />
          <Callout>
            <p className="text-sm font-semibold text-semantic-textPrimary">
              Resources and policies can change over time. Always verify details with official sources.
            </p>
          </Callout>
        </SectionWrapper>
      </ContentSection>
    </div>
  )
}
