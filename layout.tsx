import './globals.css';

export const metadata = {
  title: 'Sai Varnik Kammari | Software Engineer',
  description: 'Backend & Fintech-focused Software Engineer'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-200">{children}</body>
    </html>
  );
}
