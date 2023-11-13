import React, { useRef } from 'react'

import ContentWrapper from '@/components/pages/ContentsWrapper/ContentWrapper'
import SubPageHeader from '@/components/shares/templates/SubPageHeader/SubPageHeader'
import ConceptItem from '@/app/concept/ConceptItems/ConceptItem'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

/**
 * Images
 */
import Marble from '/public/images/marble2.jpg'
import LakeImage from '/public/images/firstview.jpg'
import Couple from '/public/images/couple.jpg'
import Sky from '/public/images/sky.png'


const page = () => {
  return (
    <ContentWrapper>
      <SubPageHeader title='私たちの想い' subTitle='Our Concepts.' imageUrl={LakeImage.src} />


      <ConceptItem title='一番に、“らしさ”を大切にします。' backgroundImage={Marble.src}>
        形式ではなく、いかに故人様らしい式にできるか。
        葬儀で最も大切なポイントは、ここにあると考えています。
        本当に必要なことには妥協せず、たとえ業界の常識であっても
        不要なことを押し付けることはありません。

        だからこそ、故人様の個性に合わせたプランニングを
        オーダーメイドで行っているのです。
      </ConceptItem>

      <ConceptItem title="人間らしい、まごころのサービスを徹底します。" backgroundImage={Sky.src}>
        その時、本当に必要な行動とは何か。その時、ご遺族おの方が
        最後のお別れに専念できるように、どんな心遣いができるか。
        私たちは、常にまごころを込めたサービスの提供を徹底しています。
        人生で一度きりの、最後のお別れ。
        その大切な時間を託される責任を常に実感しながら、
        ひとつひとつのサービスを提供して参ります。
      </ConceptItem>
      <ConceptItem title="葬儀からはじまる、ご家族の暮らしも支えます。" backgroundImage={Couple.src}>
        その時、本当に必要な行動とは何か。
        その時、ご遺族の方が最後のお別れに専念できるように、
        どんな心遣いができるか。

        私たちは、常にまごころを込めたサービスの提供を徹底しています。
        人生で一度きりの、最後のお別れ。
        その大切な時間を託される責任を常に実感しながら、
        ひとつひとつのサービスを提供して参ります。
      </ConceptItem>

    </ContentWrapper>
  )
}

export default page