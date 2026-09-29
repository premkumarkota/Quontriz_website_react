import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Gap } from './components/sections/Gap'
import { Services } from './components/sections/Services'
import { Outcomes } from './components/sections/Outcomes'
import { Industries } from './components/sections/Industries'
import { Approach } from './components/sections/Approach'
import { Company } from './components/sections/Company'
import { Insights } from './components/sections/Insights'
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
        <Hero />
        <Gap />
        <Services />
        <Outcomes />
        <Industries />
        <Approach />
        <Company />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
