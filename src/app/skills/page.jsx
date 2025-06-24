import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, dev tools I rely on, and technologies I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Technologies, tools, and environments I rely on."
      intro="Here’s a comprehensive list of tools, technologies, and platforms I regularly use to develop, test, and deploy scalable web applications."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1 Max, 64GB RAM">
            A beast of a machine that easily handles multiple Docker containers, heavy front-end builds, and simultaneous IDEs.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Development tools">
          <Tool title="VSCode with ESLint, Prettier, and GitLens">
            My go-to IDE. Enhanced with extensions for better linting, formatting, and version control.
          </Tool>
          <Tool title="Postman">
            Indispensable for testing RESTful APIs and verifying backend integrations.
          </Tool>
          <Tool title="Chrome DevTools & React Developer Tools">
            Essential for debugging and performance profiling.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Languages & Frameworks">
          <Tool title="JavaScript (ES6+), TypeScript">
            My core programming stack. Extensive experience with both across frontend and backend.
          </Tool>
          <Tool title="React, Redux, Next.js">
            Used for building complex SPAs and server-rendered applications with optimized performance.
          </Tool>
          <Tool title="Angular (v2–16), AngularJS">
            Strong expertise in modern Angular and migration from legacy AngularJS apps.
          </Tool>
          <Tool title="Node.js & Express">
            Backend development for creating RESTful APIs and middleware with JWT authentication.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Styling & Design">
          <Tool title="Tailwind CSS, SASS, Bootstrap, Material UI">
            My preferred choices for creating responsive and clean user interfaces.
          </Tool>
          <Tool title="Figma">
            Collaborative UI/UX design and handoff tools used with designers.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Testing & Quality">
          <Tool title="Jest, Enzyme, Cypress, React Testing Library">
            Maintain high code coverage and ensure test reliability across projects.
          </Tool>
          <Tool title="Karma, Jasmine, Mocha, Chai">
            Used across legacy and Angular-based applications.
          </Tool>
          <Tool title="SONAR & ESLint">
            Enforce code standards and detect vulnerabilities or code smells early.
          </Tool>
        </ToolsSection>

        <ToolsSection title="DevOps & Cloud">
          <Tool title="Docker, Kubernetes">
            Used for containerized deployments, microservices, and orchestration.
          </Tool>
          <Tool title="AWS (Lambda, S3, ECS, API Gateway), Azure (APIM, App Insights)">
            For scalable API hosting, asset storage, observability, and serverless functions.
          </Tool>
          <Tool title="Jenkins, Git, GitHub, GitLab">
            CI/CD setup, version control, and team collaboration.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Productivity & Collaboration">
          <Tool title="JIRA, Azure DevOps, Confluence">
            For sprint planning, tracking, and documentation.
          </Tool>
          <Tool title="Slack & MS Teams">
            Daily collaboration and standups.
          </Tool>
          <Tool title="OneNote & NotePad">
            Personal productivity, daily notes, and project documentation.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
