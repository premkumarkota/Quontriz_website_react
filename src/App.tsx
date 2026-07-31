import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { Industries } from './components/sections/Industries'
import { Portfolio } from './components/sections/Portfolio'
import { WhyChooseUs } from './components/sections/WhyChooseUs'
import { Process } from './components/sections/Process'
import { Technologies } from './components/sections/Technologies'
import { Testimonials } from './components/sections/Testimonials'
import { Statistics } from './components/sections/Statistics'
import { Careers } from './components/sections/Careers'
import { Blog } from './components/sections/Blog'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <ThemeProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Industries />
        <Portfolio />
        <WhyChooseUs />
        <Process />
        <Technologies />
        <Testimonials />
        <Statistics />
        <Careers />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
