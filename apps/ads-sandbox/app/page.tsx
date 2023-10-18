'use client'

import { useState } from 'react'

const ADM_RESPONSE =
    '<div style="display: flex; flex-direction: column; align-items:center;"><iframe style="border:0 !important;" src="https://mission.endog.xyz/exchange/serve?adid=95c75324-b21a-4d08-b1fc-b43bf4210339&advid=effe0ae0-eb2a-4a87-a431-1a4fffdd348d&bidid=D2CFC621-8B0C-4AA1-B143-25E743EE1CA5B&click_url=https%253A%252F%252Fnoctua.gg%252Fgames%252Fyggdrasil&creative_url=https%253A%252F%252Fmedia.play3.id%252Frtb%252FYggdrasil-Origin-ads_banner-160x600.jpg&height=600&network=pubmatic&pubid=157005&userid=ADDA9EBA-C067-40DB-AA6E-C017D8D640D6&width=160&price=0.014000" width="160" height="600"></iframe></div><iframe width="0" scrolling="no" height="0" frameborder="0" src="https://ads.pubmatic.com/AdServer/js/showad.js#PIX&ptask=DSP&SPug=1&fp=1&mpc=10&u=ADDA9EBA-C067-40DB-AA6E-C017D8D640D6&p=157005&s=1030042&d=4&cp=0&sc=1&rs=0&os=0" style="position:absolute;top:-15000px;left:-15000px" vspace="0" hspace="0" marginwidth="0" marginheight="0" allowtransparency="true" name="synciframe"></iframe><iframe width="0" scrolling="no" height="0" frameborder="0" src="https://st.pubmatic.com/AdServer/AdDisplayTrackerServlet?operId=1&pubId=157005&siteId=1030042&adId=4850997&imprId=6C3E0220-4B36-48B0-AE7A-5AB57554A974&cksum=B1D1EE5A997FC4A1&adType=10&adServerId=243&kefact=0.014000&kaxefact=0.014000&kadNetFrequecy=0&kadwidth=160&kadheight=600&kadsizeid=10&kltstamp=1697520619&indirectAdId=0&adServerOptimizerId=2&ranreq=0.1&kpbmtpfact=0.014000&dcId=4&tldId=0&passback=0&svr=BIDSIN12068&adsver=_2658157680&adsabzcid=0&cls=BID&i0=0x3100000000000000&ekefact=6xsuZQzUDACzYstYafzNE6VCIvzy7U4RXN4pQE13VCXql2mz&ekaxefact=6xsuZR7UDABAc4qhP3Tr8jEewqPjrxat7URq1Akf5jxyMfN9&ekpbmtpfact=6xsuZS3UDADdz7TPaUrA-Qf71Wmys64lOLFoX2X_L2VFi9ta&enpp=6xsuZTzUDAB4TGmg-pYYbdvUDBWusnEdb4_KFqF8VhWcCZ_x&pfi=1&domId=16587073695577970247&dc=sin12&crID=ef21f24a-1a66-4813-9085-244f917376af&lpu=noctua.gg&ucrid=9610235727126812245&wAdType=10&campaignId=23530&creativeId=0&pctr=0.000000&wDSPByrId=123&wDspId=1392&wbId=3&wrId=0&wAdvID=1&wDspCampId=95c75324-b21a-4d08-b1fc-b43bf4210339&isRTB=1&rtbId=D2CFC621-8B0C-4AA1-B143-25E743EE1CA5B&ver=14&dateHr=2023101705&usrgen=0&usryob=0&oid=6C3E0220-4B36-48B0-AE7A-5AB57554A974&cntryId=103&sec=1&pAuSt=3&wops=0&sURL=tvonenews.com&BrID=5" style="position:absolute;top:-15000px;left:-15000px" vspace="0" hspace="0" marginwidth="0" marginheight="0" allowtransparency="true" name="pbeacon"></iframe>'
