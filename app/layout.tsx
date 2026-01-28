import './globals.css'

export const metadata = {
  title: 'Sai Varnik Kammari | Software Engineer',
  description: 'Backend & Fintech Software Engineer'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
