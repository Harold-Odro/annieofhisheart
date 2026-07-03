import { Nav } from './components/Nav'
import { Hero } from './sections/Hero'
import { Story } from './sections/Story'
import { Details } from './sections/Details'
import { Programme } from './sections/Programme'
import { DressCode } from './sections/DressCode'
import { Gallery } from './sections/Gallery'
import { Menu } from './sections/Menu'
import { Registry } from './sections/Registry'
import { Rsvp } from './sections/Rsvp'
import { Footer } from './sections/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Details />
        <Programme />
        <DressCode />
        <Gallery />
        <Menu />
        <Registry />
        <Rsvp />
      </main>
      <Footer />
    </>
  )
}

export default App
