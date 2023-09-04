import ArniaForm from '../../components/ArniaForm/index.tsx'
import Header from '../../components/Header/index.tsx'
import PageContent from '../../components/PageContent/index.tsx'
import { HomePageDiv } from './style.ts'

const HomePage = () => {
    return (
        <HomePageDiv>
            <Header />
            <PageContent />
            <ArniaForm />
        </HomePageDiv>
    )
}

export default HomePage