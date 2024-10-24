import Hero from '@/app/_components/ui-main/hero'
import Services from '@/app/_components/ui-main/services'
import Questions from '@/app/_components/ui-main/questions'
import React from 'react'
import Footer from '@/app/_components/ui-main/footer'
import CallToAction from '@/app/_components/ui-main/calltoaction'

const Page = () => {
  return (
    <div>
        <Hero />
        <Services />
        <Questions />
        <CallToAction />
        <Footer />
    </div>
  )
}

export default Page