// const ADM_RESPONSE =
//     '<div style="display: flex; flex-direction: column; align-items:center;"><iframe style="border:0 !important;" src="http://localhost:3000/exchange/serve?adid=95c75324-b21a-4d08-b1fc-b43bf4210339&advid=effe0ae0-eb2a-4a87-a431-1a4fffdd348d&bidid=D2CFC621-8B0C-4AA1-B143-25E743EE1CA5B&click_url=https%253A%252F%252Fnoctua.gg%252Fgames%252Fyggdrasil&creative_url=https%253A%252F%252Fmedia.play3.id%252Frtb%252FYggdrasil-Origin-ads_banner-160x600.jpg&height=600&network=pubmatic&pubid=157005&userid=ADDA9EBA-C067-40DB-AA6E-C017D8D640D6&width=160&price=0.014000" width="160" height="600"></iframe></div><iframe width="0" scrolling="no" height="0" frameborder="0" src="https://ads.pubmatic.com/AdServer/js/showad.js#PIX&ptask=DSP&SPug=1&fp=1&mpc=10&u=ADDA9EBA-C067-40DB-AA6E-C017D8D640D6&p=157005&s=1030042&d=4&cp=0&sc=1&rs=0&os=0" style="position:absolute;top:-15000px;left:-15000px" vspace="0" hspace="0" marginwidth="0" marginheight="0" allowtransparency="true" name="synciframe"></iframe><iframe width="0" scrolling="no" height="0" frameborder="0" src="https://st.pubmatic.com/AdServer/AdDisplayTrackerServlet?operId=1&pubId=157005&siteId=1030042&adId=4850997&imprId=6C3E0220-4B36-48B0-AE7A-5AB57554A974&cksum=B1D1EE5A997FC4A1&adType=10&adServerId=243&kefact=0.014000&kaxefact=0.014000&kadNetFrequecy=0&kadwidth=160&kadheight=600&kadsizeid=10&kltstamp=1697520619&indirectAdId=0&adServerOptimizerId=2&ranreq=0.1&kpbmtpfact=0.014000&dcId=4&tldId=0&passback=0&svr=BIDSIN12068&adsver=_2658157680&adsabzcid=0&cls=BID&i0=0x3100000000000000&ekefact=6xsuZQzUDACzYstYafzNE6VCIvzy7U4RXN4pQE13VCXql2mz&ekaxefact=6xsuZR7UDABAc4qhP3Tr8jEewqPjrxat7URq1Akf5jxyMfN9&ekpbmtpfact=6xsuZS3UDADdz7TPaUrA-Qf71Wmys64lOLFoX2X_L2VFi9ta&enpp=6xsuZTzUDAB4TGmg-pYYbdvUDBWusnEdb4_KFqF8VhWcCZ_x&pfi=1&domId=16587073695577970247&dc=sin12&crID=ef21f24a-1a66-4813-9085-244f917376af&lpu=noctua.gg&ucrid=9610235727126812245&wAdType=10&campaignId=23530&creativeId=0&pctr=0.000000&wDSPByrId=123&wDspId=1392&wbId=3&wrId=0&wAdvID=1&wDspCampId=95c75324-b21a-4d08-b1fc-b43bf4210339&isRTB=1&rtbId=D2CFC621-8B0C-4AA1-B143-25E743EE1CA5B&ver=14&dateHr=2023101705&usrgen=0&usryob=0&oid=6C3E0220-4B36-48B0-AE7A-5AB57554A974&cntryId=103&sec=1&pAuSt=3&wops=0&sURL=tvonenews.com&BrID=5" style="position:absolute;top:-15000px;left:-15000px" vspace="0" hspace="0" marginwidth="0" marginheight="0" allowtransparency="true" name="pbeacon"></iframe>'
export default function Home() {
    const [adMarkup, setAdMarkup] = useState<string>('')

    const renderAds = () => {
        setAdMarkup(ADM_RESPONSE)
    }

    return (
        <div className='flex flex-col gap-y-5'>
            <span className='text-4xl font-bold'>Ads Sandbox</span>
            <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet commodi error iure
                laborum alias atque fuga, odit ex deleniti dolor, consequatur inventore placeat
                ipsam tempora repudiandae hic similique reprehenderit! Repudiandae.
            </span>
            <span>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </span>
            {adMarkup && (
                <div
                    dangerouslySetInnerHTML={{
                        __html: adMarkup,
                    }}></div>
            )}
            <span>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
                voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
                tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat.
            </span>

            <div className='flex justify-center'>
                <button
                    className='px-4 py-2 border border-green-600 rounded-full w-fit'
                    onClick={renderAds}>
                    render ads
                </button>
            </div>

            <span>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
                voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
                tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat.
            </span>
        </div>
    )
}
