import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import CtaSection from './Components/CtaSection'
import Second from './Components/Second'
import Footer from './Components/Footer'
import Attribute from './Components/Attribute'
import FeaturesSection from './Components/FeaturesSection'
import TestimonialsSection from './Components/TestimonialsSection'
import illu from './images/illustration-flowing-conversation.svg'
import ill from './images/illustration-grow-together.svg'
import il from './images/illustration-your-users.svg'

function App() {


  return (
    <>
      <Header />
      <Hero />
      <FeaturesSection
        imgSrc={ill}
        title="Grow Together"
        description="Generate meaningful discussions with your audience and build a strong, loyal community."
        number={1}
      />
      <FeaturesSection
        imgSrc={illu}
        title="Flowing Conversations"
        description="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
        number={2}
      />
      <FeaturesSection
        imgSrc={il}
        title="Your Users"
        description="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
        number={3}
      />
      <CtaSection />
      <Footer />
      <Attribute />
    </>
  )
}

export default App
