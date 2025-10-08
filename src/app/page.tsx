'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import WhyBeautyPass from './components/WhyBeautyPass'
import Procedures from './components/Procedures'
import Courses from './components/Courses'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Location from './components/Location'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyBeautyPass />
        <Procedures />
        <Courses />
        <Testimonials />
        <Contact />
        <Location />
      </main>
      <Footer />
    </div>
  )
}