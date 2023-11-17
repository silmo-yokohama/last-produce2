import ContentWrapper from '@/components/pages/ContentsWrapper/ContentWrapper'
import SubPageHeader from '@/components/shares/templates/SubPageHeader/SubPageHeader'
import React from 'react'

import LakeImage from '/public/images/firstview.jpg'
import { GoogleMap } from '@react-google-maps/api'
import CompanyMap from './CompanyMap'

const page = () => {
  return (
    <ContentWrapper>
      <SubPageHeader title='会社概要' subTitle='About Company.' imageUrl={LakeImage.src} />

      <div className='min-h-screen'>
        <div className="mx-auto flex max-w-7xl items-center flex-col pt-10 mb-10 lg:mb-24">

          <table className='text-xs lg:text-base w-11/12 bg-light-gold'>
            <tbody>

              <tr className='border-light-gold border-b-2'>
                <th className='py-4 text-left px-2 w-26'>商号</th>
                <td className='py-4'>ラストプロデュース株式会社</td>

              </tr>

              <tr className='border-light-gold border-b-2'>
                <th className='py-4 text-left px-2 w-26'>代表</th>
                <td className='py-4'>代表取締役 佐藤 秀春</td>
              </tr>

              <tr className='border-light-gold border-b-2'>
                <th className='py-4 text-left px-2 w-26'>本社所在地</th>
                <td className='py-4'>神奈川県横浜市中区桜木町二丁目２番地 港陽ビル４階</td>

              </tr>

              <tr className='border-light-gold border-b-2'>
                <th className='py-4 text-left px-2 w-26'>営業所</th>
                <td className='py-4'>
                  <div className='mb-4'>
                    <span className='font-bold'>東京営業所</span>
                    <p className='px-2'>東京都港区高輪2-14-17 グレイス高輪ビル 4階</p>

                  </div>

                  <div>
                    <span className='font-bold'>川崎営業所</span>
                    <p className='px-2'>神奈川県川崎市川崎区浅田2-1-25</p>

                  </div>
                </td>

              </tr>

              <tr className='border-light-gold border-b-2'>
                <th className='py-4 text-left px-2 w-26'>電話番号</th>
                <td className='py-4'>045-550-3364</td>

              </tr>


              <tr className='border-light-gold border-b-2'>
                <th className='py-4 text-left px-2 w-26'>FAX</th>
                <td className='py-4'>045-550-3427</td>

              </tr>


              <tr className='border-light-gold border-b-2'>
                <th className='py-4 text-left px-2 w-26'>取引銀行</th>
                <td className='py-4'>りそな銀行 横浜駅西口支店</td>

              </tr>

              <tr>
                <th className='py-4 text-left px-2 w-26'>事業内容</th>
                <td className='py-4'>葬祭業</td>

              </tr>
            </tbody>
          </table>


        </div>
        <CompanyMap />
      </div>
    </ContentWrapper>
  )
}

export default page