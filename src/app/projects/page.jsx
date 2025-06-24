import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoVentera from '@/images/logos/ventera.svg'

const projects = [
  {
    name: 'Ventera Corporation',
    description:
      'Leading UI modernization efforts by migrating AngularJS apps to React. Developed scalable, modular components and implemented JWT authentication, Jest unit testing, and API integrations with Node.js and Express.',
    link: { href: '', label: '' },
    logo: logoVentera,
  },
  {
    name: 'IBM (Front-End Modernization)',
    description:
      'Built reusable Angular 16 components with TypeScript. Integrated AWS Lambda and ECS for CI/CD pipelines. Developed React dashboards using Hooks, Redux, and Context API.',
    link: { href: '', label: '' },
    logo: logoVentera,
  },
  {
    name: 'CGI - Scalable Web Apps',
    description:
      'Built scalable React web apps and REST APIs with Node/Express. Integrated CouchDB and MySQL. Employed Jest, Enzyme, and React Testing Library to maintain 100% test coverage.',
    link: { href: '', label: '' },
    logo: logoVentera,
  },
  {
    name: 'DXC Technology - Angular & Node',
    description:
      'Developed Angular components and Node APIs with JWT authentication. Integrated MongoDB using Mongoose and D3.js for advanced data visualizations.',
    link: { href: '', label: '' },
    logo: logoVentera,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Projects and roles held during professional experience.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects & Roles"
      intro="Throughout my career, I have contributed to and led the development of large-scale enterprise applications using modern front-end and back-end technologies. Here are some highlights."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
