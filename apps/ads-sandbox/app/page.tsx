export default function Home() {
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
                <div
                    dangerouslySetInnerHTML={{
                        __html: "<script src='http://localhost:5173/js/widget-exchange.js?placement=native&width=160&height=600&click_url=https://bid.p3a.net/api/v1/track/click?bidid=5D32CBF6-934D-418D-900A-6B9CA712BBB3B%26network=pubmatic%26url=https%3A%2F%2Fnoctua.gg%2Fgames%2Fidle_dino_museum&adid=30b57ea3-72ee-426a-ae82-7b327286d8b5&creative_url=https%3A%2F%2Fmedia.play3.id%2Frtb%2FIDM-ads_banner-160x600.jpg&impression_url=https://bid.p3a.net/api/v1/track/impression?adid=30b57ea3-72ee-426a-ae82-7b327286d8b5%2526bidid%253D5D32CBF6-934D-418D-900A-6B9CA712BBB3B'></script>",
                    }}></div>
                <div className='flex flex-col gap-4'>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: "<script src='http://localhost:5173/js/widget-exchange.js?placement=native&width=300&height=250&click_url=https://bid.p3a.net/api/v1/track/click?bidid=5D32CBF6-934D-418D-900A-6B9CA712BBB3B%26network=pubmatic%26url=https%3A%2F%2Fnoctua.gg%2Fgames%2Fidle_dino_museum&adid=30b57ea3-72ee-426a-ae82-7b327286d8b5&creative_url=https%3A%2F%2Fmedia.play3.id%2Frtb%2FIDM-ads_banner-300x250.jpg&impression_url=https://bid.p3a.net/api/v1/track/impression?adid=30b57ea3-72ee-426a-ae82-7b327286d8b5%2526bidid%253D5D32CBF6-934D-418D-900A-6B9CA712BBB3B'></script>",
                        }}></div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: "<script src='http://localhost:5173/js/widget-exchange.js?placement=native&width=300&height=250&click_url=https://bid.p3a.net/api/v1/track/click?bidid=5D32CBF6-934D-418D-900A-6B9CA712BBB3B%26network=pubmatic%26url=https%3A%2F%2Fnoctua.gg%2Fgames%2Fidle_dino_museum&adid=30b57ea3-72ee-426a-ae82-7b327286d8b5&creative_url=https%3A%2F%2Fmedia.play3.id%2Frtb%2FIDM-ads_banner-300x250.jpg&impression_url=https://bid.p3a.net/api/v1/track/impression?adid=30b57ea3-72ee-426a-ae82-7b327286d8b5%2526bidid%253D5D32CBF6-934D-418D-900A-6B9CA712BBB3B'></script>",
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
        </div>
    )
}
