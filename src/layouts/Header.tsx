import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';

const Wrapper = styled.header`
    height: ${theme.spacing.layout.headerHeight};
    padding: 0 ${theme.spacing.layout.pagePadding};
    border-bottom: 1px solid ${theme.colors.divider};
    display: flex;
    align-items: center;
    background: ${theme.colors.bgPrimary};
    a { text-decoration: none; }
`;

const Brand = styled.div`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
`;

const Logo = styled.img`
    height: 2rem;
    width: auto;
    display: block;
`;

const BrandName = styled.span`
    font-size: ${theme.typography.fontSize.lg};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.textPrimary};
`;

export function Header(){
    return (
        <Wrapper>
            <Link to="/">
                <Brand>
                    <Logo src={logo} alt="NextCut" />
                    <BrandName>NextCut</BrandName>
                </Brand>
            </Link>
        </Wrapper>
    )
}
