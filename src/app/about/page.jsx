import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Bhavishya, a Senior Web Developer with deep experience in frontend engineering and cross-functional product delivery.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Bhavishya, a Senior Front-End Developer.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I bring 7+ years of hands-on experience building scalable and high-performance web applications. I specialize in modern frontend technologies including React, Angular (up to v16), JavaScript, and TypeScript.
            </p>
            <p>
              Currently, I lead UI development at Ventera Corporation where I focus on API integration, AngularJS to React migrations, and building reusable, testable, and efficient components. I have a strong command over state management using Redux and Context API, and extensive experience with HTML, CSS, Tailwind, Bootstrap, and SASS.
            </p>
            <p>
              Beyond frontend, I’ve contributed to full-stack applications using Node.js and Express, integrated REST APIs and GraphQL, and deployed microservices on AWS and Azure. I follow best practices using ESLint, Webpack, Vite, and testing frameworks such as Jest, Cypress, and Karma.
            </p>
            <p>
              Passionate about delivering user-centric solutions and clean architecture, I thrive in collaborative environments and agile teams. My work spans domains including manufacturing, insurance, and fintech — always with a focus on reliability, maintainability, and scalability.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/trbhavishya" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/trbhavishya/" icon={LinkedInIcon} className="mt-4">
              Connect on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:trbhavishya@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              trbhavishya@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}