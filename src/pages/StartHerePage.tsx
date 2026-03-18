import { Link, useNavigate } from 'react-router-dom'
import { ContentSection } from '../components/layout/ContentSection'
import { PageHeaderBlock } from '../components/layout/PageHeaderBlock'
import { ResponsiveGrid } from '../components/layout/ResponsiveGrid'
import { SectionWrapper } from '../components/layout/SectionWrapper'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Callout } from '../components/ui/Callout'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'

export function StartHerePage() {
  const navigate = useNavigate()

  const roadmapSteps = [
    {
      title: 'Learn your options',
      description: 'Understand different school types and what may fit your goals.',
    },
    {
      title: 'Gather your documents',
      description: 'Collect the papers you may need before deadlines arrive.',
    },
    {
      title: 'Explore financial aid',
      description: 'Look at scholarships and aid options as early as possible.',
    },
    {
      title: 'Apply to schools',
      description: 'Prepare applications and submit them on time.',
    },
    {
      title: 'Ask for help when needed',
      description: 'You can get support at any step when something is unclear.',
    },
  ]

  const checklistTasks = [
    'Make a list of schools you may want to apply to.',
    'Learn what application deadlines mean and when they happen.',
    'Gather important documents in one place.',
    'Ask a counselor, advisor, or trusted adult for support.',
    'Look into financial aid options early.',
  ]

  const terms = [
    {
      term: 'Application deadline',
      meaning: 'The final date to submit your college application.',
    },
    {
      term: 'Financial aid',
      meaning: 'Money support that helps pay for college costs.',
    },
    {
      term: 'Scholarship',
      meaning: 'Money for college that you usually do not pay back.',
    },
    {
      term: 'Residency',
      meaning: 'Your legal place of residence, which can affect tuition or aid.',
    },
    {
      term: 'Transcript',
      meaning: 'Your official record of classes and grades from school.',
    },
  ]

  const questions = [
    {
      q: 'What if I do not know where to begin?',
      a: 'That is normal. Start with one small step and move forward from there.',
    },
    {
      q: 'What if my family cannot help me with the process?',
      a: 'You are not alone. Advisors, counselors, and trusted community members can help.',
    },
    {
      q: 'What if I am confused about paperwork?',
      a: 'Use the Documents & Legal section and ask for help early so you are not stuck.',
    },
    {
      q: 'Can I still apply if I am unsure about everything yet?',
      a: 'Yes. Many students begin unsure. You can learn as you go and still make progress.',
    },
  ]

  const nextSteps = [
    {
      title: 'Financial Aid',
      description: 'Understand ways to pay for college and where to begin.',
      to: '/financial-aid',
      tone: 'default' as const,
    },
    {
      title: 'Documents & Legal',
      description: 'Get support with paperwork, status questions, and planning.',
      to: '/documents-legal',
      tone: 'rose' as const,
    },
    {
      title: 'Get Help',
      description: 'Connect with guidance if you want one-on-one support.',
      to: '/get-help',
      tone: 'default' as const,
    },
  ]

  return (
    <div className="space-y-4">
      <PageHeaderBlock
        title="Start Here"
        description="If the college process feels confusing, this is the best place to begin. We will walk through the first steps in a simple and clear way."
        tone="almond"
      />

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <div className="space-y-5">
            <Badge>Simple Process Overview</Badge>
            <SectionHeading
              title="What applying to college usually involves"
              description="Think of this as a beginner roadmap. You do not need to do everything at once."
            />
            <ResponsiveGrid columns={3}>
              {roadmapSteps.map((step, index) => (
                <Card key={step.title} tone={index % 2 ? 'rose' : 'default'} className="space-y-2">
                  <p className="text-sm font-semibold text-semantic-textPrimary">
                    Step {index + 1}
                  </p>
                  <h3 className="type-h3">{step.title}</h3>
                  <p className="type-body">{step.description}</p>
                </Card>
              ))}
            </ResponsiveGrid>
          </div>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading
            eyebrow="Checklist"
            title="Step-by-step tasks you can start today"
            description="Use this list as a practical starting point."
          />
          <div className="space-y-3">
            {checklistTasks.map((task) => (
              <Card key={task} className="space-y-1 p-5 md:p-6">
                <p className="text-sm font-semibold text-semantic-textPrimary">Checklist item</p>
                <p className="type-body">- {task}</p>
              </Card>
            ))}
          </div>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="default">
        <SectionWrapper tone="default">
          <SectionHeading
            eyebrow="Glossary"
            title="Important terms to know"
            description="Short definitions to make unfamiliar words easier."
          />
          <ResponsiveGrid columns={2}>
            {terms.map((item, index) => (
              <Card key={item.term} tone={index % 2 ? 'rose' : 'default'} className="space-y-2">
                <h3 className="type-h3">{item.term}</h3>
                <p className="type-body">{item.meaning}</p>
              </Card>
            ))}
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading
            eyebrow="Reassurance"
            title="Common questions"
            description="If you feel uncertain, you are not the only one."
          />
          <div className="space-y-3">
            {questions.map((item) => (
              <Callout key={item.q}>
                <p className="text-sm font-semibold text-semantic-textPrimary">{item.q}</p>
                <p className="type-body">{item.a}</p>
              </Callout>
            ))}
          </div>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading
            eyebrow="Related Next Steps"
            title="Where to go next"
            description="Continue with the section that matches what you need most."
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
