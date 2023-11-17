import ContentWrapper from '@/components/pages/ContentsWrapper/ContentWrapper'
import SubPageHeader from '@/components/shares/templates/SubPageHeader/SubPageHeader'
import React from 'react'
/**
 * Images
 */
import Hall from '/public/images/bouzu.jpg'
import HallDetails from './HallDetails';
import HallDetailsConstant from '@/constants/HallDetailConstant';

const page = () => {
  return (
    <ContentWrapper>
      <SubPageHeader title='プラン・式場' subTitle='Services' imageUrl={Hall.src} />

      <div className='min-h-screen'>
        <div className="mx-auto flex max-w-7xl items-center flex-col pt-10">

          <div className='mt-12 mb-6 lg:mt-24 lg:mb-12 flex flex-1 flex-col items-center'>
            <h2 className='text-2xl lg:text-4xl'>プラン・料金</h2>
            <div className='border-gray-500 w-12 lg:w-16 border-solid rounded-sm border-2 lg:border-3 my-4'></div>
            <span className='text-md tracking-widest'>Plan</span>
          </div>

          <div className='w-11/12 lg:w-full lg:text-center lg:text-lg'>
            <p className='mb-6 lg:mb-8'>ラストプロデュースでは、不明瞭なお見積やご請求が発生することの無いよう、<span className='marker-yellow'>画一的な料金プランを設けておりません</span>。<br />
              お客様のご予算やご要望に合わせた独自プランを柔軟に設計いたします。</p>

            <p className='mb-6 lg:mb-8'>また、生活保護受給者やご家庭の事情などで葬儀を行わずに火葬のみをご希望の場合も、
              遠慮なくラストプラデュースへご相談ください。<br />火葬手続きをご用意しております。</p>

            <p className='mb-6 lg:mb-8'>その他、役所手続き・火葬場へのご遺体搬送なども安心しておまかせください。<br />
              生活保護受給者につきましては、各自治体の規定範囲内で執り行うことにより、
              葬儀費用を自治体が扶助します。<br />
              ご家族の負担金は一切ありませんのでご安心ください。</p>
          </div>



          <div className='mt-12 mb-6 lg:mt-24 lg:mb-12 flex flex-1 flex-col items-center'>
            <h2 className='text-2xl lg:text-4xl'>取り扱い斎場</h2>
            <div className='border-gray-500 w-12 lg:w-16 border-solid rounded-sm border-2 lg:border-3 my-4'></div>
            <span className='text-md tracking-widest'>Funeral Hall</span>
          </div>


          <div className="w-full flex flex-1 flex-wrap justify-center">

            {
              HallDetailsConstant && HallDetailsConstant.map(
                item => <HallDetails hallDetail={item} key={item.name} />
              )
            }
          </div>

        </div>


      </div>

    </ContentWrapper >
  )
}

export default page