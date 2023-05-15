import './globals.css'
import classNames from 'classnames';
import { Cormorant_Garamond } from 'next/font/google'
import BacpLogo397908 from './resources/images/bacp-logo-397908.png';
import Image from 'next/image';

const garamond = Cormorant_Garamond({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-garamond',
  weight: ['300', '500', '700'],
});

export const metadata = {
  title: 'Sarah Fysh Counselling Therapy',
  description: 'I provide safe, confidential, and ethical counselling. I offer both remote and in-person sessions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classNames(garamond.className, /*merriweather.variable*/)}>
        {children}
        <footer className="mt-12">
          <Image src={BacpLogo397908} className="max-w-xs p-12 mx-auto" alt="BACP Registered Member: 397908" />
        </footer>
      </body>
    </html>
  )
}
