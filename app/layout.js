import './globals.css'
import { Merriweather } from 'next/font/google'

const merriweather = Merriweather({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: ['300', '400', '700'],
});

export const metadata = {
  title: 'Sarah Fysh Counselling Therapy',
  description: 'I provide safe, confidential, and ethical counselling. I offer both remote and in-person sessions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={merriweather.className}>
        {children}
        <footer>
          <p>BACP Registered Member: 397908</p>
        </footer>
      </body>
    </html>
  )
}
