import './globals.css';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: 'PREVENANCE | Web & Mobile Application Development Studio',
  description: 'Prevenance is a high-performance web application, mobile application, and custom software development company engineering scalable digital products on Next.js, React Native, and Amazon DynamoDB.',
  keywords: [
    'web application development',
    'mobile application development',
    'custom software company',
    'iOS app development',
    'Android app development',
    'React Native',
    'Next.js development',
    'Amazon DynamoDB',
    'SaaS development',
    'Prevenance'
  ],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Navbar />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
