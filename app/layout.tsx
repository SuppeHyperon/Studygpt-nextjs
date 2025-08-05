
import '../styles/globals.css';

export const metadata = {
  title: 'StudyGPT',
  description: 'Your AI-powered study assistant',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
