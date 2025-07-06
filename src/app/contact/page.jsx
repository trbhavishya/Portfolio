import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with me',
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-8 h-8 text-teal-500" {...props}>
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
    </svg>
  )
}

function EmailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="w-8 h-8 text-teal-500" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

export default function Contact() {
  return (
    <SimpleLayout
      title="Let’s connect!"
      intro="I'm always open to professional networking, collaborations, or new opportunities. Feel free to reach out through any of the methods below."
    >
      <div className="max-w-xl mx-auto bg-white/80 dark:bg-zinc-800/80 rounded-2xl shadow-lg p-8 space-y-8 border border-zinc-100 dark:border-zinc-700">
        <div className="flex items-center gap-4">
          <LinkedInIcon />
          <div>
            <div className="font-semibold text-zinc-800 dark:text-zinc-200">LinkedIn</div>
            <a
              href="https://linkedin.com/in/trbhavishya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline"
            >
              linkedin.com/in/trbhavishya
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <EmailIcon />
          <div>
            <div className="font-semibold text-zinc-800 dark:text-zinc-200">Email</div>
            <a href="mailto:trbhavishya@gmail.com" className="text-teal-500 hover:underline">
              trbhavishya@gmail.com
            </a>
          </div>
        </div>
        <div className="pt-4 text-center text-zinc-600 dark:text-zinc-300">
          <span className="font-medium">Looking forward to connecting with you!</span>
        </div>
      </div>
    </SimpleLayout>
  )
}
