import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Nine start',
  description: 'This is my portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='primary-font' >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
