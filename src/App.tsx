import Header from './components/Header'
import Hero from './components/Hero'
import AnnouncementTicker from './components/AnnouncementTicker'
import HolidaysSection from './components/HolidaysSection'
import BirthdaysSection from './components/BirthdaysSection'
import AnnouncementsSection from './components/AnnouncementsSection'
import NewsSection from './components/NewsSection'
import SpotlightSection from './components/SpotlightSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AnnouncementTicker />
      <main className="flex-1">
        <Hero />
        <BirthdaysSection />
        <HolidaysSection />
        <AnnouncementsSection />
        <NewsSection />
        <SpotlightSection />
      </main>
      <Footer />
    </div>
  )
}
