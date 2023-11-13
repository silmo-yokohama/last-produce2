import Image from 'next/image'
import ContentWrapper from '@/components/pages/ContentsWrapper/ContentWrapper'
import RouteLinkButton from '@/components/shares/parts/Buttons/RouteLinkButton'
import { RequestPage } from '@/constants/PageInformation'

/**
 * Images
 */
import BgImage from '/public/images/background.png'
import BigLogo from '/public/images/logo-large.png'
import MailForm from '@/components/shares/templates/MailForm/MailForm'
import GravePhoto from '/public/images/grave.jpg'

export default function Home() {
  return (
    <ContentWrapper>
      <section className='min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden -mt-20  h-screen'>
        <Image src={BgImage} alt="Image" className='absolute inset-0 h-full w-full object-cover object-center' loading="lazy" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-100 mix-blend-multiply"></div>

        <div className='relative flex flex-col items-center p-4 sm:max-w-xl'>
          <Image src={BigLogo} alt='Last Produce .co,Ltd.' className='w-full ' />
          <h1 className="mb-8 text-center text-2xl  text-gray-800 sm:text-3xl md:mb-12 md:text-5xl drop-shadow font-thin">送る日に、贈る想い</h1>

          <RouteLinkButton href={RequestPage.url}>御供花等のお申し込み</RouteLinkButton>

        </div>
      </section>


      <div className='min-h-screen bg-main-dark'>
        <div className="mx-auto flex max-w-7xl items-center flex-col pt-10">

          <div className='text-gold mt-12 lg:mt-24 flex flex-1 flex-col items-center'>
            <h2 className='text-2xl lg:text-4xl'>私たちにできること</h2>
            <div className='border-gray-50 w-12 lg:w-16 border-solid rounded-sm border-2 lg:border-3 my-4'></div>
            <span className='text-md tracking-widest'>Service</span>
          </div>
        </div>

        <div className="w-full flex flex-1 flex-wrap">
          <div className="w-1/2 lg:w-1/4 flex flex-col py">
            <div className="lg:max-w-2xl py-5 px-4 relative overflow-hidden" style={{ backgroundImage: `url(${GravePhoto})` }}>
              <h4>霊園・墓地・墓石</h4>
              <p>霊園選びから埋葬に必要な手続きまで、霊園・墓地・墓石にまつわる全てをサポートいたします。</p>

            </div>
          </div>
          <div className="w-1/2 lg:w-1/4 flex flex-col py">
            <div className="lg:max-w-2xl py-5 px-4">
              <h4>仏壇・仏具</h4>
              <p>サイズや種類、購入時期など普段馴染みの浅い、仏壇・仏具選びの疑問やお悩みを解決いたします。</p>

            </div>
          </div>
          <div className="w-1/2 lg:w-1/4 flex flex-col py">
            <div className="lg:max-w-2xl py-5 px-4">
              <h4>相続関係</h4>
              <p>葬儀・法要に関するご相談だけでなく、葬儀後の相続手続きにも幅広く対応しております。</p>

            </div>
          </div>
          <div className="w-1/2 lg:w-1/4 flex flex-col py">
            <div className="lg:max-w-2xl py-5 px-4">
              <h4>相続関係</h4>
              <p>葬儀・法要に関するご相談だけでなく、葬儀後の相続手続きにも幅広く対応しております。</p>

            </div>
          </div>
        </div>

      </div>


      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <MailForm />
        </div>
      </div>

    </ContentWrapper>
  )
}
