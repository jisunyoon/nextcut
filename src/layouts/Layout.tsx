import styled from '@emotion/styled';
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Main = styled.main`
    flex: 1;
`;

export function Layout(){
    return (
        <Wrapper>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </Wrapper>
    )
}
