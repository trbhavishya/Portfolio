import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with me',
}

export default function Contact() {
  return (
    <SimpleLayout
      title="Let’s connect!"
      intro="I'm always open to professional networking, collaborations, or new opportunities. The best way to reach me is through LinkedIn."
    >
      <div className="text-lg text-zinc-600 dark:text-zinc-300 space-y-6">
        <p>
          <strong>Preferred Contact:</strong>{' '}
          <a
            href="https://linkedin.com/in/tbhavishya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500"
          >
            LinkedIn Profile
          </a>
        </p>
        <p><strong>Email (alternate):</strong> <a href="mailto:trbhavishya@gmail.com" className="text-teal-500">trbhavishya@gmail.com</a></p>
      </div>
    </SimpleLayout>
  )
}
