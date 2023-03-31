import '@/app/globals.css'

export const metadata = {
  title: 'Next ChatGPT',
  description: 'ChatGPT application built with OpenAI API, Next.js, TypeScript, and TailwindCSS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 h-screen">
        {children}
      </body>
    </html>
  )
}
