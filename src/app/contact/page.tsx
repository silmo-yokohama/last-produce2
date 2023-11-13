import ContentWrapper from '@/components/pages/ContentsWrapper/ContentWrapper'
import MailForm from '@/components/shares/templates/MailForm/MailForm'
import React from 'react'
import Grave from '/public/images/grave.jpg'
import Image from 'next/image'
import SubPageHeader from '@/components/shares/templates/SubPageHeader/SubPageHeader'

const page = () => {
  return (
    <ContentWrapper>
      <SubPageHeader title='お問い合わせ' subTitle='Contact Form' imageUrl={Grave.src} />

      <div>
        <div className="py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Get in touch</h2>

              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
            </div>

            <MailForm />

          </div>
        </div>

      </div>

    </ContentWrapper>
  )
}

export default page