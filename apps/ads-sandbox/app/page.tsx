'use client'

import { useState } from 'react'

export default function Home() {
    const [adMarkup, setAdMarkup] = useState<string>('')

    const renderAds = () => {
        setAdMarkup(
            '<div style="display: flex; flex-direction: column; align-items:center;"><iframe style="border:0 !important;" width="160" height="600" src="http://localhost:3000/exchange/serve?price=0.001&adid=95c75324-b21a-4d08-b1fc-b43bf4210339&advid=effe0ae0-eb2a-4a87-a431-1a4fffdd348d&bidid=d8929c95-b5df-4a89-b8b3-75e3a40d1ac2&network=pubmatic&pubid=pub12345&creative_url=https%253A%252F%252Fmedia.play3.id%252Frtb%252FYggdrasil-Origin-ads_banner-160x600.jpg&height=600&network=pubmatic&width=160&userid=456789876567897654678987656789&network=pubmatic&width=160&height=600&click_url=https%3A%2F%2Fnoctua.gg%2Fgames%2Fyggdrasil"></iframe></div>',
        )
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
            <button onClick={renderAds}>render ads</button>
        </div>
    )
}
