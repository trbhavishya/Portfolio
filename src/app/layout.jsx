import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Bhavishya',
    default:
      'Bhavishya - Frontend Developer',
  },
  description:
    'I’m Experienced Frontend Developer with a strong background in the manufacturing industry, specializing in building and maintaining scalable, high-performance web applications. Experienced in developing internal support portals and client-facing web application tailored to the needs of multiple stakeholders. Skilled in JavaScript, React, Angular, Tailwind CSS, and Apollo GraphQL, with a focus on usability, clean architecture, and cross-functional collaboration.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
