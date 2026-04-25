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
import { TextLink } from '../components/ui/TextLink'

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
      description: 'Find trusted organizations, advisors, and programs for support.',
      to: '/get-help',
      tone: 'default' as const,
    },
  ]

  const timelineSteps = [
    {
      phase: 'Junior year (spring)',
      details:
        'Build your school list, review admission requirements, and start your core document folder.',
    },
    {
      phase: 'Summer before senior year',
      details:
        'Draft your personal statement, identify recommendation writers, and organize deadlines.',
    },
    {
      phase: 'Senior year (fall)',
      details:
        'Submit Early Decision or Early Action applications where applicable (UVA student deadline: November 1).',
    },
    {
      phase: 'Senior year (winter)',
      details:
        'Submit Regular Decision applications (UVA student deadline: January 5) and continue aid forms.',
    },
    {
      phase: 'Senior year (spring)',
      details:
        'Review decisions and aid offers, then finalize enrollment steps by school commitment deadlines.',
    },
  ]

  const deadlineFlow = [
    {
      title: 'Application cycle checkpoint',
      detail:
        'Application season launch is posted by Common App (for example, the 2025-2026 season launched on August 01, 2025).',
      link: 'https://www.commonapp.org/blog/common-app-celebrates-its-50th-anniversary-launch-2025-2026-application-season',
      linkLabel: 'Common App season launch update',
    },
    {
      title: 'UVA application deadlines',
      detail:
        'UVA lists Early Decision/Early Action student deadline as November 1 and Regular Decision student deadline as January 5.',
      link: 'https://admission.virginia.edu/admission/deadlines-instructions',
      linkLabel: 'UVA deadlines and instructions',
    },
    {
      title: 'FAFSA window and deadlines',
      detail:
        'FAFSA is governed by school deadline, state deadline, and federal deadline. Federal FAFSA deadline is June 30 for each academic year.',
      link: 'https://studentaid.gov/articles/3-fafsa-deadlines',
      linkLabel: 'Federal Student Aid deadline guide',
    },
    {
      title: 'Enrollment decision timing',
      detail:
        'Many admission plans use May 1 as the enrollment commitment date after decisions are released.',
      link: 'https://admission.virginia.edu/admission/deadlines-instructions',
      linkLabel: 'UVA notification and enrollment dates',
    },
  ]

  const decisionPaths = [
    {
      trigger: 'If your documents are missing or incomplete',
      action: 'Go to Documents & Legal first, then return here to complete your checklist.',
      to: '/documents-legal',
    },
    {
      trigger: 'If you are unsure how college costs will be covered',
      action: 'Start with Financial Aid to review aid eligibility, forms, and scholarship paths.',
      to: '/financial-aid',
    },
    {
      trigger: 'If you are unsure where to ask questions',
      action: 'Use Get Help to find trusted organizations, offices, and advisors.',
      to: '/get-help',
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

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading
            eyebrow="Timeline"
            title="Simple timeline to stay on track"
            description="A practical rhythm you can follow and adjust to your school list."
          />
          <ResponsiveGrid columns={2}>
            {timelineSteps.map((step, index) => (
              <Card key={step.phase} tone={index % 2 ? 'rose' : 'default'} className="space-y-2">
                <p className="text-sm font-semibold text-semantic-textPrimary">{step.phase}</p>
                <p className="type-body">{step.details}</p>
              </Card>
            ))}
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading
            title="Student Interview: Abi’s Journey"
          />
          <Callout>
            <p className="type-body max-w-prose">
              Abi describes her journey to college in the United States as both challenging and transformative. She arrived during her junior year of high school, first settling on the West Coast before later moving to Virginia for college. Reflecting on that transition, she explains that starting at a Virginia community college gave her something she truly needed: time. “It helped me get used to everything,” she shares, pointing to both the academic system and the cultural adjustment. Because she had not completed all four years of high school in the U.S., she also had to take an English placement-related exam—an extra step that many students in similar situations quietly face.
            </p>
          </Callout>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="default">
        <SectionWrapper tone="default">
          <SectionHeading
            eyebrow="Deadlines"
            title="Deadline flow from official sources"
            description="Use these checkpoints first, then verify each school-specific deadline directly."
          />
          <ResponsiveGrid columns={2}>
            {deadlineFlow.map((item, index) => (
              <Card key={item.title} tone={index % 2 ? 'rose' : 'default'} className="space-y-2">
                <p className="text-sm font-semibold text-semantic-textPrimary">{item.title}</p>
                <p className="type-body">{item.detail}</p>
                <TextLink href={item.link}>{item.linkLabel}</TextLink>
              </Card>
            ))}
          </ResponsiveGrid>
          <Callout tone="subtle">
            <p className="type-body">
              Deadline windows can change. Always check each school and official aid site
              before submitting.
            </p>
          </Callout>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading
            eyebrow="Decision Paths"
            title="If this happens, start here"
            description="Use the matching path below when you get stuck."
          />
          <div className="space-y-3">
            {decisionPaths.map((path) => (
              <Card key={path.trigger} className="space-y-2 p-5 md:p-6">
                <p className="text-sm font-semibold text-semantic-textPrimary">{path.trigger}</p>
                <p className="type-body">{path.action}</p>
                <TextLink href={`#${path.to}`}>Open section</TextLink>
              </Card>
            ))}
          </div>
          <Callout tone="subtle">
            <p className="type-body">
              Printable checklist tip: open this page on desktop and use your browser print
              option to save a copy for offline planning.
            </p>
          </Callout>
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

      <ContentSection tone="default">
        <SectionWrapper tone="default">
          <SectionHeading title="Student Interview: Abi’s Journey" />
          <Callout>
            <p className="type-body max-w-prose">
              Now, with her enrollment deferred and her financial aid applications resubmitted through VASA and CSS, Abi is preparing to transfer this fall with renewed clarity and hope. Looking back, she strongly recommends the community college pathway for students in similar situations, especially those adjusting to a new country or education system. For Abi, community college was more than just a starting point—it was a bridge. “It gave me time to adjust,” she reflects, “and now I feel ready for a four-year school.”
            </p>
          </Callout>
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
