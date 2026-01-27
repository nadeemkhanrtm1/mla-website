"use client";
import React from 'react'
import AboutPageBanner from '../component/about-pg-content/banner'
import Form from '../component/home-content/form'
import MainBanner from '../component/main-banner/main-banner'
import { useLanguage } from "@/app/context/LanguageContext";

const page = () => {
  const { t } = useLanguage();

  return (
    <main>
      <MainBanner
        bannerTitle={t.contact.banner.title}
        subTitle={t.contact.banner.subtitle}
      />
      <Form />
    </main>
  )
}

export default page