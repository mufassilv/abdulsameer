import Nav from './components/Nav'
import Hero from './components/Hero'
import Summary from './components/Summary'
import Scope from './components/Scope'
import Solution from './components/Solution'
import Timeline from './components/Timeline'
import Pricing from './components/Pricing'
import Phase2 from './components/Phase2'
import Terms from './components/Terms'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Summary />
        <Scope />
        <Solution />
        <Timeline />
        <Pricing />
        <Phase2 />
        <Terms />
      </main>
    </>
  )
}
