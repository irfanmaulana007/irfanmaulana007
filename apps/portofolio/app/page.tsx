import HomeIntroContainer from 'features/home/containers/intro'
import HomeProjectsContainer from 'features/home/containers/projects'
import HomeShortDescriptionContainer from 'features/home/containers/short-description'

export default function Home() {
    return (
        <>
            <HomeIntroContainer />
            <HomeProjectsContainer />
            <HomeShortDescriptionContainer />
        </>
    )
}
