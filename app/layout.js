import classNames from 'classnames';
import './globals.css'
import { Cormorant_Garamond, Merriweather } from 'next/font/google'

const garamond = Cormorant_Garamond({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-garamond',
  weight: ['300', '500', '700'],
});

// const merriweather = Merriweather({
//   display: 'swap',
//   subsets: ['latin'],
//   variable: '--font-merriweather',
//   weight: ['300', '700'],
// });

export const metadata = {
  title: 'Sarah Fysh Counselling Therapy',
  description: 'I provide safe, confidential, and ethical counselling. I offer both remote and in-person sessions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classNames(garamond.className, /*merriweather.variable*/)}>
        {children}
        <footer>
          <p>BACP Registered Member: 397908</p>
        </footer>
      </body>
    </html>
  )
}
