'use client'

import { useState } from 'react'

export default function Home() {
    const [adMarkup, setAdMarkup] = useState<string>('')

    const renderAds = () => {
        // '<script src="https://widget.p3a.net/widget-exchange.dev.js?click_url=http%3A%2F%2Flocalhost%3A8080%2Fapi%2Fv1%2Ftrack%2Fclick%3Fbidid%3D7d4504a7-06c2-4e78-9de6-636921427ddd%26network%3Dpubmatic%26url%3Dhttps%25253A%25252F%25252Fnoctuagames.com%25252Fgames%25252Fsaint-seiya&creative_url=https%253A%252F%252Fmedia.play3.id%252Frtb%252FSS-pubmatic_160x600.jpg&height=600&network=pubmatic&placement=native&url=http%3A%2F%2Flocalhost%3A8080%2Fapi%2Fv1%2Ftrack%2Fimpression%3Fadid%3D106aba8c-45a0-45d2-b1ee-6c241d6061cf%26advid%3Deffe0ae0-eb2a-4a87-a431-1a4fffdd348d%26bidid%3D7d4504a7-06c2-4e78-9de6-636921427ddd%26network%3Dpubmatic%26pubid%3Dpub12345%26userid%3D456789876567897654678987656789%26url%3Dhttps%25253A%25252F%25252Fmedia.play3.id%25252Frtb%25252FSS-pubmatic_160x600.jpg&width=160&price=0.001"></script>',
        setAdMarkup('asd')
        // const element = document.getElementById('slot')
        // console.log('element: ', element);
        // const script = document.createElement('script')
        // script.src = "http://localhost:5173/js/widget-exchange.js?click_url=http%3A%2F%2Flocalhost%3A8080%2Fapi%2Fv1%2Ftrack%2Fclick%3Fbidid%3D7d4504a7-06c2-4e78-9de6-636921427ddd%26network%3Dpubmatic%26url%3Dhttps%25253A%25252F%25252Fnoctuagames.com%25252Fgames%25252Fsaint-seiya&creative_url=https%253A%252F%252Fmedia.play3.id%252Frtb%252FSS-pubmatic_160x600.jpg&height=600&network=pubmatic&placement=native&url=http%3A%2F%2Flocalhost%3A8080%2Fapi%2Fv1%2Ftrack%2Fimpression%3Fadid%3D106aba8c-45a0-45d2-b1ee-6c241d6061cf%26advid%3Deffe0ae0-eb2a-4a87-a431-1a4fffdd348d%26bidid%3D7d4504a7-06c2-4e78-9de6-636921427ddd%26network%3Dpubmatic%26pubid%3Dpub12345%26userid%3D456789876567897654678987656789%26url%3Dhttps%25253A%25252F%25252Fmedia.play3.id%25252Frtb%25252FSS-pubmatic_160x600.jpg&width=160&price=0.001"
        // document.body.appendChild(script)
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
            <div className='flex gap-4'>
                {/* <script type="text/javascript" src='https://widget.p3a.net/widget-exchange.dev.js?click_url=http%3A%2F%2Flocalhost%3A8080%2Fapi%2Fv1%2Ftrack%2Fclick%3Fbidid%3D7d4504a7-06c2-4e78-9de6-636921427ddd%26network%3Dpubmatic%26url%3Dhttps%25253A%25252F%25252Fnoctuagames.com%25252Fgames%25252Fsaint-seiya&creative_url=https%253A%252F%252Fmedia.play3.id%252Frtb%252FSS-pubmatic_160x600.jpg&height=600&network=pubmatic&placement=native&url=http%3A%2F%2Flocalhost%3A8080%2Fapi%2Fv1%2Ftrack%2Fimpression%3Fadid%3D106aba8c-45a0-45d2-b1ee-6c241d6061cf%26advid%3Deffe0ae0-eb2a-4a87-a431-1a4fffdd348d%26bidid%3D7d4504a7-06c2-4e78-9de6-636921427ddd%26network%3Dpubmatic%26pubid%3Dpub12345%26userid%3D456789876567897654678987656789%26url%3Dhttps%25253A%25252F%25252Fmedia.play3.id%25252Frtb%25252FSS-pubmatic_160x600.jpg&width=160&price=0.001'></script> */}
                {/* <div id='slot'> */}
                {/* {adMarkup && ( */}
                {/* <div
                            dangerouslySetInnerHTML={{
                                __html: adMarkup,
                            }}></div> */}
                {/* )} */}
                {/* </div> */}
                {/* <div id='slot'> */}
                    {/* // <iframe src={adMarkup} /> */}
                    {/* {adMarkup && (
                        <script
                            type='module'
                            id='play3-publisher-widget-1'
                            dangerouslySetInnerHTML={{
                                __html: `
                                    function initPass3Widget(){window.pass3widget.init()};
                                    function initializeP3(i){var t; t = i.createElement("script"),t.async=!0,t.src="https://widget.p3a.net/widget-exchange.dev.js?click_url=http%3A%2F%2Flocalhost%3A8080%2Fapi%2Fv1%2Ftrack%2Fclick%3Fbidid%3D7d4504a7-06c2-4e78-9de6-636921427ddd%26network%3Dpubmatic%26url%3Dhttps%25253A%25252F%25252Fnoctuagames.com%25252Fgames%25252Fsaint-seiya&creative_url=https%253A%252F%252Fmedia.play3.id%252Frtb%252FSS-pubmatic_160x600.jpg&height=600&network=pubmatic&placement=native&url=http%3A%2F%2Flocalhost%3A8080%2Fapi%2Fv1%2Ftrack%2Fimpression%3Fadid%3D106aba8c-45a0-45d2-b1ee-6c241d6061cf%26advid%3Deffe0ae0-eb2a-4a87-a431-1a4fffdd348d%26bidid%3D7d4504a7-06c2-4e78-9de6-636921427ddd%26network%3Dpubmatic%26pubid%3Dpub12345%26userid%3D456789876567897654678987656789%26url%3Dhttps%25253A%25252F%25252Fmedia.play3.id%25252Frtb%25252FSS-pubmatic_160x600.jpg&width=160&price=0.001",t.onload=initPass3Widget,i.head.appendChild(t)};
                                    function initiateCall(){initializeP3(document)};
                                    window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);
                                `,
                            }}></script>
                    )}
                </div> */}
                <div className='flex flex-col gap-4'>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: "<script src='http://localhost:5173/js/widget-exchange.js?placement=native&width=300&height=250&click_url=https%3A%2F%2Fnoctua.gg%2Fgames%2Fidle_dino_museum&userid=456789876567897654678987656789&network=pubmatic&url=https%3A%2F%2Fnoctua.gg%2Fgames%2Fidle_dino_museum&adid=30b57ea3-72ee-426a-ae82-7b327286d8b5&creative_url=https%3A%2F%2Fmedia.play3.id%2Frtb%2FIDM-ads_banner-300x250.jpg&network=pubmatic&price=0.001&adid=30b57ea3-72ee-426a-ae82-7b327286d8b5&userid=456789876567897654678987656789&advid=effe0ae0-eb2a-4a87-a431-1a4fffdd348d&bidid=2c1a00bd-1c31-4a15-acb4-b0bd95511735&pubid=pub12345'></script>",
                        }}></div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: "<script src='http://localhost:5173/js/widget-exchange.js?placement=native&width=300&height=250&click_url=https%3A%2F%2Fnoctua.gg%2Fgames%2Fidle_dino_museum&userid=456789876567897654678987656789&network=pubmatic&url=https%3A%2F%2Fnoctua.gg%2Fgames%2Fidle_dino_museum&adid=30b57ea3-72ee-426a-ae82-7b327286d8b5&creative_url=https%3A%2F%2Fmedia.play3.id%2Frtb%2FIDM-ads_banner-300x250.jpg&network=pubmatic&price=0.001&adid=30b57ea3-72ee-426a-ae82-7b327286d8b5&userid=456789876567897654678987656789&advid=effe0ae0-eb2a-4a87-a431-1a4fffdd348d&bidid=2c1a00bd-1c31-4a15-acb4-b0bd95511735&pubid=pub12345'></script>",
                        }}></div>
                </div>
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
            <button onClick={renderAds}>render ads</button>
        </div>
    )
}
