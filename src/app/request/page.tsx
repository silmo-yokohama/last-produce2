import ContentWrapper from '@/components/pages/ContentsWrapper/ContentWrapper'
import SubPageHeader from '@/components/shares/templates/SubPageHeader/SubPageHeader'
import React from 'react'


/**
 * Images
 */
import HeaderImg from '/public/images/items.jpg'
import RequestForm from './RequestForm'

const page = () => {
  return (
    <ContentWrapper>
      <SubPageHeader title='御供物お申込みフォーム' subTitle='Registration Form' imageUrl={HeaderImg.src} />

      <RequestForm />
    </ContentWrapper>
  )
}

export default page