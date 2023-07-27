
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Mulish } from 'next/font/google'

const mulish = Mulish({ subsets: ['latin'], weight: ['300', "400", "500", "600", "700", "800", "900"], display: "swap" })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
