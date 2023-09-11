import './globals.css'
import type { Metadata } from 'next'
import Nav from "./Nav"
// import { Inter } from 'next/font/google'
import { Roboto_Slab,Rubik,Cabin,Poppins} from 'next/font/google'

const roboto = Rubik({
  weight: '400',
  subsets: ['latin'],
})


// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Plumbers Near Me | GreenLinePlumbing.com ',
  description: 'all plumbing services like plumbing installation,plumbing fixtures, and plumbing repairing at affordable cost with a free 1-year guarantee. GreenLinePlumbing.com',
  robots:'all',
  alternates:{
    canonical:"https://www.greenlineplumbing.com"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">

      <body className={roboto.className}>
        <Nav/>
        {children}
        </body>
    </html>
  )
}
