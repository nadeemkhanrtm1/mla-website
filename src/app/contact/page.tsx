import React from 'react'
import AboutPageBanner from '../component/about-pg-content/banner'
import Form from '../component/home-content/form'
import MainBanner from '../component/main-banner/main-banner'

const page = () => {
  return (
    <main>
        <MainBanner bannerTitle="Contact Us" subTitle="We would love to hear from you!"/>
        <Form/>
    </main>
  )
}

export default page