import { Link, useNavigate } from 'react-router-dom'
import { ContentSection } from '../components/layout/ContentSection'
import { ResponsiveGrid } from '../components/layout/ResponsiveGrid'
import { SectionWrapper } from '../components/layout/SectionWrapper'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'
import { TextLink } from '../components/ui/TextLink'

export function HomePage() {
  const navigate = useNavigate()

  const paths = [
    {
      title: 'Start the College Process',
      description: 'A clear first step if you are unsure where to begin.',
      to: '/start-here',
      tone: 'default' as const,
    },
    {
      title: 'Understand Financial Aid',
      description: 'Learn how to pay for college and where aid may come from.',
      to: '/financial-aid',
      tone: 'rose' as const,
    },
    {
      title: 'Documents & Legal Help',
      description: 'Get guidance for paperwork, deadlines, and legal status questions.',
      to: '/documents-legal',
      tone: 'default' as const,
    },
    {
      title: 'Find Support',
      description: 'Connect with people and services that can support your journey.',
      to: '/get-help',
      tone: 'rose' as const,
    },
  ]

  const resourcePreview = [
    {
      title: 'Scholarships',
      description: 'Find scholarship opportunities and application tips.',
      to: '/resources',
    },
    {
      title: 'Financial Aid Help',
      description: 'Understand forms, timelines, and common requirements.',
      to: '/financial-aid',
    },
    {
      title: 'Legal Guidance',
      description: 'See trusted guidance for documentation and legal process support.',
      to: '/documents-legal',
    },
  ]

  return (
    <div className="space-y-4">
      <SectionWrapper tone="rose" className="arch-motif">
        <div className="space-y-5">
          <Badge>MILE College Guide</Badge>
          <h1 className="type-display max-w-prose">
            You do not have to figure out college alone.
          </h1>
          <p className="type-body max-w-prose">
            We help refugee students move through the college process step by step,
            with clear guidance, trusted resources, and human support.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <Button onClick={() => navigate('/start-here')}>Start Here</Button>
            <Button variant="secondary" onClick={() => navigate('/get-help')}>
              Get Help
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading
            eyebrow="Choose Your Path"
            title="Start with what you need right now"
            description="Pick one path below and we will guide you from there."
          />
          <ResponsiveGrid columns={2}>
            {paths.map((path) => (
              <Link
                key={path.to}
                to={path.to}
                className="group rounded-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-focus focus-visible:ring-offset-2 focus-visible:ring-offset-semantic-canvas"
              >
                <Card
                  tone={path.tone}
                  className="h-full space-y-3 transition-colors group-hover:border-semantic-borderStrong/70"
                >
                  <h3 className="type-h3">{path.title}</h3>
                  <p className="type-body">{path.description}</p>
                  <p className="type-muted">Open section</p>
                </Card>
              </Link>
            ))}
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading
            eyebrow="Why This Exists"
            title="College systems can feel hard to navigate"
            description="Many refugee students face barriers with language, financial aid, documentation, and unfamiliar systems. This platform exists to make those steps clearer and more supportive."
          />
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="default">
        <SectionWrapper tone="default">
          <SectionHeading
            eyebrow="How It Works"
            title="A simple three-step approach"
          />
          <ResponsiveGrid columns={3}>
            <Card className="space-y-2">
              <p className="text-sm font-semibold text-semantic-textPrimary">1. Learn the process</p>
              <p className="type-body">Understand what comes first and what to do next.</p>
            </Card>
            <Card tone="rose" className="space-y-2">
              <p className="text-sm font-semibold text-semantic-textPrimary">2. Explore resources</p>
              <p className="type-body">Use guides and tools matched to your needs.</p>
            </Card>
            <Card className="space-y-2">
              <p className="text-sm font-semibold text-semantic-textPrimary">3. Get support</p>
              <p className="type-body">Reach out when you need direct help and clarity.</p>
            </Card>
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading
            eyebrow="Resources Preview"
            title="Start with trusted guidance"
            description="A few key areas you can explore right away."
          />
          <ResponsiveGrid columns={3}>
            {resourcePreview.map((item) => (
              <Card key={item.title} tone="rose" className="space-y-3">
                <h3 className="type-h3">{item.title}</h3>
                <p className="type-body">{item.description}</p>
                <TextLink href={item.to}>View resource area</TextLink>
              </Card>
            ))}
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading
            eyebrow="Next Step"
            title="Take one step today"
            description="Small progress matters. Begin where you feel most ready."
            action={
              <div className="flex flex-wrap gap-2.5">
                <Button onClick={() => navigate('/start-here')}>Start Here</Button>
                <Button variant="secondary" onClick={() => navigate('/get-help')}>
                  Get Help
                </Button>
              </div>
            }
          />
        </SectionWrapper>
      </ContentSection>
    </div>
  )
}
