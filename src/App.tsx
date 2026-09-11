import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { CoreField } from './components/sections/CoreField'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { Industries } from './components/sections/Industries'
import { Process } from './components/sections/Process'
import { Technologies } from './components/sections/Technologies'
import { Blog } from './components/sections/Blog'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <ThemeProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <div className="page-stack">
          <Hero />
          <CoreField />
        </div>
        <About />
        <Services />
        <Industries />
        <Process />
        <Technologies />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
