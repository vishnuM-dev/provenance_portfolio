import './globals.css';
import '@/components/CustomCursor.css';
import '@/components/ServicesCards.css';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import ScrollReveal from '@/components/ScrollReveal';
import CustomCursor from '@/components/CustomCursor';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  metadataBase: new URL('https://provenancetech.com'),
  title: {
    default: 'ProvenanceTech | Web & Mobile Application Development Studio',
    template: '%s | ProvenanceTech',
  },
  description: 'ProvenanceTech is a high-performance web application, mobile application, and custom software development company engineering scalable digital products on Next.js, React Native, and Amazon DynamoDB.',
  keywords: [
    'ProvenanceTech',
    'web application development',
    'mobile application development',
    'custom software company',
    'iOS app development',
    'Android app development',
    'React Native',
    'Next.js development',
    'Amazon DynamoDB',
    'SaaS development',
    'full-stack engineering',
  ],
  authors: [{ name: 'ProvenanceTech Engineering Team' }],
  creator: 'ProvenanceTech',
  publisher: 'ProvenanceTech Inc.',
  formatDetection: {
    email: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://provenancetech.com',
    siteName: 'ProvenanceTech',
    title: 'ProvenanceTech | Web & Mobile Application Development Studio',
    description: 'Engineering high-performance web applications, iOS and Android mobile apps, and scalable cloud solutions that help ambitious businesses grow.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProvenanceTech | Web & Mobile Application Development Studio',
    description: 'Engineering high-performance web applications, iOS and Android mobile apps, and scalable cloud solutions that help ambitious businesses grow.',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <CustomCursor />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ScrollReveal />
        <Navbar />
        <main id="main-content" className="main-content">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
