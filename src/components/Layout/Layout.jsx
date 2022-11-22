import Footer from "./Footer";
import Header from "./Header";
import styled from 'styled-components'

export default function Layout({ children }) {
    return (
        <SContainer>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </SContainer>
    )
}

const SContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

`

const Main = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
    background-color: #B4C8D4;
`